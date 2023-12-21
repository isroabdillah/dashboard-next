"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import { Widget1 } from "@/components/widget/widget1";
import { Widget2 } from "@/components/widget/widget2";
import { Widget3 } from "@/components/widget/widget3";
import { Widget4 } from "@/components/widget/widget4";
import { Widget5 } from "@/components/widget/widget5";
import { Widget6 } from "@/components/widget/widget6";
import { Widget7 } from "@/components/widget/widget7";
import React from "react";
import { Banner } from "@/components/Cards/banner";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Widget() {
  return (
    <LayoutAdmin>
      <div className="mx-auto px-4 space-y-4">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative"
          id="parent"
        >
          <h1 className="text-lg font-medium">Widget</h1>
          <Breadcrumbs currentPage="Widget" />
        </div>

        <Banner
          title="Widget"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, eos perferendis recusandae beatae velit!"
        />

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Buttons
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <Widget1 />
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={` 
import { Widget1 } from "@/components/widget/widget1";

<div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
  <Widget1 />
</div>
                `}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 2
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <Widget2 />
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { Widget2 } from "@/components/widget/widget2";

<div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
  <Widget2 />
</div>
                `}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 3
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <Widget3 />
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { Widget3 } from "@/components/widget/widget2";
                
<div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
  <Widget3 />
</div>
                `}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 4
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <Widget4 />
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { Widget4 } from "@/components/widget/widget2";
                
<div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
  <Widget4 />
</div>
                `}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 5
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <Widget5 />
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { Widget5 } from "@/components/widget/widget2";
                
<div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
  <Widget5 />
</div>
                `}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 6
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <Widget6 />
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { Widget6 } from "@/components/widget/widget2";
                
<div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
  <Widget6 />
</div>
                `}
                codeBlock
                showLineNumbers={true}
              />
            }
          />
        </div>

        <div className="pt-4 pb-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 7
          </h4>
          <PlaceholderCard
            children={
              <div id="design">
                <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                  <Widget7 />
                </div>
              </div>
            }
            childrenCode={
              <CopyBlock
                language="jsx"
                theme={dracula}
                text={`import { Widget7 } from "@/components/widget/widget2";
                
<div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
  <Widget7 />
</div>
                `}
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
