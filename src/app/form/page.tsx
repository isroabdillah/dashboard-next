import React from "react";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import { Forms } from "@/components/Forms/page";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Banner } from "@/components/Cards/banner";

export default function page() {
  return (
    <LayoutAdmin>
      <div
        className="flex flex-col items-start p-[25px] bg-white rounded-lg relative mx-4"
        id="parent"
      >
        <h1 className="text-xl font-medium">Form</h1>
        <Breadcrumbs currentPage="Form" />
      </div>

      <div className="px-4">
        <Banner
          title="Form"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
        />
      </div>

      <div className="pb-4 m-4">
        <Forms />
      </div>
    </LayoutAdmin>
  );
}
