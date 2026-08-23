import React from "react";
import Aurora from "./Aurora";

const AuroraBackground = () => {
  return (
    <div className="aurora-container absolute inset-0 overflow-hidden pointer-events-none z-[1] opacity-80 isolate" aria-hidden="true">
      <Aurora
        colorStops={["#5227FF", "#B497CF", "#7cff67"]}
        blend={0.6}
        amplitude={1.2}
        speed={0.4}
      />
    </div>
  );
};

export default React.memo(AuroraBackground);
