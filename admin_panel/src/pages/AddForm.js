import React, { useState } from "react";

import nextIcon from "../assets/next-icon.svg";
import { Petition } from "../pages/Petition";

import CustomSelectInput from "../components/CustomSelectInput";
export const AddForm = () => {
  const [showPetition, setShowPetition] = useState(false);
  const [selectedForm, setSelectedForm] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("");
  const [formError, setFormError] = useState("");
  const [officeError, setOfficeError] = useState("");

  const [officeOpen, setOfficeOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const formOptions = ["PROBATE"];
  const officeOptions = ["NASSAU", "FREEPORT"];
  const handleFormSelect = (form) => {
    setSelectedForm(form);
    setFormError("");
    setOpen(false);
  };

  const handleOfficeSelect = (office) => {
    setSelectedOffice(office);
    setOfficeError("");
    setOfficeOpen(false);
  };

  const handleNextClick = () => {
    let hasError = false;

    if (
      selectedForm === "Select a type" ||
      selectedForm === "" ||
      selectedForm === "Select Form"
    ) {
      setFormError("Please Select Form Type");
      hasError = true;
    }

    if (
      selectedForm === "PROBATE" &&
      (selectedOffice === "" || selectedOffice === "Select an office")
    ) {
      setOfficeError("Please Select an Office");
      hasError = true;
    }

    if (!hasError) {
      setShowPetition(true);
    }
  };

  return (
    <div>
      {!showPetition ? (
        <div className="d-flex flex-column mt-1">
          <div className="border-top border-bottom border-black py-md-3 py-2 bg-light text-dark">
            <h2 className="mx-md-5 mx-4 fs-5 fw-bold">Select Form</h2>
          </div>

          <div className="bgcustom-color container d-flex align-items-center pt-2 mt-1">
            <p className="text-white ms-md-5 px-3 fs-5 lh-2 lh-md-0">
              <span className="fw-bold"> Note:</span> You are adding a form as
              an administrator in
              <span className="fw-bold"> The Supreme Court of The Bahamas</span>
            </p>
          </div>

          {/* Form Section */}
          <div className="mt-md-5 mt-4 container">
            <div className="row mx-md-5">
              <div className="col-md-8 ">
                <CustomSelectInput
                  label="Form Type"
                  defaultSelect="Select Form"
                  selectedValue={selectedForm}
                  options={formOptions}
                  onSelect={handleFormSelect}
                  error={formError}
                />

                {selectedForm === "PROBATE" && (
                  <CustomSelectInput
                    defaultSelect="Select Office"
                    label="Probate Registry"
                    selectedValue={selectedOffice}
                    options={officeOptions}
                    onSelect={handleOfficeSelect}
                    error={officeError}
                  />
                )}

                {/* Button Section */}
                <div
                  className=""
                  style={{ marginLeft: "18%", marginTop: "9%" }}
                >
                  <button
                    className="btn py-0 d-flex gap-2 ms-auto ms-md-0 me-3 align-items-center justify-content-center custom-button rounded-5"
                    onClick={handleNextClick}
                  >
                    <span className="text-white ps-3 pe-2 fs-5">Next</span>
                    <img
                      src={nextIcon}
                      alt="Next"
                      className="bg-transparent border border-white w-2 h-2 rounded-5 px-2 py-1"
                    />
                  </button>
                </div>
              </div>

              {/* About Section */}
              {selectedForm === "PROBATE" && (
                <div className="col-md-4 mt-4 mt-md-0">
                  <div className="bgcustom-color mx-0 text-white border border-black border-bottom-0 text-center px-3 py-3 text-white fw-semibold fs-5">
                    About Selected Form
                  </div>
                  <div className="p-3 border border-dark border-top-0">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Petition />
      )}
    </div>
  );
};
