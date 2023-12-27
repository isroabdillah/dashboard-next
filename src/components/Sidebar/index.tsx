"use client";

import Link from "next/link";
import { menus } from "@/utils/data";
import { LuChevronDown } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

interface Sidebar {
  collapsed: boolean;
  setSidebarCollapsed: (value: boolean) => void;
}

const Sidebar: React.FC<Sidebar> = ({ collapsed, setSidebarCollapsed }) => {
  const params = usePathname();
  const [accordion, setAccordion] = useState("");

  const pages = menus.filter((menu) => menu.type === "pages");
  const components = menus.filter((menu) => menu.type === "components");

  return (
    <aside
      id="params"
      className={`${
        collapsed
          ? "w-60 translate-x-0"
          : "w-20 -translate-x-20 md:translate-x-0"
      } fixed shadow-lg lg:shadow-none z-40 md:sticky top-0 left-0 h-screen transition-all duration-200 ease-in-out`}
    >
      <div
        className={`${
          collapsed ? "pr-10" : "pr-3"
        } flex space-y-10 h-full flex-col overflow-y-auto border-r border-slate-200 bg-white py-4 dark:border-slate-700 dark:bg-slate-900`}
      >
        <div className="flex justify-between items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
          {collapsed ? (
            <button onClick={() => setSidebarCollapsed(!collapsed)}>
              <Image
                className=""
                src="/logoarkatama.png"
                width={162}
                height={32}
                alt=""
              />
            </button>
          ) : (
            <button onClick={() => setSidebarCollapsed(!collapsed)}>
              <Image
                className=""
                src="/icon-arkatama.png"
                width={162}
                height={32}
                alt=""
              />
            </button>
          )}
        </div>
        <div className="space-y-3">
          {collapsed && (
            <p className="pl-9 text-[#999999] text-sm font-medium">Pages</p>
          )}
          <ul className="space-y-2 text-sm font-medium">
            {pages.map((page) =>
              page?.child?.length === 0 ? (
                <li key={page?.id}>
                  <Link
                    href={page?.url}
                    className={`${
                      params === page?.url
                        ? "bg-[#FF5959] text-white font-normal"
                        : "hover:bg-slate-100"
                    } ${collapsed ? "pl-9" : ""}
                    flex justify-center rounded-r-lg items-center py-3 text-slate-900`}
                  >
                    <span
                      className={`${
                        params === page?.url
                          ? "bg-white p-[5px] rounded-md"
                          : ""
                      }`}
                    >
                      {page?.icon}
                    </span>
                    {collapsed && (
                      <span className="ml-3 flex-1 whitespace-nowrap capitalize transition-all duration-300 ease-in-out">
                        {page?.name}
                      </span>
                    )}
                  </Link>
                </li>
              ) : (
                collapsed && (
                  <li key={page?.id} className={`flex flex-col space-y-2`}>
                    <div
                      className="flex justify-center items-center cursor-pointer rounded-r-lg pl-9 py-3 text-slate-900 hover:bg-slate-100"
                      onClick={() =>
                        accordion === page?.name
                          ? setAccordion("")
                          : setAccordion(`${page?.name}`)
                      }
                    >
                      <span
                        className={`${
                          params === page?.url
                            ? "bg-white p-[5px] rounded-md"
                            : ""
                        }`}
                      >
                        {page?.icon}
                      </span>
                      {collapsed && (
                        <span className="ml-3 flex-1 whitespace-nowrap capitalize transition-all duration-300 ease-in-out">
                          {page?.name}
                        </span>
                      )}
                      <span
                        className={`${
                          accordion === page?.name ? "-rotate-180" : ""
                        } transition-all ease-in-out duration-500 mr-3`}
                      >
                        <LuChevronDown size="20" />
                      </span>
                    </div>
                    <ul
                      className={`${
                        accordion === page?.name ? "block" : "hidden"
                      } w-full space-y-2 text-sm`}
                    >
                      {page?.child?.map((item) => (
                        <li key={item?.url}>
                          <Link
                            href={item?.url}
                            className={`${
                              params === item?.url
                                ? "bg-[#FF5959] text-white font-normal"
                                : "hover:bg-slate-100"
                            } flex justify-start rounded-r-lg items-center pl-16 py-3 text-slate-900`}
                          >
                            <span
                              className={`${
                                params === page?.url
                                  ? "bg-white p-[5px] rounded-md"
                                  : ""
                              }`}
                            >
                              {item?.icon}
                            </span>
                            {collapsed && (
                              <span className="ml-3 flex-1 whitespace-nowrap capitalize">
                                {item?.name}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )
            )}
          </ul>
        </div>
        <div className="space-y-3">
          {collapsed && (
            <p className="pl-9 text-[#999999] text-sm font-medium">
              Components
            </p>
          )}
          <ul className="space-y-2 text-sm font-medium">
            {components.map((component) => (
              <li key={component?.id}>
                <Link
                  href={component?.url}
                  className={`${
                    params === component?.url
                      ? "bg-[#FF5959] text-white font-normal"
                      : "hover:bg-slate-100"
                  } ${
                    collapsed ? "pl-9" : ""
                  } flex justify-center rounded-r-lg items-center py-3 text-slate-900`}
                >
                  <span
                    className={`${
                      params === component?.url
                        ? "bg-white p-[5px] rounded-md"
                        : ""
                    }`}
                  >
                    {component?.icon}
                  </span>
                  {collapsed && (
                    <span className="ml-3 flex-1 whitespace-nowrap capitalize transition-all duration-300 ease-in-out">
                      {component?.name}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
