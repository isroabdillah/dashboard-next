import React from "react";

type ButtonProps = {
  title: string;
  typeButton: "primary" | "secondary" | "default";
  onClickAction: () => void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  typeButton,
  onClickAction,
}) => {
  let buttonClass = "px-4 py-2 font-semibold tracking-widest ";

  switch (typeButton) {
    case "primary":
      buttonClass +=
        "bg-red-700 hover:bg-red-600 border-[1px] rounded-md text-white text-xs";
      break;

    case "secondary":
      buttonClass +=
        "bg-orange-600 hover:bg-orange-500 border-[1px] rounded-md text-white text-xs";
      break;

    default:
      buttonClass += "bg-transparent border-[1px] border-black rounded-md text-black text-xs";
      break;
  }

  return (
    <button className={buttonClass} onClick={onClickAction}>
      {title}
    </button>
  );
};

export default Button;
