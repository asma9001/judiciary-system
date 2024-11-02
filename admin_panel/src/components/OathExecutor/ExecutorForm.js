import React, { useState, useEffect } from "react";
import editIcon from "../../assets/editIcon.svg";
import previewIcon from "../../assets/previewIcon.svg";
import feedbackIcon from "../../assets/feedbackIcon.svg";
import { ExecutorPreviewModel } from "../OathExecutor/ExecutorPreviewModel";
import ExecutorFeedback from "../../components/OathExecutor/ExecutorFeedback";
export const ExecutorForm = ({
  activeTab,
  setActiveTab,
  onComplete,
  isReviewFeedback,
  setIsReviewFeedback,
}) => {
  const [savedData, setSavedData] = useState({});
  const [showExecutorFeedback, setShowExecutorFeedback] = useState(false);
  const handleEditClick = () => {
    setActiveTab(1);
    onComplete(true);
  };
  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      const parsedData = JSON.parse(data);
      setSavedData(parsedData);
      // if (parsedData.gender === "Male") {
      //   setIsMaleActive(true);
      //   setIsFemaleActive(false);
      // } else if (parsedData.gender === "Female") {
      //   setIsMaleActive(false);
      //   setIsFemaleActive(true);
      // }
    }
  }, []);
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
            {!isReviewFeedback ? (
              <button
                onClick={handleEditClick}
                type="button"
                className="d-flex align-items-center bg-white rounded-2 border-0 px-md-3 px-2 py-1 me-2 mb-2"
                style={{
                  color: "rgba(60, 156, 219, 1)",
                }}
              >
                <img
                  src={editIcon}
                  alt="editIcon"
                  className="me-2"
                  style={{ width: "15px", height: "15px" }}
                />

                <span style={{ fontSize: "12px" }}>Edit</span>
              </button>
            ) : (
              <>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#executorPreviewModal"
                  type="button"
                  className="d-flex align-items-center bg-white rounded-2 border-0 px-md-2 px-2 py-1 me-2 mb-2"
                >
                  <img
                    src={previewIcon}
                    alt="previewIcon"
                    className="me-1"
                    style={{ width: "20px", height: "20px" }}
                  />

                  <span style={{ fontSize: "12px" }}>Preview</span>
                </button>
                <ExecutorPreviewModel />
              </>
            )}

            {!isReviewFeedback ? (
              <>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#executorPreviewModal"
                  type="button"
                  className="d-flex align-items-center bg-white rounded-2 border-0 px-md-2 px-2 py-1 mb-2"
                >
                  <img
                    src={previewIcon}
                    alt="previewIcon"
                    className="me-2"
                    style={{ width: "15px", height: "15px" }}
                  />

                  <span style={{ fontSize: "12px" }}>Preview</span>
                </button>
                <ExecutorPreviewModel />
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowExecutorFeedback(true)}
                  type="button"
                  className="d-flex align-items-center bg-white rounded-2 border-0 px-md-2 px-2 py-1 mb-2"
                >
                  <img
                    src={feedbackIcon}
                    alt="feedbackIcon"
                    className="me-1"
                    style={{ width: "20px", height: "20px" }}
                  />

                  <span style={{ fontSize: "12px" }}>Write Feedback</span>
                </button>
                {showExecutorFeedback && (
                  <ExecutorFeedback
                    showExecutorFeedback={showExecutorFeedback}
                    setShowExecutorFeedback={setShowExecutorFeedback}
                  />
                )}
              </>
            )}
          </div>
        </div>

        <div className="py-4  mx-md-5 mx-2">
          <form>
            <div className="row ">
              <div className="col-12 col-md-6 ">
                <div class=" row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Applicant Full Name
                  </label>
                  <div class="col-sm-9 col-8 ">
                    <input
                      value={savedData.firstName}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>
                <div class=" row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Applicant Address
                  </label>
                  <div class=" col-sm-9 col-8">
                    <input
                      value={savedData.address}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class="row mb-3 text-end ">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 col-4 lh-1 "
                  >
                    Applicant City
                  </label>
                  <div class="col-sm-9 col-8 ">
                    <input
                      value={savedData.city}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Is there a Codicil
                  </label>
                  <div class="col-sm-9 col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0 px-4 py-2 border-1 
                      bgcustom-color text-white flex-fill"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                        fontSize: "16px",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className=" rounded-0 
                      border-1 bg-transparent flex-fill fs-6 px-4 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div class="row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Death Address
                  </label>
                  <div class="col-sm-9 col-8 ">
                    <input
                      value={savedData.address}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3 text-end d-flex align-items-center">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 col-4 lh-1 "
                  >
                    City
                  </label>
                  <div class="col-sm-9 col-8 ">
                    <input
                      value={savedData.city}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Deceased Domiciled Address
                  </label>
                  <div class="col-sm-9 col-8 ">
                    <input
                      value={savedData.address}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3 text-end d-flex align-items-center">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    City
                  </label>
                  <div class="col-sm-9 col-8 ">
                    <input
                      value={savedData.city}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class="row mb-3 text-end justify-content-end">
                  <label
                    htmlFor="deceasedFullName"
                    class=" col-3 lh-1"
                    style={{ fontSize: "16px" }}
                  >
                    Did the deceased own property
                  </label>
                  <div class=" col-9 d-flex ">
                    <button
                      type="button"
                      className="me-2 flex-fill py-2 rounded-0 px-4 border-1 bgcustom-color fs-6 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                        height: "40px",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className=" flex-fill rounded-0 
                      border-1 bg-transparent fs-6 py-2 px-4 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                        height: "40px",
                      }}
                    >
                      No
                    </button>
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
                      value="Engineer"
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3 ">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Applicant Island
                  </label>
                  <div class="col-sm-9 col-8 ">
                    <input
                      value={savedData.island}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3 d-flex align-items-center text-end">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 col-4 lh-1 "
                  >
                    Country
                  </label>
                  <div class="col-sm-9 col-8 ">
                    <input
                      value={savedData.country}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Death Date of Deceased
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      value="02-02-2020"
                      // type="date"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3 d-flex align-items-center text-end">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 col-4 lh-1  "
                  >
                    Island
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      value={savedData.island}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3 d-flex align-items-center text-end">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 col-4 lh-1 "
                  >
                    Country
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      value={savedData.country}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>
                <div class=" row mb-3 d-flex align-items-center text-end">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 col-4 lh-1  "
                  >
                    Island
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      value={savedData.island}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3 d-flex align-items-center text-end">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 col-4 lh-1 "
                  >
                    Country
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      value={savedData.country}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>
                <div class="row mb-3 d-flex align-items-center text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Choose one
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      value="I am the executor"
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row mb-3">
                  <label
                    htmlFor="propertyDescription"
                    className="col-sm-3 col-4 lh-1"
                  >
                    Property Description
                  </label>
                  <div className="col-sm-9 col-8">
                    <input
                      value="Property Description"
                      type="text"
                      className="form-control"
                      name="propertyDescription"
                      id="propertyDescription"
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="row mb-3">
                  <label
                    htmlFor="deceasedFullName"
                    className="col-sm-3 col-4 lh-1"
                  >
                    Reserved Power Notice for Executors
                  </label>
                  <div className="col-sm-9 col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 flex-fill rounded-0 px-4 border-1 bgcustom-color fs-6 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                        height: "40px", // Set the fixed height
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="flex-fill rounded-0 
        border-1 bg-transparent px-4 fs-5 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                        height: "40px", // Set the fixed height
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div class="row mb-3 d-flex align-items-center text-end">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 col-4 fs-6 lh-1"
                  >
                    Name Executor
                  </label>
                  <div class="col-8 col-sm-9 ">
                    <input
                      value="Jenifer Smith"
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>
                <div class=" row mb-3 d-flex align-items-center text-end">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 col-4 fs-6 lh-1"
                  >
                    Given notice Date
                  </label>
                  <div class="col-8 col-sm-9">
                    <input
                      value="02-02-2020"
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>
                <div class="row mb-3 text-end">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-4 col-sm-3 fs-6 lh-1"
                  >
                    Did any Executors renounced
                  </label>
                  <div class="col-8 col-sm-9 d-flex ">
                    <button
                      type="button"
                      className="me-2 rounded-0 flex-fill border-1 bgcustom-color px-4 fs-6 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                        height: "40px",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="flex-fill rounded-0 
                      border-1 bg-transparent fs-6 px-4 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                        height: "40px",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div class="row mb-3 text-end">
                  <label
                    htmlFor="deceasedFullName"
                    class="col-sm-3 col-4 fs-6 lh-1"
                  >
                    Renounced Name
                  </label>
                  <div class="col-8 col-sm-9">
                    <input
                      value="Joseph Gry"
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div class="row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Did any of the Executors died
                  </label>
                  <div class="col-sm-9 col-8 d-flex ">
                    <button
                      type="button"
                      className="me-2 flex-fill rounded-0 px-4 border-1 bgcustom-color fs-5 text-white"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                        height: "40px",
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="flex-fill rounded-0 
                      border-1 bg-transparent px-4 fs-5 text-black"
                      style={{
                        borderColor: "rgba(125, 125, 125, 1)",
                        height: "40px",
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div class="row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Died Executor Name
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      value="Phil Green"
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Executor Died Date
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      value="06-06-2021"
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>
                <div class=" row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Personal estate value
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      value="One hundred thousand Dollar only"
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row mb-3 text-end">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4 lh-1">
                    Personal estate value
                  </label>
                  <div class="col-sm-9 col-8 ">
                    <input
                      value="B$ 100,000"
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
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
