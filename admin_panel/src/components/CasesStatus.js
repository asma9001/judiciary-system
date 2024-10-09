import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const CasesStatus = () => {
  const chartRef = useRef(null);

  // Function to create the gradient
  const createGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
    gradient.addColorStop(0, "#5B6D92"); // Light blue at the top
    gradient.addColorStop(1, "#FFFFFF"); // White at the bottom
    return gradient;
  };
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Forms",
        data: [5, 10, 6, 13, 11, 16, 20],
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // Return null initially to avoid errors before chart area is available
            return null;
          }
          return createGradient(ctx, chartArea); // Apply gradient with #6EC8EF and #FFFFFF
        },
        borderWidth: 3,
        borderColor: "#07B337",
        pointHoverBackgroundColor: "#2D9CDB",
        pointRadius: 5,
        pointHoverRadius: 10,
        tension: 0.3,
        order: 1, // Ensure the green line is drawn first
      },
      {
        data: [5, 14, 19, 10, 20, 16, 19],
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // Return null initially to avoid errors before chart area is available
            return null;
          }
          return createGradient(ctx, chartArea); // Apply gradient with #6EC8EF and #FFFFFF
        },
        borderWidth: 3,
        borderColor: "#EB5454",
        pointRadius: 5,
        pointHoverRadius: 10,
        tension: 0.3,
        pointHoverBackgroundColor: "#2D9CDB",
        order: 2, // Draw the red line after the green line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend (optional)
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // Hides x-axis grid lines
        },
        border: {
          display: false, // Hides the line on x-axis
        },
      },
      y: {
        grid: {
          display: false, // Hides x-axis grid lines
        },
        border: {
          display: false, // Hides the line on x-axis
        },
        beginAtZero: true,
        ticks: {
          stepSize: null, // Sets the interval between ticks
        },
      },
    },
  };
  return (
    <div
      className="card  py-2 mb-0 border-bottom-0 rounded-4"
      style={{
        border: "1px solid #FFFFFF",
        boxShadow: "2px 3px 4px 0 #00000040",
      }}
    >
      <div className="d-flex px-4 justify-content-between align-items-center">
        <div className="d-flex flex-column me-auto">
          <h6 className="card-title text-muted " style={{ fontSize: "16px" }}>
            Cases Status
          </h6>
          <span
            className="fw-400 "
            style={{ color: "#62666C", fontSize: "10px" }}
          >
            This chart shows last seven days data
          </span>
        </div>
      </div>
      <div className="">
        <Line data={data} options={options} height={120} ref={chartRef} />
      </div>
    </div>
  );
};

export default CasesStatus;
