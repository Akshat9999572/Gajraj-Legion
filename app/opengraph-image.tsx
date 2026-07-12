import { ImageResponse } from "next/og";

export const alt = "Gajraj Legion — The Royal Force of UTPL 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        color: "#fff8df",
        background: "linear-gradient(135deg, #090705 0%, #241306 55%, #080706 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 24,
          display: "flex",
          border: "2px solid #c99732",
          borderRadius: 28,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 560,
          height: 560,
          right: -80,
          top: 35,
          display: "flex",
          borderRadius: 280,
          background: "radial-gradient(circle, rgba(230,165,45,.38) 0%, rgba(230,165,45,.08) 48%, transparent 70%)",
        }}
      />
      <div
        style={{
          width: "62%",
          padding: "72px 0 68px 78px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#e7b64e", fontSize: 25, letterSpacing: 6 }}>
          <span style={{ fontSize: 25, fontWeight: 900 }}>GL</span> UTPL 2026 / T25
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 86, fontWeight: 900, lineHeight: 0.92, letterSpacing: -4 }}>GAJRAJ</div>
          <div style={{ fontSize: 86, fontWeight: 900, lineHeight: 0.92, letterSpacing: -4, color: "#e6ad3e" }}>LEGION</div>
          <div style={{ width: 145, height: 5, marginTop: 28, background: "#e6ad3e" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          <div style={{ fontSize: 27, fontWeight: 700, letterSpacing: 4 }}>THE ROYAL FORCE</div>
          <div style={{ fontSize: 20, color: "#c9b98f" }}>Unnao Teachers&apos; Premier League</div>
        </div>
      </div>
      <div
        style={{
          width: "38%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 58,
        }}
      >
        <div
          style={{
            width: 350,
            height: 350,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 175,
            border: "4px solid #d9a63e",
            boxShadow: "0 0 0 12px rgba(217,166,62,.12)",
            background: "linear-gradient(145deg, #f0bd53, #7f430f)",
            fontSize: 132,
            fontWeight: 900,
            letterSpacing: -12,
            color: "#fff2c3",
            textShadow: "0 5px 0 rgba(60,27,4,.35)",
          }}
        >
          GL
        </div>
      </div>
    </div>,
    size,
  );
}
