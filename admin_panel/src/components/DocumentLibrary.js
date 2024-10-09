import React from "react";
import pdfIcon from "../assets/pdfIcon.svg";

export const DocumentLibrary = () => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
      
      <div
        className="card border-bottom-0 rounded-4 rounded-bottom-0"
        style={{ borderColor: "rgba(0, 0, 0, 1)" }}
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
          <small>File Name : Lorem Ipsum</small>
        </div>
      </div>
    </div>
  );
};
