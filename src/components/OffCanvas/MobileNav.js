import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";

const MobileNav = ({
  teacher,
  user,
  handleToggle,
  userSwitch,
  handleLogout,
  setSearchOpen
}) => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start mob_navbar"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <Image
              width={197}
              height={37}
              className="img-fluid"
              src={`/assets/images/logo/logo.png`}
              alt="Eduverge Education"
            />
          </h5>
          <div className="d-flex align-items-center justify-content-end toggle_search">
            <button className="btn" onClick={() => setSearchOpen(true)}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z"
                  fill="#696F8C"
                />
              </svg>
            </button>
            {user !== null && user ? (
              <div className="my-courses">
                <Button onClick={handleToggle} className="userRole-mob">
                  {userSwitch ? "Student" : "Instructor"}
                  <span className="ms-1">
                    <svg
                      width="14"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00065 3.3335V0.833496L3.66732 4.16683L7.00065 7.50016V5.00016C9.75898 5.00016 12.0007 7.24183 12.0007 10.0002C12.0007 10.8418 11.7923 11.6418 11.4173 12.3335L12.634 13.5502C13.284 12.5252 13.6673 11.3085 13.6673 10.0002C13.6673 6.31683 10.684 3.3335 7.00065 3.3335ZM7.00065 15.0002C4.24232 15.0002 2.00065 12.7585 2.00065 10.0002C2.00065 9.15849 2.20898 8.3585 2.58398 7.66683L1.36732 6.45016C0.717318 7.47516 0.333984 8.69183 0.333984 10.0002C0.333984 13.6835 3.31732 16.6668 7.00065 16.6668V19.1668L10.334 15.8335L7.00065 12.5002V15.0002Z"
                        fill="#101840"
                      />
                    </svg>
                  </span>
                </Button>
              </div>
            ) : (
              ""
            )}
            <button
              type="button"
              className="btn"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6C0 5.4477 0.44772 5 1 5H11C11.5523 5 12 5.4477 12 6C12 6.5523 11.5523 7 11 7H1C0.44772 7 0 6.5523 0 6ZM0 1C0 0.44772 0.44772 0 1 0H15C15.5523 0 16 0.44772 16 1C16 1.55228 15.5523 2 15 2H1C0.44772 2 0 1.55228 0 1ZM0 11C0 11.5523 0.44772 12 1 12H6.235C6.7873 12 7.235 11.5523 7.235 11C7.235 10.4477 6.7873 10 6.235 10H1C0.44772 10 0 10.4477 0 11Z"
                  fill="#317159"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="offcanvas-body">
          <div className={`navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {user !== null && user ? (
                <li className="nav-item">
                  <div className="auth-btn">
                    <ul>
                      <li className="nav-item dropdown">
                        <div
                          style={{
                            background: "var(--neutral-n-100, #F4F6FA)"
                          }}
                        >
                          <Link
                            className="nav-link "
                            type="button"
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                          >
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="32"
                                height="32"
                                rx="16"
                                fill="#EDEFF5"
                              />
                              <path
                                d="M15.998 18.999C19.3118 18.999 21.998 16.3127 21.998 12.999C21.998 9.68531 19.3118 6.99902 15.998 6.99902C12.6843 6.99902 9.99805 9.68531 9.99805 12.999C9.99805 16.3127 12.6843 18.999 15.998 18.999Z"
                                stroke="#101840"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                              />
                              <path
                                d="M6.9043 24.2489C7.8258 22.6525 9.15133 21.3267 10.7476 20.405C12.3439 19.4833 14.1547 18.998 15.998 18.998C17.8413 18.998 19.6522 19.4833 21.2485 20.405C22.8448 21.3267 24.1703 22.6525 25.0918 24.2489"
                                stroke="#101840"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="ms-2 me-2">{user.name}</span>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.06 5.72656L8 8.7799L4.94 5.72656L4 6.66656L8 10.6666L12 6.66656L11.06 5.72656Z"
                                fill="black"
                              />
                            </svg>
                          </Link>
                          <div className="collapse" id="collapseExample">
                            <div
                              className="card card-body"
                              style={{
                                background: "transparent",
                                border: " 0"
                              }}
                            >
                              <div className="">
                                {userSwitch ? (
                                  <ul className="ps-0">
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        href="/instructor"
                                      >
                                        My Profile
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        href="/instructor/settings"
                                      >
                                        Settings
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        href="/my-courses"
                                      >
                                        My Courses
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        href="/instructor/withdraw"
                                      >
                                        Withdraw
                                      </Link>
                                    </li>
                                    <li onClick={handleLogout}>
                                      <Link className="dropdown-item" href="/">
                                        Sign Out
                                      </Link>
                                    </li>
                                  </ul>
                                ) : (
                                  <ul className="ps-0">
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        href="/student"
                                      >
                                        My Profile
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        href="/student/settings"
                                      >
                                        Settings
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        href="/my-courses"
                                      >
                                        My Courses
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        href="/student/order-history"
                                      >
                                        Order History
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        href="/my-certification"
                                      >
                                        My Certification
                                      </Link>
                                    </li>
                                    <li onClick={handleLogout}>
                                      <Link className="dropdown-item" href="/">
                                        Logout
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              {/* <!-- mobile nav dropdown --> */}
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  role="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                >
                  Categories
                  <span className="ms-2">
                    <svg
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9993 0.166016L9.82435 1.34102L13.641 5.16602H0.166016V6.83268H13.641L9.81602 10.6577L10.9993 11.8327L16.8327 5.99935L10.9993 0.166016Z"
                        fill="#101840"
                      />
                    </svg>
                  </span>
                </button>
              </li>

              {teacher !== null && teacher ? (
                ""
              ) : (
                <li className="nav-item">
                  <Link href="/become-an-instructor" className="nav-link">
                    Become an Instructor
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                  aria-controls="offcanvasCart"
                >
                  Cart (2)
                </button>
              </li>
              {user !== null && user ? (
                <li>
                  <button
                    className="btn"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#notificationCanvas"
                    aria-controls="notificationCanvas"
                  >
                    Notification
                  </button>
                </li>
              ) : (
                ""
              )}
            </ul>

            {user === null ? (
              <div className="auth-btn">
                <Link
                  href="#"
                  className="btn bg-success text-white me-3 ms-3"
                  data-bs-toggle="modal"
                  data-bs-target="#login"
                >
                  Login
                </Link>
                <Link
                  href="#"
                  className="btn border border-success-subtle text-success"
                  data-bs-toggle="modal"
                  data-bs-target="#register"
                >
                  Register Now
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
