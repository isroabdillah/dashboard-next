"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Widget1 from "@/components/widget/widget1";
import Widget2 from "@/components/widget/widget2";
import Widget3 from "@/components/widget/widget3";
import Widget4 from "@/components/widget/widget4";
import Widget5 from "@/components/widget/widget5";
import Widget6 from "@/components/widget/widget6";
import Widget7 from "@/components/widget/widget7";
import React from "react";
import { Banner } from "@/components/Cards/banner";
import PlaceholderCard from "@/components/Cards/placeholderCard";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Widget() {
  const avatars = [
    "/avatar.png",
    "/avatar-2.png",
    "/avatar.png",
    "/avatar-2.png",
  ];

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
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={` 
import { Widget1 } from "@/components/widget/widget1";

<div className="lg:w-5/12 md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
<Widget1
  name="Isro Abdillah"
  role="Mahasiswa"
  location="Malang"
  following={392}
  followers={41000}
  tweets={8020}
  imageSrc="/isro.png" // Contoh path gambar, sesuaikan dengan path gambar yang benar
/>
</div>`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <div className="lg:w-5/12 md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
                <Widget1
                  name="Isro Abdillah"
                  role="Mahasiswa"
                  location="Malang"
                  following={392}
                  followers={41000}
                  tweets={8020}
                  imageSrc="/isro.png" // Contoh path gambar, sesuaikan dengan path gambar yang benar
                />
              </div>
            </div>
          </PlaceholderCard>
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 2
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import { Widget2 } from "@/components/widget/widget2";

<div className="lg:max-w-md md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
  <Widget2
    count={99}
    text="Projects"
  />
</div>`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <div className="lg:max-w-md md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
                <Widget2 count={99} text="Projects" />
              </div>
            </div>
          </PlaceholderCard>
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 3
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import { Widget3 } from "@/components/widget/widget2";
                
<div className="lg:max-w-sm md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
  <Widget3
    name="Mie Jebbew" 
    imageUrl="/isro.png" 
    rating={4.5} 
    price="Rp.18.000" 
  />
</div>`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <div className="lg:max-w-sm md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
                <Widget3
                  name="Mie Jebbew"
                  imageUrl="/isro.png"
                  rating={4.5}
                  price="Rp.18.000"
                />
              </div>
            </div>
          </PlaceholderCard>
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 4
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import { Widget4 } from "@/components/widget/widget2";
                
<div className="lg:max-w-md md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
  <Widget4
    avatarSrc="/Avatar-Profile-1.png" 
    name="Arkatama Multi" 
    date="4 Days Ago"  
    age={27}
  />
</div>`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <div className="lg:max-w-md md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
                <Widget4
                  avatarSrc="/Avatar-Profile-1.png"
                  name="Arkatama Multi"
                  date="4 Days Ago"
                  age={27}
                />
              </div>
            </div>
          </PlaceholderCard>
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 5
          </h4>
          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import { Widget5 } from "@/components/widget/widget2";
                
<div className="lg:max-w-md md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
  <Widget5
    iconSrc="/icon-1.svg"
    title="International Design Competition"
    date="23/02/2023"
  />
</div>`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <div className="lg:max-w-md md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
                <Widget5
                  iconSrc="/icon-1.svg"
                  title="International Design Competition"
                  date="23/02/2023"
                />
              </div>
            </div>
          </PlaceholderCard>
        </div>

        <div className="pt-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 6
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import { Widget6 } from "@/components/widget/widget2";
                
<div className="lg:max-w-md md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
  <Widget6
    iconSrc="/icon-2.svg" 
    text="Revenue this month"
    amount="$1030,32" 
  />
</div>`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <div className="lg:max-w-xs md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
                <Widget6
                  iconSrc="/icon-2.svg"
                  text="Revenue this month"
                  amount="$1030,32"
                />
              </div>
            </div>
          </PlaceholderCard>
        </div>

        <div className="pt-4 pb-4">
          <h4 className="mb-5 text-gray-900 font-semibold text-[18px] ">
            Widget 7
          </h4>

          <PlaceholderCard
            childrenCode={
              <div className="pt-4">
                <CopyBlock
                  language="jsx"
                  theme={dracula}
                  text={`import { Widget7 } from "@/components/widget/widget2";
const avatars = ["/avatar.png", "/avatar-2.png", "/avatar.png", "/avatar-2.png"];
                
<div className="lg:max-w-xs md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
  <Widget7
    eventTitle="Design Competition" 
    eventTime="11 PM - 12 PM" 
    avatars={avatars} 
    location="Indonesia"
  />
</div>`}
                  codeBlock
                  showLineNumbers={true}
                />
              </div>
            }
          >
            <div id="design">
              <div className="lg:max-w-md md:w-full h-100 mt-4 rounded-xl border-2 border-zinc-100 p-1">
                <Widget7
                  eventTitle="Design Competition"
                  eventTime="11 PM - 12 PM"
                  avatars={avatars}
                  location="Indonesia"
                />
              </div>
            </div>
          </PlaceholderCard>
        </div>
      </div>
    </LayoutAdmin>
  );
}
