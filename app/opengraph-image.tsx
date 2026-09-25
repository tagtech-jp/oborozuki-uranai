import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "朧月 - 12星座×今日の運勢";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #4c1d95 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* 四隅の装飾 */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            fontSize: 40,
            display: "flex",
            opacity: 0.6,
          }}
        >
          ✨
        </div>
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 60,
            fontSize: 40,
            display: "flex",
            opacity: 0.6,
          }}
        >
          ✨
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 60,
            fontSize: 40,
            display: "flex",
            opacity: 0.4,
          }}
        >
          ✨
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 60,
            fontSize: 40,
            display: "flex",
            opacity: 0.4,
          }}
        >
          ✨
        </div>

        {/* メインコンテンツ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 140, lineHeight: 1, display: "flex" }}>
            🌙
          </div>
          <div
            style={{
              fontSize: 120,
              fontWeight: "bold",
              color: "#FCD34D",
              letterSpacing: "0.2em",
              lineHeight: 1,
              marginTop: 16,
              display: "flex",
            }}
          >
            朧月
          </div>
          <div
            style={{
              fontSize: 48,
              color: "#E0E7FF",
              marginTop: 24,
              letterSpacing: "0.1em",
              display: "flex",
            }}
          >
            12星座 × 今日の運勢
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
