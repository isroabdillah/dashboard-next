import React from "react";
import Image from "next/image";
import { Pills } from "../Badges/pills";

interface Widget4Props {
  avatarSrc: string;
  name: string;
  date: string;
  age: number;
}

const Widget4: React.FC<Widget4Props> = ({
  avatarSrc,
  name,
  date,
  age,
}: Widget4Props) => {
  return (
    <div className="py-[32px] px-[25px] border-2 border-zinc-100 bg-white rounded-xl w-full flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src={avatarSrc}
          width={44}
          height={48}
          alt="Picture of the author"
        />
        <div className="ml-4">
          <h5 className="text-[14px] text-gray-950 font-medium">
            {name}
          </h5>
          <p className="text-[14px] text-[#9CA3AF] font-light">{date}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Pills status="warning" />
        <p className="text-[#9CA3AF] text-[14px] font-light pl-2">{age} Years</p>
      </div>
    </div>
  );
};

export default Widget4;