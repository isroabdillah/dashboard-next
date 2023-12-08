import React from 'react'
import { Button } from "@/components/ui/button"
import LayoutAdmin from '@/components/Layouts/layoutAdmin';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function Dashboard() {
  return (
    <LayoutAdmin>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Reciver</TableHead>
          <TableHead>User Status</TableHead>
          <TableHead>Message</TableHead>
          <TableHead className="text-right">Satus</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">0895366051245</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>
            Apabila kalian menemui pesan peringatan seperti ini setelah
            melakukan Test Delivery Check, silakan diabaikan untuk sementara
            waktu dan ...
          </TableCell>
          <TableCell className="text-right">$250.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </LayoutAdmin>

  )
}
