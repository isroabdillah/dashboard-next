import React from "react";

export const Quote = () => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  max-h-56">
      <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        Quote
      </div>
      <div className="p-6">
        <blockquote>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
        </blockquote>
        <figcaption className="text-md text-neutral-600 dark:text-neutral-400">
          - Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </div>
    </div>
  );
};
