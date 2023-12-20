import React from 'react';
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

export function Chart3() {
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
      <Line options={options} data={data} />
    </div>
  )
  
}
