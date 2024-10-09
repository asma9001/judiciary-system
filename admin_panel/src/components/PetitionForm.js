import React, { useState } from "react";
import editIcon from "../assets/editIcon.svg";
import previewIcon from "../assets/previewIcon.svg";
import {PreviewModel} from "../components/PreviewModel";
export const PetitionForm = ({ activeTab, setActiveTab }) => {
  const [showPopup, setShowPopup] = useState(false);

  // Toggle function for popup
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
          <h4 className="  text-white p-2 fs-md-5 text-decoration-underline">
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
              <span>Edit</span>
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
              Preview
            </button>
            <PreviewModel />
          </div>
        </div>

        <div className=" py-4 d-none d-md-block mx-md-5 mx-4 ">
          <form>
            <div className="row mb-3">
              <div className="col-md-6 ">
                <div class="form-group row text-center ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Deceased Full Name
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="John Smith"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex">
                <div class="form-group row text-center">
                  <label htmlFor="deceasedFullName" class="col-sm-3 lh-1">
                    Gender of Deceased
                  </label>
                  <div class="col-sm-9 d-flex">
                    <button
                      type="button"
                      className="me-2 rounded-0 px-5  border-1 bgcustom-color fs-5 text-white"
                      style={{ borderColor: "rgba(125, 125, 125, 1)" }}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      className="me-2 rounded-0 px-5   border-1 bg-transparent fs-5 text-black"
                      style={{ borderColor: "rgba(125, 125, 125, 1)" }}
                    >
                      Female
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 ">
                <div class="form-group row text-center ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 lh-1">
                    Deceased Address
                  </label>
                  <div class="col-sm-9 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Bahamas Boulevard"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6 ">
                <div class="form-group row d-flex align-items-center text-center ">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 text-center lh-1"
                  >
                    City
                  </label>
                  <div class="col-sm-9 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Bahamas Boulevard"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 ">
                <div class="form-group row text-center ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 ">
                    Island
                  </label>
                  <div class="col-sm-9 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Abaco"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6 ">
                <div class="form-group row d-flex align-items-center text-center ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 ">
                    Country
                  </label>
                  <div class="col-sm-9 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="The Bahamas"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3  ">
              <div className="col-md-6 ">
                <div class="form-group row text-center ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 ">
                    Dated The
                  </label>
                  <div class="col-sm-9 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="02-02-2023"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6 ">
                <div class="form-group row  ">
                  <label htmlFor="deceasedFullName" class="col-sm-4 ">
                    Grant Nature
                  </label>
                  <div class="col-sm-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Probate"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Mobile devices */}
        <div className=" py-4 d-md-none d-flex flex-column mx-md-5 mx-2 ">
          <form>
            <div className="row ">
              <div className="col-12 ">
                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Deceased Full Name
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="John Smith"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
                <div className="col-12 ">
                  <div class=" row mb-3">
                    <label
                      htmlFor="deceasedFullName"
                      class="col-sm-3 col-4 lh-1"
                    >
                      Deceased Address
                    </label>
                    <div class="col-sm-9 col-8">
                      <input
                        type="text"
                        className="form-control "
                        name="deceasedFullName"
                        id="deceasedFullName"
                        value="Bahamas Boulevard"
                        style={{
                          borderRadius: "0px",
                          borderColor: "rgba(151, 151, 151, 1)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div class=" row  mb-3">
                    <label htmlFor="deceasedFullName" class="col-sm-3 col-4  ">
                      Island
                    </label>
                    <div class="col-sm-9 col-8">
                      <input
                        type="text"
                        className="form-control "
                        name="deceasedFullName"
                        id="deceasedFullName"
                        value="Abaco"
                        style={{
                          borderRadius: "0px",
                          borderColor: "rgba(151, 151, 151, 1)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div class="row mb-3">
                    <label htmlFor="deceasedFullName" class="col-sm-3 col-4  ">
                      Dated The
                    </label>
                    <div class="col-sm-9 col-8">
                      <input
                        type="text"
                        className="form-control "
                        name="deceasedFullName"
                        id="deceasedFullName"
                        value="02-02-2023"
                        style={{
                          borderRadius: "0px",
                          borderColor: "rgba(151, 151, 151, 1)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div class=" row mb-3">
                    <label
                      htmlFor="deceasedFullName"
                      class="col-sm-3 col-4  lh-1"
                    >
                      Gender of Deceased
                    </label>
                    <div class="col-sm-9 col-8 d-flex">
                      <button
                        type="button"
                        className="me-2 rounded-0 px-md-5 px-3  border-1 bgcustom-color fs-5 text-white"
                        style={{ borderColor: "rgba(125, 125, 125, 1)" }}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        className="me-2 rounded-0 px-md-5 px-2   border-1 bg-transparent fs-5 text-black"
                        style={{ borderColor: "rgba(125, 125, 125, 1)" }}
                      >
                        Female
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div class="mb-3 row ">
                    <label
                      htmlFor="deceasedFullName"
                      class=" col-sm-3 col-4  lh-1"
                    >
                      City
                    </label>
                    <div class="col-sm-9 col-8 ">
                      <input
                        type="text"
                        className="form-control "
                        name="deceasedFullName"
                        id="deceasedFullName"
                        value="Bahamas Boulevard"
                        style={{
                          borderRadius: "0px",
                          borderColor: "rgba(151, 151, 151, 1)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div class=" row mb-3 ">
                    <label htmlFor="deceasedFullName" class="col-sm-3 col-4  ">
                      Country
                    </label>
                    <div class="col-sm-9  col-8">
                      <input
                        type="text"
                        className="form-control "
                        name="deceasedFullName"
                        id="deceasedFullName"
                        value="The Bahamas"
                        style={{
                          borderRadius: "0px",
                          borderColor: "rgba(151, 151, 151, 1)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div class=" row mb-3  ">
                    <label htmlFor="deceasedFullName" class="col-sm-3 col-4 ">
                      Grant Nature
                    </label>
                    <div class="col-sm-9 col-8">
                      <input
                        type="text"
                        className="form-control "
                        name="deceasedFullName"
                        id="deceasedFullName"
                        value="Probate"
                        style={{
                          borderRadius: "0px",
                          borderColor: "rgba(151, 151, 151, 1)",
                        }}
                      />
                    </div>
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
