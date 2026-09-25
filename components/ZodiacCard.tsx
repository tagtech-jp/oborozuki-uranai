import Link from "next/link";
import type { Zodiac } from "@/lib/fortune";

interface ZodiacCardProps {
  zodiac: Zodiac;
  score?: number;
  rank?: number;
}

const elementColors: Record<string, string> = {
  火: "bg-element-fire/15 border-element-fire/40",
  地: "bg-element-earth/15 border-element-earth/40",
  風: "bg-element-air/15 border-element-air/40",
  水: "bg-element-water/15 border-element-water/40",
};

export default function ZodiacCard({ zodiac, score, rank }: ZodiacCardProps) {
  const elementClass = elementColors[zodiac.element] ?? "bg-card border-border";

  return (
    <Link
      href={`/${zodiac.id}`}
      className={`block ${elementClass} border rounded-xl p-4 sm:p-6 hover:scale-105 transition-transform duration-200`}
    >
      <div className="flex items-center gap-2 mb-2">
        {rank && (
          <span className="text-accent text-caption leading-caption tracking-caption font-bold w-5">#{rank}</span>
        )}
        <span className="text-3xl">{zodiac.symbol}</span>
        <div>
          <p className="text-text-primary font-bold text-body leading-body tracking-body">{zodiac.name}</p>
          <p className="text-text-muted text-caption leading-caption tracking-caption">{zodiac.periodStart}〜{zodiac.periodEnd}</p>
        </div>
      </div>
      {score !== undefined && (
        <div className="flex gap-0.5 mt-1" aria-label={`${score}点`}>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`text-body ${i < score ? "text-accent" : "text-text-muted"}`}>
              ★
            </span>
          ))}
        </div>
      )}
      <p className="text-text-muted text-caption leading-caption tracking-caption mt-1">{zodiac.element}属性 · {zodiac.rulingPlanet}</p>
    </Link>
  );
}
