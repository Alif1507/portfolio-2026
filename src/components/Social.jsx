import React from "react";

const Social = () => {
  return (
    <section
      style={{ fontFamily: "Sora Variable" }}
      className="flex flex-row justify-around items-center mt-70"
    >
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-[40px] font-bold">TikTok</h1>
        <h1 className="text-[128px] font-bold">67</h1>
        <p className="text-[24px]">Followers</p>
      </div>

      <div className="flex flex-col relative items-center justify-center text-white">
        <div className="absolute bg-white h-[206px] w-[1px] -left-40"></div>
        <div className="absolute bg-white h-[206px] w-[1px] -right-40"></div>
        <h1 className="text-[40px] font-bold">Instagram</h1>
        <h1 className="text-[128px] font-bold">67</h1>
        <p className="text-[24px]">Followers</p>
      </div>

      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-[40px] font-bold">YouTube</h1>
        <h1 className="text-[128px] font-bold">67</h1>
        <p className="text-[24px]">Subcribers</p>
      </div>
    </section>
  );
};

export default Social;
