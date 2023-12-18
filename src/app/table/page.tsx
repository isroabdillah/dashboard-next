import LayoutAdmin from '@/components/Layouts/layoutAdmin'
import React from 'react'
import {column, isi} from "../../utils/data";
import Table from "@/components/Table";

export default function page() {
  return (
    <LayoutAdmin>
      <Table header={column} isian={isi}/>
    </LayoutAdmin>
  )
}
