import React from "react";

interface BadgeProps {
  tipe: String;
}

const Badges: React.FC<BadgeProps> = ({ tipe }) => {
  return (
    <div className={`${tipe === "active" ? "bg-green-100 text-green-300" : "bg-red-100 text-red-300"} inline-flex items-center rounded-xl px-2 text-sm gap-1`}>
      <div className={`${tipe === "active" ? "bg-green-400" : "bg-red-400"} w-3 h-3 rounded-full`}></div>
      {tipe}
    </div>
  );
};

export default Badges;
