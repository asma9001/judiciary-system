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
export const AffidavitPreviewModel = () => {
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
        id="affidavitPreviewModal"
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
              Affidavit of Attesting
            </h3>
            {index === 0 && (
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
            )}

            {index === 0 && (
              <>
                <div className="mt-4 mx-md-4 custom-paragraph mx-2 text-start lh-4">
                  <p>
                    In the Estate of
                    <span className="fw-bold text-decoration-underline text-uppercase">
                      {" "}
                      John Smith{" "}
                    </span>
                    , late of Bahamas Boulevard, Hope Town on the Island of
                    Abaco one of the Islands of the Commonwealth of The Bahamas,
                    deceased.
                  </p>
                  <p>
                    I, Furqan Amjad, of Bahamas Boulevard, Hope Town in the
                    island of Abaco, Engineer make oath and say [do solemnly,
                    sincerely, and truly declare and affirm] that –
                  </p>
                  <p>
                    1. I am one of the attesting witnesses to the last will and
                    testament, of{" "}
                    <span className="fw-bold text-uppercase">
                      {" "}
                      BOBBY CHARLES LEWIS,
                    </span>{" "}
                    late of Bahamas Boulevard, Garden Hills on the Island of New
                    Providence one of the Islands of the Commonwealth of The
                    Bahamas, deceased.
                  </p>
                </div>

                <div className="text-end mx-4 ">
                  <span onClick={handleBackClick} style={{ cursor: "pointer" }}>
                    &lt;
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {index + 1}/{totalPages}
                  </span>
                  <span onClick={handleNextClick} style={{ cursor: "pointer" }}>
                    &gt;
                  </span>
                </div>

                <div className="d-flex justify-content-between mx-4 mt-5 align-items-center mb-5">
                  <h1 style={{ fontSize: "12px", fontWeight: "600" }}>
                    To: The Registrar of the Supreme Court.
                  </h1>
                  <img src={scanImage} alt="scanImage" className="me-3" />
                </div>
              </>
            )}
            {index === 1 && (
              <>
                <div className="mt-5 mx-md-4 custom-paragraph  mx-2 text-start lh-4">
                  <p>
                    2. The said will dated the 03 day of March, 2020 is hereto
                    annexed and marked “A”.
                  </p>
                  <p>
                    3. The deceased executed the said will on the day of the
                    date thereof, by signing his/her name, as the same now
                    appears thereon, in the presence of MICHAEL FID and me, both
                    of us being present at the same time, and we thereupon
                    attested and subscribed the said will in the presence of the
                    said testator.
                  </p>
                </div>
                <div className="text-end mx-4 ">
                  <span onClick={handleBackClick} style={{ cursor: "pointer" }}>
                    &lt;
                  </span>
                  <span style={{ fontSize: "12px" }}>
                    {index + 1}/{totalPages}
                  </span>
                  <span onClick={handleNextClick} style={{ cursor: "pointer" }}>
                    &gt;
                  </span>
                </div>

                <div
                  className="d-flex justify-content-between  mb-4 align-items-center mx-md-4 mx-2"
                  style={{ marginTop: "20%" }}
                >
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
