import React, { useState } from "react";
import actionImage from "../assets/actionIcon.svg";
const ViewForm = () => {
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
      <div className="mt-1">
        <div
          className="border-top border-bottom py-md-3 py-2 text-dark"
          style={{ borderColor: "rgba(151, 151, 151, 1)" }}
        >
          <h2 className="mx-md-5 mx-4 fs-5 fw-bold">View Forms</h2>
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
          <div className="mt-3  ">
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
                    <td className="px-3 pt-0">2024/CLE/GEN/156</td>
                    <td
                      className="px-3 py-md-5 py-3"
                      //   style={{ maxWidth: "15px", minWidth: "10px" }}
                    >
                      KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                    </td>
                    <td className="px-3 py-2">Common Law and Equity</td>
                    <td className="px-3 py-2">2024-06-09 07:00</td>
                    <td></td>
                    <td className="px-3 py-2">
                      <span className="status-approved">Approved</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button style={{ border: "none" }}>
                        <img src={actionImage} alt="action" />
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
                    <td className="px-3 pt-0">2024/CLE/GEN/156</td>
                    <td
                      className="px-3 py-md-5 py-3"
                      //   style={{ maxWidth: "15px", minWidth: "10px" }}
                    >
                      KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                    </td>
                    <td className="px-3 py-2">Common Law and Equity</td>
                    <td className="px-3 py-2">2024-06-09 07:00</td>
                    <td></td>
                    <td className="px-3 py-2">
                      <span className="status-approved">Approved</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button style={{ border: "none" }}>
                        <img src={actionImage} alt="action" />
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
                    <td className="px-3 pt-0">2024/CLE/GEN/156</td>
                    <td
                      className="px-3 py-md-5 py-3"
                      style={{ maxWidth: "15px", minWidth: "10px" }}
                    >
                      KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                    </td>
                    <td className="px-3 py-2">Common Law and Equity</td>
                    <td className="px-3 py-2">2024-06-09 07:00</td>
                    <td></td>
                    <td className="px-3 py-md-5 py-3">
                      <span className="status-approved">Approved</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button style={{ border: "none" }}>
                        <img src={actionImage} alt="action" />
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
                    <td
                      className="px-3 py-0"
                      style={{ maxWidth: "5px", minWidth: "2px" }}
                    >
                      2024/CLE/GEN/156
                    </td>
                    <td
                      className="px-3 py-md-5 py-3 "
                      style={{ maxWidth: "5px", minWidth: "2px" }}
                    >
                      KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                    </td>
                    <td className="px-3 py-2">Common Law and Equity</td>
                    <td className="px-3 py-2">2024-06-09 07:00</td>
                    <td className="px-3 py-2"></td>
                    <td className="px-3 py-2">
                      <span className="status-approved">Approved</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button style={{ border: "none" }}>
                        <img src={actionImage} alt="action" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {index === 1 && (
          <div className="mt-3  ">
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
                    <td className="px-3 pt-0">2024/CLE/GEN/156</td>
                    <td
                      className="px-3 py-md-5 py-3"
                      //   style={{ maxWidth: "15px", minWidth: "10px" }}
                    >
                      KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                    </td>
                    <td className="px-3 py-2">Common Law and Equity</td>
                    <td className="px-3 py-2">2024-06-09 07:00</td>
                    <td></td>
                    <td className="px-3 py-2">
                      <span className="status-approved">Approved</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button style={{ border: "none" }}>
                        <img src={actionImage} alt="action" />
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
                    <td className="px-3 pt-0">2024/CLE/GEN/156</td>
                    <td
                      className="px-3 py-md-5 py-3"
                      //   style={{ maxWidth: "15px", minWidth: "10px" }}
                    >
                      KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                    </td>
                    <td className="px-3 py-2">Common Law and Equity</td>
                    <td className="px-3 py-2">2024-06-09 07:00</td>
                    <td></td>
                    <td className="px-3 py-2">
                      <span className="status-approved">Approved</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button style={{ border: "none" }}>
                        <img src={actionImage} alt="action" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {index === 2 && (
          <div className="mt-3  ">
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
                    <td className="px-3 pt-0">2024/CLE/GEN/156</td>
                    <td
                      className="px-3 py-md-5 py-3"
                      //   style={{ maxWidth: "15px", minWidth: "10px" }}
                    >
                      KRISTOM INTER NATIONAL INCORPORATED v. FRANCOISE TAVEL
                    </td>
                    <td className="px-3 py-2">Common Law and Equity</td>
                    <td className="px-3 py-2">2024-06-09 07:00</td>
                    <td></td>
                    <td className="px-3 py-2">
                      <span className="status-approved">Approved</span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button style={{ border: "none" }}>
                        <img src={actionImage} alt="action" />
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
    </>
  );
};

export default ViewForm;
