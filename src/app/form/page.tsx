import React from "react";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import { Forms } from "@/components/Forms/page";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="mb-4 pb-4">
        <Forms />
      </div>
    </LayoutAdmin>
  );
}
