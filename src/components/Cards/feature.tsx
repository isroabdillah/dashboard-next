"use client"

import React from "react";
import Button from "../Forms/Button";

export const Feature = () => {
  return (
    <div className="block rounded-lg max-h-80 bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        Featured
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Special title treatment
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Button
          typeButton="primary"
          title="Button"
          onClickAction={() => console.log('Tombol diklik!')}
        />
      </div>
      <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        2 days ago
      </div>
    </div>
  );
};
