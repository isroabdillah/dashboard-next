"use client";

import React from "react";
import Buttons from "@/components/Buttons";

const handleClick = () => {
  console.log("Tombol diklik!");
};

export const Modal3 = () => {
  return (
    <section className="rounded-xl bg-white shadow-sm">
      <div className="p-6 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#FF5959]">
          Your order is on the way
        </p>

        <h2 className="mt-6 text-3xl font-bold">
          Thanks for your purchase, we're getting it ready!
        </h2>

        <a
          className="mt-8 inline-block w-full rounded-full bg-[#FF5959] py-4 text-sm font-bold text-white shadow-md"
          href=""
        >
          Track Order
        </a>
      </div>
    </section>
  );
};
