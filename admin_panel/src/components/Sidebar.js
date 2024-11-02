import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import vector from "../assets/Vector 131.svg";
import userLogo from "../assets/userLogo.png";
import dashboardIcon from "../assets/dashboard.png";
import formsIcon from "../assets/formsIcon.svg";
import caseIcon from "../assets/caseIcon.svg";
import uploadIcon from "../assets/uploadIcon.svg";
import adminIcon from "../assets/adminIcon.svg";
import dropdown from "../assets/dropdown.svg";
import documentIcon from "../assets/documentIcon.svg";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState("dashboard");

  const handleNavItemClick = (itemName) => {
    setActiveLink(itemName);
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };
  const handleClick = () => {
    toggleSidebar("");
  };
  return (
    <>
      {isOpen && <div className="backdrop show" onClick={handleClick}></div>}
      <div
        className={` sidebar bgcustom-color position-fixed ${
          isOpen ? "sidebar-open" : "sidebar-closed"
        }`}
        // style={{ height: "100vh" }}
      >
        <div className="d-flex z-1 flex-column align-items-center pt-md-2  mt-5 mt-md-0 ">
          <img src={Logo} alt="Logo" className="mb-2" />
          <img src={vector} alt="Vector" className="mb-4 " />
          <div className="d-flex align-items-center mb-5 ">
            <img
              src={userLogo}
              alt="User Avatar"
              className="rounded-circle me-3"
              width="56"
              height="56"
            />
            <div className="text-center">
              <p className="mb-1 fw-bold">Charlie Arthur</p>
              <span>Clerk Admin</span>
            </div>
          </div>
        </div>

        <nav className="navbar-nav ">
          <h3 className="fs-6 ms-4 mb-3">Quick Access</h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link d-flex align-items-center py-2 gap-md-1 px-4 border-top rounded-sm ${
                  activeLink === "dashboard" ? "active" : "text-light"
                }`}
                onClick={() => {
                  handleNavItemClick("dashboard");
                  handleClick();
                }}
              >
                <img src={dashboardIcon} alt="Dashboard" className="me-2" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item accordion-item">
              <Link
                className={`nav-link d-flex align-items-center justify-content-between py-2  px-4 border-top rounded-sm  ${
                  activeLink === "forms" ? "active" : "text-light"
                }`}
                onClick={() => handleNavItemClick("forms")}
              >
                <div className="d-flex align-items-center accordion-button collapsed">
                  <img src={formsIcon} alt="Forms" className="me-2" />
                  <span>Forms</span>
                </div>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className={`ms-2 ${
                    openDropdown === "forms" ? "rotate-180" : ""
                  }`}
                />
              </Link>
              <div
                className={`collapse ${openDropdown === "forms" ? "show" : ""}`}
              >
                <ul className="list-unstyled  ">
                  <li className="border-bottom p-1">
                    <Link
                      to="/addform"
                      className="nav-link ms-4 text-light py-1 "
                      onClick={() => handleClick()}
                    >
                      Add Form
                    </Link>
                  </li>
                  <li className="border-bottom p-1">
                    <Link
                      to="/viewform"
                      className="nav-link ms-4 text-light py-1"
                      onClick={() => handleClick()}
                    >
                      View Form
                    </Link>
                  </li>
                  <li className="p-1">
                    <Link
                      to="/formrequests"
                      className="nav-link text-light ms-4 py-1"
                      onClick={() => handleClick()}
                    >
                      Form Requests
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item ">
              <Link
                className={`nav-link d-flex align-items-center justify-content-between py-2 gap-2 px-4 border-top rounded-sm ${
                  activeLink === "cases" ? "active" : "text-light"
                }`}
                onClick={() => handleNavItemClick("cases")}
                onClick={() => handleClick()}
              >
                <div className="d-flex align-items-center">
                  <img src={caseIcon} alt="Cases" className="me-2" />
                  <span>Cases</span>
                </div>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className={`ms-2 ${
                    openDropdown === "cases" ? "rotate-180" : ""
                  }`}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link d-flex align-items-center justify-content-between py-2 gap-2 px-4 border-top rounded-sm   ${
                  activeLink === "documents" ? "active" : "text-light"
                }`}
                onClick={() => handleNavItemClick("documents")}
              >
                <div className="d-flex align-items-center">
                  <img src={documentIcon} alt="Documents" className="me-2" />
                  <span>My Documents</span>
                </div>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className={`ms-2 ${
                    openDropdown === "documents" ? "rotate-180" : ""
                  }`}
                />
              </Link>
              <div
                className={`collapse ${
                  openDropdown === "documents" ? "show" : ""
                }`}
              >
                <ul className="list-unstyled">
                  <li className="border-bottom p-1">
                    <Link
                      to="/uploadDocument"
                      className="nav-link text-light ms-4 py-1"
                      onClick={() => handleClick()}
                    >
                      Upload Document
                    </Link>
                  </li>
                  <li className="border-bottom p-1">
                    <Link
                      to="/viewDocument"
                      className="nav-link text-light ms-4 py-1"
                      onClick={() => handleClick()}
                    >
                      View Document
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link d-flex align-items-center justify-content-between py-2 gap-2 px-4 border-top rounded-sm  ${
                  activeLink === "admin" ? "active" : "text-light"
                }`}
                onClick={() => handleNavItemClick("admin")}
                onClick={() => handleClick()}
              >
                <div className="d-flex align-items-center">
                  <img src={adminIcon} alt="Admin" className="me-2" />
                  <span>Admin</span>
                </div>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className={`ms-2 ${
                    openDropdown === "admin" ? "rotate-180" : ""
                  }`}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
