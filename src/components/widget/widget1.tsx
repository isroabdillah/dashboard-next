import React from "react";
import Image from "next/image";

interface Widget1Props {
  name: string;
  role: string;
  location: string;
  following: number;
  followers: number;
  tweets: number;
  imageSrc: string;
}

const Widget1: React.FC<Widget1Props> = ({
  name,
  role,
  location,
  following,
  followers,
  tweets,
  imageSrc,
}: Widget1Props) => {
  return (
    <div
      className="rounded-xl flex border-2 border-zinc-100 bg-white p-7 justify-between flex-col space-y-6 sm:space-y-0 items-center sm:items-stretch sm:flex-row"
      id="widget"
    >
      <div className="flex flex-col space-x-0 items-center">
        <Image
          className="rounded-full w-16 mb-2"
          src={imageSrc}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-gray-400">{role}</p>
      </div>
      <div className="items-center justify-center hidden sm:flex">
        <div className="border-r mx-6 md:mx-12 h-16 border-gray-100"></div>
      </div>
      <div className="flex-1 flex flex-col justify-between space-y-6">
        <div className="flex justify-end space-x-5 items-center">
          <div className="flex items-center space-x-1 border-gray-200 border rounded-full p-2 px-4 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="11" r="3"></circle>
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
            </svg>
            <div className="text-xs font-medium">{location}</div>
          </div>
          <button className="p-2 from-red-500 to-red-400 bg-gradient-to-r rounded-full text-sm text-white px-6 transform transition-all duration-200 hover:to-red-600">
            Follow
          </button>
        </div>
        <div className="flex space-x-10">
          <div className="flex flex-col items-center space-y-1">
            <p className="font-semibold">{following}</p>
            <p className="text-xs text-gray-400">Following</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="font-semibold">{followers}</p>
            <p className="text-xs text-gray-400">Followers</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="font-semibold">{tweets}</p>
            <p className="text-xs text-gray-400">Tweets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget1;
