import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import backIcon from "../../assets/back-icon.svg";
import { Modal } from "bootstrap"; // Import Bootstrap Modal
import data from "../../FormData";
import coatArm from "../../assets/Coat_of_arms_of_the_Bahamas 1.svg";
import BahamasLogo from "../../assets/bahams-logo.svg";
import scanImage from "../../assets/scanImage.svg";
import closeIcon from "../../assets/closeIcon.svg";
export const PreviewModel = () => {
  const [index, setIndex] = useState(0);
  const totalPages = 2;
  const handleNextClick = () => {
    if (index < totalPages - 1) {
      setIndex(index + 1);
    }
  };
  const handleBackClick = () => {
    setIndex(index - 1);
  };
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered "
          style={{
            maxWidth: "595px",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          }}
        >
          <div
            className="modal-content text-center"
            style={{ color: "rgba(0, 0, 0, 1)" }}
          >
            <div className="modal-body mt-md-3 pt-5 position-relative d-flex  justify-content-between align-items-center">
              <div className=" position-absolute  close-btn-container">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={closeIcon} alt="closeIcon" />
                </button>
              </div>
              <img src={coatArm} />
              <div className="text-center pt-3 flex-1  ">
                <h1 className="  fw-bold" style={{ fontSize: "14px" }}>
                  COMMONWEALTH OF THE BAHAMAS
                </h1>
                <h2
                  className="  fw-bold text-decoration-underline"
                  style={{ fontSize: "12px" }}
                >
                  JUDICIARY THE BAHAMAS
                </h2>
              </div>

              <img src={BahamasLogo} className="img-fluid" />
            </div>
            <h3
              className="mt-2 fs-6 text-decoration-underline"
              style={{ fontWeight: "600" }}
            >
              The PETITION
            </h3>
            <div className="d-flex justify-content-between mx-md-4 mx-2 mt-5 ">
              <div className="text-start">
                <h3 style={{ fontSize: "12px", fontWeight: "600" }}>
                  IN THE SUPREME COURT
                </h3>
                <h4 style={{ fontSize: "12px", fontWeight: "600" }}>
                  PROBATE DIVISION
                </h4>
              </div>
              <div className="text-end align-items-center d-flex">
                <h4 style={{ fontSize: "12px", fontWeight: "400" }}>
                  2022/PRO/npr/
                </h4>
              </div>
            </div>
            {index === 0 && (
              <>
                <div className="mt-5 mx-md-4  mx-2 text-start lh-4">
                  <p className="custom-paragraph ">
                    In the Estate of
                    <span className="fw-bold text-decoration-underline text-uppercase">
                      {" "}
                      John Smith{" "}
                    </span>
                    , late of Bahamas Boulevard, Hope Town on the Island of
                    Abaco one of the Islands of the Commonwealth of The Bahamas,
                    deceased.
                  </p>
                </div>
                <div className="mt-4 mx-md-4 mx-2 text-start lh-4">
                  <p className="custom-paragraph">
                    Application is hereby made for a
                    <span className="fw-bold text-decoration-underline">
                      {" "}
                      GRANT OF PROBATE{" "}
                    </span>
                    in respect of the real and personal estate and effects of
                    <span className="fw-bold text-decoration-underline text-uppercase">
                      {" "}
                      John Smith{" "}
                    </span>
                    late of Bahamas Boulevard, Hope Town on the Island of Abaco
                    one of the Islands of the Commonwealth of The Bahamas,
                    deceased.
                  </p>
                </div>
                <div className="d-flex justify-content-between mt-4 mb-4 align-items-center mx-md-4 mx-2">
                  <div className="d-flex align-items-center ">
                    <p style={{ fontSize: "12px" }} className="me-2 mb-0">
                      Signature
                    </p>
                    <span
                      style={{
                        borderTop: "0.5px dotted rgba(0, 0, 0, 1)",
                        width: "60px",
                        height: "0",
                        marginBottom: "0",
                      }}
                      className="flex-grow-1"
                    ></span>
                  </div>
                  <div className="d-flex align-items-center ">
                    <p style={{ fontSize: "12px" }} className="me-2 mb-0">
                      Dated the
                    </p>

                    <span
                      style={{
                        borderBottom: "1px dotted black",
                        fontSize: "12px",
                      }}
                    >
                      02/25/2024
                    </span>
                  </div>
                </div>
                <div className="text-end mx-4 pb-5">
                  <span style={{ cursor: "pointer" }}>&lt;</span>
                  <span style={{ fontSize: "12px", alignItems: "center" }}>
                    1/2
                  </span>
                  <span onClick={handleNextClick} style={{ cursor: "pointer" }}>
                    &gt;
                  </span>
                </div>
              </>
            )}
            {index === 1 && (
              <>
                <div className="mt-5 mx-4 text-start lh-4">
                  <p className="custom-paragraph">
                    In the Estate of
                    <span className="fw-bold text-decoration-underline">
                      {" "}
                      John Smith{" "}
                    </span>
                    , late of Bahamas Boulevard, Hope Town on the Island of
                    Abaco one of the Islands of the Commonwealth of The Bahamas,
                    deceased.
                  </p>
                </div>
                <div
                  className="border border-top border-dark mx-4 mt-4"
                  style={{ borderColor: "rgba(0, 0, 0, 1)" }}
                ></div>
                <span
                  className="p-3"
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  PETITION
                </span>
                <div
                  className="border border-top border-dark mx-4"
                  style={{ borderColor: "rgba(0, 0, 0, 1)" }}
                ></div>
                <div className="d-flex justify-content-between mt-5 align-items-center mx-4 mb-4">
                  <p style={{ fontSize: "12px", fontWeight: "400" }}>
                    Filed the 02 day of March A.D. 2023
                  </p>
                  <div className="d-flex flex-column">
                    <p
                      className="mb-1"
                      style={{ fontSize: "12px", fontWeight: "600" }}
                    >
                      Johnson Brown{" "}
                    </p>

                    <p
                      style={{
                        borderTop: "1px dotted black",
                        fontSize: "10px",
                        fontWeight: "600",
                      }}
                      className="pt-1"
                    >
                      (Print name and address of Law firm or Applicant)
                    </p>
                  </div>
                </div>

                <div className="text-end mx-4 ">
                  <span onClick={handleBackClick} style={{ cursor: "pointer" }}>
                    &lt;
                  </span>
                  <span style={{ fontSize: "12px" }}>{index + 1}/2</span>
                  <span onClick={handleNextClick} style={{ cursor: "pointer" }}>
                    &gt;
                  </span>
                </div>
                <div className="d-flex justify-content-between mx-4 mt-4 align-items-center mb-5">
                  <h1 style={{ fontSize: "12px", fontWeight: "600" }}>
                    To: The Registrar of the Supreme Court.
                  </h1>
                  <img src={scanImage} alt="scanImage" className="me-3" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
