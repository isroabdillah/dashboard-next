"use client";

import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card } from "@/components/Cards";
import { Feature } from "@/components/Cards/feature";
import { Quote } from "@/components/Cards/quote";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import React from "react";
import { Banner } from "@/components/Cards/banner";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto pb-4">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative"
          id="parent"
        >
          <h1 className="text-lg font-medium">Card</h1>
          <Breadcrumbs currentPage="Card" />
        </div>

        <div className="mt-4 ">
          <Banner
            title="Cards"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
          />
        </div>

        <div className="pt-4 mt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Card 1
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                    <Card
                      title="Card title"
                      description="Some quick example text to build on the card title and make up the bulk of the card's content."
                      imageSrc="/arkatama.jpeg"
                    />
                  </div>
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import Card from "@/components/Cards";

<div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <Card
    title="Card title"
    description="Some quick example text to build on the card title and make up the bulk of the card's content."
    imageSrc="/arkatama.jpeg"
  />
</div>`}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        <div className="pt-4 mt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Card quote
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                    <Quote
                      quoteText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                      famousPerson="Someone famous"
                      sourceTitle="Source Title"
                    />
                  </div>
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import Quote from "@/components/Quote";

<div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <Quote
    quoteText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
    famousPerson="Someone famous"
    sourceTitle="Source Title"
  />
</div>`}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        <div className="pt-4 mt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Card Feature
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
                    <Feature
                      title="Special title treatment"
                      description="With supporting text below as a natural lead-in to additional content."
                      date="2 days ago"
                    />
                  </div>
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import Feature from "@/components/Feature";

<div className="lg:w-4/12 md:w-full h-100 p-2 flex justify-center mt-4 rounded-xl border-2 border-zinc-100">
  <Feature
    title="Special title treatment"
    description="With supporting text below as a natural lead-in to additional content."
    date="2 days ago"
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
