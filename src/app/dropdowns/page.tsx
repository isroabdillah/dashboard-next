"use client";

import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import { Banner } from "@/components/Cards/banner";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";

import React, { useState } from "react";
import Dropdown, { DropdownItem } from "@/components/Dropdown";
import { Footers } from "@/components/Footers/footers";

export default function Page() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelect = (selectedValue: string) => {
    setSelectedValue(selectedValue);
    console.log("Nilai yang dipilih:", selectedValue);
  };

  const dropdownItems: DropdownItem[] = [
    { value: "light", label: "Arkatama Multisolusindo" },
    { value: "dark", label: "Digihub" },
    { value: "system", label: "Countama" },
  ];

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
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import { Dropdown } from "@/components/Dropdown";

const [selectedValue, setSelectedValue] = useState<string>(""); 
const handleSelect = (selectedValue: string) => {
  setSelectedValue(selectedValue);
  console.log("Nilai yang dipilih:", selectedValue);
};
const dropdownItems: DropdownItem[] = [
  { value: "light", label: "Arkatama Multisolusindo" },
  { value: "dark", label: "Digihub" },
  { value: "system", label: "Countama" },
];
                
<div className="lg:w-4/12 md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100">
  <Dropdown
    placeholder="Select an item"
    items={dropdownItems}
    onSelect={(selectedValue) => handleSelect(selectedValue)}
  />
</div>`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                <div className="lg:w-4/12 md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100">
                  <Dropdown
                    placeholder="Select an item"
                    items={dropdownItems}
                    onSelect={(selectedValue) => handleSelect(selectedValue)}
                  />
                </div>
              </div>
            </div>
          </PlaceholderCard>
        </div>
      </div>
    </LayoutAdmin>
  );
}
