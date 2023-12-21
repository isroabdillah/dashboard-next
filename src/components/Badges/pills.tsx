import React from "react";

interface Props {
  status: 'success' | 'danger' | 'warning';
}

export const Pills: React.FC<Props> = ({ status }) => {
  let bgCollor = '';
  switch (status) {
    case 'success':
      bgCollor = 'bg-[#8CD790]'; // or any color code for success
      break;
    case 'danger':
      bgCollor = 'bg-[#FF5959]'; // or any color code for danger
      break;
    case 'warning':
      bgCollor = 'bg-[#FDB827]'; // or any color code for warning
      break;
    default:
      bgCollor = 'bg-[#EEF2FF]'; // default color
      break;
  }

  return (
      <div className={`px-2 bg-opacity-50 ${bgCollor} rounded-full  flex items-center justify-center`}>
      <p className="text-[#1e2135] text-[14px] text-center">{status}</p>
    </div>
  );
};
