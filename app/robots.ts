import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AdSenseクローラーを明示的に許可（省略時も全UA allowで実害なし・明示化のため追加）
      { userAgent: "Mediapartners-Google", allow: "/" },
    ],
    sitemap: "https://oborozuki.jp/sitemap.xml",
  };
}
