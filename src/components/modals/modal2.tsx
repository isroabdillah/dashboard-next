"use client";

import React from "react";
import Buttons from "../Buttons";

const handleClick = () => {
  console.log("Tombol diklik!");
};

export const Modal2 = () => {
  return (
    <div
      className="rounded-2xl bg-white p-4 shadow-sm sm:p-6 lg:p-8"
      role="alert"
    >
      <div className="flex items-center gap-4">
        <span className="shrink-0 rounded-full bg-[#FF5959] p-2 text-white">
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              fillRule="evenodd"
            />
          </svg>
        </span>

        <p className="font-medium sm:text-lg">New message!</p>
      </div>

      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo
        unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
      </p>

      <div className="mt-6 sm:flex sm:gap-4">
        <Buttons
          typeButton="primary"
          title="Secondary"
          onClickAction={handleClick}
        />

        <Buttons
          typeButton="secondary"
          title="Secondary"
          onClickAction={handleClick}
        />
      </div>
    </div>
  );
};
