import React from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  title: string;
  typePills:
    | "primary"
    | "secondary"
    | "warning"
    | "danger"
    | "info";
  icon?: IconType;
};

const Pillsx: React.FC<ButtonProps> = ({
  title,
  typePills,
}) => {
  let buttonClass =
    "px-2 bg-opacity-50 rounded-full  flex items-center justify-center ";
    let tag: any = null;

  switch (typePills) {
    case "primary":
      buttonClass +=
        "bg-[#8CD790]";
      tag = { __html: `<p className="text-[#1e2135] text-[14px] text-center">${title}</p>` }
      break;

    case "secondary":
      buttonClass +=
        "p-2 rounded-lg bg-[#999999] min-w-[137px] text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      tag = { __html: `<p className="text-[#1e2135] text-[14px] text-center">${title}</p>` }
      break;

    case "warning":
      buttonClass +=
        "p-2 rounded-lg bg-[#F5C002] min-w-[137px] text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      tag = { __html: `<p className="text-[#1e2135] text-[14px] text-center">${title}</p>` }
      break;

    case "danger":
      buttonClass +=
        "p-2 rounded-lg bg-[#CB3030] min-w-[137px] text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
        tag = { __html: `<p className="text-[#1e2135] text-[14px] text-center">${title}</p>` }
      break;

    case "info":
      buttonClass +=
        "p-2 rounded-lg bg-[#676FA3] min-w-[137px] text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
        tag = { __html: `<p className="text-[#1e2135] text-[14px] text-center">${title}</p>` }
      break;

    default:
      buttonClass +=
        "p-2 from-zinc-500 to-zinc-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-zinc-600";
      tag = `<p className="text-[#1e2135] text-[14px] text-center">{title}</p>`
      break;
  }

  return (

    <div className={buttonClass}>
      <div dangerouslySetInnerHTML={tag}></div>
    </div>
    // <button className={buttonClass}>
    //   {title}
    // </button>
  );
};

export default Pillsx;
