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
export const ExecutorPreviewModel = () => {
  const [index, setIndex] = useState(0);
  const totalPages = 3;
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
        id="executorPreviewModal"
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
              OATH FOR AN EXECUTOR
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
                <div className="mt-5 mx-md-4 Oath-paragraph mx-2 text-start lh-4">
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
                    I, Johnson Brown of Bahamas Boulevard, Hope Town on the
                    Island of Abaco one of the Islands of the Commonwealth of
                    The Bahamas, Engineer make oath and say [do solemnly and
                    sincerely declare and affirm] that —
                  </p>
                  <p>
                    1. I believe the annexed paper writing marked “A” to contain
                    the true and original last will and testament of the
                    deceased JOHN SMITH who died on the 02 day of Feb 2022 , at
                    Bahamas Boulevard, Hope Town on the Island of Abaco one of
                    the Islands of the Commonwealth of The Bahamas domiciled
                    Bahamas Boulevard, Hope Town on the Island of Abaco one of
                    the Islands of the Commonwealth of The Bahamas.
                  </p>
                  <p>
                    2. The annexed document marked “B” is a certified copy of
                    the death certificate of the deceased.
                  </p>
                  <p>
                    3. To the best of my/our knowledge, information, and belief
                    the said JOHN SMITH at the date of his death was seised in
                    fee simple in possession description of land.
                  </p>
                  <p>4. I am the executor therein named.</p>
                </div>

                <div className="d-flex justify-content-between mt-4 mb-4 align-items-center mx-md-4 mx-2">
                  <h1 style={{ fontSize: "12px", fontWeight: "600" }}>
                    To: The Registrar of the Supreme Court.
                  </h1>
                </div>
                <div className="text-end mx-4 pb-5">
                  <span style={{ cursor: "pointer" }}>&lt;</span>
                  <span style={{ fontSize: "12px", alignItems: "center" }}>
                    1/{totalPages}
                  </span>
                  <span onClick={handleNextClick} style={{ cursor: "pointer" }}>
                    &gt;
                  </span>
                </div>
              </>
            )}
            {index === 1 && (
              <>
                <div className="mt-5 mx-md-4 Oath-paragraph  mx-2 text-start lh-4">
                  <p className='pb-1'>
                    5. Notice was given to the executor to whom power has been
                    reserved namely Jenifer Smith on the 02 day Feb of 2020.
                  </p>
                  <p>
                    6. The [certified copy of the death certificate of] executor
                    deed of renunciation of probate made by Phil Green is
                    annexed and marked “C”.
                  </p>
                  <p>
                    2. The annexed document marked “B” is a certified copy of
                    the death certificate of the deceased.
                  </p>
                  <p>
                    7. I/We undertake that in the event that such grant being
                    made to me, I shall, (where such information is not
                    obtainable upon the filing of the petition), within —
                  </p>
                  <p>
                    a. six months after the date of the grant of representation,
                    where the estate of the deceased is situate on Abaco;
                  </p>
                  <p>
                    b. nine months after the date of the grant of
                    representation, where the estate of the deceased or any part
                    thereof is situate on any of the Family Islands, cause to be
                    filed a duly completed return in respect of the true value
                    and personal effects and estate of the deceased in
                    accordance with Form 16.
                  </p>
                  <p>
                    8. I will well and faithfully administer the real and
                    personal estate and effects of the deceased, pay his just
                    debts and the legacies contained in his will, and distribute
                    the residue of his estates according to law.
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
                <div className="d-flex justify-content-between mx-4 mt-4 align-items-center mb-5">
                  <h1 style={{ fontSize: "12px", fontWeight: "600" }}>
                    To: The Registrar of the Supreme Court.
                  </h1>
                </div>
              </>
            )}
            {index === 2 && (
              <>
                <div className="mt-5 mx-md-4  mx-2 text-start lh-4">
                  <p className="custom-paragraph ">
                    9. I will exhibit a true and perfect inventory of all and
                    singular the said real and personal estates and effects and
                    render a just and true account thereof, whenever required by
                    law so to do;
                  </p>
                  <p className="custom-paragraph">
                    10. I will pay the just debts of the deceased owing at the
                    time of his decease.
                  </p>
                  <p className="custom-paragraph">
                    11. To the best of my knowledge, information and belief, the
                    whole of the property of the said deceased to be affected by
                    the grant applied for, is comprised or referred to in the
                    Schedule annexed to this affidavit and the personal estate
                    and effects of which the said deceased died possessed, are
                    under the value of 100,000 Bahaminian dollars.
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
                <p className="custom-paragraph mt-2">
                  Sworn at Hope Town on the 03 day March of A.D., 2020
                </p>
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
