import Breadcrumbs from "@/components/Breadcrumbs";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import { Widget1 } from "@/components/widget/widget1";
import { Widget2 } from "@/components/widget/widget2";
import { Widget3 } from "@/components/widget/widget3";
import { Widget4 } from "@/components/widget/widget4";
import { Widget5 } from "@/components/widget/widget5";
import { Widget6 } from "@/components/widget/widget6";
import { Widget7 } from "@/components/widget/widget7";
import React from "react";
import { Banner } from "@/components/Cards/banner";

export default function Widget() {
  return (
    <LayoutAdmin>
      <div className="mx-auto px-4 space-y-4">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative"
          id="parent"
        >
          <h1 className="text-lg font-medium">Widget</h1>
          <Breadcrumbs currentPage="Widget" />
        </div>

        <Banner
            title="Widget"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
          />

        <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col gap-4">
          <Widget1 />
          <div className="flex flex-col lg:w-6/12 gap-y-4">
            <Widget2 />
            <Widget3 />
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:w-full gap-4 md:flex-col ">
          <div className="lg:w-5/12 md:w-full h-100 flex flex-col justify-between gap-4">
            <Widget4 />
            <Widget5 />
          </div>
          <div className="lg:w-2/12 md:w-full h-100 my-4 lg:my-0">
            <Widget6 />
          </div>
          <div className="lg:w-5/12 md:w-full h-100 my-4 lg:my-0">
            <Widget7 />
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
