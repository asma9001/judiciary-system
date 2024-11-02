import React, { useState } from "react";
import { ReviewDocument } from "../components/ReviewDocument";
const ReviewFeedback = ({
  formNo,
  isReviewFeedback,
  setIsReviewFeedback,
  showReview,
  setShowReview,
}) => {
  return (
    <div>
      <div
        className="border-top border-bottom py-md-3 py-2 text-dark"
        style={{ borderColor: "rgba(151, 151, 151, 1)" }}
      >
        <h2 className="mx-md-5 mx-4 fs-5 fw-bold">
          Feedback{" "}
          <span style={{ fontSize: "12px", fontWeight: "400" }}>{formNo}</span>
        </h2>
      </div>
      <ReviewDocument
        isReviewFeedback={isReviewFeedback}
        setIsReviewFeedback={setIsReviewFeedback}
        showReview={showReview}
        setShowReview={setShowReview}
      />
    </div>
  );
};

export default ReviewFeedback;
