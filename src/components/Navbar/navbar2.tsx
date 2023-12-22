import React from "react";
import Image from 'next/image';

interface Navbar2Props {
  logoSrc: string;
  menuItems: string[];
  signInText: string;
  signUpText: string;
}

export const Navbar2: React.FC<Navbar2Props> = ({ logoSrc, menuItems, signInText, signUpText }: Navbar2Props) => {
  return (
    <div className="bg-gray-100 font-sans w-full min-h-screen m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <Image
                className="h-full w-full mx-4"
                src={logoSrc}
                width={30}
                height={28}
                alt=""
              />
            </div>

            <div className="hidden sm:flex sm:items-center">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[#656565] text-sm font-medium hover:text-[#FF5959] mr-4"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden sm:flex sm:items-center">
              <a
                href="#"
                className="text-[#656565] text-sm font-medium hover:text-[#FF5959] mr-4"
              >
                {signInText}
              </a>
              <a
                href="#"
                className="text-[#656565] text-sm font-medium border px-4 py-2 rounded-lg hover:text-[#FF5959] hover:border-purple-600"
              >
                {signUpText}
              </a>
            </div>

            <div className="sm:hidden cursor-pointer">
              {/* Tambahkan ikon yang diinginkan di sini */}
            </div>
          </div>

          <div className="block sm:hidden bg-white border-t-2 py-2">
            {/* Menu untuk tampilan mobile */}
          </div>
        </div>
      </div>
    </div>
  );
};
