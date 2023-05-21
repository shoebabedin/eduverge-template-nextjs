import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MyCertification = () => {
  const [emptyData, setEmptyData] = useState(false);
  return (
    <>
      <div className="checkout_process_modal my-certification-modal">
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="checkout-list">My Certification</h2>
                <hr />
              </div>
              <div className="col-lg-12">
                {emptyData ? (
                  <ul>
                    <li className="row">
                      <div className="col-1">
                        <p className="serial">01</p>
                      </div>
                      <div className="col">
                        <h4 className="certificate-title">
                          UI/UX Design Golden Course
                        </h4>
                      </div>
                      <div className="col">
                        <p className="certificate-date">Enrolled: 24/12/2022</p>
                      </div>
                      <div className="col">
                        <span className="course-complete-status">
                          Completed
                        </span>
                      </div>

                      <div className="col">
                        <div className="view_option">
                          <button
                            className="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#viewCertificate"
                          >
                            View Certificate
                          </button>
                          <span className="dots">
                            <svg
                              width="16"
                              height="5"
                              viewBox="0 0 16 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4 2.03027C4 3.13484 3.10457 4.03027 2 4.03027C0.895431 4.03027 0 3.13484 0 2.03027C0 0.925704 0.895431 0.0302734 2 0.0302734C3.10457 0.0302734 4 0.925704 4 2.03027ZM16 2.03027C16 3.13484 15.1046 4.03027 14 4.03027C12.8954 4.03027 12 3.13484 12 2.03027C12 0.925704 12.8954 0.0302734 14 0.0302734C15.1046 0.0302734 16 0.925704 16 2.03027ZM8 4.03027C9.10457 4.03027 10 3.13484 10 2.03027C10 0.925704 9.10457 0.0302734 8 0.0302734C6.89543 0.0302734 6 0.925704 6 2.03027C6 3.13484 6.89543 4.03027 8 4.03027Z"
                                fill="#696F8C"
                              />
                            </svg>
                            <div className="dropdown-div">
                              <ul>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.9997 2H3.99967V4.66667H11.9997V2ZM12.6663 8C12.4895 8 12.32 7.92976 12.1949 7.80474C12.0699 7.67971 11.9997 7.51014 11.9997 7.33333C11.9997 7.15652 12.0699 6.98695 12.1949 6.86193C12.32 6.7369 12.4895 6.66667 12.6663 6.66667C12.8432 6.66667 13.0127 6.7369 13.1377 6.86193C13.2628 6.98695 13.333 7.15652 13.333 7.33333C13.333 7.51014 13.2628 7.67971 13.1377 7.80474C13.0127 7.92976 12.8432 8 12.6663 8ZM10.6663 12.6667H5.33301V9.33333H10.6663V12.6667ZM12.6663 5.33333H3.33301C2.80257 5.33333 2.29387 5.54405 1.91879 5.91912C1.54372 6.29419 1.33301 6.8029 1.33301 7.33333V11.3333H3.99967V14H11.9997V11.3333H14.6663V7.33333C14.6663 6.8029 14.4556 6.29419 14.0806 5.91912C13.7055 5.54405 13.1968 5.33333 12.6663 5.33333Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Print
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12 10.7197C11.4933 10.7197 11.04 10.9197 10.6933 11.233L5.94 8.46634C5.97333 8.31301 6 8.15967 6 7.99967C6 7.83967 5.97333 7.68634 5.94 7.53301L10.64 4.79301C11 5.12634 11.4733 5.33301 12 5.33301C13.1067 5.33301 14 4.43967 14 3.33301C14 2.22634 13.1067 1.33301 12 1.33301C10.8933 1.33301 10 2.22634 10 3.33301C10 3.49301 10.0267 3.64634 10.06 3.79967L5.36 6.53967C5 6.20634 4.52667 5.99967 4 5.99967C2.89333 5.99967 2 6.89301 2 7.99967C2 9.10634 2.89333 9.99967 4 9.99967C4.52667 9.99967 5 9.79301 5.36 9.45967L10.1067 12.233C10.0733 12.373 10.0533 12.5197 10.0533 12.6663C10.0533 13.7397 10.9267 14.613 12 14.613C13.0733 14.613 13.9467 13.7397 13.9467 12.6663C13.9467 11.593 13.0733 10.7197 12 10.7197Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Share
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.33301 13.3333H12.6663V12H3.33301V13.3333ZM12.6663 6H9.99967V2H5.99967V6H3.33301L7.99967 10.6667L12.6663 6Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Dowload
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </div>
                      </div>
                    </li>
                    <hr />
                    <li className="row">
                      <div className="col-1">
                        <p className="serial">02</p>
                      </div>
                      <div className="col">
                        <h4 className="certificate-title">
                          Angular- The complete guide (2022)
                        </h4>
                      </div>
                      <div className="col">
                        <p className="certificate-date">Enrolled: 24/12/2022</p>
                      </div>
                      <div className="col">
                        <div className="course-progress-bar">
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                          <p className="progress-percent">70%</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="view_option">
                          <button className="btn disabled">
                            View Certificate
                          </button>
                          <span className="dots">
                            <svg
                              width="16"
                              height="5"
                              viewBox="0 0 16 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4 2.03027C4 3.13484 3.10457 4.03027 2 4.03027C0.895431 4.03027 0 3.13484 0 2.03027C0 0.925704 0.895431 0.0302734 2 0.0302734C3.10457 0.0302734 4 0.925704 4 2.03027ZM16 2.03027C16 3.13484 15.1046 4.03027 14 4.03027C12.8954 4.03027 12 3.13484 12 2.03027C12 0.925704 12.8954 0.0302734 14 0.0302734C15.1046 0.0302734 16 0.925704 16 2.03027ZM8 4.03027C9.10457 4.03027 10 3.13484 10 2.03027C10 0.925704 9.10457 0.0302734 8 0.0302734C6.89543 0.0302734 6 0.925704 6 2.03027C6 3.13484 6.89543 4.03027 8 4.03027Z"
                                fill="#696F8C"
                              />
                            </svg>
                            <div className="dropdown-div">
                              <ul>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.9997 2H3.99967V4.66667H11.9997V2ZM12.6663 8C12.4895 8 12.32 7.92976 12.1949 7.80474C12.0699 7.67971 11.9997 7.51014 11.9997 7.33333C11.9997 7.15652 12.0699 6.98695 12.1949 6.86193C12.32 6.7369 12.4895 6.66667 12.6663 6.66667C12.8432 6.66667 13.0127 6.7369 13.1377 6.86193C13.2628 6.98695 13.333 7.15652 13.333 7.33333C13.333 7.51014 13.2628 7.67971 13.1377 7.80474C13.0127 7.92976 12.8432 8 12.6663 8ZM10.6663 12.6667H5.33301V9.33333H10.6663V12.6667ZM12.6663 5.33333H3.33301C2.80257 5.33333 2.29387 5.54405 1.91879 5.91912C1.54372 6.29419 1.33301 6.8029 1.33301 7.33333V11.3333H3.99967V14H11.9997V11.3333H14.6663V7.33333C14.6663 6.8029 14.4556 6.29419 14.0806 5.91912C13.7055 5.54405 13.1968 5.33333 12.6663 5.33333Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Print
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12 10.7197C11.4933 10.7197 11.04 10.9197 10.6933 11.233L5.94 8.46634C5.97333 8.31301 6 8.15967 6 7.99967C6 7.83967 5.97333 7.68634 5.94 7.53301L10.64 4.79301C11 5.12634 11.4733 5.33301 12 5.33301C13.1067 5.33301 14 4.43967 14 3.33301C14 2.22634 13.1067 1.33301 12 1.33301C10.8933 1.33301 10 2.22634 10 3.33301C10 3.49301 10.0267 3.64634 10.06 3.79967L5.36 6.53967C5 6.20634 4.52667 5.99967 4 5.99967C2.89333 5.99967 2 6.89301 2 7.99967C2 9.10634 2.89333 9.99967 4 9.99967C4.52667 9.99967 5 9.79301 5.36 9.45967L10.1067 12.233C10.0733 12.373 10.0533 12.5197 10.0533 12.6663C10.0533 13.7397 10.9267 14.613 12 14.613C13.0733 14.613 13.9467 13.7397 13.9467 12.6663C13.9467 11.593 13.0733 10.7197 12 10.7197Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Share
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.33301 13.3333H12.6663V12H3.33301V13.3333ZM12.6663 6H9.99967V2H5.99967V6H3.33301L7.99967 10.6667L12.6663 6Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Dowload
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </div>
                      </div>
                    </li>
                    <hr />
                    <li className="row">
                      <div className="col-1">
                        <p className="serial">03</p>
                      </div>
                      <div className="col">
                        <h4 className="certificate-title">
                          Date Analytics- Google guide
                        </h4>
                      </div>
                      <div className="col">
                        <p className="certificate-date">Enrolled: 24/12/2022</p>
                      </div>
                      <div className="col">
                        <div className="course-progress-bar">
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                          <p className="progress-percent">70%</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="view_option">
                          <button className="btn disabled">
                            View Certificate
                          </button>
                          <span className="dots">
                            <svg
                              width="16"
                              height="5"
                              viewBox="0 0 16 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4 2.03027C4 3.13484 3.10457 4.03027 2 4.03027C0.895431 4.03027 0 3.13484 0 2.03027C0 0.925704 0.895431 0.0302734 2 0.0302734C3.10457 0.0302734 4 0.925704 4 2.03027ZM16 2.03027C16 3.13484 15.1046 4.03027 14 4.03027C12.8954 4.03027 12 3.13484 12 2.03027C12 0.925704 12.8954 0.0302734 14 0.0302734C15.1046 0.0302734 16 0.925704 16 2.03027ZM8 4.03027C9.10457 4.03027 10 3.13484 10 2.03027C10 0.925704 9.10457 0.0302734 8 0.0302734C6.89543 0.0302734 6 0.925704 6 2.03027C6 3.13484 6.89543 4.03027 8 4.03027Z"
                                fill="#696F8C"
                              />
                            </svg>
                            <div className="dropdown-div">
                              <ul>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.9997 2H3.99967V4.66667H11.9997V2ZM12.6663 8C12.4895 8 12.32 7.92976 12.1949 7.80474C12.0699 7.67971 11.9997 7.51014 11.9997 7.33333C11.9997 7.15652 12.0699 6.98695 12.1949 6.86193C12.32 6.7369 12.4895 6.66667 12.6663 6.66667C12.8432 6.66667 13.0127 6.7369 13.1377 6.86193C13.2628 6.98695 13.333 7.15652 13.333 7.33333C13.333 7.51014 13.2628 7.67971 13.1377 7.80474C13.0127 7.92976 12.8432 8 12.6663 8ZM10.6663 12.6667H5.33301V9.33333H10.6663V12.6667ZM12.6663 5.33333H3.33301C2.80257 5.33333 2.29387 5.54405 1.91879 5.91912C1.54372 6.29419 1.33301 6.8029 1.33301 7.33333V11.3333H3.99967V14H11.9997V11.3333H14.6663V7.33333C14.6663 6.8029 14.4556 6.29419 14.0806 5.91912C13.7055 5.54405 13.1968 5.33333 12.6663 5.33333Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Print
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12 10.7197C11.4933 10.7197 11.04 10.9197 10.6933 11.233L5.94 8.46634C5.97333 8.31301 6 8.15967 6 7.99967C6 7.83967 5.97333 7.68634 5.94 7.53301L10.64 4.79301C11 5.12634 11.4733 5.33301 12 5.33301C13.1067 5.33301 14 4.43967 14 3.33301C14 2.22634 13.1067 1.33301 12 1.33301C10.8933 1.33301 10 2.22634 10 3.33301C10 3.49301 10.0267 3.64634 10.06 3.79967L5.36 6.53967C5 6.20634 4.52667 5.99967 4 5.99967C2.89333 5.99967 2 6.89301 2 7.99967C2 9.10634 2.89333 9.99967 4 9.99967C4.52667 9.99967 5 9.79301 5.36 9.45967L10.1067 12.233C10.0733 12.373 10.0533 12.5197 10.0533 12.6663C10.0533 13.7397 10.9267 14.613 12 14.613C13.0733 14.613 13.9467 13.7397 13.9467 12.6663C13.9467 11.593 13.0733 10.7197 12 10.7197Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Share
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.33301 13.3333H12.6663V12H3.33301V13.3333ZM12.6663 6H9.99967V2H5.99967V6H3.33301L7.99967 10.6667L12.6663 6Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Dowload
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </div>
                      </div>
                    </li>
                    <hr />
                    <li className="row">
                      <div className="col-1">
                        <p className="serial">04</p>
                      </div>
                      <div className="col">
                        <h4 className="certificate-title">
                          Digital Marketing Course
                        </h4>
                      </div>
                      <div className="col">
                        <p className="certificate-date">Enrolled: 24/12/2022</p>
                      </div>
                      <div className="col">
                        <div className="course-progress-bar">
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                          <p className="progress-percent">70%</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="view_option">
                          <button className="btn disabled">
                            View Certificate
                          </button>
                          <span className="dots">
                            <svg
                              width="16"
                              height="5"
                              viewBox="0 0 16 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4 2.03027C4 3.13484 3.10457 4.03027 2 4.03027C0.895431 4.03027 0 3.13484 0 2.03027C0 0.925704 0.895431 0.0302734 2 0.0302734C3.10457 0.0302734 4 0.925704 4 2.03027ZM16 2.03027C16 3.13484 15.1046 4.03027 14 4.03027C12.8954 4.03027 12 3.13484 12 2.03027C12 0.925704 12.8954 0.0302734 14 0.0302734C15.1046 0.0302734 16 0.925704 16 2.03027ZM8 4.03027C9.10457 4.03027 10 3.13484 10 2.03027C10 0.925704 9.10457 0.0302734 8 0.0302734C6.89543 0.0302734 6 0.925704 6 2.03027C6 3.13484 6.89543 4.03027 8 4.03027Z"
                                fill="#696F8C"
                              />
                            </svg>
                            <div className="dropdown-div">
                              <ul>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.9997 2H3.99967V4.66667H11.9997V2ZM12.6663 8C12.4895 8 12.32 7.92976 12.1949 7.80474C12.0699 7.67971 11.9997 7.51014 11.9997 7.33333C11.9997 7.15652 12.0699 6.98695 12.1949 6.86193C12.32 6.7369 12.4895 6.66667 12.6663 6.66667C12.8432 6.66667 13.0127 6.7369 13.1377 6.86193C13.2628 6.98695 13.333 7.15652 13.333 7.33333C13.333 7.51014 13.2628 7.67971 13.1377 7.80474C13.0127 7.92976 12.8432 8 12.6663 8ZM10.6663 12.6667H5.33301V9.33333H10.6663V12.6667ZM12.6663 5.33333H3.33301C2.80257 5.33333 2.29387 5.54405 1.91879 5.91912C1.54372 6.29419 1.33301 6.8029 1.33301 7.33333V11.3333H3.99967V14H11.9997V11.3333H14.6663V7.33333C14.6663 6.8029 14.4556 6.29419 14.0806 5.91912C13.7055 5.54405 13.1968 5.33333 12.6663 5.33333Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Print
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12 10.7197C11.4933 10.7197 11.04 10.9197 10.6933 11.233L5.94 8.46634C5.97333 8.31301 6 8.15967 6 7.99967C6 7.83967 5.97333 7.68634 5.94 7.53301L10.64 4.79301C11 5.12634 11.4733 5.33301 12 5.33301C13.1067 5.33301 14 4.43967 14 3.33301C14 2.22634 13.1067 1.33301 12 1.33301C10.8933 1.33301 10 2.22634 10 3.33301C10 3.49301 10.0267 3.64634 10.06 3.79967L5.36 6.53967C5 6.20634 4.52667 5.99967 4 5.99967C2.89333 5.99967 2 6.89301 2 7.99967C2 9.10634 2.89333 9.99967 4 9.99967C4.52667 9.99967 5 9.79301 5.36 9.45967L10.1067 12.233C10.0733 12.373 10.0533 12.5197 10.0533 12.6663C10.0533 13.7397 10.9267 14.613 12 14.613C13.0733 14.613 13.9467 13.7397 13.9467 12.6663C13.9467 11.593 13.0733 10.7197 12 10.7197Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Share
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.33301 13.3333H12.6663V12H3.33301V13.3333ZM12.6663 6H9.99967V2H5.99967V6H3.33301L7.99967 10.6667L12.6663 6Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Dowload
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </div>
                      </div>
                    </li>
                    <hr />
                    <li className="row">
                      <div className="col-1">
                        <p className="serial">05</p>
                      </div>
                      <div className="col">
                        <h4 className="certificate-title">
                          Premium Pro Video Editing Course
                        </h4>
                      </div>
                      <div className="col">
                        <p className="certificate-date">Enrolled: 24/12/2022</p>
                      </div>
                      <div className="col">
                        <div className="course-progress-bar">
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "15%" }}
                            ></div>
                          </div>
                          <p className="progress-percent">15%</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="view_option">
                          <button className="btn disabled">
                            View Certificate
                          </button>
                          <span className="dots">
                            <svg
                              width="16"
                              height="5"
                              viewBox="0 0 16 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M4 2.03027C4 3.13484 3.10457 4.03027 2 4.03027C0.895431 4.03027 0 3.13484 0 2.03027C0 0.925704 0.895431 0.0302734 2 0.0302734C3.10457 0.0302734 4 0.925704 4 2.03027ZM16 2.03027C16 3.13484 15.1046 4.03027 14 4.03027C12.8954 4.03027 12 3.13484 12 2.03027C12 0.925704 12.8954 0.0302734 14 0.0302734C15.1046 0.0302734 16 0.925704 16 2.03027ZM8 4.03027C9.10457 4.03027 10 3.13484 10 2.03027C10 0.925704 9.10457 0.0302734 8 0.0302734C6.89543 0.0302734 6 0.925704 6 2.03027C6 3.13484 6.89543 4.03027 8 4.03027Z"
                                fill="#696F8C"
                              />
                            </svg>
                            <div className="dropdown-div">
                              <ul>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.9997 2H3.99967V4.66667H11.9997V2ZM12.6663 8C12.4895 8 12.32 7.92976 12.1949 7.80474C12.0699 7.67971 11.9997 7.51014 11.9997 7.33333C11.9997 7.15652 12.0699 6.98695 12.1949 6.86193C12.32 6.7369 12.4895 6.66667 12.6663 6.66667C12.8432 6.66667 13.0127 6.7369 13.1377 6.86193C13.2628 6.98695 13.333 7.15652 13.333 7.33333C13.333 7.51014 13.2628 7.67971 13.1377 7.80474C13.0127 7.92976 12.8432 8 12.6663 8ZM10.6663 12.6667H5.33301V9.33333H10.6663V12.6667ZM12.6663 5.33333H3.33301C2.80257 5.33333 2.29387 5.54405 1.91879 5.91912C1.54372 6.29419 1.33301 6.8029 1.33301 7.33333V11.3333H3.99967V14H11.9997V11.3333H14.6663V7.33333C14.6663 6.8029 14.4556 6.29419 14.0806 5.91912C13.7055 5.54405 13.1968 5.33333 12.6663 5.33333Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Print
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12 10.7197C11.4933 10.7197 11.04 10.9197 10.6933 11.233L5.94 8.46634C5.97333 8.31301 6 8.15967 6 7.99967C6 7.83967 5.97333 7.68634 5.94 7.53301L10.64 4.79301C11 5.12634 11.4733 5.33301 12 5.33301C13.1067 5.33301 14 4.43967 14 3.33301C14 2.22634 13.1067 1.33301 12 1.33301C10.8933 1.33301 10 2.22634 10 3.33301C10 3.49301 10.0267 3.64634 10.06 3.79967L5.36 6.53967C5 6.20634 4.52667 5.99967 4 5.99967C2.89333 5.99967 2 6.89301 2 7.99967C2 9.10634 2.89333 9.99967 4 9.99967C4.52667 9.99967 5 9.79301 5.36 9.45967L10.1067 12.233C10.0733 12.373 10.0533 12.5197 10.0533 12.6663C10.0533 13.7397 10.9267 14.613 12 14.613C13.0733 14.613 13.9467 13.7397 13.9467 12.6663C13.9467 11.593 13.0733 10.7197 12 10.7197Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Share
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <span>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M3.33301 13.3333H12.6663V12H3.33301V13.3333ZM12.6663 6H9.99967V2H5.99967V6H3.33301L7.99967 10.6667L12.6663 6Z"
                                          fill="#474D66"
                                        />
                                      </svg>
                                    </span>
                                    Dowload
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </div>
                      </div>
                    </li>
                    <hr />
                  </ul>
                ) : (
                  <div className="certificate-empty-state">
                    <Image
                      className="img-fluid"
                      src="/assets/images/my-certificate/illustration.png"
                      alt=""
                      width={308}
                      height={296}
                    />
                    <p>You haven&apos;t Completed any courses till now!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCertification;
