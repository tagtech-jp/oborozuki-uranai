interface LuckyItemProps {
  color: string;
  item: string;
}

export default function LuckyItem({ color, item }: LuckyItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-1 bg-card border border-border rounded-xl p-6 text-center">
        <p className="text-text-muted text-caption leading-caption tracking-caption mb-1">ラッキーカラー</p>
        <p className="text-text-primary font-bold text-body leading-body tracking-body">{color}</p>
      </div>
      <div className="flex-1 bg-card border border-border rounded-xl p-6 text-center">
        <p className="text-text-muted text-caption leading-caption tracking-caption mb-1">ラッキーアイテム</p>
        <p className="text-text-primary font-bold text-body leading-body tracking-body">{item}</p>
      </div>
    </div>
  );
}
