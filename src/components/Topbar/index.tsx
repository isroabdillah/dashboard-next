"use client";
import { LuAlignJustify, LuSearch, LuBellDot } from "react-icons/lu";
import { Dropdown } from "../Dropdown";

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
        <LuBellDot size="20" />
        <div className="hidden lg:block">
          <Dropdown />
        </div>
      </div>
    </header>
  );
};

export default Topbar;