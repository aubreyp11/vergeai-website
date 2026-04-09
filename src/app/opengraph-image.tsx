import { ImageResponse } from "next/og";

export const alt = "Verge AI — AI Strategy for Small Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2B4C7E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            marginBottom: 16,
          }}
        >
          Verge AI
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#FDDDD5",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          AI Strategy for Small Business
        </div>
        <div
          style={{
            width: 80,
            height: 4,
            background: "#F06844",
            borderRadius: 2,
            marginTop: 32,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
