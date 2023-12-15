import React from "react";

import { Form } from "@/components/Contacts/form";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import { Card } from "@/components/Cards";

export default function page() {
  return (
    <LayoutAdmin>
      <div className="container my-24 mx-auto md:px-6">
        <section>
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
            </div>
          </div>
          <div className="flex flex-wrap">
            <Form />
            <Card/>
          </div>
        </section>
      </div>
    </LayoutAdmin>
  );
}
