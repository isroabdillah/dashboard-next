"use client";

import React, { useState } from "react";
import LayoutAdmin from "@/components/Layouts/layoutAdmin";
import Table from "@/components/Table";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {column, isi} from "../../utils/data";
import Button from "@/components/Forms/Button";
import Alert from "@/components/Alerts";

import toast, { Toaster } from 'react-hot-toast';


export default function Dashboard() {

  const [isOpen, setIsOpen] = useState(false)
  const handleCloseAlert = () => {
    setIsOpen(!isOpen)
  };

  const notify = () => toast('Here is your toast.');

  return (
    <LayoutAdmin>
      <Alert
        isOpen={isOpen}
        title="Holy Bitch!"
        message="otak mu rusak!"
        onClose={handleCloseAlert}
      />
      <div className="flex flex-col items-start mt-4 p-[25px] bg-white mx-6 rounded-lg relative" id="parent">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <Breadcrumbs/>
      </div>

      <Table header={column} isian={isi}/>

      
      {/* <Button typeButton="default" title="button" onClickAction={handleCloseAlert}/>
      <Button typeButton="primary" title="TOAST" onClickAction={notify}/> */}
      <Toaster />

      <div className="m-4"></div>
    </LayoutAdmin>
  );
}
