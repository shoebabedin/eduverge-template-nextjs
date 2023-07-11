import { Plus } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Step2 = () => {
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
              <section className="singlecoursedetails">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h4 className="selection-list-title">
                        Section list for “ UI/UX Design Golden Course”
                      </h4>
                    </div>
                    <div className="col-12">
                      <div className="singlecourse-section">
                        <div className="singlecoursedetails-head">
                          <p>Section: Introduction</p>
                          <p>
                            <span>
                              Videos: 02 <span>|</span> Duration: 00:32:51
                            </span>
                            <span className="btn">
                              <span>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
                                    fill="#474D66"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                                    fill="#D14343"
                                  />
                                </svg>
                              </span>
                            </span>
                          </p>
                        </div>
                        <div className="singlecoursedetails-class">
                          <div className="row">
                            <div className="col-1">
                              <p className="text-center">01</p>
                            </div>
                            <div className="col-8">
                              <div className="img-title">
                                <div className="img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/single-course/img1.png"
                                    alt=""
                                    width={74}
                                    height={48}
                                  />
                                </div>
                                <div className="title">
                                  <h5>Introduction to UI/UX part-1</h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="duration">
                                <p className="duration-text">Duration: 7:51</p>
                                <span className="btn">
                                  <span>
                                    <svg
                                      width="22"
                                      height="22"
                                      viewBox="0 0 22 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.9993 15.5827C12.0077 15.5827 12.8327 14.7577 12.8327 13.7493C12.8327 12.741 12.0077 11.916 10.9993 11.916C9.99102 11.916 9.16602 12.741 9.16602 13.7493C9.16602 14.7577 9.99102 15.5827 10.9993 15.5827ZM16.4993 7.33268H15.5827V5.49935C15.5827 2.96935 13.5293 0.916016 10.9993 0.916016C8.46935 0.916016 6.41602 2.96935 6.41602 5.49935H8.15768C8.15768 3.93185 9.43185 2.65768 10.9993 2.65768C12.5668 2.65768 13.841 3.93185 13.841 5.49935V7.33268H5.49935C4.49102 7.33268 3.66602 8.15768 3.66602 9.16602V18.3327C3.66602 19.341 4.49102 20.166 5.49935 20.166H16.4993C17.5077 20.166 18.3327 19.341 18.3327 18.3327V9.16602C18.3327 8.15768 17.5077 7.33268 16.4993 7.33268ZM16.4993 18.3327H5.49935V9.16602H16.4993V18.3327Z"
                                        fill="#474D66"
                                      />
                                    </svg>
                                  </span>
                                  <span className="dropdown-action position-relative">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 8.0293C4 9.13387 3.10457 10.0293 2 10.0293C0.895431 10.0293 0 9.13387 0 8.0293C0 6.92473 0.895431 6.0293 2 6.0293C3.10457 6.0293 4 6.92473 4 8.0293ZM16 8.0293C16 9.13387 15.1046 10.0293 14 10.0293C12.8954 10.0293 12 9.13387 12 8.0293C12 6.92473 12.8954 6.0293 14 6.0293C15.1046 6.0293 16 6.92473 16 8.0293ZM8 10.0293C9.10457 10.0293 10 9.13387 10 8.0293C10 6.92473 9.10457 6.0293 8 6.0293C6.89543 6.0293 6 6.92473 6 8.0293C6 9.13387 6.89543 10.0293 8 10.0293Z"
                                        fill="#696F8C"
                                      />
                                    </svg>
                                    <ul className="dropdown-list">
                                      <li>
                                        <Link href="#">
                                          <span>
                                            <svg
                                              width="21"
                                              height="21"
                                              viewBox="0 0 21 21"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.5056 8.31939L13.2687 9.08247L5.75399 16.5972H4.99091V15.8341L12.5056 8.31939ZM15.4916 3.32617C15.2842 3.32617 15.0686 3.40912 14.911 3.56671L13.3931 5.08458L16.5035 8.19497L18.0214 6.6771C18.3449 6.35362 18.3449 5.83107 18.0214 5.50759L16.0805 3.56671C15.9146 3.40082 15.7072 3.32617 15.4916 3.32617ZM12.5056 5.97208L3.33203 15.1457V18.256H6.44242L15.616 9.08247L12.5056 5.97208Z"
                                                fill="#474D66"
                                              />
                                            </svg>
                                          </span>
                                          Edit
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="#">
                                          <span>
                                            <svg
                                              width="21"
                                              height="21"
                                              viewBox="0 0 21 21"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M14.114 8.23248V16.5269H7.47855V8.23248H14.114ZM12.8699 3.25586H8.7227L7.89327 4.0853H4.99023V5.74417H16.6024V4.0853H13.6993L12.8699 3.25586ZM15.7729 6.57361H5.81967V16.5269C5.81967 17.4392 6.56617 18.1857 7.47855 18.1857H14.114C15.0264 18.1857 15.7729 17.4392 15.7729 16.5269V6.57361Z"
                                                fill="#D14343"
                                              />
                                            </svg>
                                          </span>
                                          Delete
                                        </Link>
                                      </li>
                                    </ul>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-1">
                              <p className="text-center">01</p>
                            </div>
                            <div className="col-8">
                              <div className="img-title">
                                <div className="img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/single-course/img3.png"
                                    alt=""
                                    width={74}
                                    height={48}
                                  />
                                </div>
                                <div className="title">
                                  <h5>Introduction to UI/UX part-2</h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="duration">
                                <p className="duration-text">Duration: 7:00</p>
                                <span className="btn">
                                  <span>
                                    <svg
                                      width="22"
                                      height="22"
                                      viewBox="0 0 22 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.9993 15.5827C12.0077 15.5827 12.8327 14.7577 12.8327 13.7493C12.8327 12.741 12.0077 11.916 10.9993 11.916C9.99102 11.916 9.16602 12.741 9.16602 13.7493C9.16602 14.7577 9.99102 15.5827 10.9993 15.5827ZM16.4993 7.33268H15.5827V5.49935C15.5827 2.96935 13.5293 0.916016 10.9993 0.916016C8.46935 0.916016 6.41602 2.96935 6.41602 5.49935H8.15768C8.15768 3.93185 9.43185 2.65768 10.9993 2.65768C12.5668 2.65768 13.841 3.93185 13.841 5.49935V7.33268H5.49935C4.49102 7.33268 3.66602 8.15768 3.66602 9.16602V18.3327C3.66602 19.341 4.49102 20.166 5.49935 20.166H16.4993C17.5077 20.166 18.3327 19.341 18.3327 18.3327V9.16602C18.3327 8.15768 17.5077 7.33268 16.4993 7.33268ZM16.4993 18.3327H5.49935V9.16602H16.4993V18.3327Z"
                                        fill="#474D66"
                                      />
                                    </svg>
                                  </span>
                                  <span className="dropdown-action position-relative">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 8.0293C4 9.13387 3.10457 10.0293 2 10.0293C0.895431 10.0293 0 9.13387 0 8.0293C0 6.92473 0.895431 6.0293 2 6.0293C3.10457 6.0293 4 6.92473 4 8.0293ZM16 8.0293C16 9.13387 15.1046 10.0293 14 10.0293C12.8954 10.0293 12 9.13387 12 8.0293C12 6.92473 12.8954 6.0293 14 6.0293C15.1046 6.0293 16 6.92473 16 8.0293ZM8 10.0293C9.10457 10.0293 10 9.13387 10 8.0293C10 6.92473 9.10457 6.0293 8 6.0293C6.89543 6.0293 6 6.92473 6 8.0293C6 9.13387 6.89543 10.0293 8 10.0293Z"
                                        fill="#696F8C"
                                      />
                                    </svg>
                                    <ul className="dropdown-list">
                                      <li>
                                        <Link href="#">
                                          <span>
                                            <svg
                                              width="21"
                                              height="21"
                                              viewBox="0 0 21 21"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.5056 8.31939L13.2687 9.08247L5.75399 16.5972H4.99091V15.8341L12.5056 8.31939ZM15.4916 3.32617C15.2842 3.32617 15.0686 3.40912 14.911 3.56671L13.3931 5.08458L16.5035 8.19497L18.0214 6.6771C18.3449 6.35362 18.3449 5.83107 18.0214 5.50759L16.0805 3.56671C15.9146 3.40082 15.7072 3.32617 15.4916 3.32617ZM12.5056 5.97208L3.33203 15.1457V18.256H6.44242L15.616 9.08247L12.5056 5.97208Z"
                                                fill="#474D66"
                                              />
                                            </svg>
                                          </span>
                                          Edit
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="#">
                                          <span>
                                            <svg
                                              width="21"
                                              height="21"
                                              viewBox="0 0 21 21"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M14.114 8.23248V16.5269H7.47855V8.23248H14.114ZM12.8699 3.25586H8.7227L7.89327 4.0853H4.99023V5.74417H16.6024V4.0853H13.6993L12.8699 3.25586ZM15.7729 6.57361H5.81967V16.5269C5.81967 17.4392 6.56617 18.1857 7.47855 18.1857H14.114C15.0264 18.1857 15.7729 17.4392 15.7729 16.5269V6.57361Z"
                                                fill="#D14343"
                                              />
                                            </svg>
                                          </span>
                                          Delete
                                        </Link>
                                      </li>
                                    </ul>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="add-lesson-btn text-center mb-4">
                            <button
                              className="btn border border-success-subtle text-success"
                              onClick={() =>
                                router.push("/become-an-instructor/step-3")
                              }
                            >
                              Add Lesson
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="singlecourse-section">
                        <div className="singlecoursedetails-head">
                          <p>Section: Site Map</p>
                          <p>
                            <span>
                              Videos: 01 <span>|</span> Duration: 00:07:00
                            </span>
                            <span className="btn">
                              <span>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
                                    fill="#474D66"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                                    fill="#D14343"
                                  />
                                </svg>
                              </span>
                            </span>
                          </p>
                        </div>
                        <div className="singlecoursedetails-class">
                          <div className="row">
                            <div className="col-1">
                              <p className="text-center">01</p>
                            </div>
                            <div className="col-8">
                              <div className="img-title">
                                <div className="img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/single-course/img7.png"
                                    alt=""
                                    width={74}
                                    height={48}
                                  />
                                </div>
                                <div className="title">
                                  <h5>Introduction to UI/UX part-2</h5>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="duration">
                                <p className="duration-text">Duration: 7:51</p>
                                <span className="btn">
                                  <span>
                                    <svg
                                      width="22"
                                      height="22"
                                      viewBox="0 0 22 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.9993 15.5827C12.0077 15.5827 12.8327 14.7577 12.8327 13.7493C12.8327 12.741 12.0077 11.916 10.9993 11.916C9.99102 11.916 9.16602 12.741 9.16602 13.7493C9.16602 14.7577 9.99102 15.5827 10.9993 15.5827ZM16.4993 7.33268H15.5827V5.49935C15.5827 2.96935 13.5293 0.916016 10.9993 0.916016C8.46935 0.916016 6.41602 2.96935 6.41602 5.49935H8.15768C8.15768 3.93185 9.43185 2.65768 10.9993 2.65768C12.5668 2.65768 13.841 3.93185 13.841 5.49935V7.33268H5.49935C4.49102 7.33268 3.66602 8.15768 3.66602 9.16602V18.3327C3.66602 19.341 4.49102 20.166 5.49935 20.166H16.4993C17.5077 20.166 18.3327 19.341 18.3327 18.3327V9.16602C18.3327 8.15768 17.5077 7.33268 16.4993 7.33268ZM16.4993 18.3327H5.49935V9.16602H16.4993V18.3327Z"
                                        fill="#474D66"
                                      />
                                    </svg>
                                  </span>
                                  <span className="dropdown-action position-relative">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 8.0293C4 9.13387 3.10457 10.0293 2 10.0293C0.895431 10.0293 0 9.13387 0 8.0293C0 6.92473 0.895431 6.0293 2 6.0293C3.10457 6.0293 4 6.92473 4 8.0293ZM16 8.0293C16 9.13387 15.1046 10.0293 14 10.0293C12.8954 10.0293 12 9.13387 12 8.0293C12 6.92473 12.8954 6.0293 14 6.0293C15.1046 6.0293 16 6.92473 16 8.0293ZM8 10.0293C9.10457 10.0293 10 9.13387 10 8.0293C10 6.92473 9.10457 6.0293 8 6.0293C6.89543 6.0293 6 6.92473 6 8.0293C6 9.13387 6.89543 10.0293 8 10.0293Z"
                                        fill="#696F8C"
                                      />
                                    </svg>
                                    <ul className="dropdown-list">
                                      <li>
                                        <Link href="#">
                                          <span>
                                            <svg
                                              width="21"
                                              height="21"
                                              viewBox="0 0 21 21"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M12.5056 8.31939L13.2687 9.08247L5.75399 16.5972H4.99091V15.8341L12.5056 8.31939ZM15.4916 3.32617C15.2842 3.32617 15.0686 3.40912 14.911 3.56671L13.3931 5.08458L16.5035 8.19497L18.0214 6.6771C18.3449 6.35362 18.3449 5.83107 18.0214 5.50759L16.0805 3.56671C15.9146 3.40082 15.7072 3.32617 15.4916 3.32617ZM12.5056 5.97208L3.33203 15.1457V18.256H6.44242L15.616 9.08247L12.5056 5.97208Z"
                                                fill="#474D66"
                                              />
                                            </svg>
                                          </span>
                                          Edit
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="#">
                                          <span>
                                            <svg
                                              width="21"
                                              height="21"
                                              viewBox="0 0 21 21"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M14.114 8.23248V16.5269H7.47855V8.23248H14.114ZM12.8699 3.25586H8.7227L7.89327 4.0853H4.99023V5.74417H16.6024V4.0853H13.6993L12.8699 3.25586ZM15.7729 6.57361H5.81967V16.5269C5.81967 17.4392 6.56617 18.1857 7.47855 18.1857H14.114C15.0264 18.1857 15.7729 17.4392 15.7729 16.5269V6.57361Z"
                                                fill="#D14343"
                                              />
                                            </svg>
                                          </span>
                                          Delete
                                        </Link>
                                      </li>
                                    </ul>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div className="add-lesson-btn text-center mb-4">
                            <button
                              className="btn border border-success-subtle text-success"
                              onClick={() =>
                                router.push("/become-an-instructor/step-3")
                              }
                            >
                              Add Lesson
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-lg-12">
              <Link
                href={"/become-an-instructor/step-1"}
                className="text-success d-flex align-items-center justify-content-start gap-1"
              >
                <Plus size={20} color="#429777" weight="bold" />
                Add More Section
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step2;
