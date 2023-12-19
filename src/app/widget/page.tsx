import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Buttons";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import { Widget1 } from "@/components/widget/widget1";
import { Widget2 } from "@/components/widget/widget2";
import { Widget3 } from "@/components/widget/widget3";
import React from "react";

const handleClick = () => {
  console.log("Tombol diklik!");
};
export default function Widget() {
  return (
    <LayoutAdmin>
      <div
        className="flex flex-col items-start p-[25px] bg-white rounded-lg relative mx-4"
        id="parent"
      >
        <h1 className="text-xl font-medium">Widget</h1>
        <Breadcrumbs currentPage="Widget" />
      </div>
      <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col gap-x-4 mx-4">
        <Widget1 />
        <Widget2 />
        <Widget3 />
      </div>
    </LayoutAdmin>
  );
}
