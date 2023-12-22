"use client";

import React from "react";
import Image from "next/image";

interface Modal4Props {
  imageSrc: string;
  title: string;
  description: string;
}

export const Modal4: React.FC<Modal4Props> = ({
  imageSrc,
  title,
  description,
}: Modal4Props) => {  
  return (
    <div className="">
      <div className="relative max-w-xl rounded-lg bg-white p-6 border-2 border-zinc-100">
        <button
          type="button"
          className="absolute -end-1 -top-1 rounded-full border border-gray-200 bg-white p-1 text-gray-400"
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Image
            className="h-full w-full rounded-xl object-cover"
            src={imageSrc}
            width={500}
            height={500}
            alt="Picture of the author"
          />

          <div>
            <h2 className="text-lg font-medium">{title}</h2>

            <p className="mt-4 text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
