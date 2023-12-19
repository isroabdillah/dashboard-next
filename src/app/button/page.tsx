"use client";

import React from "react";

import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Buttons from "@/components/Buttons";

const handleClick = () => {
  console.log("Tombol diklik!");
};

export default function page() {
  return (
    <LayoutAdmin>
      <div className="flex gap-x-4 ml-4">
        <div className=" p-6 bg-white rounded-xl lg:w-fit">
          <h5 className="mb-4 font-regular">Button</h5>
          <div className="flex gap-x-4 ">
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
          </div>
        </div>

        <div className=" p-6 bg-white rounded-xl lg:w-fit">
          <h5 className="mb-4 font-regular">Button Invers</h5>
          <div className="flex gap-x-4 ">
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
