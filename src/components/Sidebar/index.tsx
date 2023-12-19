"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { menus } from "@/utils/data";

interface Sidebar {
  collapsed: boolean;
  setSidebarCollapsed: (value: boolean) => void;
}
const Sidebar: React.FC<Sidebar> = ({ collapsed, setSidebarCollapsed }) => {
  const params = usePathname();

  return (
    <aside
      id="sidebar"
      className={`${
        collapsed ? "w-60" : "w-20 -left-40"
      } fixed top-0 left-0 z-40 shadow-lg lg:static lg:shadow-none h-screen transition-all duration-200 ease-in-out`}
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-10 flex justify-between items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
          {collapsed ? (
            <button onClick={() => setSidebarCollapsed(!collapsed)}>
              <img src="/logoarkatama.png" alt="" />
            </button>
          ) : (
            <img src="/icon-arkatama.png" alt="" />
          )}
        </div>
        <ul className="space-y-4 text-sm font-medium">
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link
                href={menu.url}
                className={`${
                  params === menu.url
                    ? "bg-orange-400 rounded-md text-white"
                    : "hover:bg-slate-100"
                } flex justify-center items-center rounded-lg p-3 text-slate-900  dark:text-white dark:hover:bg-slate-700`}
              >
                {menu.icon}
                {collapsed && (
                  <span className="ml-3 flex-1 whitespace-nowrap capitalize transition-all duration-300 ease-in-out">
                    {menu.name}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        {collapsed && (
          <div className="mt-auto flex">
            <div className="flex w-full justify-between">
              <span className="text-sm font-medium text-black dark:text-white">
                arkatamamulti
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-roledescription="more menu"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 text-black dark:text-white lucide lucide-more-horizontal"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;