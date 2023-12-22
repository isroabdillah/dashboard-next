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
import Widget4 from "@/components/widget/widget4";
import Widget5 from "@/components/widget/widget5";
import Widget6 from "@/components/widget/widget6";
import Widget7 from "@/components/widget/widget7";
import List from "@/components/Table/list";
import Task from "@/components/Table/task";
import { Chart2 } from "@/components/Charts/chart2";
import { Chart1 } from "@/components/Charts";
import { Chart3 } from "@/components/Charts/chart3";

const handleClick = () => {
  console.log("Tombol diklik!");
};

const avatars = [
  "/avatar.png",
  "/avatar-2.png",
  "/avatar.png",
  "/avatar-2.png",
];
const tasks = [
  {
    id: 1,
    title: "UI",
    startDate: "23/02/2023",
    endDate: "27/02/2023",
    status: "Success",
  },
  {
    id: 2,
    title: "UX",
    startDate: "25/02/2023",
    endDate: "01/03/2023",
    status: "In Progress",
  },
  {
    id: 3,
    title: "UIUX",
    startDate: "23/02/2023",
    endDate: "27/02/2023",
    status: "Success",
  },
];

const emails = [
  {
    avatarSrc: "/Avatar-Profile-1.png",
    authorName: "Arkatama Multi",
    emailContent: "Revenue is the income that...",
    time: "10.00 PM",
  },
  {
    avatarSrc: "/Avatar-Profile-1.png",
    authorName: "Arkatama Multi",
    emailContent: "Revenue is the income that...",
    time: "10.00 PM",
  },
];

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

        <div className="lg:flex lg:flex-row lg:w-full gap-4 md:flex-col ">
          <div className="lg:w-4/12 md:w-full h-100 flex flex-col justify-between gap-4">
            <Widget4
              avatarSrc="/Avatar-Profile-1.png"
              name="Arkatama Multi"
              date="4 Days Ago"
              age={27}
            />
            <Widget5
              iconSrc="/icon-1.svg"
              title="International Design Competition"
              date="23/02/2023"
            />
          </div>
          <div className="lg:w-3/12 md:w-full h-100 my-4 lg:my-0">
            <Widget6
              iconSrc="/icon-2.svg"
              text="Revenue this month"
              amount="$1030,32"
            />
          </div>
          <div className="lg:w-4/12 md:w-full h-100 my-4 lg:my-0">
            <Widget7
              eventTitle="Design Competition"
              eventTime="11 PM - 12 PM"
              avatars={avatars}
              location="Indonesia"
            />
          </div>
        </div>

        <div className="lg:flex lg:flex-row w-full gap-4 flex-col mt-4 space-y-4 lg:space-y-0">
          <div className="lg:w-3/12 w-full">
            <Chart2 />
          </div>
          <div className="lg:w-3/12 w-full">
            <Chart1 />
          </div>
          <div className="lg:w-6/12 w-full">
            <Chart3 />
          </div>
        </div>

        <div className="lg:flex lg:flex-row lg:w-full gap-4 md:flex-col my-4">
          <div className="lg:w-5/12 w-full h-100">
            <List emails={emails} />
          </div>
          <div className="lg:w-7/12 w-full h-100 mt-4 lg:mt-0">
            <Task tasks={tasks} />
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
