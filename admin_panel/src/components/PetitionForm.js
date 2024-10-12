import React, { useState } from "react";
import editIcon from "../assets/editIcon.svg";
import previewIcon from "../assets/previewIcon.svg";
import { PreviewModel } from "../components/PreviewModel";
export const PetitionForm = ({ activeTab, setActiveTab }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleEditClick = () => {
    setActiveTab(0);
  };
  return (
    <div className="container px-md-5  mt-4">
      <div style={{ boxShadow: "3px 3px 4px 0px rgba(0, 0, 0, 0.25)" }}>
        <div
          className="d-flex px-md-5 justify-content-between align-items-center"
          style={{
            backgroundColor: "rgba(0, 150, 136, 1)",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          <h4
            className="  text-white p-2 text-decoration-underline"
            style={{ fontSize: "20px" }}
          >
            The Petition
          </h4>
          <div className="d-flex justify-content-end me-2">
            <button
              onClick={handleEditClick}
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
              <span style={{ fontSize: "12px" }}>Edit</span>
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              type="button"
              className="d-flex align-items-center bg-white rounded-2 border-0 px-md-4 px-2 py-1 mb-2"
            >
              <img
                src={previewIcon}
                alt="previewIcon"
                className="me-2"
                style={{ width: "15px", height: "15px" }}
              />
              <span style={{ fontSize: "12px" }}>Preview</span>
            </button>
            <PreviewModel />
          </div>
        </div>

        <div className=" py-4  mx-md-5 mx-2 ">
          <form>
            <div className="row d-flex align-items-center">
              <div className="col-12 col-md-6 ">
                <div class="row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Deceased Full Name
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                </div>

                <div class=" row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Deceased Address
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                </div>

                <div class=" row  mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4  ">
                    Island
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                </div>

                <div class="row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4  ">
                    Dated The
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 ">
                <div className="row mb-3 text-end">
                  <label htmlFor="gender" className="col-sm-3 col-4 lh-1">
                    Gender of Deceased
                  </label>
                  <div className="col-sm-9 col-8">
                    <div className="d-flex flex-fill">
                      <button
                        type="button"
                        className="me-2 rounded-0 py-2 fw-bold border-1 bgcustom-color  text-white flex-fill"
                        style={{
                          border: "1px solid rgba(125, 125, 125, 1)",
                          fontSize: "16px",
                        }}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        className=" rounded-0 py-1 bg-transparent fs-6 text-black flex-fill"
                        style={{ border: "1px solid rgba(125, 125, 125, 1)" }}
                      >
                        Female
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row text-end">
                  <label htmlFor="city" className="col-sm-3 col-4 lh-1">
                    City
                  </label>
                  <div className="col-sm-9 col-8">
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      id="city"
                      defaultValue=""
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="row mb-3 text-end">
                  <label htmlFor="country" className="col-sm-3 col-4">
                    Country
                  </label>
                  <div className="col-sm-9 col-8">
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      id="country"
                      defaultValue=""
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="row mb-3 text-end">
                  <label htmlFor="grantNature" className="col-sm-3 col-4 lh-1">
                    Grant Nature
                  </label>
                  <div className="col-sm-9 col-8">
                    <input
                      type="text"
                      className="form-control"
                      name="grantNature"
                      id="grantNature"
                      defaultValue=""
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
