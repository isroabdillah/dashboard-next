"use client";

import { Alertss } from "@/components/Alerts/Alertss";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Banner } from "@/components/Cards/banner";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";

import React from "react";

export default function Alerts() {
  return (
    <LayoutAdmin>
      <div className="px-4 mx-auto">
        <div
          className="flex flex-col items-start p-[18px] bg-white rounded-lg relative my-4"
          id="parent"
        >
          <h1 className="text-lg font-medium">Alerts</h1>
          <Breadcrumbs currentPage="Button" />
        </div>

        <div className="my-4">
          <Banner
            title="Alerts"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia nam. Perspiciatis laudantium libero necessitatibus!"
          />
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Alerts 1
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                childrenCode=
                {
                  <CopyBlock
                    language="jsx"
                    theme={dracula}
                    text={`import { Alertss } from "@/components/Alerts/Alertss";

<div className="lg:w-full md:w-full h-100 p-2 flex mt-4 flex-wrap gap-4 rounded-xl border-2 border-zinc-100">
  <Alertss
    type="success"
    title="Success!"
    message="Operation completed successfully."
  />

  <Alertss
    type="warning"
    title="Warning!"
    message="Operation completed successfully."
  />
  <Alertss
    type="danger"
    title="Danger!"
    message="Operation completed successfully."
  />

  <Alertss
    type="info"
    title="Info!"
    message="Operation completed successfully."
  />
</div>`}
                    codeBlock
                    showLineNumbers={true}
                  />
                }
              </div>
            }
          >
            <div id="design">
              <div className="flex lg:flex-row lg:space-y-0 space-y-4 flex-col mt-4">
                <div className="lg:w-full md:w-full h-100 p-2 flex mt-4 flex-wrap gap-4 rounded-xl border-2 border-zinc-100">
                  <Alertss
                    type="success"
                    title="Success!"
                    message="Operation completed successfully."
                  />

                  <Alertss
                    type="warning"
                    title="Warning!"
                    message="Operation completed successfully."
                  />
                  <Alertss
                    type="danger"
                    title="Danger!"
                    message="Operation completed successfully."
                  />

                  <Alertss
                    type="info"
                    title="Info!"
                    message="Operation completed successfully."
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
