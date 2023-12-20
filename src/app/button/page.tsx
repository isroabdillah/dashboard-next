"use client";

import React from "react";

import { FaHome } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Buttons from "@/components/Buttons";
import Breadcrumbs from "@/components/Breadcrumbs";

const handleClick = () => {
  console.log("Tombol diklik!");
};

export default function page() {
  return (
    <LayoutAdmin>
      <div
        className="flex flex-col items-start p-[18px] bg-white rounded-lg relative mx-4"
        id="parent"
      >
        <h1 className="text-lg font-medium">Button</h1>
        <Breadcrumbs currentPage="Button" />
      </div>

      <div className="flex flex-wrap gap-4 ml-4">
        <div className=" p-6 bg-white rounded-xl lg:w-fit">
          <h5 className="mb-4 font-regular">Styles</h5>
          <div className="flex gap-x-4 ">
            <Buttons
              typeButton="primary"
              title="Button"
              onClickAction={handleClick}
            />

            <Buttons
              typeButton="secondary"
              title="Button icon"
              onClickAction={handleClick}
              icon={FaHome}
            />

            <Buttons
              typeButton="success"
              title=""
              onClickAction={handleClick}
              icon={FaCheck}
            />
          </div>
        </div>

        <div className=" p-6 bg-white rounded-xl lg:w-fit">
          <h5 className="mb-4 font-regular">Large Button Icon</h5>
          <div className="flex gap-x-4 pb-4">
            <Buttons
              typeButton="lg-primary"
              title="large button"
              onClickAction={handleClick}
            />

            <Buttons
              typeButton="lg-success"
              title="large icon button"
              onClickAction={handleClick}
              icon={FaCheck}
            />
          </div>
          <div className="flex gap-x-4 pt-4 border-t-2 border-zinc-100">
            <Buttons
              typeButton="full-success"
              title="block icon button"
              onClickAction={handleClick}
              icon={FaCheck}
            />
          </div>
        </div>
        <div className=" p-6 bg-white rounded-xl lg:w-fit">
          <h5 className="mb-4 font-regular">Button Colors</h5>
          <div className="flex gap-4  flex-wrap">
            <Buttons
              typeButton="primary"
              title="Primary"
              onClickAction={handleClick}
            />

            <Buttons
              typeButton="secondary"
              title="Secondary"
              onClickAction={handleClick}
            />

            <Buttons
              typeButton="success"
              title="Success"
              onClickAction={handleClick}
            />

            <Buttons
              typeButton="default"
              title="Default"
              onClickAction={handleClick}
            />

            <Buttons
              typeButton="invers-primary"
              title="Primary"
              onClickAction={handleClick}
            />

            <Buttons
              typeButton="invers-secondary"
              title="Secondary"
              onClickAction={handleClick}
            />

            <Buttons
              typeButton="invers-success"
              title="Success"
              onClickAction={handleClick}
            />

            <Buttons
              typeButton="invers-default"
              title="Default"
              onClickAction={handleClick}
            />
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
