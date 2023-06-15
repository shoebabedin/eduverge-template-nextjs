import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Form } from "react-bootstrap";

const Step1 = () => {
  const router = useRouter();
  const [createSelection, setCreateSelection] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/become-an-instructor/step-2");
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
              {createSelection ? (
                <div className="empty-state">
                  <p>
                    To Upload your course videos please create your section and
                    lesson details first!
                  </p>
                  <button
                    className="btn"
                    onClick={() => setCreateSelection(false)}
                  >
                    <span>
                      <svg
                        width="11"
                        height="10"
                        viewBox="0 0 11 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1673 5.66732H6.16732V9.66732H4.83398V5.66732H0.833984V4.33398H4.83398V0.333984H6.16732V4.33398H10.1673V5.66732Z"
                          fill="#474D66"
                        />
                      </svg>
                    </span>
                    Create a Section
                  </button>
                </div>
              ) : (
                <div className="new-state">
                  <p>Section list for “ UI/UX Design Golden Course”</p>
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Introduction"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <div className="submit-btn">
                          <button
                            type="submit"
                            className="btn cancel"
                            onClick={() => setCreateSelection(true)}
                          >
                            Cancel
                          </button>
                          <button type="submit" className="btn save-continue">
                            Save & Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step1;
