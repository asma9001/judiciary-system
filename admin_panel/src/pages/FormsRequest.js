import React, { useState } from "react";
import actionImage from "../assets/actionIcon.svg";
import exclamationSign from "../assets/exclamationSign.svg";
import editIcon from "../assets/editIcon.svg";
import ReviewFeedback from "../components/ReviewFeedback";
import FormsStatusPopup from "../components/FormsStatusPopup";
const FormsRequest = () => {
  const [index, setIndex] = useState(0);
  const [showReview, setShowReview] = useState(false);
  const [selectedFormNo, setSelectedFormNo] = useState("");
  const [isReviewFeedback, setIsReviewFeedback] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);
  const totalPages = 2;
  const handleNextClick = () => {
    if (index < totalPages - 1) {
      setIndex(index + 1);
    }
  };
  const handleBackClick = () => {
    setIndex(index - 1);
  };
  const handleReviewClick = (formNo) => {
    setSelectedFormNo(formNo);
    setShowReview(true);
    setIsReviewFeedback(true);
  };
  return (
    <>
      {!showReview ? (
        <div className="mt-1">
          <div
            className="border-top border-bottom py-md-3 py-2 text-dark"
            style={{ borderColor: "rgba(151, 151, 151, 1)" }}
          >
            <h2 className="mx-md-5 mx-4 fs-5 fw-bold">Forms Request</h2>
          </div>
          <div className="d-flex flex-column flex-column-reverse flex-md-row gap-4 gap-md-0  py-md-2 py-2 align-items-center">
            <div className="d-flex gap-md-2 gap-5 flex-row align-items-center mx-md-5  ">
              <label htmlFor="filterBy" className="form-label mb-0 me-md-2">
                Records per page
              </label>
              <select
                className="form-select me-2"
                aria-label="Filter select"
                id="filterBy"
                style={{
                  width: "90px",
                  boxShadow: "inset 2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                  borderColor: "rgba(151, 151, 151, 1)",
                }}
              >
                <option value="all">All</option>
                <option value="pdf">PDF</option>
                <option value="doc">DOC</option>
                <option value="xlsx">XLSX</option>
                <option value="txt">TXT</option>
              </select>
            </div>
            <div className="d-flex flex-md-row gap-md-2  gap-5 flex-row-reverse   flex-md-row-reverse  align-items-center mx-md-4">
              <select
                className="form-select me-2"
                aria-label="Filter select"
                id="filterBy"
                style={{
                  width: "150px",
                  boxShadow: "inset 2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                  borderColor: "rgba(151, 151, 151, 1)",
                }}
              >
                <option value="all">All</option>
                <option value="pdf">PDF</option>
                <option value="doc">DOC</option>
                <option value="xlsx">XLSX</option>
                <option value="txt">TXT</option>
              </select>

              <label htmlFor="filterBy" className="form-label mb-0 me-2">
                Filter By
              </label>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <input
                type="text"
                className="form-control"
                id="searchInput"
                placeholder="Search"
                style={{
                  width: "200px",
                  boxShadow: "inset 2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                  borderRadius: "0px",
                  borderColor: "rgba(151, 151, 151, 1)",
                }}
              />
              <div className="w-100">
                <button className="text-white py-1 px-md-4 px-3 w-100 d-flex align-items-center justify-content-center  custom-button rounded-5">
                  Search
                </button>
              </div>
            </div>
          </div>
          {index === 0 && (
            <div
              className="mt-3  "
              style={{
                backgroundColor: showFormPopup ? "#E4F4F3A6 " : "white",
              }}
            >
              <div
                className="w-full overflow-x-auto"
                style={{
                  boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25) ",
                }}
              >
                <table className=" min-w-full ">
                  <thead className="custom-table-header ">
                    <tr>
                      <th className="px-5">Form No#</th>
                      <th>Form Title</th>
                      <th>Form Type</th>
                      <th>Created Date</th>
                      <th>Commencement Date</th>
                      <th>Form Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        textAlign: "left",
                        fontSize: "12px",
                        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <td className="px-3 py-4 ">
                        <span className="d-flex ">
                          <img src={exclamationSign} className="me-2" />
                          <span>2024/CLE/GEN/156</span>
                          <img src={editIcon} className="ms-1" />
                        </span>
                      </td>

                      <td className="px-3 py-md-5 py-2">
                        KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                      </td>
                      <td className="px-3 py-2">Common Law and Equity</td>
                      <td className="px-3 py-2">2024-06-09 07:00</td>
                      <td></td>
                      <td className="px-3 py-2">
                        <button
                          onClick={() => setShowFormPopup(true)}
                          className="d-flex status-unknown"
                          style={{ border: "none" }}
                        >
                          <img src={editIcon} className="me-2" />
                          <span className=" text-black ">Unknown</span>
                        </button>
                        {showFormPopup && (
                          <FormsStatusPopup
                            showFormPopup={showFormPopup}
                            setShowFormPopup={setShowFormPopup}
                          />
                        )}
                      </td>
                      <td className="px-3 py-2 text-center">
                        <button
                          style={{ border: "none" }}
                          onClick={() => handleReviewClick("2024/CLE/GEN/159")}
                        >
                          <span className="review-button">Review</span>
                        </button>
                      </td>
                    </tr>
                    <tr
                      style={{
                        textAlign: "left",
                        fontSize: "12px",
                        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <td className="px-3  ">
                        <span className="d-flex ">
                          <span>2024/CLE/GEN/</span>
                          <img src={editIcon} className="ms-1" />
                        </span>
                      </td>

                      <td className="px-3 py-md-5 py-2">
                        KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                      </td>
                      <td className="px-3 py-2">Common Law and Equity</td>
                      <td className="px-3 py-2">2024-06-09 07:00</td>
                      <td></td>
                      <td className="px-3 py-2">
                        <button
                          className="d-flex status-rejected"
                          onClick={() => setShowFormPopup(true)}
                          style={{ border: "none" }}
                        >
                          <img src={editIcon} className="me-2 text-white" />
                          <span>Rejected</span>
                        </button>
                        {showFormPopup && (
                          <FormsStatusPopup
                            showFormPopup={showFormPopup}
                            setShowFormPopup={setShowFormPopup}
                          />
                        )}
                      </td>
                      <td className="px-3 py-2 text-center">
                        <button
                          style={{ border: "none" }}
                          onClick={() => handleReviewClick("2024/CLE/GEN/159")}
                        >
                          <span className="review-button">Review</span>
                        </button>
                      </td>
                    </tr>
                    <tr
                      style={{
                        textAlign: "left",
                        fontSize: "12px",
                        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <td className="px-3  ">
                        <span className="d-flex ">
                          <span>2024/CLE/GEN/</span>
                          <img src={editIcon} className="ms-1" />
                        </span>
                      </td>

                      <td className="px-3 py-md-5 py-2">
                        KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                      </td>
                      <td className="px-3 py-2">Common Law and Equity</td>
                      <td className="px-3 py-2">2024-06-09 07:00</td>
                      <td></td>
                      <td className="px-3 py-2">
                        <button
                          className="d-flex status-approved"
                          onClick={() => setShowFormPopup(true)}
                          style={{ border: "none" }}
                        >
                          <img src={editIcon} className="me-2 text-white" />
                          <span>Approved</span>
                        </button>
                        {showFormPopup && (
                          <FormsStatusPopup
                            showFormPopup={showFormPopup}
                            setShowFormPopup={setShowFormPopup}
                          />
                        )}
                      </td>
                      <td className="px-3 py-2 text-center">
                        <button
                          style={{ border: "none" }}
                          onClick={() => handleReviewClick("2024/CLE/GEN/159")}
                        >
                          <span className="review-button">Review</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {index === 1 && (
            <div
              className="mt-3  "
              style={{
                backgroundColor: showFormPopup ? "#E4F4F3A6 " : "white",
              }}
            >
              <div
                className="w-full overflow-x-auto"
                style={{ boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25) " }}
              >
                <table className=" min-w-full ">
                  <thead className="custom-table-header ">
                    <tr>
                      <th className="px-5">Form No#</th>
                      <th>Form Title</th>
                      <th>Form Type</th>
                      <th>Created Date</th>
                      <th>Commencement Date</th>
                      <th>Form Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{
                        textAlign: "left",
                        fontSize: "12px",
                        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <td className="px-3 py-4 ">
                        <span className="d-flex ">
                          <img src={exclamationSign} className="me-2" />
                          <span>2024/CLE/GEN/</span>
                          <img src={editIcon} className="ms-1" />
                        </span>
                      </td>

                      <td className="px-3 py-md-5 py-2">
                        KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                      </td>
                      <td className="px-3 py-2">Common Law and Equity</td>
                      <td className="px-3 py-2">2024-06-09 07:00</td>
                      <td></td>
                      <td className="px-3 py-2">
                        <button
                          className="d-flex status-unknown"
                          onClick={() => setShowFormPopup(true)}
                          style={{ border: "none" }}
                        >
                          <img src={editIcon} className="me-2" />
                          <span className=" text-black ">Unknown</span>
                        </button>
                        {showFormPopup && (
                          <FormsStatusPopup
                            showFormPopup={showFormPopup}
                            setShowFormPopup={setShowFormPopup}
                          />
                        )}
                      </td>
                      <td className="px-3 py-2 text-center">
                        <button
                          style={{ border: "none" }}
                          onClick={() => handleReviewClick("2024/CLE/GEN/159")}
                        >
                          <span className="review-button">Review</span>
                        </button>
                      </td>
                    </tr>

                    <tr
                      style={{
                        textAlign: "left",
                        fontSize: "12px",
                        boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <td className="px-3  ">
                        <span className="d-flex ">
                          <span>2024/CLE/GEN/</span>
                          <img src={editIcon} className="ms-1" />
                        </span>
                      </td>

                      <td className="px-3 py-md-5 py-2">
                        KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                      </td>
                      <td className="px-3 py-2">Common Law and Equity</td>
                      <td className="px-3 py-2">2024-06-09 07:00</td>
                      <td></td>
                      <td className="px-3 py-2">
                        <button
                          className="d-flex status-approved"
                          onClick={() => setShowFormPopup(true)}
                          style={{ border: "none" }}
                        >
                          <img src={editIcon} className="me-2 text-white" />
                          <span>Approved</span>
                        </button>
                      </td>
                      <td className="px-3 py-2 text-center">
                        <button
                          style={{ border: "none" }}
                          onClick={() => handleReviewClick("2024/CLE/GEN/159")}
                        >
                          <span className="review-button">Review</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="d-flex align-items-center mx-4 my-4">
            <div className=" container mt-4 justify-content-end  gap-3 d-flex align-items-center ">
              <p className="mb-0 fs-6">Page</p>
              <button
                className="px-2 text-white fs-6"
                type="button"
                style={{
                  border: "none",
                  backgroundColor: "rgba(0, 150, 136, 1)", // Set the background color here
                  padding: "none",
                }}
              >
                <span
                  onClick={handleBackClick}
                  style={{
                    border: "none",
                    backgroundColor: "rgba(0, 150, 136, 1)", // Set the background color here
                    padding: "none",
                  }}
                >
                  &lt;
                </span>
              </button>

              <span
                className="px-2 text-white fs-6"
                style={{
                  border: "none",
                  backgroundColor: "rgba(0, 150, 136, 1)",
                  padding: "none",
                }}
              >
                {index + 1}
              </span>
              <button
                className="px-2 text-white fs-6"
                type="button"
                style={{
                  border: "none",
                  backgroundColor: "rgba(0, 150, 136, 1)", // Set the background color here
                  padding: "none",
                }}
              >
                <span
                  onClick={handleNextClick}
                  style={{
                    border: "none",
                    backgroundColor: "rgba(0, 150, 136, 1)", // Set the background color here
                    padding: "none",
                  }}
                >
                  &gt;
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ReviewFeedback
          formNo={selectedFormNo}
          setIsReviewFeedback={setIsReviewFeedback}
          isReviewFeedback={isReviewFeedback}
         showReview={showReview}
         setShowReview={setShowReview}
        />
      )}
    </>
  );
};

export default FormsRequest;
