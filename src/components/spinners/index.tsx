import React from "react";

export interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinners: React.FC<SpinnerProps> = ({ size = 40, color = "#FF5959" }) => {
  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    border: `4px dashed ${color}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  return <div style={spinnerStyle}></div>;
};

export default Spinners;
