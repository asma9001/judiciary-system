import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import backIcon from "../assets/back-icon.svg";
import { Modal } from "bootstrap";
import data from "../FormData";

export const PetitionModel = () => {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [gender, setGender] = useState("male");
  const [index, setIndex] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    if (index === 3) {
      const modalInstance = Modal.getInstance(modalRef.current);
      modalInstance.hide();
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
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBackClick = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
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
        <div className="modal-content custom-shadow rounded-4 p-md-5 px-4 pb-5">
          <div className="d-flex justify-content-between align-items-center">
            <p className="fs-md-4 fs-4 fw-bold mb-0 me-auto pt-5 pt-md-0">
              {data[index]?.heading}
            </p>
            <button
              type="button"
              className="btn-close mb-5 mb-md-0"
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
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {data.slice(0, 4).map((item, idx) => (
                <React.Fragment key={idx}>
                  {index === idx && (
                    <div>
                      {item.fields && index !== 2 ? (
                        item.fields.map((field, fieldIndex) => (
                          <div key={fieldIndex} className="mb-3 row">
                            <label className="fs-6 col-12">{field.label}</label>
                            <div className="col-md-6 col-12">
                              {field.inputType === "select" ? (
                                <select
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
                          ))}
                        </div>
                      )}

                      {(index === 1 || index === 3) && (
                        <div className="pb-5">
                          {item.genderSelection?.options.map((option) => (
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
                  )}
                </React.Fragment>
              ))}

              <div className="d-flex pt-3 justify-content-between">
                {index > 0 && (
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
                  className="text-white ms-auto py-1 fs-6 px-md-4 px-2 d-flex gap-2 align-items-center justify-content-center fs-md-5 custom-button rounded-5"
                  type="submit"
                >
                  {data[index]?.buttonName}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
