import React from "react";
import editIcon from "../assets/editIcon.svg";
import previewIcon from "../assets/previewIcon.svg";
export const AffidavitForm = () => {
  return (
    <div className="container px-md-5 mt-4">
      <div style={{ boxShadow: "3px 3px 4px 0px rgba(0, 0, 0, 0.25)" }}>
        <div
          className="d-flex px-md-5 justify-content-between align-items-center"
          style={{
            backgroundColor: "rgba(0, 150, 136, 1)",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          <h4 className="  text-white p-2 fs-md-5 fs-6 text-decoration-underline">
            Affidavit of Attesting
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
            <button
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
          </div>
        </div>
        {/* Desktop View */}
        <div className=" py-4 d-none d-md-block mx-5 ">
          <form>
            <div className="row mb-3">
              <div className="col-md-6 ">
                <div class="form-group row text-center ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 lh-1">
                    Witness Full Name
                  </label>
                  <div class="col-sm-9 ">
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
                    Gender of witness
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
                    Occupation
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
                    Address
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
                    City
                  </label>
                  <div class="col-sm-9 ">
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
            </div>
            <div className="row mb-3  ">
              <div className="col-md-6 ">
                <div class="form-group row text-center ">
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

              <div className="col-md-6 ">
                <div class="form-group row d-flex align-items-center text-center ">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 text-center lh-1"
                  >
                    Document witness
                  </label>

                  <div class="col-sm-9 d-flex">
                    <button
                      type="button"
                      className="me-4 rounded-0 text-center px-3 py-1 border-1 bgcustom-color fs-6 text-white"
                      style={{ borderColor: "rgba(125, 125, 125, 1)" }}
                    >
                      Last Will and testament
                    </button>
                    <button
                      type="button"
                      className=" rounded-0 px-3 text-center   border-1 bg-transparent fs-6 text-black"
                      style={{ borderColor: "rgba(125, 125, 125, 1)" }}
                    >
                      Codicil
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3  ">
              <div className="col-md-6 ">
                <div class="form-group row text-center ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 lh-1">
                    Date of Will or Codicil
                  </label>
                  <div class="col-sm-9 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="03-03-2020"
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
                    Enter other witness name
                  </label>
                  <div class="col-sm-9 ">
                    <input
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                      value="Michael Fid"
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

        {/* Mobile View */}
        <div className=" py-4 d-md-none mx-md-5 mx-2 ">
          <form>
            <div className="row ">
              <div className="col-12 ">
                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Witness Full Name
                  </label>
                  <div class="col-8 ">
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
                  <div class="row mb-3 ">
                    <label htmlFor="deceasedFullName" class="col-4 lh-1">
                      Occupation
                    </label>
                    <div class="col-8 ">
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
                  <div class=" row mb-3 text-end">
                    <label htmlFor="deceasedFullName" class="col-4 ">
                      Island
                    </label>
                    <div class="col-8">
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
                  <div class="row mb-3 text-end">
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
                      Date of Will or Codicil
                    </label>
                    <div class="col-8 ">
                      <input
                        type="text"
                        className="form-control "
                        name="deceasedFullName"
                        id="deceasedFullName"
                        value="03-03-2020"
                        style={{
                          borderRadius: "0px",
                          borderColor: "rgba(151, 151, 151, 1)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 d-flex">
                  <div class="row mb-3 ">
                    <label htmlFor="deceasedFullName" class="col-4 lh-1">
                      Gender of witness
                    </label>
                    <div class="col-8 d-flex">
                      <button
                        type="button"
                        className="me-2 rounded-0 px-md-5 px-3  border-1 bgcustom-color fs-5 text-white"
                        style={{ borderColor: "rgba(125, 125, 125, 1)" }}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        className="me-2 rounded-0 px-md-5 px-3  border-1 bg-transparent fs-5 text-black"
                        style={{ borderColor: "rgba(125, 125, 125, 1)" }}
                      >
                        Female
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <div class=" row mb-3 text-end d-flex align-items-center">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Address
                  </label>
                  <div class="col-8 ">
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
                <div class="row mb-3 text-end d-flex align-items-center">
                  <label htmlFor="deceasedFullName" class="col-4 ">
                    City
                  </label>
                  <div class="col-8">
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
                <div class="row mb-3 d-flex align-items-center text-end ">
                  <label htmlFor="deceasedFullName" class="col-4 lh-1">
                    Document witness
                  </label>

                  <div class="col-8 d-flex">
                    <button
                      type="button"
                      className="me-3 rounded-0 text-center px-md-3 px-2 py-1 border-1 bgcustom-color fs-6 text-white"
                      style={{ borderColor: "rgba(125, 125, 125, 1)" }}
                    >
                      Last Will and testament
                    </button>
                    <button
                      type="button"
                      className=" rounded-0 px-md-3 px-2    border-1 bg-transparent fs-6 text-black"
                      style={{ borderColor: "rgba(125, 125, 125, 1)" }}
                    >
                      Codicil
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 ">
              <div class="row d-flex align-items-center text-end ">
                <label htmlFor="deceasedFullName" class="col-4 lh-1">
                  Enter other witness name
                </label>
                <div class="col-8 ">
                  <input
                    type="text"
                    className="form-control "
                    name="deceasedFullName"
                    id="deceasedFullName"
                    value="Michael Fid"
                    style={{
                      borderRadius: "0px",
                      borderColor: "rgba(151, 151, 151, 1)",
                    }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
