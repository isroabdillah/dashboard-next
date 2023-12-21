"use client"

import React, { useState, useEffect } from "react";

interface CustomComponentProps {
  children: React.ReactNode;
  childrenCode: React.ReactNode;
}

const PlaceholderCard: React.FC<CustomComponentProps> = ({ children, childrenCode }) => {
  const [isCode, setIsCode] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg lg:w-full">
      <div className="flex items-center border-b-[1px] border-zinc-300">
        <p
          className={`pb-4 font-medium text-[13px] ${
            isCode ? "text-[#9CA3AF]" : "text-[#FF5959]"
          } cursor-pointer`}
          onClick={() => setIsCode(false)}
        >
          Styles
        </p>
        <p
          className={`pb-4 font-medium text-[13px] ${
            isCode ? "text-[#FF5959]" : "text-[#9CA3AF]"
          } ml-4 cursor-pointer`}
          onClick={() => setIsCode(true)}
        >
          Code
        </p>
      </div>
      <div>
        {isCode ? childrenCode : children}
      </div>
    </div>
  );
};

export default PlaceholderCard;
