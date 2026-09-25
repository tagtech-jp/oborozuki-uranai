"use client";

import { useEffect } from "react";
import SponsorLabel from "./SponsorLabel";

interface AdSlotProps {
  variant?: "in-article" | "banner" | "sidebar";
  showLabel?: boolean;
  className?: string;
}

const variantClasses: Record<string, string> = {
  "in-article": "w-full min-h-[280px]",
  banner: "w-full min-h-[90px]",
  sidebar: "w-[300px] min-h-[250px]",
};

export default function AdSlot({
  variant = "in-article",
  showLabel = true,
  className = "",
}: AdSlotProps) {
  const pubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;

  useEffect(() => {
    if (!pubId) return;
    try {
      // @ts-expect-error adsbygoogle はAdSenseスクリプトが定義するグローバル変数
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ignore
    }
  }, [pubId]);

  if (!pubId) return null;

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {showLabel && <SponsorLabel />}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={pubId}
        data-ad-slot="AD_SLOT_ID_PLACEHOLDER"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
