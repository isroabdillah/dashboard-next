import React from "react";

export const Tab2 = () => {
  return (
    <div className="">
      <ul className="grid grid-flow-col text-center border-b border-gray-200 text-gray-500">
        <li>
          <a
            href="#page1"
            className="flex px-4 justify-center border-b-4 border-[#FF5959] hover:text-[#FF5959] hover:border-[#FF5959] py-4 text-[#FF5959]"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#page2"
            className="flex px-4 justify-center border-b-4 border-transparent hover:text-[#FF5959] hover:border-[#FF5959] py-4"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="#page3"
            className="flex px-4 justify-center border-b-4 border-transparent hover:text-[#FF5959] hover:border-[#FF5959] py-4"
          >
            Messages
          </a>
        </li>
        <li>
          <a
            href="#page4"
            className="flex px-4 justify-center border-b-4 border-transparent hover:text-[#FF5959] hover:border-[#FF5959] py-4"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#page5"
            className="flex px-4 justify-center border-b-4 border-transparent hover:text-[#FF5959] hover:border-[#FF5959] py-4"
          >
            Settings
          </a>
        </li>
      </ul>
      <div className="py-6">
        <p>Tab Home</p>
      </div>
    </div>
  );
};
