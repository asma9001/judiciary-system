import React from "react";
import { CircularProgressBar } from "../components/CircularProgressBar";
import downloadIcon from "../assets/downloadIcon.svg";

export const FormCard = () => {
  return (
    <div class="card rounded-4 bg-white" style={{
      border: "1px solid #FFFFFF",
      boxShadow: "2px 3px 4px 0 #00000040",
      width:"100%"
    }}>
      <div class="card-body " >
        <div class="d-flex justify-content-between">
          <h6 className="text-muted fw-600" style={{ fontSize: "16px" }}>
            Forms Status
            <span style={{ fontSize: "10px", color: "#464255" }}>
              (Overall)
            </span>
          </h6>
          <div className="report-btn d-flex align-items-center gap-1 px-md-3 px-2 mt-0 py-1">
            <img src={downloadIcon} alt="downloadIcon" />
            <span className="fw-700 d-none d-md-block fw-bold">
              Save Report
            </span>
          </div>
        </div>
        <div className="d-flex progressbar justify-content-center mt-4 gap-md-5 gap-2" >
          <div className="d-flex flex-column gap-2 align-items-center">
            <CircularProgressBar
              value={200}
              text="250"
              color="#FFE6E6"
              bgColor="#FFE6E6"
            />
            <span>Forms Received</span>
          </div>

          <div className="d-flex flex-column gap-2 align-items-center ">
            <CircularProgressBar
              value={20}
              text="20%"
              color="#00B074"
              bgColor="#00B07426"
            />
            <span>Forms Approved</span>
          </div>

          <div className="d-flex flex-column gap-2 align-items-center">
            <CircularProgressBar
              value={55}
              text="55%"
              color="#FF5B5B"
              bgColor="#2D9CDB26"
            />
            <span>Forms Pending</span>
          </div>
        </div>

      
      </div>
    </div>
  );
};
