import { getAllZodiacs, generateDailyFortune } from "@/lib/fortune";
import { affiliateBanners } from "@/lib/affiliate-banners";
import ZodiacCard from "@/components/ZodiacCard";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateBanner from "@/components/ads/AffiliateBanner";

export const dynamic = "force-dynamic";

function getTodayJST(): Date {
  const now = new Date();
  const jst = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
  return jst;
}

function formatDate(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

const h2 = "text-text-primary font-bold text-heading-sm leading-heading-sm mb-4 flex items-center gap-2";
const adBox = "rounded-xl border border-border bg-card p-6";
// AdSense 枠は w-full のため左右余白を付けず幅を維持する（上下 24px のみ）
const adBoxAdsense = "rounded-xl border border-border bg-card py-6";
const adLabel = "text-text-muted text-caption leading-caption tracking-caption font-bold mb-3 px-6";

export default function Home() {
  const today = getTodayJST();
  const zodiacs = getAllZodiacs();

  const rankings = zodiacs
    .map((z) => ({
      zodiac: z,
      fortune: generateDailyFortune(z.id, today),
    }))
    .sort((a, b) => b.fortune.score - a.fortune.score);

  return (
    <div className="space-y-24">
      {/* ヒーロー */}
      <section className="text-center py-8 space-y-3">
        <div className="text-5xl mb-4">🌙</div>
        <h1 className="text-display-sm leading-display-sm tracking-display-sm font-bold text-text-primary">朧月</h1>
        <p className="text-text-body text-subheading leading-subheading tracking-subheading">12星座×今日の運勢</p>
        <p className="text-text-muted text-body leading-body tracking-body">{formatDate(today)}</p>
      </section>

      <section className={adBoxAdsense}>
        <p className={adLabel}>広告</p>
        <AdSenseSlot />
      </section>

      {/* 今日の運勢ランキング */}
      <section>
        <h2 className={h2}>
          <span>⭐</span>
          <span>今日の運勢ランキング</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {rankings.map(({ zodiac, fortune }, index) => (
            <ZodiacCard
              key={zodiac.id}
              zodiac={zodiac}
              score={fortune.score}
              rank={index + 1}
            />
          ))}
        </div>
      </section>

      <section className={adBoxAdsense}>
        <p className={adLabel}>広告</p>
        <AdSenseSlot />
      </section>

      {/* 星座一覧 */}
      <section>
        <h2 className={h2}>
          <span>♈</span>
          <span>12星座から選ぶ</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {zodiacs.map((zodiac) => (
            <ZodiacCard key={zodiac.id} zodiac={zodiac} />
          ))}
        </div>
      </section>

      {/* 注意書き */}
      <section className="text-center">
        <p className="text-text-muted text-caption leading-caption tracking-caption">
          占い結果は娯楽目的の参考情報です。実際の行動や判断は、ご自身の責任でお決めください。
        </p>
      </section>

      {/* アフィリエイトバナー (A8 #3 + もしも) */}
      <section className={adBox}>
        <h2 className="text-text-muted text-caption leading-caption tracking-caption font-bold mb-4 text-center">
          占い・スピリチュアル
        </h2>
        <AffiliateBanner banners={[affiliateBanners[2], affiliateBanners[3]]} />
      </section>
    </div>
  );
}
