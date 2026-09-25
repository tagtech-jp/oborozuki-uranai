// AdSense 審査通過後に本実装予定
// 現状は予約領域のみ確保
export default function AdSenseSlot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full min-h-[90px] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <span className="text-white/20 text-xs">広告スペース</span>
    </div>
  );
}
