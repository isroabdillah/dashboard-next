"use client";

import React from "react";

import { FaHome } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Buttons from "@/components/Buttons";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Banner } from "@/components/Cards/banner";
import { CopyBlock, dracula } from "react-code-blocks";
import { Footers } from "@/components/Footers/footers";

const handleClick = () => {
  console.log("Tombol diklik!");
};

export default function page() {
  return (
    <LayoutAdmin>
      <div
        className="flex flex-col items-start p-[18px] bg-white rounded-lg relative mx-4"
        id="parent"
      >
        <h1 className="text-lg font-medium">Button</h1>
        <Breadcrumbs currentPage="Button" />
      </div>

      <div className="px-4">
        <Banner
          title="Buttons"
          text="Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."
        />
      </div>

      <div className="mx-4 pt-4">
        <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
          Buttons
        </h4>
        <PlaceholderCard
          childrenCode={
            <div className="pt-4">
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import Buttons from "@/components/Buttons";
          
<div className="flex flex-wrap gap-4 pt-4 ">
  <Buttons
    typeButton="primary"
    title="Primary"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="secondary"
    title="Secondary"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="warning"
    title="Warning"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="danger"
    title="Danger"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="info"
    title="Info"
    onClickAction={handleClick}
  />
</div>`}
                codeBlock
                showLineNumbers={true}
              />
            </div>
          }
        >
          <div id="design">
            <div className="flex flex-wrap gap-4 pt-4 ">
              <Buttons
                typeButton="primary"
                title="Primary"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="secondary"
                title="Secondary"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="warning"
                title="Warning"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="danger"
                title="Danger"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="info"
                title="Info"
                onClickAction={handleClick}
              />
            </div>
          </div>
        </PlaceholderCard>
      </div>

      <div className="mx-4 pt-4">
        <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
          Ountine Buttons
        </h4>

        <PlaceholderCard
          childrenCode={
            <div className="pt-4">
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import Buttons from "@/components/Buttons";
          
<div className="flex flex-wrap gap-4 pt-4 ">
  <Buttons
    typeButton="ol-primary"
    title="Primary"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="ol-secondary"
    title="Secondary"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="ol-warning"
    title="Warning"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="ol-danger"
    title="Danger"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="ol-info"
    title="Info"
    onClickAction={handleClick}
  />
</div>`}
                codeBlock
                showLineNumbers={true}
              />
            </div>
          }
        >
          <div id="design">
            <div className="flex flex-wrap gap-4 pt-4 ">
              <Buttons
                typeButton="ol-primary"
                title="Primary"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="ol-secondary"
                title="Secondary"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="ol-warning"
                title="Warning"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="ol-danger"
                title="Danger"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="ol-info"
                title="Info"
                onClickAction={handleClick}
              />
            </div>
          </div>
        </PlaceholderCard>
      </div>

      <div className="mx-4 pt-4">
        <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
          Soft Buttons
        </h4>

        <PlaceholderCard
          childrenCode={
            <div className="pt-4">
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import Buttons from "@/components/Buttons";

<div className="flex flex-wrap gap-4 pt-4 ">
  <Buttons
    typeButton="soft-primary"
    title="Primary"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="soft-secondary"
    title="Secondary"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="soft-warning"
    title="Warning"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="soft-danger"
    title="Danger"
    onClickAction={handleClick}
  />

  <Buttons
    typeButton="soft-info"
    title="Info"
    onClickAction={handleClick}
  />
</div>`}
                codeBlock
                showLineNumbers={true}
              />
            </div>
          }
        >
          <div id="design">
            <div className="flex flex-wrap gap-4 pt-4 ">
              <Buttons
                typeButton="soft-primary"
                title="Primary"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="soft-secondary"
                title="Secondary"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="soft-warning"
                title="Warning"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="soft-danger"
                title="Danger"
                onClickAction={handleClick}
              />

              <Buttons
                typeButton="soft-info"
                title="Info"
                onClickAction={handleClick}
              />
            </div>
          </div>
        </PlaceholderCard>
      </div>
      <Footers/>
    </LayoutAdmin>
  );
}
