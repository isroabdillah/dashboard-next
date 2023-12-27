import React from "react";
import Image from "next/image";

interface Widget6Props {
  iconSrc: string;
  text: string;
  amount: string;
}

const Widget6: React.FC<Widget6Props> = ({
  iconSrc,
  text,
  amount,
}: Widget6Props) => {
  return (
    <div className="py-[25px] px-[25px] h-full w-full border-2 border-zinc-100 bg-white rounded-xl flex flex-row lg:flex-col justify-between">
      <Image src={iconSrc} width={63} height={63} alt="Icon" />
      <div className="mt-9">
        <p className="text-[14px] text-[#9CA3AF] font-light mb-6">
          {text}
        </p>
        <h5 className="text-[28px] text-gray-950 font-bold">{amount}</h5>
      </div>
    </div>
  );
};

export default Widget6;
