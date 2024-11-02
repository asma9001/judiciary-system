import React, { useState } from "react";
import downarrow from "../assets/downarrow.svg";
const CustomUploadSelect = ({
  label,
  selectedValue,
  options,
  onSelect,
  defaultSelect,
  error,
  placeHolder = "Select an Option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex-row gap-2 gap-md-2 d-flex flex-md-row flex-column pb-3">
      <div className="col-md-2 d-flex align-items-center">
        <span>{label}</span>
      </div>
      <div className="col-md-10 ">
        <div
          className="position-relative customUpload-select"
          // style={{ width: "90%" }}
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="d-flex align-items-center justify-content-between px-2 py-1"
          >
            <p
              className="mb-0"
              style={{
                visibility: selectedValue ? "visible" : "hidden", // Hide placeholder if no selectedValue
              }}
            >
              {selectedValue || placeHolder}
            </p>
            <img src={downarrow} alt="Toggle" />
          </div>
          {isOpen && (
            <div
              className="position-absolute z-1 custom-option"
              style={{
                top: "110%",
                left: "0",
                width: "100%",
                minHeight: "30px",
              }}
            >
              <p
                style={{
                  backgroundColor: "rgba(0, 150, 136, 1)",
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "16px",
                }}
              >
                {defaultSelect}
              </p>
              {options.map((option, index) => (
                <p
                  key={index}
                  onClick={() => {
                    onSelect(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </p>
              ))}
            </div>
          )}
        </div>
        {error && <div className="form_error mt-1 text-danger">{error}</div>}
      </div>
    </div>
  );
};

export default CustomUploadSelect;
