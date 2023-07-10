import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";

const Step3 = () => {
  const router = useRouter();
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
              <div className="course-video-upload text-center">
                <input className="file-upload" type="file" name="" id="" />
                <div className="course-video-upload-img">
                  <Image
                    src="/assets/images/course-upload/illustraion.png"
                    alt=""
                    className="img-fluid"
                    width={302}
                    height={144}
                  />
                </div>
                <p className="course-video-upload-text">
                  Drag and drop video files to upload
                </p>
                <div className="course-video-upload-btn">
                  <span className="icon">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.71 7.46773C8.53 7.28773 8.28 7.17773 8 7.17773C7.72 7.17773 7.47 7.28773 7.29 7.46773L4.29 10.4677C4.11 10.6477 4 10.8977 4 11.1777C4 11.7277 4.45 12.1777 5 12.1777C5.28 12.1777 5.53 12.0677 5.71 11.8877L7 10.5877V15.1777C7 15.7277 7.45 16.1777 8 16.1777C8.55 16.1777 9 15.7277 9 15.1777V10.5877L10.29 11.8777C10.47 12.0677 10.72 12.1777 11 12.1777C11.55 12.1777 12 11.7277 12 11.1777C12 10.8977 11.89 10.6477 11.71 10.4677L8.71 7.46773ZM12 4.17773C11.97 4.17773 11.93 4.17773 11.9 4.18773C11.44 1.89773 9.42 0.177734 7 0.177734C4.24 0.177734 2 2.41773 2 5.17773C2 5.28773 2.01 5.39773 2.02 5.50773C0.83 6.06773 0 7.27773 0 8.67773C0 10.1077 0.86 11.3377 2.09 11.8777C2.04 11.6477 2 11.4177 2 11.1777C2 10.3477 2.34 9.59773 2.88 9.05773L5.88 6.05773C6.42 5.51773 7.17 5.17773 8 5.17773C8.83 5.17773 9.58 5.51773 10.12 6.05773L13.12 9.05773C13.66 9.59773 14 10.3477 14 11.1777C14 11.3377 13.98 11.4977 13.95 11.6477C15.17 10.9577 16 9.67773 16 8.17773C16 5.96773 14.21 4.17773 12 4.17773Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Upload your file (mp4 Or mpeg)
                </div>
              </div>

              {/* <!-- after-upload --> */}
              <div className="after-upload">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="upload-img-progressbar">
                      <div className="after-upload-image">
                        <Image
                          className="img-fluid"
                          src="/assets/images/course-upload/after-upload.png"
                          alt=""
                          width={416}
                          height={262}
                        />
                      </div>
                      <div className="after-upload-progressbar">
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar"
                            style={{ width: "70%" }}
                          >
                            Uploading your file (70%)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <Form action="" className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="" className="form-label">
                          Lesson Title
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                          defaultValue="Introduction to UI/UX Design Part-1.Mp4"
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="" className="form-label">
                          Course Description
                        </label>
                        <textarea
                          className="form-control"
                          name=""
                          id=""
                          rows="5"
                        >
                          Currently, the UI/UX design has emerged as one of the
                          most promising careers. Whether you’re working with a
                          designer on a website or app or doing the design
                          yourself, this UX Guideline will help you deliver a
                          tool that users love to use.
                        </textarea>
                        <p className="text-counting text-end">0/500</p>
                      </div>
                      <div className="col-12 mb-3">
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          label="Lesson Privacy"
                        />
                      </div>
                      <div className="col-12">
                        <div className="submit-btn">
                          <div className="btn remove">Remove</div>
                          <div
                            className="btn save"
                            onClick={() =>
                              router.push("/become-an-instructor/step-4")
                            }
                          >
                            Save
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step3;
