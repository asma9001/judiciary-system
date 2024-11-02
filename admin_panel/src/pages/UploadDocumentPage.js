import React, { useState, useEffect } from "react";
import CustomUploadSelect from "../components/CustomUploadSelect";
import upload2logo from "../assets/Upload2logo.svg";
import pdfIcon from "../assets/pdfIcon.svg";
import successIcon from "../assets/sucessProgressIcon.svg";
import docxIcon from "../assets/doc.svg";
const UploadDocumentPage = () => {
  const uploadOptions = ["PDF", "DOC", "XLSX", "TXT"];
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]); // Store multiple files
  console.log(selectedFiles);
  const allowedFileTypes = ["pdf", "doc", "docx"];
  const handleOptionsSelect = (value) => {
    setSelectedType(value);
    setOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const extension = file.name.split(".").pop().toLowerCase();
      if (!allowedFileTypes.includes(extension)) {
        alert("Only PDF, DOC, and DOCX files are allowed.");
        return;
      }
      const newFile = {
        name: file.name,
        size: file.size,
      };

      const updatedFiles = [...selectedFiles, newFile];
      setSelectedFiles(updatedFiles);

      // Store only the file information in local storage
      localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
    }
  };

  return (
    <div className="mt-1">
      <div className="border-top border-bottom border-black py-md-3 py-2 bg-light text-dark">
        <h2 className="mx-md-5 mx-4 fs-5 fw-bold">Upload Documents</h2>
      </div>
      <div className="mx-md-5 mx-4 mt-4">
        <div className="col-md-7 ms-0">
          <CustomUploadSelect
            style={{ boxShadow: "inset 4px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            label="Select Type"
            defaultSelect="All"
            options={uploadOptions}
            selectedValue={selectedType}
            onSelect={handleOptionsSelect}
          />
        </div>
        <div className="container d-flex justify-content-center mt-3">
          <div className="row">
            <div
              className="border border-black text-center rounded-3 mb-5"
              style={{
                maxWidth: "770px",
                minHeight: "400px",
                boxShadow: "8px 9px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="row p-3 mt-4">
                <div className="col-md-6">
                  <div
                    className="border border-white p-2 mb-0"
                    style={{
                      boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div className="p-5 mt-3">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        style={{ cursor: "pointer" }}
                      >
                        <img src={upload2logo} alt="Upload logo" />
                        <p className="fs-6 mt-5 mb-5">
                          Click or drag file to this area to upload
                        </p>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 d-md-block d-none">
                  {selectedFiles.length > 0 ? (
                    selectedFiles.map((fileObj, index) => {
                      const extension = fileObj.name
                        .split(".")
                        .pop()
                        .toLowerCase();
                      const icon = extension === "pdf" ? pdfIcon : docxIcon;
                      return (
                        <div
                          key={index}
                          className="d-flex justify-content-center align-items-center p-2 me-0 rounded mb-3"
                          style={{
                            boxShadow: "3px 4px 4px 0 rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          <img
                            src={icon}
                            alt="PDF Icon"
                            className="me-3"
                            style={{ width: "40px" }}
                          />
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="text-start">
                                <h6 className="mb-0 fs-6">{fileObj.name}</h6>
                                <p
                                  className="text-start mb-0"
                                  style={{ fontSize: "8px" }}
                                >
                                  {(fileObj.size / 1024).toFixed(2)} KB
                                </p>
                              </div>
                              <img
                                src={successIcon}
                                alt="Success"
                                style={{ width: "25px" }}
                              />
                            </div>
                            <div
                              className="progress mt-1"
                              style={{ height: "6px" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: "100%",
                                  backgroundColor: "rgba(14, 170, 14, 1)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div
                      className="text-center p-5"
                      style={{ visibility: "hidden" }}
                    >
                      <p className="fs-6">No files selected</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentPage;
