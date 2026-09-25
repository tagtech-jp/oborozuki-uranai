# 広告設定 README

## AdSense 承認後の pub-ID 置換手順

### 1. Google AdSense 管理画面で pub-ID を確認する

AdSense 管理画面にログイン → アカウント情報 → パブリッシャー ID を確認  
形式: `pub-XXXXXXXXXXXXXXXXX`（16桁の数字）

### 2. public/ads.txt を更新する

[D:\oborozuki_uranai\public\ads.txt](../../public/ads.txt) を開き、  
`pub-AD_PUBLISHER_ID_PLACEHOLDER` を実際の pub-ID に置換する。

```
# 変更前
google.com, pub-AD_PUBLISHER_ID_PLACEHOLDER, DIRECT, f08c47fec0942fa0

# 変更後（例）
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
```

### 3. 環境変数 NEXT_PUBLIC_ADSENSE_PUB_ID を設定する

#### ローカル開発（.env.local）
```
NEXT_PUBLIC_ADSENSE_PUB_ID=pub-1234567890123456
```

#### Vercel 本番環境
1. Vercel ダッシュボード → プロジェクト → Settings → Environment Variables
2. `NEXT_PUBLIC_ADSENSE_PUB_ID` = `pub-1234567890123456` を追加
3. 環境: Production / Preview / Development 全て選択
4. 保存後、再デプロイを実行する

### 4. AdSlot コンポーネントの data-ad-slot を更新する

[D:\oborozuki_uranai\components\ads\AdSlot.tsx](../../components/ads/AdSlot.tsx) 内の  
`data-ad-slot="AD_SLOT_ID_PLACEHOLDER"` を AdSense の広告ユニット ID に置換する。

AdSense 管理画面 → 広告 → 広告ユニットを作成 → スロット ID を取得

---

## ASP アフィリエイト設定

登録後のリンク埋め込み方法は [asp_registration_guide_v0.md](./asp_registration_guide_v0.md) を参照。

---

## 確認シークレット運用（広告タグ埋め込み検証）

EasyList（uBlock Origin 等）が `px.a8.net` / `af.moshimo.com` をブロックする環境では
バナーが非表示になるが、HTML ソースへの埋め込み自体は正常に行われている。
以下の手順でタグの存在を curl で検証できる。

### エンドポイント仕様

| 項目 | 内容 |
|------|------|
| URL | `GET /api/check?secret=<AD_CHECK_SECRET>` |
| 認証 | クエリパラメータ `secret`（正しい値: HTTP 200、誤り: HTTP 401） |
| 未設定 | HTTP 503 `{"error":"check endpoint not configured"}` |
| secret 管理 | 環境変数 `AD_CHECK_SECRET`（サーバー側のみ。`NEXT_PUBLIC_` は絶対に付けない） |

### 1. secret を生成する（社長手動操作）

以下のいずれかで 32 バイト以上のランダム文字列を生成し、出力値を Vercel に登録する。

```powershell
# 方法A: Node.js（プロジェクト内の Node がそのまま使える）
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# 方法B: PowerShell 組み込み（外部ツール不要）
[System.BitConverter]::ToString((1..32 | ForEach-Object { [byte](Get-Random -Max 256) })).Replace('-','').ToLower()
```

出力例（登録する値の形式）:
```
a3f8c21d9e4b7056f1a2d3e4c5b6a7f8d9e0c1b2a3f4d5e6c7b8a9f0e1d2c3b4
```

### 2. Vercel 環境変数を登録する（社長手動操作）

1. Vercel ダッシュボード → Project `oborozuki_uranai` → **Settings** → **Environment Variables**
2. 以下を追加:
   - **Name**: `AD_CHECK_SECRET`
   - **Value**: 手順 1 で生成した文字列
   - **Environment**: `Production` / `Preview` / `Development` の **3 つすべて** にチェック
3. **Save** → 保存後に **Redeploy** を実行する（再デプロイしないと反映されない）

### 3. ローカル確認（開発時）

`D:\oborozuki_uranai\env.local` に以下を追記する（実値を記入・コミット禁止）:

```
AD_CHECK_SECRET=（手順 1 で生成した値）
```

### 4. curl で検証する

```powershell
# 本番環境
$env:AD_CHECK_SECRET = "（生成した値）"
curl "https://oborozuki.jp/api/check?secret=$env:AD_CHECK_SECRET"

# ローカル dev サーバー（next dev 起動済み）
curl "http://localhost:3000/api/check?secret=$env:AD_CHECK_SECRET"
```

期待出力（HTTP 200）:
```json
{
  "status": "ok",
  "generatedAt": "2026-05-26T12:00:00.000Z",
  "banners": [
    { "id": "a8-1", "provider": "a8", "hrefDomain": "px.a8.net", "trackingDomain": "www11.a8.net", "embeddedOn": ["/[zodiac]"] },
    { "id": "a8-2", "provider": "a8", "hrefDomain": "px.a8.net", "trackingDomain": "www16.a8.net", "embeddedOn": ["/[zodiac]"] },
    { "id": "a8-3", "provider": "a8", "hrefDomain": "px.a8.net", "trackingDomain": "www10.a8.net", "embeddedOn": ["/"] },
    { "id": "moshimo-1", "provider": "moshimo", "hrefDomain": "af.moshimo.com", "trackingDomain": "i.moshimo.com", "embeddedOn": ["/"] }
  ],
  "expectedDomains": ["px.a8.net", "af.moshimo.com"]
}
```

### 5. 検証スクリプトで一括確認する

```powershell
# HTTP ステータス + ドメイン存在を同時確認
.\scripts\verify-ads.ps1 -BaseUrl "https://oborozuki.jp" -Secret $env:AD_CHECK_SECRET

# ローカル dev サーバーで確認
.\scripts\verify-ads.ps1 -BaseUrl "http://localhost:3000" -Secret "（dev 用シークレット）"
```

### .env.example への追記（手動）

`.env.example` は Claude Code のパーミッション設定で `.env*` パターンが拒否されるため
自動追記ができない。以下の 2 行を手動で `.env.example` の末尾に追記すること:

```
# 確認シークレット（/api/check エンドポイント認証用・NEXT_PUBLIC_ 禁止）
AD_CHECK_SECRET=your-secret-here
```
