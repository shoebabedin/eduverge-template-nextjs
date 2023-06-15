import LarnerHeader from "@/components/Student/LarnerHeader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Form } from "react-bootstrap";

const OrderHistory = () => {
  const [historyData, setHistoryData] = useState({});
  return (
    <>
      <LarnerHeader />

      <div className="order-history">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="order-history-header">
                <h4 className="order-history-title">Order History</h4>
                <Form className="search-form position-relative">
                  <input
                    className="form-control"
                    type="search"
                    name=""
                    id=""
                    placeholder="Search Course"
                  />
                  <span className="search">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
                        fill="#696F8C"
                      />
                    </svg>
                  </span>
                </Form>
              </div>
              <div className="order-history-tabs">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      Paid
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="contact-tab-pane"
                      aria-selected="false"
                    >
                      Refund
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex="0"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Course Title</th>
                          <th scope="col">Enroll Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Payment By</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {historyData ? (
                          <>
                            <tr>
                              <th scope="row">01</th>
                              <td className="d-flex align-items-center justify-content-start">
                                <div className="data-img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/order-history/img1.png"
                                    alt=""
                                    width={100}
                                height={100}
                                  />
                                </div>
                                <p>UI/UX Design Golden Course</p>
                              </td>
                              <td>24/12/2022</td>
                              <td>Paid</td>
                              <td>Paypal</td>
                              <td>$ 648.00</td>
                            </tr>
                            <tr>
                              <th scope="row">02</th>
                              <td className="d-flex align-items-center justify-content-start">
                                <div className="data-img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/order-history/img2.png"
                                    alt=""
                                    width={100}
                                height={100}
                                  />
                                </div>
                                <p>Graphics Design Advance Course</p>
                              </td>
                              <td>24/12/2022</td>
                              <td>Paid</td>
                              <td>Paypal</td>
                              <td>$ 508.00</td>
                            </tr>
                            <tr>
                              <th scope="row">03</th>
                              <td className="d-flex align-items-center justify-content-start">
                                <div className="data-img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/order-history/img3.png"
                                    alt=""
                                    width={100}
                                height={100}
                                  />
                                </div>
                                <p>Digital Marketing Course 2022</p>
                              </td>
                              <td>24/12/2022</td>
                              <td>Paid</td>
                              <td>Paypal</td>
                              <td>$ 425.00</td>
                            </tr>
                            <tr>
                              <th scope="row">04</th>
                              <td className="d-flex align-items-center justify-content-start">
                                <div className="data-img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/order-history/img4.png"
                                    alt=""
                                    width={100}
                                height={100}
                                  />
                                </div>
                                <p>Learn Linux in 5 Days and Level Up</p>
                              </td>
                              <td>24/12/2022</td>
                              <td>Paid</td>
                              <td>Paypal</td>
                              <td>$ 312.00</td>
                            </tr>
                            <tr>
                              <th scope="row">05</th>
                              <td className="d-flex align-items-center justify-content-start">
                                <div className="data-img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/order-history/img5.png"
                                    alt=""
                                    width={100}
                                height={100}
                                  />
                                </div>
                                <p>Web Design for Beginners</p>
                              </td>
                              <td>24/12/2022</td>
                              <td>Paid</td>
                              <td>Paypal</td>
                              <td>$ 415.00</td>
                            </tr>
                            <tr>
                              <th scope="row">06</th>
                              <td className="d-flex align-items-center justify-content-start">
                                <div className="data-img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/order-history/img6.png"
                                    alt=""
                                    width={100}
                                height={100}
                                  />
                                </div>
                                <p>Web Design for Beginners</p>
                              </td>
                              <td>24/12/2022</td>
                              <td>Paid</td>
                              <td>Paypal</td>
                              <td>$ 415.00</td>
                            </tr>
                            <tr>
                              <th scope="row">07</th>
                              <td className="d-flex align-items-center justify-content-start">
                                <div className="data-img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/order-history/img7.png"
                                    alt=""
                                    width={100}
                                height={100}
                                  />
                                </div>
                                <p>Become a UX Designer | Learn the Skills</p>
                              </td>
                              <td>24/12/2022</td>
                              <td>Paid</td>
                              <td>Paypal</td>
                              <td>$ 345.00</td>
                            </tr>
                            <tr>
                              <th scope="row">08</th>
                              <td className="d-flex align-items-center justify-content-start">
                                <div className="data-img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/order-history/img8.png"
                                    alt=""
                                    width={100}
                                height={100}
                                  />
                                </div>
                                <p>Build Responsive Real-World Website</p>
                              </td>
                              <td>24/12/2022</td>
                              <td>Paid</td>
                              <td>Paypal</td>
                              <td>$ 648.00</td>
                            </tr>
                            <tr>
                              <th scope="row">09</th>
                              <td className="d-flex align-items-center justify-content-start">
                                <div className="data-img">
                                  <Image
                                    className="img-fluid"
                                    src="/assets/images/order-history/img9.png"
                                    alt=""
                                    width={100}
                                height={100}
                                  />
                                </div>
                                <p>The Complete 2023 Web Development</p>
                              </td>
                              <td>24/12/2022</td>
                              <td>Paid</td>
                              <td>Paypal</td>
                              <td>$ 299.00</td>
                            </tr>
                          </>
                        ) : (
                          <tr>
                            <td colspan="6">
                              <div className="empty-state">
                                <Image
                                  className="img-fluid"
                                  src="/assets/images/order-history/illustration.png"
                                  alt=""
                                  width={308}
                                  height={296}
                                />
                                <p>
                                  You haven&apos;t Purchased any courses till
                                  now!
                                </p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <Link className="page-link">
                            <svg
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.41 5L5.7 1.71C5.89 1.53 6 1.28 6 1C6 0.45 5.55 0 5 0C4.72 0 4.47 0.11 4.29 0.29L0.29 4.29C0.11 4.47 0 4.72 0 5C0 5.28 0.11 5.53 0.29 5.71L4.29 9.71C4.47 9.89 4.72 10 5 10C5.55 10 6 9.55 6 9C6 8.72 5.89 8.47 5.71 8.29L2.41 5Z"
                                fill="#D8DAE5"
                              />
                            </svg>
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link className="page-link" href="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            4
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            5
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            ...
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            28
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            <svg
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.71 4.29L1.71 0.29C1.53 0.11 1.28 0 1 0C0.45 0 0 0.45 0 1C0 1.28 0.11 1.53 0.29 1.71L3.59 5L0.3 8.29C0.11 8.47 0 8.72 0 9C0 9.55 0.45 10 1 10C1.28 10 1.53 9.89 1.71 9.71L5.71 5.71C5.89 5.53 6 5.28 6 5C6 4.72 5.89 4.47 5.71 4.29Z"
                                fill="#696F8C"
                              />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex="0"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Course Title</th>
                          <th scope="col">Enroll Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Payment By</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">01</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img1.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>UI/UX Design Golden Course</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 648.00</td>
                        </tr>
                        <tr>
                          <th scope="row">02</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img2.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Graphics Design Advance Course</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 508.00</td>
                        </tr>
                        <tr>
                          <th scope="row">03</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img3.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Digital Marketing Course 2022</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 425.00</td>
                        </tr>
                        <tr>
                          <th scope="row">04</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img4.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Learn Linux in 5 Days and Level Up</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 312.00</td>
                        </tr>
                        <tr>
                          <th scope="row">05</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img5.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Web Design for Beginners</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 415.00</td>
                        </tr>
                        <tr>
                          <th scope="row">06</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img6.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Web Design for Beginners</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 415.00</td>
                        </tr>
                        <tr>
                          <th scope="row">07</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img7.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Become a UX Designer | Learn the Skills</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 345.00</td>
                        </tr>
                        <tr>
                          <th scope="row">08</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img8.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Build Responsive Real-World Website</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 648.00</td>
                        </tr>
                        <tr>
                          <th scope="row">09</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img9.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>The Complete 2023 Web Development</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 299.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <Link className="page-link">
                            <svg
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.41 5L5.7 1.71C5.89 1.53 6 1.28 6 1C6 0.45 5.55 0 5 0C4.72 0 4.47 0.11 4.29 0.29L0.29 4.29C0.11 4.47 0 4.72 0 5C0 5.28 0.11 5.53 0.29 5.71L4.29 9.71C4.47 9.89 4.72 10 5 10C5.55 10 6 9.55 6 9C6 8.72 5.89 8.47 5.71 8.29L2.41 5Z"
                                fill="#D8DAE5"
                              />
                            </svg>
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link className="page-link" href="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            4
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            5
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            ...
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            28
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            <svg
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.71 4.29L1.71 0.29C1.53 0.11 1.28 0 1 0C0.45 0 0 0.45 0 1C0 1.28 0.11 1.53 0.29 1.71L3.59 5L0.3 8.29C0.11 8.47 0 8.72 0 9C0 9.55 0.45 10 1 10C1.28 10 1.53 9.89 1.71 9.71L5.71 5.71C5.89 5.53 6 5.28 6 5C6 4.72 5.89 4.47 5.71 4.29Z"
                                fill="#696F8C"
                              />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabIndex="0"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Course Title</th>
                          <th scope="col">Enroll Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Payment By</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">01</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img1.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>UI/UX Design Golden Course</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 648.00</td>
                        </tr>
                        <tr>
                          <th scope="row">02</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img2.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Graphics Design Advance Course</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 508.00</td>
                        </tr>
                        <tr>
                          <th scope="row">03</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img3.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Digital Marketing Course 2022</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 425.00</td>
                        </tr>
                        <tr>
                          <th scope="row">04</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img4.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Learn Linux in 5 Days and Level Up</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 312.00</td>
                        </tr>
                        <tr>
                          <th scope="row">05</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img5.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Web Design for Beginners</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 415.00</td>
                        </tr>
                        <tr>
                          <th scope="row">06</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img6.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Web Design for Beginners</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 415.00</td>
                        </tr>
                        <tr>
                          <th scope="row">07</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img7.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Become a UX Designer | Learn the Skills</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 345.00</td>
                        </tr>
                        <tr>
                          <th scope="row">08</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img8.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>Build Responsive Real-World Website</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 648.00</td>
                        </tr>
                        <tr>
                          <th scope="row">09</th>
                          <td className="d-flex align-items-center justify-content-start">
                            <div className="data-img">
                              <Image
                                className="img-fluid"
                                src="/assets/images/order-history/img9.png"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <p>The Complete 2023 Web Development</p>
                          </td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 299.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                          <Link className="page-link">
                            <svg
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.41 5L5.7 1.71C5.89 1.53 6 1.28 6 1C6 0.45 5.55 0 5 0C4.72 0 4.47 0.11 4.29 0.29L0.29 4.29C0.11 4.47 0 4.72 0 5C0 5.28 0.11 5.53 0.29 5.71L4.29 9.71C4.47 9.89 4.72 10 5 10C5.55 10 6 9.55 6 9C6 8.72 5.89 8.47 5.71 8.29L2.41 5Z"
                                fill="#D8DAE5"
                              />
                            </svg>
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link className="page-link" href="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            4
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            5
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            ...
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            28
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            <svg
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.71 4.29L1.71 0.29C1.53 0.11 1.28 0 1 0C0.45 0 0 0.45 0 1C0 1.28 0.11 1.53 0.29 1.71L3.59 5L0.3 8.29C0.11 8.47 0 8.72 0 9C0 9.55 0.45 10 1 10C1.28 10 1.53 9.89 1.71 9.71L5.71 5.71C5.89 5.53 6 5.28 6 5C6 4.72 5.89 4.47 5.71 4.29Z"
                                fill="#696F8C"
                              />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
