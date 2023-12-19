import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";
import { column, isi } from "../../utils/data";
import Table from "@/components/Table";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function page() {
  return (
    <LayoutAdmin>
      <div
        className="flex flex-col items-start p-[25px] bg-white rounded-lg relative mx-4"
        id="parent"
      >
        <h1 className="text-xl font-medium">Table</h1>
        <Breadcrumbs currentPage="Table" />
      </div>
      <Table header={column} isian={isi} />
    </LayoutAdmin>
  );
}
