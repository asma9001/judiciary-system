import React from "react";
import messageIcon from "../assets/messageIcon.svg";
import notificationIcon from "../assets/notificationIcon.svg";
import { MdMenu } from "react-icons/md";

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-1 d-flex justify-content-between  border-white sticky-top bgcustom-color align-items-center">
        
        <div className="container mx-md-4 mx-1 ">
          <MdMenu
            className="text-white fs-1 d-block d-md-none"
            onClick={toggleSidebar}
          />

          <span className="d-none mx-auto d-md-block text-white  fs-5 fw-bold">
            The Supreme Court of The Bahamas
          </span>

          <div className="d-flex  align-items-center">
            <div className="position-relative">
              <img
                src={messageIcon}
                alt="messageIcon"
                className="me-3"
                width="25px"
              />
              <span
                className="position-absolute top-50 bottom-0 start-50 translate-middle custom-badge"
                style={{ fontSize: "12px" }}
              >
                0
              </span>
            </div>
            <div className="position-relative">
              <img
                src={notificationIcon}
                alt="notificationIcon"
                className="me-1"
                width="25px"
              />
              <span
                className="position-absolute top-50 bottom-0 start-50 ms-2 translate-middle custom-badge"
                style={{ fontSize: "12px" }}
              >
                4
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Uncomment and handle Sidebar when ready */}
      {/* {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )} */}
    </>
  );
};

export default Navbar;
