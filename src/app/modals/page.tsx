"use client";

import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Banner } from "@/components/Cards/banner";
import React from "react";
import { Modal1 } from "@/components/modals";
import { Modal2 } from "@/components/modals/modal2";
import { Modal3 } from "@/components/modals/modal3";
import { Modal4 } from "@/components/modals/modal4";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";
import { Footers } from "@/components/Footers/footers";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative my-4"
          id="parent"
        >
          <h1 className="text-lg font-medium">Modals</h1>
          <Breadcrumbs currentPage="Modals" />
        </div>

        <div className="my-4">
          <Banner
            title="Modals"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia nam. Perspiciatis laudantium libero necessitatibus!"
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Modal 1
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import { Modal2 } from "@/components/modals/modal2";

<div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <Modal2
    title="New Message!"
    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?"
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
                <div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                  <Modal2
                    title="New Message!"
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?"
                  />
                </div>
              </div>
            </div>
          </PlaceholderCard>
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Modal 2
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import { Modal3 } from "@/components/modals/modal3";

<div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <Modal3
    title="Your order is on the way"
    subtitle="Thanks for your purchase, we're getting it ready!"
    buttonText="Track Order"
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
                <div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                  <Modal3
                    title="Your order is on the way"
                    subtitle="Thanks for your purchase, we're getting it ready!"
                    buttonText="Track Order"
                  />
                </div>
              </div>
            </div>
          </PlaceholderCard>
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Modal 3
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import { Modal4 } from "@/components/modals/modal4";

<div className="lg:w-6/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <Modal4
    imageSrc="/arkatama.jpeg"
    title="Judul Modal Lorem ipsum dolor sit amet consectetur."
    description="Deskripsi dari modal ini. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Voluptates, eos.  
    adipisci, illum amet itaque optio!"
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
                <div className="lg:w-6/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                  <Modal4
                    imageSrc="/arkatama.jpeg"
                    title="Judul Modal Lorem ipsum dolor sit amet consectetur."
                    description="Deskripsi dari modal ini. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates, eos.  
                      adipisci, illum amet itaque optio!"
                  />
                </div>
              </div>
            </div>
          </PlaceholderCard>
        </div>
      </div>
      <Footers/>
    </LayoutAdmin>
  );
}
