import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "朧月へのお問い合わせページです。",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-text-primary border-b border-border pb-4">お問い合わせ</h1>

      <section className="space-y-4">
        <p className="text-text-body text-sm leading-relaxed">
          当サイトへのお問い合わせはメールにてお受けしております。
          内容を確認のうえ、3〜5営業日以内にご返信いたします。
        </p>

        <div className="bg-card border border-border rounded-xl p-6 space-y-3">
          <p className="text-text-muted text-xs">メールアドレス</p>
          <p className="text-accent text-sm">
            {/* メールフォーム本実装はPhase 2予定・本格運用時にoborozuki.jpドメインメール設定後変更 */}
            contact [at] oborozuki.jp
          </p>
          <p className="text-text-muted text-xs mt-2">
            ※迷惑メール防止のため上記の形式で記載しています。[at] を @ に置き換えてご連絡ください。
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-text-primary text-sm font-bold">お問い合わせの際にご記載ください</h2>
          <ul className="text-text-body text-sm space-y-1 list-disc list-inside">
            <li>お問い合わせの内容・件名</li>
            <li>該当ページのURL（ある場合）</li>
            <li>ご返信先メールアドレス</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="text-text-primary text-sm font-bold">対応できないお問い合わせ</h2>
          <ul className="text-text-body text-sm space-y-1 list-disc list-inside">
            <li>占い結果の変更・保証に関するご要望</li>
            <li>個別の運勢判断・相談</li>
            <li>営業・宣伝目的のご連絡</li>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-xl p-4 space-y-2">
          <h2 className="text-text-primary text-sm font-bold">個人情報の取り扱いについて</h2>
          <p className="text-text-muted text-xs leading-relaxed">
            お問い合わせの際にご提供いただいたメールアドレス等の個人情報は、ご回答の目的にのみ使用します。
            第三者への提供・開示は行いません。個人情報保護法の規定に従い適切に管理します。
            詳細は<a href="/privacy" className="text-accent underline">プライバシーポリシー</a>をご確認ください。
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-bold text-text-primary">お問い合わせの前に</h2>
        <p className="text-text-body text-sm leading-relaxed">
          朧月の運勢は毎日0時（日本時間）に自動更新されます。同じ星座でも日付が変わると運勢の内容が切り替わりますので、日々の参考としてお楽しみください。
        </p>
        <p className="text-text-body text-sm leading-relaxed">
          お返事には3〜7日ほどお時間をいただく場合があります。サイトの技術的なご質問・ご感想・ご要望・取材のご依頼などはお気軽にご連絡ください。
          占い結果の解釈・個別の運勢相談にはお応えできかねますので、あらかじめご了承ください。
        </p>
      </section>

    </div>
  );
}
