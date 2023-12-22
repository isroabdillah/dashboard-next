import React from "react";
import Image from "next/image";

export const Widget5 = () => {
  return (
    <div className="py-[25px] px-[25px] border-2 lg:max-w-md border-zinc-100 bg-white rounded-xl w-full flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/icon-1.svg"
          width={63}
          height={63}
          alt="Picture of the author"
        />
        <h5 className="ml-5 text-[14px] text-gray-950 font-medium max-w-[157px]">
          International Design Competition
        </h5>
      </div>
      <div className="flex">
        <Image
          src="/dot-k.svg"
          width={21}
          height={21}
          alt="Picture of the author"
        />
        <p className="text-[14px] text-[#9CA3AF] font-light ml-4">23/02/2023</p>
      </div>
    </div>
  );
};