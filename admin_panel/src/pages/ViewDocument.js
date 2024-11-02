import React, { useState, useEffect } from "react";
import CustomUploadSelect from "../components/CustomUploadSelect";
import deleteIcon from "../assets/deleteIcon.svg";
import { DocumentLibrary } from "../components/DocumentLibrary";
import CustomButton from "../components/CustomButton";

const ViewDocument = () => {
  const uploadOptions = ["PDF", "DOC", "XLSX", "TXT"];
  const [selectedType, setSelectedType] = useState("");
  const [open, setOpen] = useState("false");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFileIndices, setSelectedFileIndices] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleOptionsSelect = (value) => {
    setSelectedType(value);
    setOpen(false);
  };

  const toggleFileSelection = (index) => {
    setSelectedFileIndices(
      (prevSelected) =>
        prevSelected.includes(index)
          ? prevSelected.filter((i) => i !== index) // Deselect
          : [...prevSelected, index] // Select
    );
  };

  const deleteSelectedFiles = () => {
    setShowPopup(true); // Open the confirmation popup
  };

  const confirmDelete = () => {
    // Perform the actual file deletion
    const updatedFiles = selectedFiles.filter(
      (_, index) => !selectedFileIndices.includes(index)
    );

    // Update state and localStorage
    setSelectedFiles(updatedFiles);
    setSelectedFileIndices([]);
    localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));

    // Close the popup
    setShowPopup(false);
  };

  const cancelDelete = () => {
    setShowPopup(false); // Close the confirmation popup without deleting
  };

  useEffect(() => {
    const savedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    setSelectedFiles(savedFiles);
  }, []);

  console.log(selectedFiles);
  return (
    <>
      <div className="mt-1">
        <div className="border-top border-bottom border-black py-md-3 py-2 bg-light text-dark">
          <h2 className="mx-md-5 mx-4 fs-5 fw-bold">View Documents</h2>
        </div>
      </div>

      {/* Filter By and Delete Button Container */}
      <div style={{ backgroundColor: showPopup && "rgba(217, 217, 217, 0.5)" }}>
        <div className="d-md-flex d-block align-items-center justify-content-between mt-5 gap-3">
          {/* Filter By Section */}
          <div className="d-flex flex-md-row flex--column flex-column-reverse ">
            <div className="d-flex flex-md-row flex-md-row-reverse  align-items-center ms-md-5 mx-3 mx-md-0">
              <CustomUploadSelect
                style={{
                  boxShadow: "inset 4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
                label="Filter By"
                defaultSelect="All"
                options={uploadOptions}
                selectedValue={selectedType}
                onSelect={handleOptionsSelect}
              />
              <div className="d-flex align-items-center  mt-3 d-md-none d-block ms-auto">
                <button
                  onClick={deleteSelectedFiles}
                  className="text-white py-2 px-md-4 px-3 fs-6 custom-button rounded-5 d-flex align-items-center justify-content-center gap-2"
                >
                  Delete
                  <img src={deleteIcon} alt="deleteicon" />
                </button>
              </div>
            </div>

            {/* Search Bar Section */}
            <div className="d-flex mx-3 gap-3 align-items-center mb-3">
              <div>
                <input
                  type="text"
                  className="searchInput w-100"
                  placeholder="Search"
                />
              </div>
              <div>
                <button className="text-white py-2 px-md-4 px-3 w-100 d-flex align-items-center justify-content-center fs-6 custom-button rounded-5">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Delete Button Section */}
          <div className="d-flex align-items-center d-none d-md-block me-5 mb-3 ms-auto">
            <button
              onClick={deleteSelectedFiles}
              className="text-white py-2 px-md-4 px-2 fs-6 custom-button rounded-5 d-flex align-items-center justify-content-center gap-2"
            >
              Delete
              <img src={deleteIcon} alt="deleteicon" />
            </button>
          </div>
        </div>
        {/* Document Library Section */}
        <div className="row mx-md-5 mx-3 mt-4">
          {selectedFiles.map((file, index) => (
            <DocumentLibrary
              key={index}
              file={file}
              isSelected={selectedFileIndices.includes(index)}
              onToggle={() => toggleFileSelection(index)}
            />
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="overlay">
          <div
            className="modal-content popup-content border border-dark "
            style={{
              maxWidth: "500px",
              backgroundColor: "rgba(246, 241, 241, 1)",
              boxShadow: "7px 10px 4px 0 rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="d-flex flex-column py-4 text-center justify-content-center align-items-center">
              <p
                className="fs-5"
                style={{ color: "rgba(32, 32, 32, 1)", fontWeight: "400" }}
              >
                Are you sure you want to delete this document?
              </p>
            </div>
            <div className="pt-2 pb-4 px-4 d-flex justify-content-end">
              <CustomButton
                text="No"
                color="rgba(0, 150, 136, 1)"
                style={{ marginRight: "10px" }}
                onClick={cancelDelete} // Close popup without deleting
              />
              <CustomButton
                text="Yes"
                color="rgba(150, 0, 0, 1)"
                onClick={confirmDelete} // Delete files and close popup
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewDocument;
