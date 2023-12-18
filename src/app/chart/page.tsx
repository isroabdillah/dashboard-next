"use client";

import { Charts } from "@/components/Charts";
import { Chart2 } from "@/components/Charts/chart2";
import { Chart3 } from "@/components/Charts/chart3";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";

export default function Chart() {
  return (
    <LayoutAdmin>
      <div className="flex gap-x-4 mx-4">
        <div className="w-1/4 bg-white rounded-2xl p-4">
          <Chart2/>
        </div>
        <div className="w-1/4 bg-white rounded-2xl p-4">
          <Charts />
        </div>
        <div className="w-2/4 bg-white rounded-2xl p-4">
          <Chart3/>
        </div>
      </div>
    </LayoutAdmin>
  );
}
