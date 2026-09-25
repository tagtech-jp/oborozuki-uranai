import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { affiliateBanners } from "@/lib/affiliate-banners";

// バナー配置ページマップ（lib/affiliate-banners.ts の id と対応）
const PAGE_BANNER_MAP: Record<string, string[]> = {
  "/": ["a8-3", "moshimo-1"],
  "/[zodiac]": ["a8-1", "a8-2"],
};

function extractDomain(url: string): string {
  const normalized = url.startsWith("//") ? `https:${url}` : url;
  try {
    return new URL(normalized).hostname;
  } catch {
    return url;
  }
}

// タイミング攻撃対策: 長さが異なる場合も定時間で比較
function secureCompare(a: string, b: string): boolean {
  const aBuf = Buffer.from(a, "utf8");
  const bBuf = Buffer.from(b, "utf8");
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

export async function GET(request: Request): Promise<NextResponse> {
  const secret = process.env.AD_CHECK_SECRET;

  if (!secret) {
    return NextResponse.json(
      { error: "check endpoint not configured" },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const provided = searchParams.get("secret") ?? "";

  if (!secureCompare(provided, secret)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const banners = affiliateBanners.map((b) => {
    const embeddedOn = Object.entries(PAGE_BANNER_MAP)
      .filter(([, ids]) => ids.includes(b.id))
      .map(([page]) => page);

    return {
      id: b.id,
      provider: b.provider,
      hrefDomain: extractDomain(b.href),
      trackingDomain: extractDomain(b.trackingSrc),
      embeddedOn,
    };
  });

  return NextResponse.json({
    status: "ok",
    generatedAt: new Date().toISOString(),
    banners,
    expectedDomains: ["px.a8.net", "af.moshimo.com"],
  });
}
