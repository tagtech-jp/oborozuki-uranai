# 朧月 (oborozuki)

12星座×毎日の運勢を提供する占いサイト。

## 概要

「朧月（おぼろづき）」は、霞がかった幻想的な月をブランドモチーフとした日本語占いサービス。  
毎日0時更新の12星座別運勢をメインコンテンツとし、SEO自然流入を主要集客チャネルとする。

## ドメイン

https://oborozuki.jp（2026-05-20 取得済・お名前.com）

## 技術スタック

| レイヤー | 技術 |
|---|---|
| フレームワーク | Next.js 15 App Router |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| ホスティング | Vercel Hobby（独立プロジェクト） |
| データ生成 | 静的JSON+日付シード乱数+テンプレ（案A） |

## 収益化

- Google AdSense（記事下・サイドバー）
- 電話占いASP アフィリエイト（A8.net / afb）

## ステータス

| フェーズ | 状態 |
|---|---|
| Phase 0（調査・命名・法務・MVP設計） | ✅ 完了（2026-05-20） |
| Phase 1（集中実装）| ✅ 完了（2026-05-20） |

## 関連ドキュメント（Phase 0成果物）

- `D:\uranai_phase0\docs\phase0_inventory.md` — 調査インベントリ・衝突確認
- `D:\uranai_phase0\docs\brand_candidates_v0.md` — ブランド名10案
- `D:\uranai_phase0\docs\competitor_analysis_v0.md` — 競合分析・ASP・Vercel Cron仕様
- `D:\uranai_phase0\docs\legal_checklist_v0.md` — 法務リスクチェックリスト（CLO引き継ぎ用）
- `D:\uranai_phase0\docs\mvp_design_v0.md` — MVP実装計画書

## ライセンス

未定（Phase 1 実装時に判断）

## 注意

本プロジェクトは TagTech・urakick・TagDeck とは完全に独立したプロジェクトである。  
コードベース・Vercelプロジェクト・GitHub リポジトリをそれぞれ分離して管理する。

---

## Getting Started (開発環境)

開発サーバーを起動:

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開く。

```bash
npm run build   # 本番ビルド
npm run start   # 本番モード起動
```
