"use client";

import React from "react";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import { Forms } from "@/components/Forms/page";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Banner } from "@/components/Cards/banner";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">
        <div
          className="flex flex-col items-start p-[25px] bg-white rounded-lg relative "
          id="parent"
        >
          <h1 className="text-xl font-medium">Form</h1>
          <Breadcrumbs currentPage="Form" />
        </div>

        <div className="pt-4">
          <Banner
            title="Form"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Form{" "}
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <div className="lg:w-full md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                    <Forms />
                  </div>
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { Forms } from "@/components/Forms/page";

<div className="lg:w-full md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <Forms />
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
