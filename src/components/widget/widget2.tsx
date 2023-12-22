import React from "react";

interface Widget2Props {
  count: number;
  text: string;
}

const Widget2: React.FC<Widget2Props> = ({ count, text }: Widget2Props) => {
  return (
    <div className="w-full">
      <div className="p-4 relative bg-white border-2 border-zinc-100 rounded-xl max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 absolute bottom-4 right-3 text-red-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
        <div className="text-2xl text-gray-700 font-medium leading-8 mt-1">{count}</div>
        <div className="text-sm text-gray-500">{text}</div>
      </div>
    </div>
  );
};

export default Widget2;
