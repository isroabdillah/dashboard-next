"use client";

import React from "react";
import { Banner } from "@/components/Cards/banner";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Navbars } from "@/components/Navbar";
import { Navbar2 } from "@/components/Navbar/navbar2";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative  "
          id="parent"
        >
          <h1 className="text-lg font-medium">Navbar</h1>
          <Breadcrumbs currentPage="Navbar" />
        </div>

        <div className="mt-4">
          <Banner
            title="Navbar"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Navbar 2
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <div className="lg:w-full md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                    <Navbar2
                      logoSrc="/icon-arkatama.png"
                      menuItems={[
                        "Products",
                        "Marketplace",
                        "Partners",
                        "Pricing",
                      ]}
                      signInText="Sign in"
                      signUpText="Sign up"
                    />
                  </div>
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { Navbar2 } from "@/components/Navbar/navbar2";

<div className="lg:w-full md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <Navbar2
    logoSrc="/icon-arkatama.png"
    menuItems={[
      "Products",
      "Marketplace",
      "Partners",
      "Pricing",
    ]}
    signInText="Sign in"
    signUpText="Sign up"
  />
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
