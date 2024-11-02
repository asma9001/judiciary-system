import React, { useState, useEffect } from "react";
import editIcon from "../../assets/editIcon.svg";
import previewIcon from "../../assets/previewIcon.svg";
import { PreviewModel } from "../Petition/PreviewModel";
import feedbackIcon from "../../assets/feedbackIcon.svg";
import FeedbackPopup from "../Petition/FeedbackPopup";
export const PetitionForm = ({
  activeTab,
  setActiveTab,
  onComplete,
  isReviewFeedback,
  setIsReviewFeedback,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [savedData, setSavedData] = useState({});
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  const [isMaleActive, setIsMaleActive] = useState("male");
  const [isFemaleActive, setIsFemaleActive] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleEditClick = () => {
    setActiveTab(0);
    onComplete(true);
  };
  const handleMaleOptionClick = () => {
    setIsMaleActive(true);
    setIsFemaleActive(false);
  };
  const handleFemaleOptionClick = () => {
    setIsMaleActive(false);
    setIsFemaleActive(true);
  };
  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      const parsedData = JSON.parse(data);
      setSavedData(parsedData);
      if (parsedData.gender === "Male") {
        setIsMaleActive(true);
        setIsFemaleActive(false);
      } else if (parsedData.gender === "Female") {
        setIsMaleActive(false);
        setIsFemaleActive(true);
      }
    }
  }, []);

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
                  data-bs-target="#staticBackdrop"
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
                <PreviewModel />
              </>
            )}

            {!isReviewFeedback ? (
              <>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
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
                <PreviewModel />
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowFeedbackPopup(true)}
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
                {showFeedbackPopup && (
                  <FeedbackPopup
                    showFeedbackPopup={showFeedbackPopup}
                    setShowFeedbackPopup={setShowFeedbackPopup}
                  />
                )}
              </>
            )}
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
                    Deceased Address
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      value={savedData.address}
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
                    />
                  </div>
                </div>

                <div class=" row  mb-3 text-end align-items-center">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4  ">
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

                <div class="row mb-3 text-end align-items-center">
                  <label htmlFor="deceasedFullName" class="col-sm-3 col-4  ">
                    Dated The
                  </label>
                  <div class="col-sm-9 col-8">
                    <input
                      value="02-02-2023"
                    
                      type="text"
                      className="form-control "
                      name="deceasedFullName"
                      id="deceasedFullName"
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
                    <div className="d-flex">
                      <button
                        value={savedData.gender}
                        type="button"
                        onClick={handleMaleOptionClick}
                        className={`me-2 rounded-0 py-2 fw-bold flex-fill ${
                          isMaleActive
                            ? "bgcustom-color  text-white"
                            : "bg-transparent fw-light"
                        }`}
                        style={{
                          border: "1px solid rgba(125, 125, 125, 1)",
                          fontSize: "16px",
                          color: isMaleActive ? "white" : "rgba(0, 0, 0, 1)",
                        }}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        onClick={handleFemaleOptionClick}
                        className={`rounded-0 py-2 fw-bold flex-fill ${
                          isFemaleActive
                            ? "bgcustom-color fw-bold text-white"
                            : "bg-transparent"
                        }`}
                        style={{
                          border: "1px solid rgba(125, 125, 125, 1)",
                        }}
                      >
                        Female
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-3 row text-end align-items-center">
                  <label htmlFor="city" className="col-sm-3 col-4 lh-1">
                    City
                  </label>
                  <div className="col-sm-9 col-8">
                    <input
                      value={savedData.city}
                      type="text"
                      className="form-control"
                      name="city"
                      id="city"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="row mb-3 text-end align-items-center">
                  <label htmlFor="country" className="col-sm-3 col-4">
                    Country
                  </label>
                  <div className="col-sm-9 col-8">
                    <input
                      value={savedData.country}
                      type="text"
                      className="form-control"
                      name="country"
                      id="country"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="row mb-3 text-end">
                  <label htmlFor="grantNature" className="col-sm-3 col-4 lh-1">
                    Grant Nature
                  </label>
                  <div className="col-sm-9 col-8">
                    <input
                      value={savedData.nature}
                      type="text"
                      className="form-control"
                      name="grantNature"
                      id="grantNature"
                      defaultValue=""
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
