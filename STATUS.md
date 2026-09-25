# 朧月（oborozuki.jp）プロジェクト STATUS

最終更新: 2026-05-26

---

## 完了タスク

### [2026-05-26] 広告ブロッカー対応 — 確認シークレット運用

**概要:** A8.net / もしもアフィリエイトのトラッキング URL（`px.a8.net` / `af.moshimo.com`）が EasyList でブロックされる問題に対し、広告タグの埋め込み存在を curl で検証できる仕組みを実装した。

**実装内容:**
- `app/api/check/route.ts` — `GET /api/check?secret=<AD_CHECK_SECRET>` エンドポイント（タイミング安全比較済み）
- `scripts/verify-ads.ps1` — HTTP ステータス + ドメイン存在の一括検証スクリプト
- `docs/ads/README.md` — Vercel 環境変数登録手順・secret 生成コマンド例・curl 検証手順を追記
- `.env.example` — `AD_CHECK_SECRET=your-secret-here` プレースホルダー追記

**commit:** `28781c1` + `0d54790`（GitHub `nikkun22/oborozuki-uranai` main push 済み）

**本番検証（ローカル確認）:**
- HTTP 200 正常系・HTTP 401 異常系: PASS
- `verify-ads.ps1` PASS 4 / FAIL 0

**残タスク（社長手動）:**
1. Vercel ダッシュボード → `AD_CHECK_SECRET` 環境変数登録（Production/Preview/Development 全て）→ 再デプロイ
2. 本番検証: `.\scripts\verify-ads.ps1 -Secret $env:AD_CHECK_SECRET`

---

### [2026-05-22] AdSense 審査申請準備 Task5

所有権確認メタ・ads.txt 追加（commit `77dfe09`）。審査結果待ち。

---

### [2026-05-22] アフィリエイトバナー実装

A8×3 + もしも×1 計 4 本のバナーを実装（commit `02344f3` 〜 `2a8c909`）。

---

### [2026-05-22] パワーストーンカード（Amazon Associates）

12 星座分のパワーストーンリンクを Amazon Associates（`oborozuki22-22`）で実装（commit `babb054` 〜 `442ae27`）。広告ブロッカー耐性が最も高い手法。

---

## 残課題（別タスク）

| 優先度 | 内容 | 備考 |
|--------|------|------|
| 高 | Vercel `AD_CHECK_SECRET` 登録 + 本番 verify-ads.ps1 確認 | 社長手動 |
| 中 | AdSense 審査結果対応（pub-ID 置換・AdSlot 有効化） | 審査待ち |
| 低 | バナー画像の自ホスト配信検討（EasyList 完全回避策） | ASP 規約確認必要 |
| 低 | 楽天アフィリエイト登録検討 | 未着手 |

---

## 学習事項（設計ルール）

- **Next.js App Router**: `app/_xxx/` は Private Folder 扱いでルーティング除外される。API ルート名にアンダースコア先頭を使わないこと（`/api/_check` → 404、`/api/check` ✓）
- **計画逸脱は即報告**: Phase C 中の設計変更は察知した時点で停止・社長報告。Phase D まで持ち越さない
- **`.env*` ファイルへの自動書き込み不可**: Claude Code のパーミッション設定で `.env*` パターンが拒否される。`.env.example` 追記は社長手動または git diff で差分確認後にコミット
