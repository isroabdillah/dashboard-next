import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from 'next/image'

export const Navbar = () => {
  return (
    <main className="bg-white">
      <div className="container mx-auto flex items-center h-[90px] border-b-1 border-black px-[110px]">
        <a href="" className="flex items-center justify-center">
          <Image className="h-full w-full"
            src="/icon-arkatama.png"
            width={38}
            height={32}
            alt=""
          />
          {/* <img className="h-[32px]" src="./icon-arkatama.png" /> */}
        </a>
        <nav className="contents text-base lg:text-md">
          <ul className="mx-auto flex items-center gap-[5px]">
            <li className="py-[10px] px-[20px] rounded-md font-medium border-2 border-[#FF0000] active bg-[#FFDFDF] text-[#FF0000]">
              Whatsapp
            </li>
            <li className="py-[10px] px-[20px] rounded-md font-medium text-[#656565] ">
              Server Health
            </li>
            <li className="py-[10px] px-[20px] rounded-md font-medium text-[#656565] ">
              Dokumentasi
            </li>
            <li className="py-[10px] px-[20px] rounded-md font-medium text-[#656565] ">
              Youtube Tutorial
            </li>
            <li className="py-[10px] px-[20px] rounded-md font-medium text-[#656565] ">
              Use Case
            </li>
            <li className="py-[10px] px-[20px] rounded-md font-medium text-[#656565] ">
              Kontak CS
            </li>
          </ul>
        </nav>
        <div className="">
          <Select>
            <SelectTrigger className="py-[10px] px-[20px]">
              <SelectValue placeholder="Arkatama Multisolusindo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Arkatama Multisolusindo</SelectItem>
              <SelectItem value="dark">Arkatama Multisolusindo 2</SelectItem>
              <SelectItem value="system">Arkatama Multisolusindo 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </main>
  );
};
