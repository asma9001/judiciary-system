import React from "react";
import pdfIcon from "../assets/pdfIcon.svg";

export const DocumentLibrary = ({ file, isSelected, onToggle }) => {
  console.log(file.name);
  
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
      <div
        onClick={onToggle} // Toggle selection on card click
        className={`card border-bottom-0 rounded-4 rounded-bottom-0 ${
          isSelected ? "selected-card" : ""
        }`}
        style={{
          borderColor: "rgba(0, 0, 0, 1)",
          backgroundColor: isSelected ? "rgba(217, 217, 217, 0.5)" : "#ffffff", // Change color when selected
          cursor: "pointer",
        }}
      >
        <div
          className="card-body d-flex flex-column align-items-center justify-content-center"
          style={{ height: "150px" }}
        >
          <div className="position-relative text-center">
            <img src={pdfIcon} alt="PDF Icon" />
          </div>
        </div>

        <div
          className="text-center fs-5 py-2"
          style={{
            backgroundColor: "rgba(0, 150, 136, 1)",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          {/* <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => e.stopPropagation()} // Prevent checkbox click from toggling the card selection
            style={{ marginRight: "10px" }}
          /> */}
          <small>{file.name}</small>
        </div>
      </div>
    </div>
  );
};
