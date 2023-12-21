"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import { Chart1 } from "@/components/Charts";
import { Chart2 } from "@/components/Charts/chart2";
import { Chart3 } from "@/components/Charts/chart3";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";
import { Banner } from "@/components/Cards/banner";

export default function Chart() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative  "
          id="parent"
        >
          <h1 className="text-lg font-medium">Chart</h1>
          <Breadcrumbs currentPage="Chart" />
        </div>

        <div className="mt-4">
        <Banner
          title="Chart JS"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
        />
      </div>

        <div className="lg:flex lg:flex-row lg:w-full gap-4 md:flex-col">
          <div className="lg:w-3/12 md:w-full h-100 mt-4">
            <Chart2 />
          </div>
          <div className="lg:w-3/12 md:w-full h-100 mt-4">
            <Chart1 />
          </div>
          <div className="lg:w-6/12 md:w-full h-100 mt-4 mb-4 lg:mb-4">
            <Chart3 />
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
