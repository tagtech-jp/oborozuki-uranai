import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllZodiacs, getZodiac, generateDailyFortune } from "@/lib/fortune";
import { affiliateBanners } from "@/lib/affiliate-banners";
import { getPowerStoneByZodiacId } from "@/lib/zodiac-powerstones";
import FortuneDisplay from "@/components/FortuneDisplay";
import ZodiacCard from "@/components/ZodiacCard";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateBanner from "@/components/ads/AffiliateBanner";
import ZodiacPowerStoneCard from "@/components/ads/ZodiacPowerStoneCard";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ zodiac: string }>;
}

function getTodayJST(): Date {
  const now = new Date();
  return new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
}

function formatDate(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

export async function generateStaticParams() {
  return getAllZodiacs().map((z) => ({ zodiac: z.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { zodiac: zodiacId } = await params;
  const zodiac = getZodiac(zodiacId);
  if (!zodiac) return {};
  return {
    title: `${zodiac.name}（${zodiac.symbol}）今日の運勢`,
    description: `${zodiac.name}の今日の運勢。総合運・恋愛運・仕事運・健康運・ラッキーカラー・ラッキーアイテムをお届けします。`,
    openGraph: {
      title: `${zodiac.name} 今日の運勢 | 朧月`,
      description: `${zodiac.name}の今日の運勢。総合運・恋愛運・仕事運・健康運をお届けします。`,
    },
  };
}

const body = "text-body leading-body tracking-body";
const h2 = "text-text-primary font-bold text-heading-sm leading-heading-sm mb-4";
const adBox = "rounded-xl border border-border bg-card p-6";
// AdSense 枠は w-full のため左右余白を付けず幅を維持する（上下 24px のみ）
const adBoxAdsense = "rounded-xl border border-border bg-card py-6";
const adLabel = "text-text-muted text-caption leading-caption tracking-caption font-bold mb-3 px-6";

export default async function ZodiacPage({ params }: PageProps) {
  const { zodiac: zodiacId } = await params;
  const zodiac = getZodiac(zodiacId);
  if (!zodiac) notFound();

  const today = getTodayJST();
  const fortune = generateDailyFortune(zodiac.id, today);
  const allZodiacs = getAllZodiacs();
  const relatedZodiacs = allZodiacs.filter((z) => z.id !== zodiac.id).slice(0, 4);
  const powerStone = getPowerStoneByZodiacId(zodiac.id);

  return (
    <div className="space-y-24 max-w-2xl mx-auto">
      {/* 星座ヘッダー */}
      <section className="text-center py-6 space-y-2">
        <div className="text-6xl mb-2">{zodiac.symbol}</div>
        <h1 className="text-display-sm leading-display-sm tracking-display-sm font-bold text-text-primary">{zodiac.name}</h1>
        <p className={`text-text-body ${body}`}>
          {zodiac.periodStart}〜{zodiac.periodEnd} · {zodiac.element}属性 · 守護星：{zodiac.rulingPlanet}
        </p>
        <p className={`text-text-muted ${body}`}>{formatDate(today)}の運勢</p>
        <p className={`text-text-body ${body} mt-2`}>{zodiac.description}</p>
      </section>

      <section className={adBoxAdsense}>
        <p className={adLabel}>広告</p>
        <AdSenseSlot />
      </section>

      {/* 運勢表示 */}
      <section>
        <FortuneDisplay fortune={fortune} />
      </section>

      <section className={adBoxAdsense}>
        <p className={adLabel}>広告</p>
        <AdSenseSlot />
      </section>

      {/* 関連星座 */}
      <section>
        <h2 className={h2}>他の星座の運勢</h2>
        <div className="grid grid-cols-2 gap-3">
          {relatedZodiacs.map((z) => {
            const f = generateDailyFortune(z.id, today);
            return <ZodiacCard key={z.id} zodiac={z} score={f.score} />;
          })}
        </div>
        <div className="mt-4 text-center">
          <a
            href="/"
            className={`text-accent hover:text-text-primary ${body} underline underline-offset-4 transition-colors`}
          >
            すべての星座を見る →
          </a>
        </div>
      </section>

      {/* 注意書き */}
      <section className="border-t border-border pt-6">
        <p className="text-text-muted text-caption leading-caption tracking-caption text-center">
          占い結果は娯楽目的の参考情報であり、特定の結果を保証するものではありません。
          医療・法律・投資等の専門的な判断の代替とはなりません。実際の行動や判断はご自身の責任でお決めください。
        </p>
      </section>

      {/* アフィリエイトバナー (A8 #1 + A8 #2) */}
      <section className={adBox}>
        <h2 className="text-text-muted text-caption leading-caption tracking-caption font-bold mb-4 text-center">
          占い・スピリチュアルおすすめ
        </h2>
        <AffiliateBanner banners={[affiliateBanners[0], affiliateBanners[1]]} />
      </section>

      {/* パワーストーン */}
      {powerStone && (
        <section>
          <h2 className={h2}>
            {zodiac.name}のパワーストーン
          </h2>
          <ZodiacPowerStoneCard stone={powerStone} />
        </section>
      )}
    </div>
  );
}
