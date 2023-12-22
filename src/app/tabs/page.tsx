"use client";

import { Tabs } from "@/components/Tabs";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Banner } from "@/components/Cards/banner";
import React from "react";
import { Tab2 } from "@/components/Tabs/tab2";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative my-4"
          id="parent"
        >
          <h1 className="text-lg font-medium">Tabs</h1>
          <Breadcrumbs currentPage="Button" />
        </div>

        <div className="my-4">
          <Banner
            title="Tabs"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia nam. Perspiciatis laudantium libero necessitatibus!"
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Tab 1
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <div className="lg:w-full md:w-full h-100 p-2 flex justify-start pl-4 mt-4 rounded-xl border-2 border-zinc-100">
                    <Tab2 />
                  </div>
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { Tab2 } from "@/components/Tabs/tab2";

<div className="lg:w-full md:w-full h-100 p-2 flex justify-start pl-4 mt-4 rounded-xl border-2 border-zinc-100">
  <Tab2 />
</div>`}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        {/* <div className=" pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Tabs
          </h4>
          <div className="p-6 bg-white rounded-lg lg:w-full md:w-fit">
            <p className="pb-4 font-medium text-[13px] border-b-[1px] border-zinc-300 text-[#FF5959]">
              Styles
            </p>
            <div className="flex flex-wrap gap-4 pt-4 ">
              <Tab2/>
            </div>
          </div>
        </div> */}
      </div>
    </LayoutAdmin>
  );
}
