"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import Buttons from "@/components/Buttons";
import Button from "@/components/Forms/Button";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Banner } from "@/components/Cards/banner";

export default function Toast() {
  const notify = () => toast("toast default");
  const success = () => toast.success("toast sukses");
  const error = () => toast.error("toast error");
  const custom = () =>
    toast.custom((t) => (
      <div
        className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
        role="alert"
      >
        <div className="flex items-center p-4">
          <div
            className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-red-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <p className="ms-3 text-sm text-gray-700 dark:text-gray-400">
            Action in progress
          </p>
        </div>
      </div>
    ));

  const notif = () =>
    toast.custom((t) => (
      <div
        className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
        role="alert"
      >
        <div className="flex p-4">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-gray-600 mt-1 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </div>
          <div className="ms-4">
            <h3 className="text-gray-800 font-semibold dark:text-white">
              notifications
            </h3>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </div>
            <div className="mt-4">
              <div className="flex space-x-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-red-800 dark:text-red-500 dark:focus:text-red-400"
                >
                  Don't allow
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-red-800 dark:text-red-500 dark:focus:text-red-400"
                >
                  Allow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <LayoutAdmin>
      <div
        className="flex flex-col items-start p-[18px] bg-white rounded-lg relative mx-4"
        id="parent"
      >
        <h1 className="text-lg font-medium">Toast</h1>
        <Breadcrumbs currentPage="Toast" />
      </div>

      <div className="px-4">
        <Banner
          title="Toast"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
        />
      </div>

      <div className="mx-4 pt-4 mb-4">
        <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
          Toasts
        </h4>
        <div className="p-6 bg-white rounded-lg lg:w-full">
          <p className="pb-4 font-medium text-[13px] border-b-[1px] border-zinc-300 text-[#FF5959]">
            Styles
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Buttons typeButton="full-soft-primary" title="Toast" onClickAction={notify} />

              <Buttons
                typeButton="full-soft-success"
                title="Success Toast"
                onClickAction={success}
              />

              <Buttons
                typeButton="full-soft-danger"
                title="Error Toast"
                onClickAction={error}
              />

              <Buttons
                typeButton="full-soft-info"
                title="Error custom"
                onClickAction={notif}
              />         
          </div>
        </div>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </LayoutAdmin>
  );
}
