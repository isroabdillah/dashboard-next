import { Pills } from "@/components/Badges/pills";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Banner } from "@/components/Cards/banner";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative"
          id="parent"
        >
          <h1 className="text-lg font-medium">Badges</h1>
          <Breadcrumbs currentPage="Badges" />
        </div>

        <div className="py-4">
          <Banner
            title="Badges"
            text="Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."
          />
        </div>

        <div className=" pt-4">
        <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
          Badges
        </h4>
        <div className="p-6 bg-white rounded-lg lg:w-full">
          <p className="pb-4 font-medium text-[13px] border-b-[1px] border-zinc-300 text-[#FF5959]">
            Styles
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Pills/>
          <Pills />
          </div>
        </div>
      </div>


      </div>
    </LayoutAdmin>
  );
}
