"use client";

import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";
import { column, isi } from "../../utils/data";
import Table from "@/components/Table";
import Breadcrumbs from "@/components/Breadcrumbs";
import List from "@/components/Table/list";
import Task from "@/components/Table/task";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";

import { Banner } from "@/components/Cards/banner";
import { Footers } from "@/components/Footers/footers";

export default function page() {
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

        <div className="pt-4">
          <Banner
            title="Tables"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
          />
        </div>

        <div className="pt-4 mt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Table 1
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import Table from "@/components/Table";

let column = [
  {
    name: "",
  },
  {
    name: "receiver",
  },
  {
    name: "user status",
  },
  {
    name: "message",
  },
  {
    name: "status",
  },
];

let isi = [
  {
    nama: "Isro Abdillah",
    phone: "0813175714",
    userStatus: "active",
    lastLogin: "14/DEC/2023",
    message: "lorem ipsum isro ganteng",
    status: "terkirim",
  },
  {
    nama: "Isro Abdillah",
    phone: "0813175714",
    userStatus: "nonactive",
    lastLogin: "14/DEC/2023",
    message: "lorem ipsum ",
    status: "terkirim",
  },
];

<Table header={column} isian={isi} />`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <Table header={column} isian={isi} />
            </div>
          </PlaceholderCard>
        </div>

        <div className="pt-4 mt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            List
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import List from "@/components/Table/list";
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

<div className="lg:w-5/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <List emails={emails} />
</div>`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                <div className="lg:w-5/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                  <List emails={emails} />
                </div>
              </div>
            </div>
          </PlaceholderCard>
        </div>

        <div className="pt-4 mt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Task
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import Task List from "@/components/Table/Task";

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

<div className="lg:w-5/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <Task tasks={tasks} />
</div>`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                <div className="lg:w-7/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                  <Task tasks={tasks} />
                </div>
              </div>
            </div>
          </PlaceholderCard>
        </div>
      </div>
    </LayoutAdmin>
  );
}
