"use client"

import React from "react";
import Buttons from "../Buttons";

const handleClick = () => {
  console.log("Tombol diklik!");
};

export const Modal1 = () => {
  return (
    <div className="">
      <div
        className="fixed inset-0 z-10 overflow-y-auto"
        aria-labelledby="modal-title"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-700 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>

              <div className="mt-2 text-center">
                <h3
                  className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Archive Project
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur dolorum aliquam ea, ratione deleniti porro officia?
                  Explicabo maiores suscipit.
                </p>
              </div>
            </div>

            <div className="mt-5 sm:flex sm:items-center sm:justify-between">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Learn more
              </a>

              <div className="sm:flex sm:items-center lg:justify-start justify-center gap-2">
                <Buttons
                  typeButton="primary"
                  title="Primary"
                  onClickAction={handleClick}
                />

                <Buttons
                  typeButton="secondary"
                  title="Secondary"
                  onClickAction={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
