<#
.SYNOPSIS
  朧月 アフィリエイトバナー埋め込み検証スクリプト
.DESCRIPTION
  対象ページの HTTP ステータスとアフィリエイトドメインの存在を
  同一 GET リクエストで検証する。
.PARAMETER BaseUrl
  検証対象のベース URL（デフォルト: https://oborozuki.jp）
.PARAMETER Secret
  AD_CHECK_SECRET の値（省略時は $env:AD_CHECK_SECRET を参照）
.EXAMPLE
  .\scripts\verify-ads.ps1
  .\scripts\verify-ads.ps1 -BaseUrl "http://localhost:3000" -Secret "dev-secret"
#>
param(
  [string]$BaseUrl = "https://oborozuki.jp",
  [string]$Secret  = $env:AD_CHECK_SECRET
)

$ErrorActionPreference = "SilentlyContinue"

$checks = @(
  @{
    Page    = "/"
    Domains = @(
      @{ Domain = "px.a8.net";      BannerId = "a8-3";      Type = "href" },
      @{ Domain = "af.moshimo.com"; BannerId = "moshimo-1"; Type = "href" }
    )
  },
  @{
    Page    = "/aries"
    Domains = @(
      @{ Domain = "px.a8.net"; BannerId = "a8-1"; Type = "href" },
      @{ Domain = "px.a8.net"; BannerId = "a8-2"; Type = "href" }
    )
  }
)

$passCount = 0
$failCount = 0

Write-Host "=== 朧月 アフィリエイトバナー埋め込み検証 ===" -ForegroundColor Cyan
Write-Host ("対象: " + $BaseUrl)
Write-Host ""

foreach ($check in $checks) {
  $url        = $BaseUrl + $check.Page
  $statusCode = "N/A"
  $html       = ""

  try {
    $response   = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 15
    $statusCode = $response.StatusCode
    $html       = $response.Content
  } catch {
    if ($_.Exception.Response) {
      $statusCode = [int]$_.Exception.Response.StatusCode
    }
  }

  if (-not $html) {
    foreach ($d in $check.Domains) {
      $msg = "[FAIL] " + $check.Page + " HTTP " + $statusCode + " - ページ取得失敗 (" + $d.BannerId + " " + $d.Type + " 未検証)"
      Write-Host $msg -ForegroundColor Red
      $failCount++
    }
    continue
  }

  $seen = @{}
  foreach ($d in $check.Domains) {
    $key = $check.Page + "|" + $d.Domain + "|" + $d.BannerId
    if ($seen[$key]) { continue }
    $seen[$key] = $true

    if ($html -match [regex]::Escape($d.Domain)) {
      $msg = "[PASS] " + $check.Page + " HTTP " + $statusCode + " - " + $d.Domain + " (" + $d.BannerId + " " + $d.Type + ") 検出"
      Write-Host $msg -ForegroundColor Green
      $passCount++
    } else {
      $msg = "[FAIL] " + $check.Page + " HTTP " + $statusCode + " - " + $d.Domain + " (" + $d.BannerId + " " + $d.Type + ") 未検出"
      Write-Host $msg -ForegroundColor Red
      $failCount++
    }
  }
}

Write-Host ""
$color = if ($failCount -eq 0) { "Green" } else { "Yellow" }
Write-Host ("ページ検証結果: PASS " + $passCount + " / FAIL " + $failCount) -ForegroundColor $color

if ($Secret) {
  Write-Host ""
  Write-Host "--- /api/check エンドポイント確認 ---" -ForegroundColor Cyan
  $apiUrl = $BaseUrl + "/api/check?secret=" + $Secret

  try {
    $apiResp = Invoke-WebRequest -Uri $apiUrl -UseBasicParsing -TimeoutSec 15
    if ($apiResp.StatusCode -eq 200) {
      Write-Host "[PASS] /api/check HTTP 200" -ForegroundColor Green
      $apiResp.Content | ConvertFrom-Json | ConvertTo-Json -Depth 5
    } else {
      Write-Host ("[FAIL] /api/check HTTP " + $apiResp.StatusCode) -ForegroundColor Red
    }
  } catch {
    $sc = if ($_.Exception.Response) { [int]$_.Exception.Response.StatusCode } else { "N/A" }
    Write-Host ("[FAIL] /api/check HTTP " + $sc + " - " + $_.Exception.Message) -ForegroundColor Red
  }
} else {
  Write-Host ""
  Write-Host "[SKIP] AD_CHECK_SECRET が未設定のため /api/check をスキップ" -ForegroundColor Yellow
  Write-Host "       実行例: .\scripts\verify-ads.ps1 -Secret 'your-secret'"
}
