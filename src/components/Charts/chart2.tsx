import React from "react";
import Image from "next/image";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export function Chart2() {
  return (
    <div className="w-full bg-white rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-[14px] text-gray-950 font-semibold">
          Multiple User
        </h5>

        <div className="flex gap-1">
          <div className="flex bg-[#FF5959] bg-opacity-25 p-[3px] rounded-md border-[0.5px] border-[#FF5959]">
            <Image
              className="ml-2"
              src="/dot-c.svg"
              width={7}
              height={7}
              alt="Picture of the author"
            />
            <p className="ml-2 mr-2 text-[10px] text-gray-800 font-normal">
              Sale
            </p>
          </div>
          <div className="flex bg-[#DADADA] bg-opacity-25 p-[3px] rounded-md border-[0.5px] border-[#DADADA]">
            <Image
              className="ml-2"
              src="/dot-c2.svg"
              width={7}
              height={7}
              alt="Picture of the author"
            />
            <p className="ml-2 mr-2 text-[10px] text-gray-800 font-normal">
              Stock
            </p>
          </div>
        </div>
      </div>
      <PolarArea data={data} />
    </div>
  );
}
