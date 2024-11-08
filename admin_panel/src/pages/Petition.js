import React, { useState, useEffect } from "react";
import SubNavbar from "../components/SubNavbar";
import { UploadDocument } from "../components/UploadDocument";
import { ReviewDocument } from "../components/ReviewDocument";
import { PetitionModel } from "../components/Petition/PetitionModel";
import { useLocation } from "react-router-dom";
import { ExecutorModel } from "../components/OathExecutor/ExecutorModel";
import { AffidavitModel } from "../components/Affidavit/AffidavitModel";

export const Petition = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [gender, setGender] = useState("male");
  const [isEditMode, setIsEditMode] = useState(false);
  const [completionForm, setCompletionForm] = useState(false);
  const [showTabs, setShowTabs] = useState(true); // State to control tab visibility

  const tabs = [
    "The Petition",
    "Oath of an Executor",
    "Affidavit of Attesting",
    "Upload Document",
    "Review",
  ];

  const progress = ((activeTab + 1) / tabs.length) * 100;
  const progressPercentage = activeTab === 0 ? 1 : progress;

  // Handle next button
  const handleNext = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
      setCompletionForm(false);
    } else {
      setCompletionForm(false);
    }
  };

  const handleEditClick = () => {
    setIsEditMode(true); // Enable edit mode
    setShowModal(true); // Show the form modal
  };

  const handleFormCompletion = (message) => {
    setCompletionForm(message);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showModal]);

  return (
    <div className="">
      <div className="border-top border-bottom py-2 pt-2 bg-light border-black text-dark">
        <h2 className="ms-md-5 ms-3 fs-5 fw-bold">Probate</h2>
      </div>

      {showTabs ? (
        <div className="pt-4 overflow-auto" style={{ scrollbarWidth: "none" }}>
          <div className="d-flex justify-content-center">
            <ul
              className="nav nav-tabs gap-2 w-auto mx-3 mx-md-0 overflow-auto flex-nowrap"
              style={{
                whiteSpace: "nowrap",
                scrollbarWidth: "none",
              }}
            >
              {tabs.map((tab, index) => (
                <li className="nav-item" key={index}>
                  <button
                    className={`nav-link rounded-0  ${
                      activeTab === index ? "active text-white" : ""
                    }`}
                    onClick={() => {
                      setActiveTab(index);
                    }}
                    style={{
                      cursor: "default",
                      fontSize: "14px",
                      backgroundColor:
                        activeTab === index
                          ? "rgb(0, 150, 136)"
                          : "transparent",
                      border: "1px dashed rgb(159, 159, 159)",
                      boxShadow: "4px 6px 6px 0px rgba(0, 0, 0, 0.25)",
                      color: activeTab === index ? "white" : "#646363",
                    }}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-md-flex justify-content-center mt-3 pb-4 border-bottom border-black">
            <div
              className="progress mx-3 mx-md-0"
              style={{
                width: "71%",
                height: "14px",
                backgroundColor: "rgba(151, 151, 151, 1)",
              }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${progressPercentage}%`,
                  backgroundColor: "rgb(0, 150, 136)",
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        " "
      )}

      {/* Conditionally show the content based on activeTab */}
      {activeTab === 3 ? (
        <UploadDocument activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : activeTab === 4 ? (
        <ReviewDocument
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onComplete={handleFormCompletion}
          showTabs={showTabs}
          setShowTabs={setShowTabs}
        />
      ) : (
        <div>
          {completionForm ? (
            <>
              <div className="bgcustom-color w-100 container m-0 d-flex align-items-center pt-3 mt-1">
                <p
                  className="text-white ms-md-5 px-3 fs-5 lh-2 lh-md-0"
                  style={{ fontFamily: "Istok Web, sans-serif" }}
                >
                  <span className="fw-bold">Note:</span> You have{" "}
                  <span className="fw-bold">successfully completed</span>{" "}
                  {tabs[activeTab]}
                </p>
              </div>
              <div className="d-flex mt-5" style={{ marginLeft: "15%" }}>
                <div className="me-2">
                  <button
                    className="text-white py-1 px-5 d-flex gap-2 align-items-center justify-content-center fs-5 custom-button rounded-5"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <button
                    className="text-white py-1 px-5 fs-5 custom-button rounded-5"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="container mt-4 col-md-8 col-12 justify-content-center">
              <div className="bgcustom-color mx-0 text-white border border-black border-bottom-0 text-center px-3 py-3 text-white fw-semibold fs-5">
                About '{tabs[activeTab]}'
              </div>
              <div className="p-3 border border-dark border-top-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>

              <div className="mt-3 text-white">
                <button
                  className="text-white py-1 px-4 d-flex gap-2 align-items-center justify-content-center fs-5 custom-button rounded-5"
                  onClick={() => setShowModal(true)}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {activeTab === 0 && showModal && (
        <PetitionModel
          onComplete={handleFormCompletion}
          setShowModal={setShowModal}
          isEditMode={isEditMode}
        />
      )}
      {activeTab === 1 && showModal && (
        <ExecutorModel
          onComplete={handleFormCompletion}
          setShowModal={setShowModal}
          isEditMode={isEditMode}
        />
      )}
      {activeTab === 2 && showModal && (
        <AffidavitModel
          onComplete={handleFormCompletion}
          setShowModal={setShowModal}
          isEditMode={isEditMode}
        />
      )}
    </div>
  );
};
