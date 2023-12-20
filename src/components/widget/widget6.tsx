import React from "react";
import Image from "next/image";

export const Widget6 = () => {
  return (
    <div className="py-[25px] px-[25px] h-full bg-white rounded-xl flex flex-col justify-between">
      <Image
        src="/icon-2.svg"
        width={63}
        height={63}
        alt="Picture of the author"
      />
      <div className="">
        <p className="text-[14px] text-[#9CA3AF] font-light mb-6">
          Revenue this month
        </p>
        <h5 className=" text-[28px] text-gray-950 font-bold">$1030,32</h5>
      </div>
    </div>
  );
};
