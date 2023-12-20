"use client";
import { LuAlignJustify, LuSearch, LuBellDot } from "react-icons/lu";
import { Dropdown } from "../Dropdown";
import Image from "next/image";

interface Topbar {
  collapsed: boolean;
  setSidebarCollapsed: (value: boolean) => void;
}

const Topbar: React.FC<Topbar> = ({ collapsed, setSidebarCollapsed }) => {
  return (
    <header className="bg-white w-full h-16 px-8 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <button onClick={() => setSidebarCollapsed(!collapsed)}>
          <LuAlignJustify size="20" />
        </button>
        <div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LuSearch />
            </div>
            <input
              type="text"
              id="table-search"
              className="w-44 lg:w-80 bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-red-500 focus:border-red-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Search Here..."
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Image
          src="/bel.svg"
          width={44}
          height={44}
          alt="Picture of the author"
        />
        <div className="flex items-center border-l-[1px] border-zinc-300 pl-4 ">
          <Image
            src="/Avatar-Profile-1.png"
            width={39}
            height={39}
            alt="Picture of the author"
          />
          <div className="lg:flex flex-col px-4 hidden ">
            <h6 className="text-gray-900 text-sm not-italic font-medium leading-5">Arkatama</h6>
            <p className="text-gray-900 text-sm font-light leading-5">info@arkatama.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
