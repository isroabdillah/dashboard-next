import React from "react";
import Image from "next/image";

export const List = () => {
  return (
    <div className="py-[25px] px-[25px] bg-white rounded-xl my-4">
      <div className="flex justify-between items-center">
        <h5 className="text-[16px] text-gray-950 font-semibold mb-2">Email</h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="4"
          viewBox="0 0 16 4"
          fill="none"
        >
          <path
            d="M8 0.359843C8.39782 0.359843 8.77936 0.513757 9.06066 0.787727C9.34196 1.0617 9.5 1.43328 9.5 1.82073C9.5 2.20818 9.34196 2.57976 9.06066 2.85373C8.77936 3.1277 8.39782 3.28162 8 3.28162C7.60218 3.28162 7.22064 3.1277 6.93934 2.85373C6.65804 2.57976 6.5 2.20818 6.5 1.82073C6.5 1.43328 6.65804 1.0617 6.93934 0.787727C7.22064 0.513757 7.60218 0.359843 8 0.359843ZM14.5 0.359843C14.8978 0.359843 15.2794 0.513757 15.5607 0.787727C15.842 1.0617 16 1.43328 16 1.82073C16 2.20818 15.842 2.57976 15.5607 2.85373C15.2794 3.1277 14.8978 3.28162 14.5 3.28162C14.1022 3.28162 13.7206 3.1277 13.4393 2.85373C13.158 2.57976 13 2.20818 13 1.82073C13 1.43328 13.158 1.0617 13.4393 0.787727C13.7206 0.513757 14.1022 0.359843 14.5 0.359843ZM1.5 0.359843C1.89782 0.359843 2.27936 0.513757 2.56066 0.787727C2.84196 1.0617 3 1.43328 3 1.82073C3 2.20818 2.84196 2.57976 2.56066 2.85373C2.27936 3.1277 1.89782 3.28162 1.5 3.28162C1.10218 3.28162 0.720644 3.1277 0.43934 2.85373C0.158035 2.57976 0 2.20818 0 1.82073C0 1.43328 0.158035 1.0617 0.43934 0.787727C0.720644 0.513757 1.10218 0.359843 1.5 0.359843Z"
            fill="#151515"
          />
        </svg>
      </div>
      <div className="py-4 border-b-[1px] border-gray-200 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/Avatar-Profile-1.png"
            width={37}
            height={37}
            alt="Picture of the author"
          />
          <div className="ml-5">
            <h5 className="text-[14px] text-gray-950 font-medium">
              Arkatama Multi
            </h5>
            <p className="text-[12px] text-[#9CA3AF] font-light">
              Revenue is the income that...
            </p>
          </div>
        </div>
        <p className="text-[13px] text-[#9CA3AF] font-normal">10.00 PM</p>
      </div>
      <div className="py-4 border-b-[1px] border-gray-200 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/Avatar-Profile-1.png"
            width={37}
            height={37}
            alt="Picture of the author"
          />
          <div className="ml-5">
            <h5 className="text-[14px] text-gray-950 font-medium">
              Arkatama Multi
            </h5>
            <p className="text-[12px] text-[#9CA3AF] font-light">
              Revenue is the income that...
            </p>
          </div>
        </div>
        <p className="text-[13px] text-[#9CA3AF] font-normal">10.00 PM</p>
      </div>
      <div className="py-4 border-b-[1px] border-gray-200 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/Avatar-Profile-1.png"
            width={37}
            height={37}
            alt="Picture of the author"
          />
          <div className="ml-5">
            <h5 className="text-[14px] text-gray-950 font-medium">
              Arkatama Multi
            </h5>
            <p className="text-[12px] text-[#9CA3AF] font-light">
              Revenue is the income that...
            </p>
          </div>
        </div>
        <p className="text-[13px] text-[#9CA3AF] font-normal">10.00 PM</p>
      </div>
    </div>
  );
};
