import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import dropdown from "../assets/downarrow.svg";

const SubNavbar = () => {
  const location = useLocation();

  return (
    <div
      className="pb-2  gap-1 d-flex flex-column flex-md-row align-items-md-center justify-content-between bgNavbar-color"
     
    >
      <div className="d-flex flex-wrap">
        <NavLink
          to="/"
          className="ms-md-5 ms-3 text-decoration-none pt-2 mb-0"
          style={{
            color: location.pathname === "/" ? "blue" : "grey",
            fontSize: "14px", // Increased font size for readability
          }}
        >
          Dashboard
        </NavLink>

        {location.pathname !== "/" && (
          <>
            <span className="mt-2" style={{ color: "blue", fontSize: "14px" }}>
              &gt;
            </span>
            <NavLink
              to={location.pathname}
              className="text-decoration-none mt-2 me-0"
              style={{
                color: "blue",
                fontSize: "14px", // Increased font size for readability
              }}
            >
              {location.pathname.slice(1)}
            </NavLink>
          </>
        )}
      </div>

      <div className="d-flex me-5 ms-3 ms-md-2">
        <div
          className="px-3 py-1 mt-md-2 bg-body-tertiary d-flex align-items-center"
          style={{
            border: "1px solid #B4B4B4",
            backgroundColor: "white", // Ensure the background color is set
            boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.5)",
          }}
        >
          <span className="mb-0" style={{ fontSize: "10px", color: "#616162" }}>
            The Supreme Court of The Bahamas
          </span>
          <img src={dropdown} className="text-black-50 ms-2" alt="" style={{ width: '10px', height: '10px' }} />
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
