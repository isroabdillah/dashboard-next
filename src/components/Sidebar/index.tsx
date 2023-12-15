"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const params = usePathname();

  return (
    <aside
      id="sidebar"
      className="fixed left-0 top-0 z-40 h-screen w-64 transition-transform"
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
          <svg
            className="h-5 w-5 lucide lucide-command"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <span className="ml-3 text-base font-semibold">WA Gateway</span>
        </div>
        <ul className="space-y-4 text-sm font-medium">
          <li>
            <Link
              href="/dashboard"
              className={`${
                params === "/dashboard"
                  ? "bg-orange-300 rounded-md"
                  : "hover:bg-slate-100"
              } flex items-center rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lucide lucide-home"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="ml-3 flex-1 whitespace-nowrap">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/widget"
              className={`${
                params === "/widget"
                  ? "bg-orange-300 rounded-md"
                  : "hover:bg-slate-100"
              } flex items-center rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lucide lucide-home"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="ml-3 flex-1 whitespace-nowrap">Widget</span>
            </Link>
          </li>
          <li>
            <Link
              href="/chart"
              className={`${
                params === "/chart"
                  ? "bg-orange-300 rounded-md"
                  : "hover:bg-slate-100"
              } flex items-center rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lucide lucide-home"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="ml-3 flex-1 whitespace-nowrap">Chart Js</span>
            </Link>
          </li>
          <li>
            <Link
              href="/button"
              className={`${
                params === "/button"
                  ? "bg-orange-300 rounded-md"
                  : "hover:bg-slate-100"
              } flex items-center rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lucide lucide-home"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="ml-3 flex-1 whitespace-nowrap">Button</span>
            </Link>
          </li>
          <li>
            <Link
              href="/navbar"
              className={`${
                params === "/navbar"
                  ? "bg-orange-300 rounded-md"
                  : "hover:bg-slate-100"
              } flex items-center rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lucide lucide-home"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="ml-3 flex-1 whitespace-nowrap">Navbar</span>
            </Link>
          </li>
          <li>
            <Link
              href="/toast"
              className={`${
                params === "/toast"
                  ? "bg-orange-300 rounded-md"
                  : "hover:bg-slate-100"
              } flex items-center rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lucide lucide-home"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="ml-3 flex-1 whitespace-nowrap">Toast</span>
            </Link>
          </li>
          <li>
            <Link
              href="/table"
              className={`${
                params === "/table"
                  ? "bg-orange-300 rounded-md"
                  : "hover:bg-slate-100"
              } flex items-center rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lucide lucide-home"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="ml-3 flex-1 whitespace-nowrap">Tables</span>
            </Link>
          </li>
          <li>
            <Link
              href="/card"
              className={`${
                params === "/card"
                  ? "bg-orange-300 rounded-md"
                  : "hover:bg-slate-100"
              } flex items-center rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lucide lucide-users"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="ml-3 flex-1 whitespace-nowrap">Card</span>
            </Link>
          </li>
          <li className={params === "/form" ? "bg-orange-300 rounded-md" : ""}>
            <Link
              href="/form"
              className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lucide lucide-package"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16.5 9.4 7.55 4.24" />
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" x2="12" y1="22" y2="12" />
              </svg>
              <span className="ml-3 flex-1 whitespace-nowrap">Form</span>
            </Link>
          </li>
        </ul>
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
      </div>
    </aside>
  );
};
