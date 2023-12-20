import React from "react";
import Buttons from "@/components/Buttons";
import Image from "next/image";

const handleClick = () => {
  console.log("Tombol diklik!");
};

export const Welcome = () => {
  return (
    <div className="flex flex-row bg-[#FF5959] rounded-xl p-5 my-4 items-center">
      <Image
        src="/avatar.png"
        width={90}
        height={90}
        alt="Picture of the author"
      />
      <div className="ml-6 content-center">
        <h3 className="text-lg font-semibold text-white">
          Good morning, Arkatama
        </h3>
        <p className="mt-2 text-sm font-normal text-white">
          Don't forget to be happy for today, you guys are amazing
        </p>
      </div>
      <div className="ml-auto mr-2">
        <Buttons
          typeButton="white"
          title="Start Here!!"
          onClickAction={handleClick}
        />
      </div>
    </div>
  );
};
