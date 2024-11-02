import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import backIcon from "../../assets/back-icon.svg";
import data from "../../FormData";

export const PetitionModel = ({ onComplete, setShowModal, isEditMode }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

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

  const onSubmit = (formData) => {
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));

    if (index === 3) {
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
        className="modal-content popup-content rounded-4"
        style={{
          maxWidth: "600px",
          width: "95%",
          backgroundColor: "rgba(228, 244, 243, 1)",
        }}
      >
        <div className="custom-shadow modal-body rounded-4 pt-md-5 p-md-5 pt-2 px-md-4 px-3 pb-5">
          <div className="d-flex justify-content-between gap-5 align-items-center">
            <p className=" fs-4 fw-bold mb-0 pt-3 pt-md-0">
              {data[index]?.heading}
            </p>
            <button
              type="button"
              className="btn-close mb-0"
              onClick={() => setShowModal(false)}
            ></button>
          </div>
          <p
            className="fst-italic fs-5 fw-lighter"
            style={{ color: "#3F3E3E" }}
          >
            {data[index]?.subHeading}
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {data.slice(0, 4).map((item, idx) => (
              <React.Fragment key={idx}>
                {index === idx && (
                  <div>
                    {item.fields && index !== 2 ? (
                      item.fields.map((field, fieldIndex) => (
                        <div key={fieldIndex} className="mb-3 row">
                          <label className="fs-6 ">{field.label}</label>
                          <div className="col-md-6 col-12">
                            {field.inputType === "select" ? (
                              <select
                                className="form-select "
                                {...register(field.name, {
                                  required: `${field.label} is required`,
                                })}
                              >
                                {field.options.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
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
                    ) : (
                      <div className="row">
                        {item.fields?.map((field, fieldIndex) => (
                          <div key={fieldIndex} className="col-md-6 mb-3">
                            <label className="fs-6">{field.label}</label>
                            {field.inputType === "select" ? (
                              <select
                                style={{ boxShadow: "none" }}
                                className="form-select w-100"
                                {...register(field.name, {
                                  required: `${field.label} is required`,
                                })}
                              >
                                {field.options.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
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
                                className="form-control "
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
                        ))}
                      </div>
                    )}

                    {index === 1 && (
                      <div className="pb-5">
                        {item.genderSelection?.options.map((option) => (
                          <div className="form-check mb-2" key={option.id}>
                            <input
                              style={{ boxShadow: "none" }}
                              className="form-check-input custom-radio"
                              type="radio"
                              {...register("gender", {
                                required: "Please Select Option",
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
                            {errors.gender?.message}
                          </span>
                        )}
                      </div>
                    )}
                    {index === 3 && (
                      <div className="pb-5">
                        {item.natureSelection?.options.map((option) => (
                          <div className="form-check mb-2" key={option.id}>
                            <input
                              className="form-check-input custom-radio"
                              type="radio"
                              {...register("nature", {
                                required: "Please Select Option",
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
                            {errors.nature?.message}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            ))}

            <div className="d-flex pt-3 justify-content-between">
              {index > 0 && (
                <button
                  className="btn py-1 px-md-3 px-2 d-flex gap-md-2 gap-1 align-items-center justify-content-center custom-button rounded-5"
                  type="button"
                  onClick={handleBackClick}
                >
                  <img
                    src={backIcon}
                    alt="Back"
                    className="bg-transparent border-0 w-2 h-2"
                  />
                  <span className="text-white fs-md-5 fs-6">Back</span>
                </button>
              )}
              <button
                className="text-white ms-auto py-1 px-md-4 px-2 d-flex gap-2 align-items-center justify-content-center fs-md-5 fs-6 custom-button rounded-5"
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
