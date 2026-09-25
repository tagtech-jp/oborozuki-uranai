import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "運営者情報",
  description: "朧月の運営者情報ページです。",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-white border-b border-white/20 pb-4">運営者情報</h1>

      <section className="space-y-4">
        <table className="w-full text-sm">
          <tbody>
            {[
              ["サイト名", "朧月（おぼろづき）"],
              ["URL", "https://oborozuki.jp"],
              ["運営者", "個人事業主（屋号：TagTech）"],
              ["所在地", "お問い合わせいただいた際に開示いたします"],
              ["連絡先", "contact [at] oborozuki.jp（[at]を@に置き換えてください）"],
            ].map(([label, value]) => (
              <tr key={label} className="border-b border-white/10">
                <th className="text-left py-3 pr-4 text-white/50 font-normal w-1/3">{label}</th>
                <td className="py-3 text-white/80">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">サイトについて</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          朧月は12星座の今日の運勢を参考情報としてお届けする占いエンターテインメントサイトです。
          提供する運勢情報はすべて娯楽目的であり、特定の結果や効果を保証するものではありません。
        </p>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトが提供する占い結果は、AIエージェントが独自設計したアルゴリズムにより自動生成されたものです。
          特定の占い師・霊能者・専門家の見解を反映したものではありません。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">広告・アフィリエイトについて</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          当サイトはGoogle AdSenseを利用した第三者配信広告を掲載する予定です。
          また、占い・スピリチュアル系サービス等のアフィリエイトプログラム（A8.net / afb 等）に参加する予定です。
        </p>
        <p className="text-white/70 text-sm leading-relaxed">
          アフィリエイトリンクおよびバナー広告には「PR」「広告」の表記を付与します（景品表示法に基づくステルスマーケティング規制・2023年10月施行告示に準拠）。
          アフィリエイトリンクを経由してご購入・ご契約いただいた場合、運営者が報酬を受け取ることがあります。
        </p>
        <p className="text-white/70 text-sm leading-relaxed">
          なお、現時点（MVP段階）において当サイトは直接の有料サービスを提供しておりません。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">免責事項</h2>
        <p className="text-white/70 text-sm leading-relaxed">
          占い結果の正確性・的中率を保証するものではありません。
          健康・医療・法律・財産等に関する重大な判断は、必ず専門家にご相談ください。
          当サイトの利用により生じたいかなる損害・不利益についても、運営者は責任を負いません。
        </p>
      </section>

    </div>
  );
}
