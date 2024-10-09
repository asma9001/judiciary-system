import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CircularProgressBar = ({ value, text, color, bgColor }) => {
  return (
    <div className="circular-progress-bar">
      <CircularProgressbar
        value={value}
        text={text}
        strokeWidth="25"
        // size={60}
        styles={buildStyles({
          textColor: "#000",
          pathColor: color,
          trailColor: bgColor,
          strokeLinecap: "butt", // This removes the rounded ends
        })}
      />
    </div>
  );
};
