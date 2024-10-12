import React from "react";
import downloadIcon from "../assets/downloadIcon.svg";

import { FormCard } from "../components/FormCard.js";
import { CaseCard } from "../components/CaseCard.js";
import FormsReceived from "../components/FormsReceived.js";
import CasesReceived from "../components/CasesReceived.js";
import FormsStatus from "../components/FormsStatus.js";

import CasesStatus from "../components/CasesStatus.js";

const Home = ({ activeLink, onLinkClick }) => {
  return (
    <>
      <div>
        {/* Desktop View */}
        <div className=" px-md-5 px-4">
          <div className="row d-flex ">
            <div className="d-none d-md-block col-md-6 mt-1">
              <FormCard />
            </div>
            <div className="d-none d-md-block col-md-6 mt-1">
              <CaseCard />
            </div>

            <div className="d-none d-md-block col-md-6 mt-1">
              <FormsReceived />
            </div>
            <div className="d-none d-md-block col-md-6 mt-1">
              <CasesReceived />
            </div>
            <div className="d-none d-md-block col-md-6 mt-1">
              <FormsStatus />
            </div>
            <div className="d-none d-md-block col-md-6 mt-1">
              <CasesStatus />
            </div>
            {/* Mobile view */}
            <div
              className="d-md-none d-flex flex-column gap-2  mt-1"
              style={{ zIndex: "-999" }}
            >
              <FormCard className="mb-3" />
              <FormsReceived className="mb-3" />
              <FormsStatus className="mb-3" />
              <CaseCard className="mb-3" />
              <CasesReceived className="mb-3" />
              <CasesStatus className="mb-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
