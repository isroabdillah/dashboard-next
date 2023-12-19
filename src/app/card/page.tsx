import Breadcrumbs from "@/components/Breadcrumbs";
import { Card } from "@/components/Cards";
import { Feature } from "@/components/Cards/feature";
import { Quote } from "@/components/Cards/quote";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";

export default function page() {
  return (
    <LayoutAdmin>
      <div
        className="flex flex-col items-start p-[25px] bg-white rounded-lg relative mx-4"
        id="parent"
      >
        <h1 className="text-xl font-medium">Card</h1>
        <Breadcrumbs currentPage="Card" />
      </div>

      <div className="flex gap-3 m-4">
        <Card />
        <Quote />
        <Feature />
      </div>
    </LayoutAdmin>
  );
}
