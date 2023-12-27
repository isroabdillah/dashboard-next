"use client";

import React from "react";
import { Banner } from "@/components/Cards/banner";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Breadcrumbs from "@/components/Breadcrumbs";
import Spinners from "@/components/spinners";
import { Footers } from "@/components/Footers/footers";

export default function Spinner() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative  "
          id="parent"
        >
          <h1 className="text-lg font-medium">Spinner</h1>
          <Breadcrumbs currentPage="Spinner" />
        </div>

        <div className="mt-4">
          <Banner
            title="Spinner"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Spiner
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import { Spinners } from "@/components/spinners";

<div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <Spinners size={50} color="#FF5959;" /> 
</div>`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                <div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                  <Spinners size={50} color="#FF5959;" />
                </div>
              </div>
            </div>
          </PlaceholderCard>
        </div>
      </div>
      <div className="p-6"></div>
    </LayoutAdmin>
  );
}
