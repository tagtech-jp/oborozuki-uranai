import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
  description: "朧月の利用規約です。",
};

export default function TosPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-white border-b border-white/20 pb-4">利用規約</h1>

      <p className="text-white/60 text-sm">
        制定日：2026年5月20日　運営者：個人事業主（屋号：TagTech）
      </p>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">占い結果の性質について</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトが提供する占い結果はすべて娯楽目的の参考情報です。
          特定の出来事・結果・効果を保証するものではありません。
          占い結果を参考にした行動や判断はご自身の責任において行ってください。
        </p>
        <p className="text-white/70 text-sm leading-relaxed">
          当サービスの占い結果はAIエージェントが独自設計したアルゴリズムにより自動生成されたものです。
          特定の占い師・霊能者・専門家の見解を反映したものではなく、科学的・医学的根拠を主張するものでもありません。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">医療・専門的判断の代替について</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトの占い情報は、医療診断・法律判断・投資判断・その他専門的な判断の代替となるものではありません。
          健康上の不安がある場合は医療機関に、法律的な問題については弁護士等の専門家にご相談ください。
          「健康運」等の記述は娯楽的表現であり、医療効果・健康効果を示すものではありません。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">広告・アフィリエイトについて</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          本ページにはアフィリエイト広告が含まれる場合があります。アフィリエイトリンクおよびバナーには「PR」または「広告」の表記を付与します（景品表示法に基づくステルスマーケティング規制・2023年10月施行告示に準拠）。
        </p>
        <p className="text-white/70 text-sm leading-relaxed">
          広告・アフィリエイトリンクを経由してご購入・ご契約いただいた場合、当サイト運営者が報酬を受け取ることがあります。掲載する広告・リンク先サービスの内容は運営者が保証するものではありません。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">禁止事項</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          以下の行為を禁止します。
        </p>
        <ul className="text-white/70 text-sm space-y-1 list-disc list-inside leading-relaxed">
          <li>当サイトのコンテンツの無断転載・複製・スクレイピング</li>
          <li>当サイトのコンテンツを利用した無断商用利用</li>
          <li>当サイトのシステム・サーバーに過大な負荷をかける行為</li>
          <li>その他、運営者が不適切と判断する行為</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">著作権</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトのコンテンツ（テキスト・画像・デザイン・UIデザイン等）の著作権は運営者（個人事業主 TagTech）に帰属します。
          AIエージェントが自動生成した占い結果のテキストについても、独自のプロンプト設計・システム設計に基づく創作物として運営者に帰属するものとします。
        </p>
        <p className="text-white/70 text-sm leading-relaxed">
          個人的な利用・引用（出典明記あり）は妨げませんが、無断転載・商用利用はご遠慮ください。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">免責事項</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトの利用により生じたいかなる損害・不利益についても、運営者は責任を負いません。
          当サイトのコンテンツは予告なく変更・削除される場合があります。
          リンク先の外部サービス（占い・スピリチュアル系サービス等）の内容・品質・安全性について、当サイトは一切の責任を負いません。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">利用規約の変更</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトは利用規約を予告なく変更する場合があります。変更後の規約は当ページに掲載し、変更日を更新します。継続的なご利用をもって変更後の規約に同意したものとみなします。
        </p>
      </section>

    </div>
  );
}
