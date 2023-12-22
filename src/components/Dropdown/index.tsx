"use client"

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Dropdown = () => {
  return (
    <Select>
      <SelectTrigger className="py-[10px] px-[20px]">
        <SelectValue placeholder="Arkatama Multisolusindo" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Arkatama Multisolusindo</SelectItem>
        <SelectItem value="dark">Digihub</SelectItem>
        <SelectItem value="system">Countama</SelectItem>
      </SelectContent>
    </Select>
  );
};
