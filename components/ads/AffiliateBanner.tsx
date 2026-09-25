import type { AffiliateBanner } from "@/lib/affiliate-banners";
import SponsorLabel from "./SponsorLabel";

// もしもアフィリエイトのattributionsrc属性をReact型に追加
// Attribution Reporting API用の属性で、@types/reactに未収録のため拡張
declare module "react" {
  interface ImgHTMLAttributes<T> {
    attributionsrc?: string;
  }
}

interface AffiliateBannerProps {
  banner?: AffiliateBanner;
  banners?: AffiliateBanner[];
  orientation?: "vertical" | "horizontal";
}

function AffiliateBannerItem({ banner }: { banner: AffiliateBanner }) {
  const isMoshimo = banner.provider === "moshimo";

  return (
    <div className="flex flex-col items-center gap-1">
      <SponsorLabel label="PR" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <a
        href={banner.href}
        rel="nofollow"
        {...(isMoshimo
          ? { referrerPolicy: "no-referrer-when-downgrade" as const }
          : {})}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={banner.imgSrc}
          width={banner.imgWidth}
          height={banner.imgHeight}
          alt={banner.alt ?? ""}
          style={{ border: 0 }}
        />
      </a>
      {/* インプレッショントラッキングGIF (削除・改変禁止) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {isMoshimo ? (
        <img
          src={banner.trackingSrc}
          width={1}
          height={1}
          alt=""
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          attributionsrc=""
        />
      ) : (
        <img
          src={banner.trackingSrc}
          width={1}
          height={1}
          alt=""
          style={{ border: 0 }}
        />
      )}
    </div>
  );
}

export default function AffiliateBanner({
  banner,
  banners,
  orientation = "vertical",
}: AffiliateBannerProps) {
  if (banner) {
    return <AffiliateBannerItem banner={banner} />;
  }
  if (banners && banners.length > 0) {
    return (
      <div
        className={`flex ${
          orientation === "horizontal" ? "flex-row flex-wrap" : "flex-col"
        } items-center gap-6`}
      >
        {banners.map((b) => (
          <AffiliateBannerItem key={b.id} banner={b} />
        ))}
      </div>
    );
  }
  return null;
}
