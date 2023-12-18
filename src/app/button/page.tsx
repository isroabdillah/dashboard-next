"use client";

import React from "react";

import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Button from "@/components/Forms/Button";

const handleClick = () => {
  console.log("Tombol diklik!");
};

export default function page() {
  return (
    <LayoutAdmin>
      <div className="flex gap-x-4 m-4">
          <Button
            typeButton="default"
            title="button"
            onClickAction={handleClick}
          />
          <Button
            typeButton="secondary"
            title="button"
            onClickAction={handleClick}
          />
          <Button
            typeButton="primary"
            title="button"
            onClickAction={handleClick}
          />
      </div>
    </LayoutAdmin>
  );
}
