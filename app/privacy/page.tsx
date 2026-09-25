import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "朧月のプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-white border-b border-white/20 pb-4">プライバシーポリシー</h1>

      <p className="text-white/60 text-sm">
        制定日：2026年5月20日　運営者：個人事業主（屋号：TagTech）
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">個人情報の収集・利用について</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトでは、お問い合わせ対応を除き、お客様の個人情報（氏名・メールアドレス等）を直接収集しておりません。
          占い結果の閲覧は個人情報の入力なしに行えます。
        </p>
        <p className="text-white/70 text-sm leading-relaxed">
          お問い合わせいただいた際に取得したメールアドレス等は、ご回答の目的にのみ使用し、
          ご本人の同意なく第三者に提供することはありません。
          また、個人情報保護法（個人情報の保護に関する法律）の規定に従い適切に管理します。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">Cookieの使用について</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトは、以下の目的のためにCookieを使用する場合があります。
        </p>
        <ul className="text-white/70 text-sm space-y-1 list-disc list-inside leading-relaxed">
          <li>アクセス解析（Google Analytics等によるサイト改善目的）</li>
          <li>広告配信（Google AdSenseによるユーザーの興味に基づく広告表示）</li>
          <li>アフィリエイト広告（A8.net / afb 等の成果計測）</li>
        </ul>
        <p className="text-white/70 text-sm leading-relaxed">
          Cookieはブラウザ設定から無効にすることができます。無効にした場合、一部のサービスが正常に機能しない場合があります。
          Google によるCookieの使用については、Googleのプライバシーポリシーをご確認ください。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">アクセス解析について</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトは将来的にGoogle Analytics等のアクセス解析ツールを導入する予定です。
          これらのツールはCookieを使用してアクセス情報を収集しますが、個人を特定するものではありません。
          Google Analyticsのデータ収集を拒否する場合は、Google アナリティクス オプトアウト アドオンをご利用ください。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">広告・アフィリエイトについて</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトはGoogle AdSenseを利用した広告を掲載する予定です。
          Google AdSenseはCookieを使用して、ユーザーの関心に基づいた広告を表示することがあります。
          詳細はGoogleのプライバシーポリシーをご確認ください。
        </p>
        <p className="text-white/70 text-sm leading-relaxed">
          また、占い・スピリチュアル系サービス等のアフィリエイト広告（A8.net / afb 等）を掲載する場合があります。
          アフィリエイト広告のクリックにより第三者サービスのCookieが設定される場合があります。
          アフィリエイトリンク・バナーには「PR」または「広告」の表記を付与します。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">プライバシーポリシーの変更</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトのプライバシーポリシーは、法令の改正やサービスの変更に応じて変更する場合があります。
          変更後のプライバシーポリシーは当ページに掲載し、重要な変更の場合は掲載日を更新します。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">お問い合わせ</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          個人情報の取り扱いに関するお問い合わせは、<a href="/contact" className="text-purple-300 underline">お問い合わせページ</a>よりご連絡ください。
        </p>
      </section>

    </div>
  );
}
