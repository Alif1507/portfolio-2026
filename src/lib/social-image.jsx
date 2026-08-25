import { ImageResponse } from "next/og";

export const socialImageAlt = "Muhammad Alif Wahyudi — full-stack developer and UI/UX designer";
export const socialImageSize = { width: 1200, height: 630 };

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#050507",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ position: "absolute", width: 700, height: 400, left: -180, top: -220, borderRadius: 999, background: "#6d28d9", filter: "blur(110px)", opacity: 0.7 }} />
        <div style={{ position: "absolute", width: 620, height: 360, right: -160, bottom: -220, borderRadius: 999, background: "#1d4ed8", filter: "blur(110px)", opacity: 0.55 }} />
        <div style={{ display: "flex", flexDirection: "column", width: 1010, borderLeft: "2px solid rgba(196,181,253,0.8)", paddingLeft: 48 }}>
          <div style={{ color: "#c4b5fd", display: "flex", fontSize: 24, letterSpacing: 8, marginBottom: 24, textTransform: "uppercase" }}>Portfolio · 2026</div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, letterSpacing: -4, lineHeight: 1.05 }}>Muhammad Alif<br />Wahyudi</div>
          <div style={{ color: "#d4d4d8", display: "flex", fontSize: 29, marginTop: 30 }}>Full-stack developer · Mobile developer · UI/UX designer</div>
        </div>
        <div style={{ position: "absolute", right: 64, top: 52, display: "flex", fontSize: 27, fontWeight: 800, letterSpacing: 4 }}>MAW</div>
      </div>
    ),
    socialImageSize,
  );
}
