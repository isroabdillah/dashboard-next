"use client";

import React from "react";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Table from "@/components/Table";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {column, isi} from "../../utils/data";

export default function Dashboard() {

  return (
    <LayoutAdmin>
      <div className="flex flex-col items-start mt-4 p-[25px] bg-white mx-6 rounded-lg">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <Breadcrumbs/>
      </div>

      <Table header={column} isian={isi}/>
    </LayoutAdmin>
  );
}
