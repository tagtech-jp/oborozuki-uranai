import type { DailyFortune } from "@/lib/fortune";
import LuckyItem from "@/components/LuckyItem";

interface FortuneDisplayProps {
  fortune: DailyFortune;
}

function StarRating({ score }: { score: number }) {
  return (
    <div className="flex gap-1 justify-center text-heading leading-heading" aria-label={`${score}点`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < score ? "text-accent" : "text-text-muted"}>
          ★
        </span>
      ))}
    </div>
  );
}

interface FortuneRowProps {
  label: string;
  icon: string;
  text: string;
}

function FortuneRow({ label, icon, text }: FortuneRowProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <p className="text-accent text-caption leading-caption tracking-caption font-bold mb-2">
        {icon} {label}
      </p>
      <p className="text-text-body text-body leading-body tracking-body">{text}</p>
    </div>
  );
}

export default function FortuneDisplay({ fortune }: FortuneDisplayProps) {
  return (
    <div className="space-y-4">
      <div className="text-center py-4">
        <p className="text-text-muted text-body leading-body tracking-body mb-2">今日の運勢</p>
        <StarRating score={fortune.score} />
        <p className="text-text-body text-body leading-body tracking-body mt-2">{fortune.scorePreamble}</p>
      </div>

      <FortuneRow label="総合運" icon="🌙" text={fortune.overall} />
      <FortuneRow label="恋愛運" icon="💫" text={fortune.love} />
      <FortuneRow label="仕事運" icon="⭐" text={fortune.work} />
      <FortuneRow label="健康運" icon="🌿" text={fortune.health} />

      <LuckyItem color={fortune.luckyColor} item={fortune.luckyItem} />
    </div>
  );
}
