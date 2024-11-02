import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
const FeedbackPopup = ({ showFeedbackPopup, setShowFeedbackPopup }) => {
  const [feedback, setFeedback] = useState("");
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], 
      [{ list: "ordered" }, { list: "bullet" }], 
    ],
  };
  const handleFeedbackChange = (value) => {
    setFeedback(value); 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFeedbackPopup(false);
  };
  return (
    <div className="feedback_popup" style={{ maxWidth: "300px" }}>
      <div>
        <p className=" fs-6 fw-bold px-3 py-2  bgcustom-color">
          Feedback on Basic Information
        </p>
        <form className="px-3 py-2">
          <div className="mb-3">
            <label
              for="exampleInputEmail1"
              class="form-label text-black"
              style={{ fontSize: "14px" }}
            >
              Feedback Title
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3">
            <label
              for="feedbackDescription"
              class="form-label text-black"
              style={{ fontSize: "14px" }}
            >
              Feedback Description
            </label>
            <textarea
              class="form-control"
              id="feedbackDescription"
              rows="4"
              aria-describedby="descriptionHelp"
            ></textarea>
            {/* <ReactQuill theme="snow" className="text-dark" modules={modules} /> */}
          </div>
          <div className="d-flex justify-content-end">
            <button
              onClick={handleSubmit}
              className="btn py-0 d-flex gap-2 ms-auto ms-md-0 mb-2 align-items-center justify-content-center custom-button rounded-5"
            >
              <span className="text-white px-3  fs-5">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPopup;
