import React from "react";
import Image from "next/image";

export const Widget4 = () => {
  return (
    <div className="py-[32px] px-[25px] bg-white rounded-xl lg:w-full flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/Avatar-Profile-1.png"
          width={44}
          height={48}
          alt="Picture of the author"
        />
        <div className="ml-4">
          <h5 className="text-[14px] text-gray-950 font-medium">
            Arkatama Multi
          </h5>
          <p className="text-[14px] text-[#9CA3AF] font-light">4 Days Ago</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="py-[34] px-[10px] bg-[#EEF2FF] rounded-full mx-1 w-[125px] items-center justify-center border-[1px] border-[#676FA3]">
          <p className="text-[#676FA3] text-center">Indonesia</p>
        </div>
          <p className="text-[#9CA3AF] text-[14px] font-light pl-2">27 Year</p>
      </div>
    </div>
  );
};
