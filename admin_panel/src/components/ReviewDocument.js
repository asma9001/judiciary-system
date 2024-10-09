import React from "react";
import { useNavigate } from "react-router-dom";
import { PetitionForm } from "../components/PetitionForm";
import { ExecutorForm } from "../components/ExecutorForm";
import { AffidavitForm } from "../components/AffidavitForm";
import { DocumentLibrary } from "../components/DocumentLibrary";
import editIcon from "../assets/editIcon.svg";
import backIcon from "../assets/back-icon.svg";
import successIcon from "../assets/success_Icon.svg";

export const ReviewDocument = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    setActiveTab(activeTab - 1);
  };
  return (
    <>
      <PetitionForm activeTab={activeTab} setActiveTab={setActiveTab} />
      <ExecutorForm />
      <AffidavitForm />
      <div className="container px-md-5 mt-4">
        <div style={{ boxShadow: "3px 3px 4px 0px rgba(0, 0, 0, 0.25)" }}>
          <div
            className="d-flex px-md-5 justify-content-between align-items-center"
            style={{
              backgroundColor: "rgba(0, 150, 136, 1)",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            <h4 className="  text-white p-2 fs-5 text-decoration-underline">
              Uploaded Documents
            </h4>
            <div className="d-flex justify-content-end me-2">
              <button
                type="button"
                className="d-flex align-items-center bg-white rounded-2 border-0 px-md-4 px-2 py-1 me-2 mb-2"
                style={{ color: "rgba(60, 156, 219, 1)" }}
              >
                <img
                  src={editIcon}
                  alt="editIcon"
                  className="me-2"
                  style={{ width: "15px", height: "15px" }}
                />
                <span>Edit</span>
              </button>
            </div>
          </div>
          <div className="py-md-4 mx-md-5 mt-md-0 mt-5">
            <DocumentLibrary />
          </div>
        </div>
        <div class="form-check gap-3 gap-md-2 mt-md-3 mt-4 d-flex align-items-center">
          <input
            class="form-check-input custom-checkbox fs-md-5 "
            type="checkbox"
            value=""
            id="flexCheckDefault"
            style={{
              boxShadow: "none",
              boxShadow: "inset 2px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              borderColor: "rgba(0, 0, 0, 1)",
              borderRadius: "0",
              color: "white",
            }}
          />
          <label
            class="form-check-label "
            for="flexCheckDefault"
            style={{ color: "rgba(0, 0, 0, 1)", fontSize: "16px" }}
          >
            By Checking this box, I certify all documents and statements are
            true.
          </label>
        </div>
        <div className="d-flex ms-auto justify-content-end gap-3 my-5 ">
          <button
            className="btn py-1 d-flex gap-2 align-items-center justify-content-center custom-button rounded-5"
            onClick={handleBackClick}
          >
            <img
              src={backIcon}
              alt="Back"
              className="bg-transparent border border-white w-2 h-2 rounded-5 px-2 py-1"
            />
            <span className="text-white ps-3 pe-2 fs-5">Back</span>
          </button>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="text-white py-1 px-4 d-flex gap-2 align-items-center justify-content-center fs-5 custom-button rounded-5 "
          >
            Submit
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div
                className="modal-content custom-shadow rounded-5  p-5 "
                style={{
                  borderColor: "transparent",
                  backgroundColor: "#E4F4F3",
                  boxShadow: "3px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="d-flex flex-column   justify-content-center align-items-center ">
                  <img src={successIcon} alt="successIcon" />
                  <p
                    className="fs-5 fw-bold mt-3"
                    style={{ color: "rgba(32, 32, 32, 1)" }}
                  >
                    Your submission has been Completed
                  </p>
                  <button
                    className="text-white  py-1 mt-5  px-md-5 px-2 fs-5 custom-button rounded-4 "
                    data-bs-dismiss="modal"
                    onClick={() => navigate("/viewform")}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
