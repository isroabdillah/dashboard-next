"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import { Charts } from "@/components/Charts";
import { Chart2 } from "@/components/Charts/chart2";
import { Chart3 } from "@/components/Charts/chart3";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";

export default function Chart() {
  return (
    <LayoutAdmin>
      <div
        className="flex flex-col items-start p-[25px] bg-white rounded-lg relative mx-4"
        id="parent"
      >
        <h1 className="text-xl font-medium">Chart</h1>
        <Breadcrumbs currentPage="Chart" />
      </div>
      <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col gap-x-4 mx-4">
        <div className="w-full lg:w-1/4 bg-white rounded-2xl p-4">
          <Chart2/>
        </div>
        <div className="w-full lg:w-1/4 bg-white rounded-2xl p-4">
          <Charts />
        </div>
        <div className="w-full lg:w-2/4 bg-white rounded-2xl p-4">
          <Chart3/>
        </div>
      </div>
    </LayoutAdmin>
  );
}
