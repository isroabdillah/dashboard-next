import React from "react";
import Image from "next/image";

export const Widget3 = () => {
  return (
    <div className="flex flex-col p-4 h-full lg:w-1/2 bg-white shadow-sm rounded-2xl">
      <div className="flex">
        <Image
          className=" w-16  object-fit  h-16 rounded-2xl"
          src="/isro.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="flex flex-col justify-center w-full px-2 py-1">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col">
              <h2 className="font-medium leading-none text-gray-800">
                Mie Jebbew
              </h2>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              ></path>
            </svg>
          </div>
          <div className="flex pt-2  text-sm text-gray-500">
            <div className="flex items-center mr-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className="font-normal">4.5</p>
            </div>
            <div className="flex items-center font-medium text-gray-500 ">
              Rp.18.000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
