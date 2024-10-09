import React, { useState } from "react";
import uploadIcon from "../assets/uploadIcon.svg";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFiles(event.dataTransfer.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div
          className="col-12 col-md-6 border border-black py-5 p-md-5 text-center" // Ensure padding is responsive
          style={{
            boxShadow: "8px 9px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="d-flex align-items-center justify-content-center gap-2">
            <p className="mb-0 fw-semibold fs-5" style={{ color: "#202020" }}>
              Drop files to upload
            </p>
            <img src={uploadIcon} className="mt-2" alt="Upload Icon" />
          </div>

          <p className="text-muted" style={{ color: "#646363" }}>
            or
          </p>

          <label
            className="px-4 py-2 bg-transparent"
            style={{
              color: "#3C9CDB",
              boxShadow: "rgba(0, 0, 0, 0.3) 3px 3px 2px",
              border: "1px dashed rgb(159, 159, 159)",
              cursor: "pointer", 
            }}
          >
            Select Files
            <input type="file" onChange={handleFileChange} multiple hidden />
          </label>
        </div>
      </div>

      {/* Uncomment to show selected files
      {selectedFiles && (
        <div className="mt-4">
          <h5>Selected Files:</h5>
          <ul className="list-group">
            {Array.from(selectedFiles).map((file, index) => (
              <li className="list-group-item" key={index}>
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default FileUpload;
