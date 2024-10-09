import React, { useRef } from 'react';
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
  Filler
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

const CasesReceived = () => {
  const chartRef = useRef(null);

  // Function to create the gradient
  const createGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
    gradient.addColorStop(0, '#6EC8EF'); // Light blue at the top
    gradient.addColorStop(1, '#FFFFFF'); // White at the bottom
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
        label: "cases",
        data: [5, 14,19,10, 20, 16,19], // Y-axis data points
        fill: true, // Enable filling below the line
        
        borderColor: "#2D9CDB",
        borderWidth: 3,
        pointBackgroundColor: "#2D9CDB",
        pointHoverBackgroundColor:"#FFFFFF",
        pointRadius: 5, // Adjust point size
        pointHoverRadius: 10, // Adjust point size on hover
        tension: 0.4, // Controls the curve of the line
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // Return null initially to avoid errors before chart area is available
            return null;
          }
          return createGradient(ctx, chartArea); // Apply gradient with #6EC8EF and #FFFFFF
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false, // Hides the legend (optional)
      },
      
    },

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
          display: false, // Hides y-axis grid lines
        },
        border: {
          display: false, // Hides the line on y-axis
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
      className="card py-2 bg-white border-bottom-0 rounded-4"
      style={{
        border: "1px solid #FFFFFF",
        boxShadow: "2px 3px 4px 0 #00000040",
        
      }}
    >
      <div className="d-flex px-4 justify-content-between align-items-center">
        <div className="d-flex flex-column me-auto">
          <h6 className="card-title text-muted" style={{ fontSize: "16px" }}>
            Cases Received
          </h6>
          <span
            className="fw-400"
            style={{ color: "#62666C", fontSize: "10px" }}
          >
            This chart shows last seven days data
          </span>
        </div>
      </div>
      <div>
        <Line data={data} options={options} height={120} ref={chartRef}  />
      </div>
    </div>
  );
};

export default CasesReceived;
