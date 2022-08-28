import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { LineChart } from "./lineChart";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["In Stock", "Out of the stock"],
  datasets: [
    {
      label: "# of Votes",
      data: [1, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return (
    <div className="w-[80%] float-right">
        <div className="w-full text-center">
            <h2 className="big-heading">Dashboard</h2>
        </div>
        <div className="w-[70%] m-auto">
            <LineChart/>
        </div>
      <div className="w-[30%] m-auto">
        <Pie data={data} />
      </div>
    </div>
  );
}
