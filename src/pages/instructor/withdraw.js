import LarnerHeader from "@/components/Student/LarnerHeader";
import Link from "next/link";

const withdraw = () => {
  return (
    <>
      <LarnerHeader />

      <div className="order-history">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="avaiable-balance">
                <p>
                  Available Balance: <span>$50.00 USD</span>
                </p>
                <button
                  className="btn withdraw"
                  data-bs-toggle="modal"
                  data-bs-target="#withdrawFound"
                >
                  Withdraw
                </button>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="order-history-header">
                <h4 className="order-history-title">Withdrawal History</h4>
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option selected>This Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                  </select>
                </div>
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
                      Pending
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
                          <th scope="col">Transaction ID</th>
                          <th scope="col">Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Payment By</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">01</th>
                          <td>#125B51SD2</td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 648.00</td>
                        </tr>
                        <tr>
                          <th scope="row">02</th>
                          <td>#125B51SD2</td>
                          <td>15/12/2022</td>
                          <td>Pending</td>
                          <td>Paypal</td>
                          <td>$ 508.00</td>
                        </tr>
                        <tr>
                          <th scope="row">03</th>
                          <td>#125B51SD2</td>
                          <td>15/12/2022</td>
                          <td>Pending</td>
                          <td>Paypal</td>
                          <td>$ 158.00</td>
                        </tr>
                        <tr>
                          <th scope="row">04</th>
                          <td>#125B51SD2</td>
                          <td>15/12/2022</td>
                          <td>Pending</td>
                          <td>Paypal</td>
                          <td>$ 500.00</td>
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
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex="0"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Transaction ID</th>
                          <th scope="col">Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Payment By</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">01</th>
                          <td>#125B51SD2</td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 648.00</td>
                        </tr>
                        <tr>
                          <th scope="row">02</th>
                          <td>#125B51SD2</td>
                          <td>15/12/2022</td>
                          <td>Pending</td>
                          <td>Paypal</td>
                          <td>$ 508.00</td>
                        </tr>
                        <tr>
                          <th scope="row">03</th>
                          <td>#125B51SD2</td>
                          <td>15/12/2022</td>
                          <td>Pending</td>
                          <td>Paypal</td>
                          <td>$ 158.00</td>
                        </tr>
                        <tr>
                          <th scope="row">04</th>
                          <td>#125B51SD2</td>
                          <td>15/12/2022</td>
                          <td>Pending</td>
                          <td>Paypal</td>
                          <td>$ 500.00</td>
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
                          <th scope="col">Transaction ID</th>
                          <th scope="col">Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Payment By</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">01</th>
                          <td>#125B51SD2</td>
                          <td>24/12/2022</td>
                          <td>Paid</td>
                          <td>Paypal</td>
                          <td>$ 648.00</td>
                        </tr>
                        <tr>
                          <th scope="row">02</th>
                          <td>#125B51SD2</td>
                          <td>15/12/2022</td>
                          <td>Pending</td>
                          <td>Paypal</td>
                          <td>$ 508.00</td>
                        </tr>
                        <tr>
                          <th scope="row">03</th>
                          <td>#125B51SD2</td>
                          <td>15/12/2022</td>
                          <td>Pending</td>
                          <td>Paypal</td>
                          <td>$ 158.00</td>
                        </tr>
                        <tr>
                          <th scope="row">04</th>
                          <td>#125B51SD2</td>
                          <td>15/12/2022</td>
                          <td>Pending</td>
                          <td>Paypal</td>
                          <td>$ 500.00</td>
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

export default withdraw;
