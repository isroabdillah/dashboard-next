"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dropdown } from "../Dropdown";

export const Topbar = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <header className="bg-white h-16 px-[110px] flex justify-between items-center">
      <div className="p-4">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="m-2 "
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
            >
              <g clipPath="url(#clip0_44_309)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.43731 1.91663C6.47723 1.91671 5.53109 2.14638 4.67783 2.58649C3.82456 3.0266 3.08892 3.66438 2.53227 4.44662C1.97562 5.22886 1.61411 6.13287 1.4779 7.08324C1.34168 8.03361 1.43472 9.00277 1.74924 9.90987C2.06376 10.817 2.59065 11.6357 3.28594 12.2978C3.98123 12.9598 4.82477 13.446 5.74618 13.7158C6.66758 13.9855 7.64014 14.031 8.5827 13.8484C9.52527 13.6659 10.4105 13.2606 11.1646 12.6663L13.7514 15.2531C13.885 15.3822 14.0639 15.4536 14.2496 15.4519C14.4354 15.4503 14.613 15.3758 14.7444 15.2445C14.8757 15.1132 14.9502 14.9355 14.9518 14.7498C14.9534 14.5641 14.882 14.3851 14.753 14.2515L12.1661 11.6647C12.866 10.7769 13.3017 9.70999 13.4235 8.5861C13.5453 7.4622 13.3482 6.32672 12.8548 5.30961C12.3614 4.29249 11.5916 3.43484 10.6335 2.83479C9.67545 2.23474 8.56779 1.91655 7.43731 1.91663ZM2.83315 7.93746C2.83315 6.71636 3.31823 5.54527 4.18168 4.68182C5.04512 3.81837 6.21621 3.33329 7.43731 3.33329C8.65841 3.33329 9.8295 3.81837 10.693 4.68182C11.5564 5.54527 12.0415 6.71636 12.0415 7.93746C12.0415 9.15856 11.5564 10.3296 10.693 11.1931C9.8295 12.0565 8.65841 12.5416 7.43731 12.5416C6.21621 12.5416 5.04512 12.0565 4.18168 11.1931C3.31823 10.3296 2.83315 9.15856 2.83315 7.93746Z"
                  fill="#656565"
                />
              </g>
              <defs>
                <clipPath id="clip0_44_309">
                  <rect
                    width="17"
                    height="17"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-red-500 focus:border-red-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
            placeholder="Search Here..."
          />
        </div>
      </div>

      <div className="flex">
        <svg
          className="mr-4"
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="48"
          viewBox="0 0 47 48"
          fill="none"
        >
          <g clipPath="url(#clip0_44_315)">
            <path
              d="M28.4688 22.6037V22.0456C28.4688 18.9827 26.0748 16.5 23.125 16.5C20.1753 16.5 17.7813 18.9827 17.7813 22.0456V22.6037C17.7823 23.27 17.5921 23.9225 17.2335 24.484L16.3563 25.8496C15.5559 27.0965 16.1671 28.7914 17.5596 29.1857C21.1982 30.2172 25.0519 30.2172 28.6905 29.1857C30.083 28.7914 30.6942 27.0965 29.8938 25.8504L29.0166 24.4847C28.6577 23.9234 28.4673 23.2709 28.468 22.6045L28.4688 22.6037Z"
              stroke="#656565"
              strokeWidth="1.1875"
            />
            <path
              d="M19.5625 29.9584C20.081 31.3422 21.4799 32.3334 23.125 32.3334C24.7701 32.3334 26.169 31.3422 26.6875 29.9584"
              stroke="#656565"
              strokeWidth="1.1875"
              strokeLinecap="round"
            />
            <circle cx="37" cy="6.5" r="6" fill="#FFAEAE" />
            <circle cx="37" cy="6.5" r="3" fill="#FF0000" />
          </g>
          <defs>
            <clipPath id="clip0_44_315">
              <rect
                width="47"
                height="47"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>

        <Dropdown/>
      </div>
    </header>
  );
};
