import type { ZodiacPowerStone } from "@/lib/zodiac-powerstones";
import SponsorLabel from "./SponsorLabel";

interface ZodiacPowerStoneCardProps {
  stone: ZodiacPowerStone;
}

export default function ZodiacPowerStoneCard({
  stone,
}: ZodiacPowerStoneCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 text-center">
      <SponsorLabel label="PR" />
      <div
        className="w-20 h-20 rounded-full shadow-lg"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${stone.colorTo}, ${stone.colorFrom})`,
        }}
        aria-hidden="true"
      />
      <div className="space-y-1">
        <p className="text-white font-bold text-base">{stone.nameJa}</p>
        <p className="text-white/50 text-xs">{stone.nameEn}</p>
        <p className="text-purple-200 text-sm leading-relaxed">{stone.meaning}</p>
      </div>
      {stone.available ? (
        <a
          href={stone.amazonUrl}
          rel="nofollow noopener noreferrer"
          target="_blank"
          className="mt-1 inline-block bg-amber-500 hover:bg-amber-400 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors"
        >
          Amazon で見る
        </a>
      ) : (
        <span
          aria-disabled="true"
          className="mt-1 inline-block bg-white/10 text-white/40 text-sm font-bold px-5 py-2 rounded-full cursor-default"
        >
          準備中
        </span>
      )}
    </div>
  );
}
