interface SponsorLabelProps {
  label?: "広告" | "PR" | "Sponsored";
}

// 消費者庁2023年10月告示（景表法5条3号）準拠
// コンテンツ上部・左寄せ・視認性確保（小字・薄色での埋没禁止）
export default function SponsorLabel({ label = "PR" }: SponsorLabelProps) {
  return (
    <span className="inline-block bg-white/10 text-white/60 text-xs font-bold px-2 py-0.5 rounded mb-1">
      {label}
    </span>
  );
}
