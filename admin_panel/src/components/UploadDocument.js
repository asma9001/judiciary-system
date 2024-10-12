import React, { useState } from "react";
import nextIcon from "../assets/next-icon.svg";
import backIcon from "../assets/back-icon.svg";
import FileUpload from "../components/FileUpload";
import { DocumentLibrary } from "../components/DocumentLibrary";
import { useNavigate } from "react-router-dom";

export const UploadDocument = ({ activeTab, setActiveTab }) => {
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [showDocument, setShowDocument] = useState(false);
  const [isUploadActive, setIsUploadActive] = useState(false);
  const [isLibraryActive, setIsLibraryActive] = useState(false);
  const [message, setMessage] = useState(""); // State for the message
  const navigate = useNavigate();

  const handleUploadClick = (e) => {
    e.preventDefault();
    setShowFileUpload(true);
    setShowDocument(false);
    setIsUploadActive(true);
    setIsLibraryActive(false);
  };

  const handleDocumentClick = (e) => {
    e.preventDefault();
    setShowDocument(true);
    setShowFileUpload(false);
    setIsLibraryActive(true);
    setIsUploadActive(false);
  };

  const handleBackClick = () => {
    setActiveTab(activeTab - 1);
  };

  const handleNextClick = () => {
    setMessage("Note: You have successfully completed the petition form"); // Set the message
    setActiveTab(activeTab + 1);
    navigate("/addform", {
      state: {
        message: "Note: You have successfully completed the petition form",
      },
    });
  };

  return (
    <div className="container ms-md-5 mt-3">
      <h2 className="fs-5 fw-bold">Insert Document</h2>
      {message && <div className="alert alert-info">{message}</div>}{" "}
      {/* Display the message */}
      <div className="d-flex flex-md-row flex-column">
        <div className="d-flex mt-3 align-items-center">
          <button
            className={`px-3 py-2 fs-6 me-2 ${
              isUploadActive
                ? "bgcustom-color fw-bold text-white"
                : "bg-transparent"
            }`}
            style={{
              color: "#616162",
              boxShadow: "rgba(0, 0, 0, 0.3) 3px 3px 2px",
              border: "1px dashed rgb(159, 159, 159)",
            }}
            onClick={handleUploadClick}
          >
            Upload Document
          </button>

          <span className="me-2">--or--</span>

          <button
            className={`px-3 py-2 fs-6 ${
              isLibraryActive
                ? "bgcustom-color fw-bold text-white"
                : "bg-transparent"
            }`}
            style={{
              color: "#616162",
              boxShadow: "rgba(0, 0, 0, 0.3) 3px 3px 2px",
              border: "1px dashed rgb(159, 159, 159)",
            }}
            onClick={handleDocumentClick}
          >
            Document Library
          </button>
        </div>
        {showDocument && (
          <div className="d-md-flex d-block align-items-center mt-3">
            <div className="d-flex flex-md-row flex-column">
              <div className="d-flex flex-md-row flex-md-row-reverse align-items-center mx-md-4">
                <select
                  className="form-select me-2"
                  aria-label="Filter select"
                  id="filterBy"
                  style={{
                    width: "150px",
                    boxShadow: "inset 4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    borderColor: "rgba(151, 151, 151, 1)",
                  }}
                >
                  <option value="all">All</option>
                  <option value="pdf">PDF</option>
                  <option value="doc">DOC</option>
                  <option value="xlsx">XLSX</option>
                  <option value="txt">TXT</option>
                </select>

                <label htmlFor="filterBy" className="form-label mb-0 me-2">
                  Filter By
                </label>
              </div>

              <div className="d-flex gap-3 align-items-center mt-2 mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="searchInput"
                  placeholder="Search"
                  style={{
                    width: "200px",
                    boxShadow: "inset 4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    borderRadius: "0px",
                    borderColor: "rgba(151, 151, 151, 1)",
                  }}
                />
                <div className="w-100">
                  <button className="text-white py-2 px-md-4 px-2 w-100 d-flex align-items-center justify-content-center fs-6 custom-button rounded-5">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {showFileUpload && (
        <div className="mt-3">
          <FileUpload />
        </div>
      )}
      {showDocument && (
        <div className="mt-3 d-flex">
          <DocumentLibrary />
        </div>
      )}
      <div className="mt-5 d-flex gap-3">
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
        {showFileUpload && (
          <button
            className="btn py-1 d-flex gap-2 align-items-center justify-content-center custom-button rounded-5"
            onClick={handleNextClick}
          >
            <span className="text-white ps-3 pe-2 fs-5">Next</span>
            <img
              src={nextIcon}
              alt="Next"
              className="bg-transparent border border-white w-2 h-2 rounded-5 px-2 py-1"
            />
          </button>
        )}
      </div>
    </div>
  );
};
