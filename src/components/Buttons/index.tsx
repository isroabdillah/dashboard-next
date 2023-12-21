import React from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  title: string;
  typeButton:
    | "primary"
    | "secondary"
    | "warning"
    | "danger"
    | "info"
    | "ol-primary"
    | "ol-secondary"
    | "ol-warning"
    | "ol-danger"
    | "ol-info"
    | "soft-primary"
    | "soft-secondary"
    | "soft-warning"
    | "soft-danger"
    | "soft-info"
    | "full-primary"
    | "full-secondary"
    | "full-warning"
    | "full-danger"
    | "full-info"
    | "full-success"
    | "full-soft-primary"
    | "full-soft-secondary"
    | "full-soft-warning"
    | "full-soft-danger"
    | "full-soft-info"
    | "full-soft-success"
    | "success"
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
    "px-[20px] py-[10px] lg:max-w-[137px] w-full flex gap-x-2 text-center items-center font-regular tracking-widest justify-center ";

  switch (typeButton) {
    case "primary":
      buttonClass +=
        "p-2 rounded-lg bg-[#FF5959] md:max-w-[137px] w-full text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "secondary":
      buttonClass +=
        "p-2 rounded-lg bg-[#999999] md:max-w-[137px] w-full text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "warning":
      buttonClass +=
        "p-2 rounded-lg bg-[#F5C002] md:max-w-[137px] w-full text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "danger":
      buttonClass +=
        "p-2 rounded-lg bg-[#CB3030] md:max-w-[137px] w-full text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "info":
      buttonClass +=
        "p-2 rounded-lg bg-[#676FA3] md:max-w-[137px] w-full text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "ol-primary":
      buttonClass +=
        "p-2 rounded-lg border-2 border-[#FF5959] min-w-[137px] text-sm text-[#FF5959] font-semibold px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "ol-secondary":
      buttonClass +=
        "p-2 rounded-lg border-2 border-[#999999] min-w-[137px] text-sm text-[#999999] font-semibold px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "ol-warning":
      buttonClass +=
        "p-2 rounded-lg border-2 border-[#F5C002] min-w-[137px] text-sm text-[#F5C002] font-semibold px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "ol-danger":
      buttonClass +=
        "p-2 rounded-lg border-2 border-[#CB3030] min-w-[137px] text-sm text-[#CB3030] font-semibold px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "ol-info":
      buttonClass +=
        "p-2 rounded-lg border-2 border-[#676FA3] min-w-[137px] text-sm text-[#676FA3]  px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "soft-primary":
      buttonClass +=
        "p-2 rounded-lg bg-[#FF5959] bg-opacity-30 min-w-[137px] text-sm text-[#FF5959] px-6 font-semibold transform transition-all duration-200 hover:bg-opacity-40";
      break;

    case "soft-secondary":
      buttonClass +=
        "p-2 rounded-lg bg-[#999999] bg-opacity-30 min-w-[137px] text-sm text-[#999999] px-6 font-semibold transform transition-all duration-200 hover:bg-opacity-40";
      break;

    case "soft-warning":
      buttonClass +=
        "p-2 rounded-lg bg-[#F5C002] bg-opacity-30 min-w-[137px] text-sm text-[#F5C002] px-6 font-semibold transform transition-all duration-200 hover:bg-opacity-40";
      break;

    case "soft-danger":
      buttonClass +=
        "p-2 rounded-lg bg-[#CB3030] bg-opacity-30 min-w-[137px] text-sm text-[#CB3030] px-6 font-semibold transform transition-all duration-200 hover:bg-opacity-40";
      break;

    case "soft-info":
      buttonClass +=
        "p-2 rounded-lg bg-[#676FA3] bg-opacity-30  min-w-[137px] text-sm text-[#676FA3] font-semibold px-6 transform transition-all duration-200 hover:bg-opacity-40";
      break;

    case "full-primary":
      buttonClass +=
        "p-2 rounded-lg bg-[#FF5959] w-full text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "full-secondary":
      buttonClass +=
        "p-2 rounded-lg bg-[#999999] w-full text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "full-warning":
      buttonClass +=
        "p-2 rounded-lg bg-[#F5C002] w-full text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "full-danger":
      buttonClass +=
        "p-2 rounded-lg bg-[#CB3030] w-full text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "full-info":
      buttonClass +=
        "p-2 rounded-lg bg-[#676FA3] w-full text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "full-success":
      buttonClass +=
        "p-2 rounded-lg bg-[#95FF54] w-full text-sm text-white px-6 transform transition-all duration-200 hover:bg-opacity-80";
      break;

    case "full-soft-primary":
      buttonClass +=
        "p-2 rounded-lg bg-[#FF5959] bg-opacity-30 w-full text-sm text-[#FF5959] px-6 font-semibold transform transition-all duration-200 hover:bg-opacity-40";
      break;

    case "full-soft-secondary":
      buttonClass +=
        "p-2 rounded-lg bg-[#999999] bg-opacity-30 w-full text-sm text-[#999999] px-6 font-semibold transform transition-all duration-200 hover:bg-opacity-40";
      break;

    case "full-soft-warning":
      buttonClass +=
        "p-2 rounded-lg bg-[#F5C002] bg-opacity-30 w-full text-sm text-[#F5C002] px-6 font-semibold transform transition-all duration-200 hover:bg-opacity-40";
      break;

    case "full-soft-danger":
      buttonClass +=
        "p-2 rounded-lg bg-[#CB3030] bg-opacity-30 w-full text-sm text-[#CB3030] px-6 font-semibold transform transition-all duration-200 hover:bg-opacity-40";
      break;

    case "full-soft-info":
      buttonClass +=
        "p-2 rounded-lg bg-[#676FA3] bg-opacity-30  w-full text-sm text-[#676FA3] font-semibold px-6 transform transition-all duration-200 hover:bg-opacity-40";
      break;

    case "full-soft-success":
      buttonClass +=
        "p-2 rounded-lg bg-[#95FF54] bg-opacity-30  w-full text-sm text-[#77EE00] font-semibold px-6 transform transition-all duration-200 hover:bg-opacity-40";
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
