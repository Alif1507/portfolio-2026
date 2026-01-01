import React from "react";
import TiltedCard from "./assets/TiltedCard";

const Pencapaian = () => {
  return (
    <section>
      <h1 className="text-white text-[96px] font-bold mb-24 ml-16">
        My Achievements
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl">Competition</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 mx-4 md:mx-16">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Pencapaian;
