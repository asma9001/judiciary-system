import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import { Modal } from "bootstrap"; // Import Bootstrap Modal
import data from "../FormData";
import backIcon from "../assets/back-icon.svg";

export const AffidavitModel = () => {
  const navigate = useNavigate();
  const modalRef = useRef(null); // Add a ref for modal
  const [index, setIndex] = useState(14); // Start the form from index 14

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (formData) => {
    if (index === data.length - 1) {
      // When form is complete, hide the modal and navigate
      const modalInstance = Modal.getInstance(modalRef.current);
      modalInstance.hide();

      // Cleanup modal backdrop and navigate after a short delay
      setTimeout(() => {
        document.body.classList.remove("modal-open");
        document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
          backdrop.remove();
        });
        navigate("/addform", {
          state: {
            message: "Note: You have successfully completed the petition form",
          },
        });
      }, 300);
    } else {
      setIndex((prevIndex) => prevIndex + 1); // Move to next section of the form
    }
  };

  const handleBackClick = () => {
    if (index > 13) {
      // Prevent going back before index 14
      setIndex((prevIndex) => prevIndex - 1); // Go back in the form
    }
  };

  return (
    <div
      ref={modalRef}
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "700px" }}
      >
        <div
          className="modal-content custom-shadow rounded-4 p-md-5 px-4 pb-5"
          style={{ backgroundColor: "#E4F4F3" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fs-md-4 fs-4 fw-bold mb-0">
              {data[index]?.heading}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <p
            className="fst-italic fs-5 fw-lighter"
            style={{ color: "#3F3E3E" }}
          >
            {data[index]?.subHeading}
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              {index === 15 ? (
                <div className="mb-3 row mt-3">
                  {data[index]?.fields?.map((field, fieldIdx) => (
                    <div className=" mb-2" key={fieldIdx}>
                      <label classNcol-md-6 col-12ame="form-check-label">{field.label}</label>
                      {field.inputType === "text" && (
                        <input
                          type={field.inputType}
                          {...register(field.name, {
                            required: `${field.label} is required`,
                          })}
                          className="form-control "
                          style={{
                            width: "80%",
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            borderColor: "black",
                            borderRadius: "0",
                          }}
                        />
                      )}

                      {field.inputType === "select" && (
                        <select
                          className="form-select "
                          {...register(field.name, {
                            required: `${field.label} is required`,
                          })}
                          style={{ width: "80%" }}
                        >
                          {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}

                      {errors[field.name] && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ) : index === 16 ? (
                <div className="pb-5">
                  <label>{data[index]?.label}</label>
                  <input
                    type={data[index]?.inputType}
                    {...register(data[index]?.name, {
                      required: `${data[index]?.label} is required`,
                    })}
                    className="form-control w-50"
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      borderColor: "black",
                      borderRadius: "0",
                    }}
                  />
                  {errors[data[index]?.name] && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
              ) : index === 19 ? (
                <>
                  <div className="row pb-5">
                    {data[index].fields.map((field) => (
                      <div className="col-md-2 mb-3" key={field.name}>
                        <label>{field.label}</label>
                        <div>
                          <input
                            type={field.type}
                            {...register(field.name, {
                              required: "Invalid Day",
                            })}
                            className="form-control"
                            style={{
                              backgroundColor: "transparent",
                              boxShadow: "none",
                              borderColor: "rgba(125, 125, 125, 1)",
                              borderRadius: "0",
                            }}
                          />
                          {errors[field.name] && (
                            <p className="text-danger">
                              {errors[field.name].message}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                data[index]?.fields?.map((field, fieldIdx) => (
                  <div key={fieldIdx} className="mb-3">
                    <label>{field.label}</label>
                    {field.inputType === "text" && (
                      <input
                        type={field.inputType}
                        {...register(field.name, {
                          required: `${field.label} is required`,
                        })}
                        className="form-control w-50"
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "none",
                          borderColor: "black",
                          borderRadius: "0",
                        }}
                      />
                    )}

                    {field.inputType === "select" && (
                      <select
                        className="form-select w-100"
                        {...register(field.name, {
                          required: `${field.label} is required`,
                        })}
                      >
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )}

                    {errors[field.name] && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                ))
              )}

              {/* Radio Buttons */}
              {data[index]?.inputType === "radio" &&
                data[index]?.genderSelection && (
                  <div className="pb-5">
                    {data[index].genderSelection.options.map((option) => (
                      <div className="form-check mb-2" key={option.id}>
                        <input
                          className="form-check-input custom-radio"
                          type="radio"
                          {...register("gender", {
                            required: "Gender selection is required",
                          })}
                          id={option.value}
                          value={option.value}
                        />
                        <label className="form-check-label">
                          {option.label}
                        </label>
                      </div>
                    ))}
                    {errors.gender && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                )}
            </div>

            {/* Submit/Next Button */}
            <div className="d-flex mt-4 justify-content-between align-items-center">
              {index > 14 && (
                <button
                  onClick={handleBackClick}
                  className="btn py-1 d-flex gap-md-2 gap-1 align-items-center justify-content-center custom-button rounded-5"
                  type="button"
                >
                  <img
                    src={backIcon}
                    alt="Back"
                    className="bg-transparent border border-white w-2 h-2 rounded-5 px-2 py-1"
                  />
                  <span className="text-white ps-3 pe-2 fs-md-5 fs-6">
                    Back
                  </span>
                </button>
              )}
              <button
                className="text-white ms-auto py-1 fs-6  px-md-4 px-2 d-flex gap-2 align-items-center justify-content-center fs-md-5 custom-button rounded-5"
                type="submit"
              >
                {data[index]?.buttonName}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
