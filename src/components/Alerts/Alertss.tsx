import React from "react";
import Image from "next/image";

type AlertProps = {
  type: "success" | "warning" | "danger" | "info";
  title: string;
  message: string;
};

export const Alertss: React.FC<AlertProps> = ({ type, title, message }) => {
  let bgColor = "";
  let borderColor = "";
  let textColor = "";

  switch (type) {
    case "success":
      bgColor = "bg-[#00CC99] bg-opacity-10";
      borderColor = "border-l-4 border-[#00CC99]";
      textColor = "text-[#00CC99]";
      break;
    case "warning":
      bgColor = "bg-[#EEBA00] bg-opacity-10";
      borderColor = "border-l-4 border-[#EEBA00]";
      textColor = "text-[#EEBA00]";
      break;
    case "danger":
      bgColor = "bg-red-100";
      borderColor = "border-l-4 border-red-500";
      textColor = "text-red-700";
      break;
    case "info":
      bgColor = "bg-blue-100";
      borderColor = "border-l-4 border-blue-500";
      textColor = "text-blue-700";
      break;
    default:
      bgColor = "bg-gray-100";
      borderColor = "border-l-4 border-gray-500";
      textColor = "text-gray-700";
      break;
  }

  return (
    <div
      className={`p-4 rounded-r-lg ${bgColor} ${borderColor} ${textColor}`}
      role="alert"
    >
      <div className="flex items-center">
        {type === "success" && (
          <Image src="/success.svg" width={50} height={50} alt="icon" />
        )}
        {type === "warning" && (
          <Image src="/warning.svg" width={50} height={50} alt="icon" />
        )}
        {type === "danger" && (
          <Image src="/danger.svg" width={50} height={50} alt="icon" />
        )}
        {type === "info" && (
          <Image src="/info.svg" width={50} height={50} alt="icon" />
        )}

        <div className="ml-4">
          <p className="font-bold">{title}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>

    // <div
    //   className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-r-lg"
    //   role="alert"
    // >
    //   <div className="flex items-center">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="57"
    //       height="57"
    //       fill="none"
    //       viewBox="0 0 57 57"
    //     >
    //       <path
    //         fill="#EEBA00"
    //         d="M28.5.063a28.437 28.437 0 110 56.874 28.437 28.437 0 010-56.874zm0 12.187a3.709 3.709 0 00-3.697 4.046l1.483 16.275a2.226 2.226 0 004.428 0l1.479-16.275A3.71 3.71 0 0028.5 12.25zm0 32.5a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"
    //       ></path>
    //     </svg>
    //     <div className="ml-4">
    //       <p className="font-bold">Be Warned</p>
    //       <p>Something not ideal might be happening.</p>
    //     </div>
    //   </div>
    // </div>
  );
};
