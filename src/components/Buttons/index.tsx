import React from "react";

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
    | "default";
  onClickAction: () => void;
};

const Buttons: React.FC<ButtonProps> = ({
  title,
  typeButton,
  onClickAction,
}) => {
  let buttonClass = "px-4 py-2 font-regular tracking-widest ";

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

    default:
      buttonClass +=
        "p-2 from-zinc-500 to-zinc-400 bg-gradient-to-r rounded-xl text-sm text-white px-6 transform transition-all duration-200 hover:to-zinc-600";
      break;
  }

  return (
    <button className={buttonClass} onClick={onClickAction}>
      {title}
    </button>
  );
};

export default Buttons;
