import React from "react";

type BannerProps = {
  title: string;
  text: string;
};

export const Banner: React.FC<BannerProps> = ({ title, text }) => {
  return (
    <div className="p-[34px] bg-[#FF5959] rounded-lg">
      <h5 className="text-[22px] mb-2 text-white font-semibold">{title}</h5>
      <p className="text-[14px] text-white font-light">{text}</p>
    </div>
  );
};
