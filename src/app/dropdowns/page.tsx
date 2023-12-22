"use client"

import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import { Banner } from "@/components/Cards/banner";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";

import React from "react";
import { Dropdown } from "@/components/Dropdown";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative  "
          id="parent"
        >
          <h1 className="text-lg font-medium">Dropdown</h1>
          <Breadcrumbs currentPage="Dropdown" />
        </div>

        <div className="mt-4">
          <Banner
            title="Dropdown"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Dropdown 1
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <div className="lg:w-4/12 md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100">
                    <Dropdown />
                  </div>
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { Dropdown } from "@/components/Dropdown";
                
<div className="lg:w-4/12 md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100">
  <Dropdown />
</div>`}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>
      </div>
    </LayoutAdmin>
  );
}
