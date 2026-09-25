import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const siteUrl = "https://oborozuki.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "朧月 | 12星座×今日の運勢占い",
    template: "%s | 朧月",
  },
  description:
    "朧月（おぼろづき）は12星座別に今日の運勢をお届けする占いサイトです。総合運・恋愛運・仕事運・健康運・ラッキーカラーを毎日更新しています。",
  keywords: ["占い", "星座", "今日の運勢", "ホロスコープ", "12星座", "恋愛運", "仕事運"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "朧月",
    title: "朧月 | 12星座×今日の運勢占い",
    description:
      "12星座別に今日の運勢をお届けする占いサイト。総合運・恋愛運・仕事運・健康運・ラッキーカラーを毎日更新。",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "朧月" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "朧月 | 12星座×今日の運勢占い",
    description: "12星座別に今日の運勢をお届けする占いサイト。",
    images: ["/og-image.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-9090801806232530",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSerifJP.variable}>
      <body className="min-h-screen flex flex-col font-[var(--font-noto-serif-jp)]">
        {process.env.NEXT_PUBLIC_ADSENSE_PUB_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUB_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <header className="border-b border-border bg-band backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🌙</span>
              <span className="text-text-primary font-bold text-subheading leading-subheading tracking-subheading">朧月</span>
            </a>
            <span className="text-text-muted text-body leading-body tracking-body ml-2">12星座×今日の運勢</span>
          </div>
        </header>

        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">{children}</main>

        <footer className="border-t border-border bg-band mt-12">
          <div className="max-w-4xl mx-auto px-4 py-8 text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-4 text-body leading-body tracking-body text-text-muted">
              <a href="/about" className="hover:text-text-primary transition-colors">
                運営者情報
              </a>
              <a href="/privacy" className="hover:text-text-primary transition-colors">
                プライバシーポリシー
              </a>
              <a href="/tos" className="hover:text-text-primary transition-colors">
                利用規約
              </a>
              <a href="/contact" className="hover:text-text-primary transition-colors">
                お問い合わせ
              </a>
            </div>
            <p className="text-text-muted text-caption leading-caption tracking-caption">
              当サイトの占い結果は娯楽目的の参考情報です。医療・法律・投資等の専門的な判断の代替とはなりません。
            </p>
            <p className="text-text-muted text-caption leading-caption tracking-caption">
              © {new Date().getFullYear()} 朧月 All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
