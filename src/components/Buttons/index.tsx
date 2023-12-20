import React from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  title: string;
  typeButton:
    | "primary"
    | "success"
    | "secondary"
    | "invers-primary"
    | "invers-secondary"
    | "invers-success"
    | "invers-default"
    | "lg-primary"
    | "lg-success"
    | "lg-secondary"
    | "full-primary"
    | "full-success"
    | "full-secondary"
    | "white"
    | "default";
  onClickAction: () => void;
  icon?: IconType;
};

const Buttons: React.FC<ButtonProps> = ({
  title,
  typeButton,
  onClickAction,
  icon: Icon,
}) => {
  let buttonClass =
    "px-4 flex gap-x-2  items-center py-2 font-regular tracking-widest ";

  switch (typeButton) {
    case "primary":
      buttonClass +=
        "p-2 from-red-500 to-red-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-red-600";
      break;

    case "success":
      buttonClass +=
        "p-2 from-emerald-500 to-emerald-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-emerald-600";
      break;

    case "secondary":
      buttonClass +=
        "p-2 from-orange-500 to-orange-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-orange-600";
      break;

    case "invers-primary":
      buttonClass +=
        "p-2 bg-red-100 border-2 border-red-300 rounded-xl text-sm font-semibold text-red-400 px-6 transform transition-all duration-200 hover:bg-red-200 hover:text-red-600";
      break;

    case "invers-secondary":
      buttonClass +=
        "p-2 bg-orange-100 border-2 border-orange-300 rounded-xl text-sm font-semibold text-orange-400 px-6 transform transition-all duration-200 hover:bg-orange-200 hover:text-orange-600";
      break;

    case "invers-success":
      buttonClass +=
        "p-2 bg-emerald-100 border-2 border-emerald-300 rounded-xl text-sm font-semibold text-emerald-400 px-6 transform transition-all duration-200 hover:bg-emerald-200 hover:text-emerald-600";
      break;

    case "invers-default":
      buttonClass +=
        "p-2 bg-gray-100 border-2 border-zinc-300 rounded-xl text-sm font-semibold text-zinc-400 px-6 transform transition-all duration-200 hover:bg-zinc-200 hover:text-zinc-600";
      break;

    case "lg-primary":
      buttonClass +=
        "py-4 px-7 from-red-500 to-red-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-red-600";
      break;

    case "lg-success":
      buttonClass +=
        "py-4 px-7 from-emerald-500 to-emerald-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-emerald-600";
      break;

    case "lg-secondary":
      buttonClass +=
        "py-4 px-7 from-orange-500 to-orange-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-orange-600";
      break;

    case "full-primary":
      buttonClass +=
        "w-full justify-center py-4 from-red-500 to-red-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-red-600";
      break;

    case "full-success":
      buttonClass +=
        "w-full justify-center py-4 from-emerald-500 to-emerald-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-emerald-600";
      break;

    case "full-secondary":
      buttonClass +=
        "w-full justify-center py-4 from-orange-500 to-orange-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-orange-600";
      break;

    case "white":
      buttonClass +=
        "p-2 bg-white rounded-xl text-sm font-semibold text-gray-700 px-6 transform transition-all duration-200 hover:bg-zinc-100 hover:text-gray-800 ";
      break;

    default:
      buttonClass +=
        "p-2 from-zinc-500 to-zinc-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-zinc-600";
      break;
  }

  return (
    <button className={buttonClass} onClick={onClickAction}>
      {Icon && <Icon />}
      {title}
    </button>
  );
};

export default Buttons;
