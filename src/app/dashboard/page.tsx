import React from "react";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import { Table } from "@/components/Table";

export default function Dashboard() {
  return (
    <LayoutAdmin>
      <div className="flex flex-col items-start p-[25px] bg-white mx-6 rounded-lg">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <p>
          Dashboard <span> / </span> Admin
        </p>
      </div>

      <Table />
    </LayoutAdmin>
  );
}
