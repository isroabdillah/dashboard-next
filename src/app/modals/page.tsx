import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Banner } from "@/components/Cards/banner";
import React from "react";
import { Modal1 } from "@/components/modals";
import { Modal2 } from "@/components/modals/modal2";
import { Modal3 } from "@/components/modals/modal3";
import { Modal4 } from "@/components/modals/modal4";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative my-4"
          id="parent"
        >
          <h1 className="text-lg font-medium">Modals</h1>
          <Breadcrumbs currentPage="Modals" />
        </div>

        <div className="my-4">
          <Banner
            title="Modals"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia nam. Perspiciatis laudantium libero necessitatibus!"
          />
        </div>

        <div className="lg:flex lg:flex-row w-full gap-4 flex-col mt-4 space-y-4 lg:space-y-0 mb-4">
          <div className="lg:w-4/12 w-full">
            <Modal2 />
          </div>
          <div className="lg:w-3/12 w-full">
            <Modal3/>
          </div>
          <div className="lg:w-5/12 w-full">
            <Modal4/>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
