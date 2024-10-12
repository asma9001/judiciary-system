import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import backIcon from "../assets/back-icon.svg";
import { Modal } from "bootstrap"; // Import Bootstrap Modal
import data from "../FormData";

export const ExecutorModel = () => {
  const navigate = useNavigate();
  const modalRef = useRef(null); // Add a ref for modal
  const [gender, setGender] = useState("male");
  const [index, setIndex] = useState(4); // Start at index 5 to only show executor form fields

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  // Handle form submission
  const onSubmit = (formData) => {
    if (index === 12) {
      // When the form is complete, hide the modal
      const modalInstance = Modal.getInstance(modalRef.current); // Get the modal instance
      modalInstance.hide(); // Hide the modal
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
      ref={modalRef} // Attach ref to modal
      className="modal fade "
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{
          maxWidth: "700px",
        }}
      >
        <div
          className="modal-content custom-shadow rounded-4 p-md-5 px-4 pb-5"
          style={{
            boxShadow: "3px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            backgroundColor: "rgba(228, 244, 243, 1)",
          }}
        >
          <div className="d-flex justify-content-between align-items-center ">
            <p className="fs-md-4 fs-4 fw-bold mb-0 me-auto pt-5 pt-md-0">
              {data[index].heading}
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
            {data[index].subHeading}
          </p>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {index === 4 && ( // Render applicants selection at index 0
                <div className="mt-3">
                  {data[index].applicantsSelection.options.map((option) => (
                    <div className="form-check mb-2" key={option.id}>
                      <input
                        className="form-check-input custom-radio"
                        value={option.value}
                        {...register("gender", {
                          required: "Please Select option",
                        })}
                        checked={gender === option.value}
                        onChange={(e) => setGender(e.target.value)}
                        type="radio"
                        name="gender"
                        id={option.value}
                        value={option.value}
                        checked={gender === option.value}
                        style={{
                          boxShadow: "none",

                          color: "white",
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={option.value}
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                  {errors.gender && (
                    <p className="text-danger">{errors.gender?.message}</p>
                  )}
                </div>
              )}
              {index === 5 && (
                <>
                  {data[index].fields.map((field, idx) => (
                    <div key={idx} className="mb-3 row">
                      <label className="fs-6 col-12">{field.label}</label>
                      <div className="col-md-6 col-12">
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
                        {errors[field.name] && (
                          <p className="text-danger">
                            {errors[field.name]?.message}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              )}
              {index === 6 && (
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
              )}
              {index === 7 && (
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
              )}
              {index === 8 && (
                <>
                  <div className="mt-3">
                    {data[index].codicilSelection.options.map((option) => (
                      <div className="form-check mb-2" key={option.id}>
                        <input
                          className="form-check-input custom-radio"
                          value={option.value}
                          {...register("gender", {
                            required: "Please Select option",
                          })}
                          checked={gender === option.value}
                          onChange={(e) => setGender(e.target.value)}
                          type="radio"
                          name="gender"
                          id={option.value}
                          value={option.value}
                          checked={gender === option.value}
                          style={{
                            boxShadow: "none",

                            color: "white",
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={option.value}
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                    {errors.gender && (
                      <p className="text-danger">{errors.gender?.message}</p>
                    )}
                  </div>
                </>
              )}
              {index === 9 && (
                <>
                  <div className="row">
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
              )}
              {index === 10 && (
                <>
                  <div className="mb-3 row mt-2">
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
              )}
              {index === 11 && (
                <>
                  <div className="mb-3 row mt-2">
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
              )}
              {index === 12 && (
                <>
                  <div className="mt-2 pb-5">
                    {data[index].codicilSelection.options.map((option) => (
                      <div className="form-check mb-2" key={option.id}>
                        <input
                          className="form-check-input custom-radio"
                          value={option.value}
                          {...register("gender", {
                            required: "Please Select option",
                          })}
                          checked={gender === option.value}
                          onChange={(e) => setGender(e.target.value)}
                          type="radio"
                          name="gender"
                          id={option.value}
                          value={option.value}
                          checked={gender === option.value}
                          style={{
                            boxShadow: "none",

                            color: "white",
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={option.value}
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                    {errors.gender && (
                      <p className="text-danger">{errors.gender?.message}</p>
                    )}
                  </div>
                </>
              )}
              {index === 13 && (
                <>
                  <div className="mt-2 ">
                    {data[index].genderSelection.options.map((option) => (
                      <div className="form-check mb-2" key={option.id}>
                        <input
                          className="form-check-input custom-radio"
                          value={option.value}
                          {...register("gender", {
                            required: "Please Select option",
                          })}
                          checked={gender === option.value}
                          onChange={(e) => setGender(e.target.value)}
                          type="radio"
                          name="gender"
                          id={option.value}
                          value={option.value}
                          checked={gender === option.value}
                          style={{
                            boxShadow: "none",

                            color: "white",
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={option.value}
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                    {errors.gender && (
                      <p className="text-danger">{errors.gender?.message}</p>
                    )}
                  </div>
                </>
              )}

              <div className="d-flex mt-4 justify-content-between">
                {index > 4 && (
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
    </div>
  );
};
