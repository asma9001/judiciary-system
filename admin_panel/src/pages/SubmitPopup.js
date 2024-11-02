import React from "react";
import { useNavigate } from "react-router-dom";
import successIcon from "../assets/success_Icon.svg";
const SubmitPopup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="submitPopup-overlay" style={{ backgroundColor: "transparent" }}>
        <div
          className="modal-content popup-content rounded-5 p-2"
          style={{
            maxWidth: "600px",
            backgroundColor: "rgba(228, 244, 243, 1)",
          }}
        >
          <div className="d-flex flex-column pt-5 text-center justify-content-center align-items-center ">
            <img src={successIcon} alt="successIcon" width="81" height="81" />
            <p
              className="fs-5 fw-bold mt-4"
              style={{ color: "rgba(32, 32, 32, 1)"}}
            >
              Your submission has been Completed
            </p>
            <button
              className="text-white  py-1 mt-5 mb-5  px-md-5 px-4 px-2 fs-5 custom-button rounded-4 "
              onClick={() => navigate("/viewform")}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitPopup;
