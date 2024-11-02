import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import { Modal } from "bootstrap"; // Import Bootstrap Modal
import data from "../../FormData";
import backIcon from "../../assets/back-icon.svg";

export const AffidavitModel = ({ onComplete, setShowModal, isEditMode }) => {
  const navigate = useNavigate();

  const [gender, setGender] = useState("male");
  const [index, setIndex] = useState(25); // Start at index 5 to only show executor form fields

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Load saved data from localStorage
  useEffect(() => {
    if (isEditMode) {
      const savedData = JSON.parse(localStorage.getItem("formData"));
      console.log(savedData);
      if (savedData) {
        reset(savedData); // Pre-fill the form with saved data
      }
    }
  }, [isEditMode, reset]); // Run effect when isEditMode changes

  // Handle form submission
  const onSubmit = (formData) => {
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    if (index === 31) {
      onComplete(true);
      setShowModal(false);
      setTimeout(() => {
        navigate("/addform");
      }, 300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBackClick = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div className="popup-overlay">
      <div
        className="modal-content popup-content rounded-5"
        style={{  maxWidth: "600px",
          width: "95%", backgroundColor: "rgba(228, 244, 243, 1)" }} // Apply the color here
      >
        <div className="custom-shadow rounded-4 p-md-5 px-4 pb-5">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fs-md-4 fs-4 fw-bold mb-0">
              {data[index]?.heading}
            </h5>
            {/* <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button> */}
          </div>
          <p
            className="fst-italic fs-5 fw-lighter"
            style={{ color: "#3F3E3E" }}
          >
            {data[index]?.subHeading}
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              {index === 25 ? (
                <div className="mb-3 row mt-3">
                  {data[index]?.fields?.map((field, fieldIdx) => (
                    <div className=" mb-2" key={fieldIdx}>
                      <label classNcol-md-6 col-12ame="form-check-label">
                        {field.label}
                      </label>
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
              ) : index === 26 ? (
                <>
                  <div className="mb-3 row mt-3">
                    {data[index].fields.map((field, fieldIndex) => (
                      <div className="col-md-6 col-12 mb-2" key={fieldIndex}>
                        <label className="form-check-label">
                          {field.label}
                        </label>

                        {field.inputType === "select" ? (
                          <div>
                            <select
                              className="form-select w-100" // Make width 100% to adapt to screen size
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
                            {errors[field.name] && (
                              <p className="text-danger">
                                {errors[field.name].message}
                              </p>
                            )}
                          </div>
                        ) : (
                          <div>
                            <input
                              type={field.inputType}
                              {...register(field.name, {
                                required: `${field.label} is required`,
                              })}
                              className="form-control w-100"
                              style={{
                                backgroundColor: "transparent",
                                boxShadow: "none",
                                borderColor: "black",
                                borderRadius: "0",
                              }}
                            />
                            {errors[field.name] && (
                              <p className="text-danger">
                                {errors[field.name].message}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : index === 27 ? (
                <>
                  <div className="mb-3 row mb-5">
                    <div className="col-md-6 col-12">
                      <label>{data[index].label}</label>
                      <input
                        type={data[index].inputType}
                        {...register(data[index].name, {
                          required: `${data[index].label} is required`,
                        })}
                        className="form-control w-100 "
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "none",
                          borderColor: "black",
                          borderRadius: "0",
                        }}
                      />
                      {errors[data[index].name] && (
                        <p className="text-danger">
                          {errors[data[index].name].message}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              ) : index === 30 ? (
                <>
                  <div className="row">
                    {data[index].fields.map((field) => (
                      <div className="col-md-2 mb-3" key={field.name}>
                        <label>{field.label}</label>
                        <div>
                          <input
                            type={field.inputType}
                            {...register(field.name, {
                              required: `Invalid ${field.name}`,
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
                <div className="mb-3 row mt-3">
                  {data[index]?.inputType === "radio" &&
                  data[index]?.genderSelection ? (
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
                  ) : (
                    data[index].fields?.map((field, fieldIndex) => (
                      <div key={fieldIndex} className="mb-3 row">
                        <label className="fs-6">{field.label}</label>
                        <div className="col-md-6 col-12">
                          {field.inputType === "select" ? (
                            <select
                              className="form-select "
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
                          ) : (
                            <input
                              type={field.inputType}
                              {...register(field.name, {
                                required: `${field.label} is required`,
                              })}
                              className="form-control"
                              style={{
                                backgroundColor: "transparent",
                                boxShadow: "none",
                                borderColor: "black",
                                borderRadius: "0",
                              }}
                            />
                          )}
                          {errors[field.name] && (
                            <p className="text-danger">
                              {errors[field.name]?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            <div className="d-flex mt-5 justify-content-between align-items-center">
              {index > 25 && (
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
