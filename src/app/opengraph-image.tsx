import { ImageResponse } from "next/og";
import { personal } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08080f",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(34,211,238,0.25), transparent 45%), radial-gradient(circle at 85% 80%, rgba(139,92,246,0.25), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 28,
            fontFamily: "monospace",
            color: "#22d3ee",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#22d3ee",
              display: "flex",
            }}
          />
          Available for opportunities
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, color: "#fff" }}>
          {personal.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#22d3ee",
            fontFamily: "monospace",
            marginTop: 8,
          }}
        >
          {personal.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#a1a1aa",
            marginTop: 28,
            maxWidth: 980,
            lineHeight: 1.5,
          }}
        >
          {personal.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
