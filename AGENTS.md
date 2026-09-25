<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## commit author 規約（必須・v1.0）

**発効日**: 2026-05-26
**発効理由**: Vercel デプロイ Blocked（commit email が GitHub アカウント未紐付け）の恒久化対策
**インシデント**: 2026-05-26 acd6565 / 0d54790 が連続 Blocked。58f878e で復旧。

### 必須ルール

本リポジトリ（D:\oborozuki_uranai\）の全 commit は以下の author で行う:

- `user.name`: `nikkun22`
- `user.email`: `108297082+nikkun22@users.noreply.github.com`

これは GitHub アカウント（@nikkun22）の Noreply メールであり、Vercel の
commit author 検証を通過する唯一の認証済みアドレス。

tagtech 側規約（`Claude Code (TagTech) <claude-code@tagtech.jp>`）は
本リポジトリでは使用禁止。両リポジトリは独立しており、D:\tagtech\CLAUDE.md の
規約は朧月には適用しない。

### 設定方法

local git config で設定する（global は変更しない）:

    git config --local user.email "108297082+nikkun22@users.noreply.github.com"
    git config --local user.name "nikkun22"

### セッション開始時の確認手順

    git config --local user.email
    # → 108297082+nikkun22@users.noreply.github.com であること

異なる値の場合は上記「設定方法」で local config を上書き。

### 違反検出

- commit 前: `git log -1 --pretty=format:"%ae"` で author email 確認
- 別メールで commit してしまった場合: 即取り消し → local config 修正 → 再 commit
- push 後に Vercel が Blocked になった場合、本ルール違反を最優先で疑う

### 履歴

| 版 | 日付 | 内容 |
|---|---|---|
| 1.0 | 2026-05-26 | 初版制定。Vercel Blocked インシデント対応。58f878e で復旧後の恒久化。 |
