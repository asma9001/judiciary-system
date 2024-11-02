import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { AddForm } from "./pages/AddForm";
import ViewForm from "./pages/ViewForm";
import FormsRequest from "./pages/FormsRequest";
import SubNavbar from "./components/SubNavbar";
import UploadDocumentPage from "./pages/UploadDocumentPage";
import ViewDocument from "./pages/ViewDocument";
import ViewPdf from "./pages/ViewPdf";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="container-fluid">
        <div className="row ">
          <div
            className={` col-12 col-md-2 ${
              isSidebarOpen ? "sidebar-open" : "sidebar-closed"
            }`}
          >
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>

          <div className="col-12 col-md-10  p-0">
            <Navbar
              toggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
            <SubNavbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addform" element={<AddForm />} />
              <Route path="/viewform" element={<ViewForm />} />
              <Route path="/formrequests" element={<FormsRequest />} />
              <Route path="/uploadDocument" element={<UploadDocumentPage />} />
              <Route path="/viewDocument" element={<ViewDocument />} />
              <Route path="/viewpdf" element={<ViewPdf />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
