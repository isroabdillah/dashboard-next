import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const Table = () => {
  return (
    <div className="">
      <div className="sm:px-6 w-full">
        <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 rounded-lg mb-6">
          <div className="sm:flex items-center justify-between">
            <div className="p-4">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="m-2 "
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
                  placeholder="Search Users by Name, Email or Date"
                />
              </div>
            </div>
            <div>
              <Select>
                <SelectTrigger className="py-[10px] px-[20px]">
                  <SelectValue placeholder="Tampilkan Semua" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="satu">Tampil satu</SelectItem>
                  <SelectItem value="dua">Tampil Dua</SelectItem>
                  <SelectItem value="tiga">Tampil Tiga</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                  <th>
                    
                  </th>
                  <th className="text-left">Receiver</th>
                  <th className="text-left">User Status</th>
                  <th className="text-left">Message</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                  <td>
                    <div className="ml-5 bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                      <input
                        placeholder="checkbox"
                        type="checkbox"
                        className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                      />
                      <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z"></path>
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>isro Abdillah</p>
                    <span className="text-sm mt-1">089123456789</span>
                  </td>
                  <td>
                    <div className="bg-green-100 inline-flex items-center rounded-xl px-2 text-sm gap-1 text-green-300">
                      <div className="bg-green-400 w-3 h-3 rounded-full"></div>
                      Active
                    </div>
                    <p className="text-sm mt-1">Last Login : 14/APR/2020</p>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur
                  </td>
                  <td>
                    <div className="bg-green-100 inline-flex items-center rounded-xl px-2 text-sm gap-1 text-green-300">
                      <div className="bg-green-400 w-3 h-3 rounded-full"></div>
                      Terkirim
                    </div>
                  </td>
                  
                </tr>
                <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                  <td>
                    <div className="ml-5 bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                      <input
                        placeholder="checkbox"
                        type="checkbox"
                        className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                      />
                      <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z"></path>
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>Isro Abdillah</p>
                    <span className="text-sm mt-1">089123456789</span>
                  </td>
                  <td>
                    <div className="bg-green-100 inline-flex items-center rounded-xl px-2 text-sm gap-1 text-green-300">
                      <div className="bg-green-400 w-3 h-3 rounded-full"></div>
                      Active
                    </div>
                    <p className="text-sm mt-1">Last Login : 14/APR/2020</p>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur
                  </td>
                  <td>
                    <div className="bg-green-100 inline-flex items-center rounded-xl px-2 text-sm gap-1 text-green-300">
                      <div className="bg-green-400 w-3 h-3 rounded-full"></div>
                      Terkirim
                    </div>
                  </td>
                  
                </tr>
                <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                  <td>
                    <div className="ml-5 bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                      <input
                        placeholder="checkbox"
                        type="checkbox"
                        className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                      />
                      <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z"></path>
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>Isro Abdillah</p>
                    <span className="text-sm mt-1">089123456789</span>
                  </td>
                  <td>
                    <div className="bg-green-100 inline-flex items-center rounded-xl px-2 text-sm gap-1 text-green-300">
                      <div className="bg-green-400 w-3 h-3 rounded-full"></div>
                      Active
                    </div>
                    <p className="text-sm mt-1">Last Login : 14/APR/2020</p>
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet consectetur
                  </td>
                  <td>
                    <div className="bg-green-100 inline-flex items-center rounded-xl px-2 text-sm gap-1 text-green-300">
                      <div className="bg-green-400 w-3 h-3 rounded-full"></div>
                      Terkirim
                    </div>
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
