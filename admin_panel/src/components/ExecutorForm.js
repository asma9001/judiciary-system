import React from "react";
import editIcon from "../assets/editIcon.svg";
import previewIcon from "../assets/previewIcon.svg";
export const ExecutorForm = () => {
  return (
    <div className="container px-md-5 mt-4 ">
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
            Oath for an Executor
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
              <span style={{ fontSize: "12px" }}>Edit</span>
            </button>
            <button
              // data-bs-toggle="modal"
              // data-bs-target="#staticBackdrop"
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
            {/* <PreviewModel /> */}
          </div>
        </div>

        <div className="py-4 d-none d-md-block mx-5">
          <form>
            <div className="row ">
              <div className="col-12 col-md-6">
                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Applicant Full Name
                  </label>
                  <div class="col-sm-9 col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Johnson Brown "
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class=" col-4 lh-1">
                    Applicant Address
                  </label>
                  <div class=" col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Address"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 ">
                    Applicant City
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Hope Town"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>

                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Is there a Codicil
                  </label>
                  <div class="col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0 px-4 border-1 bgcustom-color fs-5 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="me-2 rounded-0 
                      border-1 bg-transparent fs-5 px-4 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Death Address
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Address Line"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>

                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 text-center">
                    City
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Hope Town"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>

                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Deceased Domiciled Address
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Hope Town"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>

                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 text-center">
                    City
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Hope Town"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>

                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4  lh-1">
                    Did the deceased own property
                  </label>
                  <div class="col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0 px-4 border-1 bgcustom-color fs-5 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="me-2 rounded-0 
                      border-1 bg-transparent fs-5 px-4 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Property Description
                  </label>
                  <div class="col-8">
                    <input
                      type="text"
                      className="form-control w-100 "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Hope Town"
                      style={{
                        borderRadius: "0px",

                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 fs-6 lh-1">
                    Reserved Power Notice for Executors
                  </label>
                  <div class="col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0 px-4 border-1 bgcustom-color fs-5 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="me-2 rounded-0 
                      border-1 bg-transparent px-4 fs-5 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 fs-6 lh-1">
                    Name Executor
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Jenifer Smith"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 fs-6 lh-1">
                    Given notice Date
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="02-02-2020"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 fs-6 lh-1">
                    Did any Executors renounced
                  </label>
                  <div class="col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0  border-1 bgcustom-color px-4 fs-5 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="me-2 rounded-0 
                      border-1 bg-transparent fs-5 px-4 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 fs-6 lh-1">
                    Renounced Name
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Joseph Gry"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Applicant Occupation
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Engineer "
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>

                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-4  lh-1">
                    Applicant Island
                  </label>
                  <div class="col-8 ">
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

                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-4 ">
                    Country
                  </label>
                  <div class="col-8 ">
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

                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Death Date of Deceased
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="02-02-2022"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>

                <div class=" row mb-3 text-center">
                  <label htmlFor="deceasedFullName" class="col-4  ">
                    Island
                  </label>
                  <div class="col-8 ">
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

                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 ">
                    Country
                  </label>
                  <div class="col-8 ">
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

                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Choose one
                  </label>
                  <div class="col-8 ">
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

                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Did any of the Executors died
                  </label>
                  <div class="col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0 px-4 border-1 bgcustom-color fs-5 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="me-2 rounded-0 
                      border-1 bg-transparent px-4 fs-5 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div class="row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Died Executor Name
                  </label>
                  <div class="col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Phil Green"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>

                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Executor Died Date
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="06-06-2021"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>

                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Personal estate value
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="B$ 100,000"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>

                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Personal estate value
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="B$ 100,000"
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

        {/* Mobile view */}
        <div className="py-4 d-md-none mx-md-5 mx-2">
          <form>
            <div className="row ">
              <div className="col-12 ">
                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Applicant Full Name
                  </label>
                  <div class="col-sm-9 col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Johnson Brown "
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class=" col-4 lh-1">
                    Applicant Address
                  </label>
                  <div class=" col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Address"
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
                  <label htmlFor="deceasedFullName" class="col-4 ">
                    Applicant City
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Hope Town"
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
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Is there a Codicil
                  </label>
                  <div class="col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0 px-4 border-1 bgcustom-color fs-5 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="me-2 rounded-0 
                      border-1 bg-transparent fs-5 px-4 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Death Address
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Address Line"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 text-center">
                    City
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Hope Town"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Deceased Domiciled Address
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Hope Town"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 text-center">
                    City
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Hope Town"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4  lh-1">
                    Did the deceased own property
                  </label>
                  <div class="col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0 px-4 border-1 bgcustom-color fs-5 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="me-2 rounded-0 
                      border-1 bg-transparent fs-5 px-4 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Applicant Occupation
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Engineer "
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-4  lh-1">
                    Applicant Island
                  </label>
                  <div class="col-8 ">
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
                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-4 ">
                    Country
                  </label>
                  <div class="col-8 ">
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
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Death Date of Deceased
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="02-02-2022"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div class=" row mb-3 text-center">
                  <label htmlFor="deceasedFullName" class="col-4  ">
                    Island
                  </label>
                  <div class="col-8 ">
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
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 ">
                    Country
                  </label>
                  <div class="col-8 ">
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
              <div className="col-12">
                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Choose one
                  </label>
                  <div class="col-8 ">
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
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Property Description
                  </label>
                  <div class="col-8">
                    <input
                      type="text"
                      className="form-control w-100 "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Hope Town"
                      style={{
                        borderRadius: "0px",

                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 fs-6 lh-1">
                    Reserved Power Notice for Executors
                  </label>
                  <div class="col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0 px-4 border-1 bgcustom-color fs-5 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="me-2 rounded-0 
                      border-1 bg-transparent px-4 fs-5 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 fs-6 lh-1">
                    Name Executor
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Jenifer Smith"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 fs-6 lh-1">
                    Given notice Date
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="02-02-2020"
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
                  <label htmlFor="deceasedFullName" class="col-4 fs-6 lh-1">
                    Did any Executors renounced
                  </label>
                  <div class="col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0  border-1 bgcustom-color px-4 fs-5 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="me-2 rounded-0 
                      border-1 bg-transparent fs-5 px-4 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div class="row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 fs-6 lh-1">
                    Renounced Name
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Joseph Gry"
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
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Did any of the Executors died
                  </label>
                  <div class="col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0 px-4 border-1 bgcustom-color fs-5 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="me-2 rounded-0 
                      border-1 bg-transparent px-4 fs-5 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class="row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Died Executor Name
                  </label>
                  <div class="col-8">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Phil Green"
                      style={{
                        borderRadius: "0px",
                        borderColor: "rgba(151, 151, 151, 1)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Executor Died Date
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="06-06-2021"
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
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Personal estate value
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="B$ 100,000"
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
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Personal estate value
                  </label>
                  <div class="col-8 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="B$ 100,000"
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
      </div>
    </div>
  );
};
