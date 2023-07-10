import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
// import { colourOptions } from "./docs/data";

const animatedComponents = makeAnimated();

const BecomeAnInstructor = () => {
  const router = useRouter();
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();

  // Array of all options
  const optionList = [
    { value: "User Experience", label: "User Experience" },
    { value: "User Interface", label: "User Interface" },
    { value: "Best Course", label: "Best Course" },
    { value: "Figma Design", label: "Figma Design" }
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }

  // course form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/become-an-instructor/step-1");
  };
  return (
    <>
      <section className="course-categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="#">Home </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link href="#">Create New Course</Link>
                  </li>
                </ol>
              </nav>
              <h2 className="heading">Create Your Dream Course</h2>
            </div>
            <div className="col-lg-3">
              <Image
                className="img-fluid"
                src="/assets/images/create-new-course/group.png"
                alt=""
                width={239}
                height={155}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="create-new-course">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="#">Course overview </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="#">Upload Video </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link href="#">Submit</Link>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-12">
              <Form onSubmit={handleSubmit}>
                {/* Course Details */}
                <div className="col-lg-12 mb-3">
                  <div className="course-details">
                    <h4 className="course-details-title">Course Details</h4>
                    <hr />
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Course Title
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="UI/UX Design Golden Course"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Course Description
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="4"
                          placeholder="E.g. This is course description that..."
                        ></textarea>
                        <div className="text-count">
                          <p>
                            <span>0</span>/500
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Course Feature
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="4"
                          placeholder="e.g. This is course feature.."
                        ></textarea>
                        <div className="text-count">
                          <p>
                            <span>0</span>/500
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Course Details */}
                <div className="col-lg-12 mb-3">
                  <div className="course-details">
                    <h4 className="course-details-title">Category & Tags</h4>
                    <hr />
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Course Category
                        </label>
                        <select name="" id="" className="form-select">
                          <option defaultValue="" selected>
                            Select Category
                          </option>
                          <option defaultValue="">Category 1</option>
                          <option defaultValue="">Category 2</option>
                        </select>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Course Sub Category
                        </label>
                        <select name="" id="" className="form-select">
                          <option defaultValue="" selected>
                            Select Sub Category
                          </option>
                          <option defaultValue="">Category 1</option>
                          <option defaultValue="">Category 2</option>
                        </select>
                      </div>
                      <div className="col-lg-12 mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Tags
                        </label>
                        <Select
                          className="form-select"
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultdefaultValue={[optionList[0], optionList[1]]}
                          isMulti
                          options={optionList}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-3">
                  <div className="course-details">
                    <h4 className="course-details-title">Price & Others</h4>
                    <hr />
                    <div className="row">
                      <div className="col-lg-4 mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Price Currency
                        </label>
                        <select name="" id="" className="form-select">
                          <option defaultValue="" selected>
                            Select Currency
                          </option>
                          <option defaultValue="">Currency 1</option>
                          <option defaultValue="">Currency 2</option>
                        </select>
                      </div>
                      <div className="col-lg-4 mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                          Course Price
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          name=""
                          id=""
                          placeholder="Enter Course Price"
                        />
                      </div>
                      <div className="col-lg-4 mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Language
                        </label>
                        <select name="" id="" className="form-select">
                          <option defaultValue="" selected>
                            Select Language
                          </option>
                          <option defaultValue="">Language 1</option>
                          <option defaultValue="">Language 2</option>
                        </select>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Difficulty Level
                        </label>
                        <select name="" id="" className="form-select">
                          <option defaultValue="" selected>
                            Beginner
                          </option>
                          <option defaultValue="">Beginner 1</option>
                          <option defaultValue="">Beginner 2</option>
                        </select>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Learners Accessibility
                        </label>
                        <select name="" id="" className="form-select">
                          <option defaultValue="" selected>
                            Public
                          </option>
                          <option defaultValue="">Public 1</option>
                          <option defaultValue="">Public 2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-3">
                  <div className="course-details">
                    <h4 className="course-details-title">Course Thumbnail</h4>
                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="dropzone-wrapper">
                            <div className="dropzone-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/create-new-course/illustration_upload.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="dropzone-desc">
                              <h4>Select files</h4>
                              <p>
                                Drop files here or click{" "}
                                <span className="browser">browse</span> thorough
                                your machine
                              </p>
                            </div>
                            <input
                              type="file"
                              name="img_logo"
                              className="dropzone"
                            />
                          </div>
                          <div className="preview-zone hidden">
                            <div className="box box-solid">
                              <div className="file-upload-title-box">
                                <span>
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333ZM7.08333 11.25L9.16667 13.7583L12.0833 10L15.8333 15H4.16667L7.08333 11.25Z"
                                      fill="#474D66"
                                    />
                                  </svg>
                                </span>
                                <p className="box-body">no file upload.png/jpeg</p>
                              </div>
                              <span className="file-size-limit">
                                file size may not exceed 800 kilobyte
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="submit-btn">
                    <button type="submit" className="btn cancel">
                      Cancel
                    </button>
                    <button type="submit" className="btn save-continue">
                      Save & Continue
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomeAnInstructor;
