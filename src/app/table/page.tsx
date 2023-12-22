"use client";

import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";
import { column, isi } from "../../utils/data";
import Table from "@/components/Table";
import Breadcrumbs from "@/components/Breadcrumbs";
import { List } from "@/components/Table/list";
import { Task } from "@/components/Table/task";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";

import { Banner } from "@/components/Cards/banner";

export default function page() {
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
            children={
              <div id="design">
                <Table header={column} isian={isi} />
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { column, isi } from "../../utils/data";
import Table from "@/components/Table";

<Table header={column} isian={isi} />`}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        <div className="pt-4 mt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            List
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <div className="lg:w-5/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                    <List />
                  </div>
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { List } from "@/components/Table/list";

<div className="lg:w-5/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <List />
</div>`}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        <div className="pt-4 mt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Task
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <div className="lg:w-7/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                    <Task />
                  </div>
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { List } from "@/components/Table/Task";

<div className="lg:w-5/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <Task />
</div>`}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        {/* <Table header={column} isian={isi} />
        <div className="lg:flex lg:flex-row lg:w-full gap-4 md:flex-col">
          <div className="lg:w-5/12 w-full h-100">
            <List />
          </div>
          <div className="lg:w-7/12 w-full h-100">
            <Task />
          </div>
        </div> */}
      </div>
    </LayoutAdmin>
  );
}
