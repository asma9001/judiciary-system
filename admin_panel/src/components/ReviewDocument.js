import React, { useState, useEffect } from "react";

import { PetitionForm } from "../components/Petition/PetitionForm";
import { ExecutorForm } from "../components/OathExecutor/ExecutorForm";
import { AffidavitForm } from "../components/Affidavit/AffidavitForm";
import { DocumentLibrary } from "../components/DocumentLibrary";
import feedbackIcon from "../assets/feedbackIcon.svg";
import editIcon from "../assets/editIcon.svg";
import backIcon from "../assets/back-icon.svg";
import { useNavigate } from "react-router-dom";
import SubmitPopup from "../pages/SubmitPopup";
import downarrow from "../assets/downarrow.svg";
import FormsStatusPopup from "../components/FormsStatusPopup";
export const ReviewDocument = ({
  activeTab,
  setActiveTab,
  onComplete,
  showTabs,
  setShowTabs,
  isReviewFeedback,
  setIsReviewFeedback,
  showReview,
  setShowReview,
}) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleBackClick = () => {
    setActiveTab(activeTab - 1);
  };
  const handleEditClick = () => {
    setActiveTab(3);
  };
  const handleSubmit = () => {
    setShowPopup(true);
    setShowTabs(false);
  };
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showPopup]);
  return (
    <div>
      {!showPopup ? (
        <>
          <PetitionForm
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onComplete={onComplete}
            isReviewFeedback={isReviewFeedback}
            setIsReviewFeedback={setIsReviewFeedback}
          />
          <ExecutorForm
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onComplete={onComplete}
            isReviewFeedback={isReviewFeedback}
            setIsReviewFeedback={setIsReviewFeedback}
          />
          <AffidavitForm
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onComplete={onComplete}
            isReviewFeedback={isReviewFeedback}
            setIsReviewFeedback={setIsReviewFeedback}
          />
          <div className="container px-md-5 mt-4">
            <div style={{ boxShadow: "3px 3px 4px 0px rgba(0, 0, 0, 0.25)" }}>
              <div
                className="d-flex px-md-5 justify-content-between align-items-center"
                style={{
                  backgroundColor: "rgba(0, 150, 136, 1)",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                <h4 className="  text-white p-2 fs-5 text-decoration-underline">
                  Uploaded Documents
                </h4>
                <div className="d-flex justify-content-end me-2">
                  <button
                    onClick={handleEditClick}
                    type="button"
                    className="d-flex align-items-center bg-white rounded-2 border-0 px-md-3 px-2 py-1 me-2 mb-2"
                    style={{ color: "rgba(60, 156, 219, 1)" }}
                  >
                    {isReviewFeedback ? (
                      <img
                        src={editIcon}
                        alt="editIcon"
                        className="me-2"
                        style={{ width: "15px", height: "15px" }}
                      />
                    ) : (
                      <img
                        src={feedbackIcon}
                        alt="feedbackIcon"
                        className="me-2"
                        style={{ width: "20px", height: "20px" }}
                      />
                    )}
                    <span style={{ fontSize: "12px" }}>
                      {isReviewFeedback ? "Edit" : "Write Feedback"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="py-md-4 mx-md-5 mt-md-0 mt-5">
                <DocumentLibrary />
              </div>
            </div>
            {!isReviewFeedback && (
              <div class="form-check gap-3 gap-md-2 mt-md-3 mt-4 d-flex align-items-center">
                <input
                  class="form-check-input custom-checkbox fs-md-5 "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{
                    boxShadow: "none",
                    boxShadow: "inset 2px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    borderColor: "rgba(0, 0, 0, 1)",
                    borderRadius: "0",
                    color: "white",
                  }}
                />
                <label
                  class="form-check-label "
                  for="flexCheckDefault"
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "16px" }}
                >
                  By Checking this box, I certify all documents and statements
                  are true.
                </label>
              </div>
            )}

            {isReviewFeedback && (
              <>
                <div className="mt-4">
                  <div
                    style={{ boxShadow: "3px 3px 4px 0px rgba(0, 0, 0, 0.25)" }}
                  >
                    <div
                      className="d-flex px-md-5 justify-content-between align-items-center"
                      style={{
                        backgroundColor: "rgba(0, 150, 136, 1)",
                        color: "rgba(255, 255, 255, 1)",
                      }}
                    >
                      <h4 className="  text-white p-2 fs-5 text-decoration-underline">
                        Form Status
                      </h4>
                    </div>
                    <div className="py-md-4 mx-md-2 mt-md-0 mt-5">
                      <div className=" flex-row gap-2 gap-md-0 d-flex flex-md-row flex-column pb-3">
                        <div className="col-md-2  d-flex align-items-center">
                          <span className="fs-6">Change Form Status</span>
                        </div>
                        <div className="col-md-10 ">
                          <div
                            className="custom-select position-relative"
                            style={{ width: "42%" }}
                          >
                            <div
                              onClick={() => setIsOpen(!isOpen)}
                              className="d-flex align-items-center justify-content-between px-2 py-1"
                            >
                              <p
                                className="mb-0"
                                style={{
                                  visibility: "select status" && "hidden", // Hide placeholder if no selectedValue
                                }}
                              >
                                select status
                              </p>
                              <img src={downarrow} alt="Toggle" />
                            </div>
                            {isOpen && (
                              <div
                                className="position-absolute z-1 "
                                style={{
                                  top: "-570%",
                                  left: "-10%",

                                  minHeight: "30px",
                                }}
                              >
                                <FormsStatusPopup />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="d-flex ms-auto justify-content-end gap-3 my-5 ">
              {!isReviewFeedback && (
                <button
                  className="btn py-1 d-flex gap-2 align-items-center justify-content-center custom-button rounded-5"
                  onClick={handleBackClick}
                >
                  <img
                    src={backIcon}
                    alt="Back"
                    className="bg-transparent border border-white w-2 h-2 rounded-5 px-2 py-1"
                  />
                  <span className="text-white ps-3 pe-2 fs-5">Back</span>
                </button>
              )}
              {!isReviewFeedback ? (
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="text-white py-1 px-4 d-flex gap-2 align-items-center justify-content-center fs-5 custom-button rounded-5 "
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={() => setShowReview(false)}
                  type="button"
                  className="text-white py-1 px-4 d-flex gap-2 align-items-center justify-content-center fs-5 custom-button rounded-5 "
                >
                  Feedback Completed
                </button>
              )}
            </div>
          </div>
          }
        </>
      ) : (
        <SubmitPopup />
      )}
    </div>
  );
};
