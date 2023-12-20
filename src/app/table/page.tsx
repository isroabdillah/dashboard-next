import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";
import { column, isi } from "../../utils/data";
import Table from "@/components/Table";
import Breadcrumbs from "@/components/Breadcrumbs";
import { List } from "@/components/Table/list";
import { Task } from "@/components/Table/task";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">

      <div
        className="flex flex-col items-start p-[18px] bg-white rounded-lg relative"
        id="parent"
      >
        <h1 className="text-lg font-medium">Table</h1>
        <Breadcrumbs currentPage="Table" />
      </div>

      <Table header={column} isian={isi} />
      <div className="lg:flex lg:flex-row lg:w-full gap-4 md:flex-col">
        <div className="lg:w-5/12 w-full h-100">
          <List />
        </div>
        <div className="lg:w-7/12 w-full h-100">
          <Task />
        </div>
      </div>
      </div>
    </LayoutAdmin>
  );
}
