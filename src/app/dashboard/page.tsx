"use client";

import Image from "next/image";
import React, { useState } from "react";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Table from "@/components/Table";
import Breadcrumbs from "@/components/Breadcrumbs";
import { column, isi } from "../../utils/data";
import Button from "@/components/Forms/Button";
import Alert from "@/components/Alerts";

import toast, { Toaster } from "react-hot-toast";
import Buttons from "@/components/Buttons";
import { Welcome } from "@/components/Cards/welcome";
import { Widget4 } from "@/components/widget/widget4";
import { Widget5 } from "@/components/widget/widget5";
import { Widget6 } from "@/components/widget/widget6";
import { Widget7 } from "@/components/widget/widget7";
import { List } from "@/components/Table/list";
import { Task } from "@/components/Table/task";

const handleClick = () => {
  console.log("Tombol diklik!");
};

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseAlert = () => {
    setIsOpen(!isOpen);
  };

  const notify = () => toast("Here is your toast.");

  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">
        <Alert
          isOpen={isOpen}
          title="eyy!"
          message="000!"
          onClose={handleCloseAlert}
        />

        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative"
          id="parent"
        >
          <h1 className="text-lg font-medium">Dashboard</h1>
          <Breadcrumbs currentPage="Admin" />
        </div>

        <Welcome />

        <div className="flex lg:w-full gap-6">
          <div className="w-5/12 h-100 flex flex-col justify-between">
            <Widget4 />
            <Widget5 />
          </div>
          <div className="w-2/12 h-100">
            <Widget6 />
          </div>
          <div className="w-5/12 h-100">
            <Widget7 />
          </div>
        </div>

        <div className="flex lg:w-full gap-6 mb-6">
          <div className="w-5/12 h-100">
            <List />
          </div>
          <div className="w-7/12 h-100">
            <Task />
          </div>
        </div>

        {/* <Table header={column} isian={isi} /> */}

        {/* <Button typeButton="default" title="button" onClickAction={handleCloseAlert}/>
      <Button typeButton="primary" title="TOAST" onClickAction={notify}/> */}
        <Toaster />
      </div>
    </LayoutAdmin>
  );
}
