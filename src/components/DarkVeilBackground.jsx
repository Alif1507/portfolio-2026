"use client";

import DarkVeil from "./assets/Darkveil";

export default function DarkVeilBackground() {
  return (
    <div
      className="aurora-container darkveil-container"
      aria-hidden="true"
    >
      <DarkVeil
        hueShift={28}
        noiseIntensity={0.035}
        scanlineIntensity={0.075}
        scanlineFrequency={1.35}
        speed={0.42}
        warpAmount={0.16}
        resolutionScale={0.85}
      />
      <div className="darkveil-vignette" />
    </div>
  );
}
