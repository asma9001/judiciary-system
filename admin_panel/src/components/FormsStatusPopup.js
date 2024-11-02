import React, { useState } from "react";
import closeIcon from "../assets/greenCloseIcon.svg";
const FormsStatusPopup = ({ showFormPopup, setShowFormPopup }) => {
  return (
    <div
      className="card-popup "
      
    >
      <div
        class="card rounded-3"
        style={{
          maxWidth: "340px",
          width: "370px",
          boxShadow: "4px 6px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div class="card-body p-0">
          <div className="d-flex justify-content-between gap-md-5 gap-4 rounded-top-3 px-3 py-2 align-items-center bgcustom-color text-white ">
            <p class="fs-md-5 fs-6  fw-bold  mb-0 ">Select Form Status</p>
            <button
              onClick={() => setShowFormPopup(false)}
              className="bg-white rounded-circle"
              style={{ border: "none" }}
            >
              <img src={closeIcon} className=" p-1" />
            </button>
          </div>
          <form className="px-3 py-3 ">
            <div className="form-check custom-border mb-2">
              <input
                className="form-check-input  "
                type="radio"
                name="formStatus"
                id="unknown"
                value="Unknown"
                disabled
              />
              <label
                className="form-check-label mb-2"
                htmlFor="unknown"
                style={{ fontSize: "14px" }}
              >
                Unknown
              </label>
              <div></div>
            </div>
            <div className="form-check custom-border mb-2">
              <input
                className="form-check-input  custom-success-radio "
                type="radio"
                name="formStatus"
                id="approved"
                value="Approved"
              />
              <label
                className="form-check-label mb-2"
                htmlFor="approved"
                style={{ fontSize: "14px" }}
              >
                Approved
              </label>
            </div>
            <div className="form-check custom-border mb-2">
              <input
                className="form-check-input custom-reject-radio "
                type="radio"
                name="formStatus"
                id="rejected"
                value="Rejected"
              />
              <label
                className="form-check-label mb-2"
                htmlFor="rejected"
                style={{ fontSize: "14px" }}
              >
                Rejected
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormsStatusPopup;
