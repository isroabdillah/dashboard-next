import React from "react";
import Buttons from "@/components/Buttons";
import Image from "next/image";

const handleClick = () => {
  console.log("Tombol diklik!");
};

export const Welcome = () => {
  return (
    <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 bg-[#FF5959] rounded-xl p-5 my-4 items-center">
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
          Dont forget to be happy for today, you guys are amazing
        </p>
      </div>
      <div className="md:ml-auto mr-2">
        <Buttons
          typeButton="white"
          title="Start Here!!"
          onClickAction={handleClick}
        />
      </div>
    </div>
  );
};
