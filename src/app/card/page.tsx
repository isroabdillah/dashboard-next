import Breadcrumbs from "@/components/Breadcrumbs";
import { Card } from "@/components/Cards";
import { Feature } from "@/components/Cards/feature";
import { Quote } from "@/components/Cards/quote";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";
import { Banner } from "@/components/Cards/banner";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto pb-4">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative"
          id="parent"
        >
          <h1 className="text-lg font-medium">Card</h1>
          <Breadcrumbs currentPage="Card" />
        </div>

        <div className="mt-4 ">
          <Banner
            title="Cards"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
          />
        </div>

        <div className="lg:flex lg:flex-row w-full gap-4 flex-col mt-4 space-y-4 lg:space-y-0">
          <div className="lg:w-4/12 w-full">
            <Card />
          </div>
          <div className="lg:w-4/12 w-full">
            <Quote />
          </div>
          <div className="lg:w-4/12 w-full">
            <Feature />
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
