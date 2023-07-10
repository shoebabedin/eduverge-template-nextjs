import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import MobileNav from "../OffCanvas/MobileNav";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [user, setUser] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [userSwitch, setUserSwitch] = useState(false);
  const [screenWidth, setScreenWidth] = useState();

  const handleToggle = () => {
    setUserSwitch(!userSwitch);
    if (userSwitch == false) {
      setUserSwitch(true);
      router.push("student");
    } else {
      setUserSwitch(false);
      router.push("instructor");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (userSwitch) {
        const token = JSON.stringify({ role: "instructor" });
        localStorage.setItem("userRole", token);
      } else {
        const token = JSON.stringify({ role: "student" });
        localStorage.setItem("userRole", token);
      }
    }
  }, [userSwitch]);

  useEffect(() => {
    const isLogin = localStorage.getItem("token");
    const isTeacher = localStorage.getItem("teacher");

    if (isLogin) {
      const tokenObject = JSON.parse(isLogin);
      setUser(tokenObject);
    }

    if (isTeacher) {
      const tokenObject = JSON.parse(isTeacher);
      setTeacher(tokenObject);
    }
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to update screen width state
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav
        id="top_navbar"
        className={`navbar navbar-expand-lg ${isSticky ? "sticky" : ""}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image
              width={197}
              height={37}
              className="img-fluid"
              src={`/assets/images/logo/logo.png`}
              alt="Eduverge Education"
            />
          </Link>
          <div className="toggle_search">
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
              className="navbar-toggler position-relative border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
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
          <div
            className={`collapse navbar-collapse ${
              screenWidth < 992 ? "d-none" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              {/* <!-- desktop nav dropdown --> */}
              <li className="nav-item dropdown desktop">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                  <span className="ms-2">
                    <svg
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.12187 0.158203L5.29688 3.97487L1.47187 0.158203L0.296875 1.3332L5.29688 6.3332L10.2969 1.3332L9.12187 0.158203Z"
                        fill="#101840"
                      />
                    </svg>
                  </span>
                </Link>
                <div className="dropdown-menu">
                  <div className="d-flex">
                    <ul className="ps-0">
                      <h6 className="nav-title">Design & Development</h6>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Graphics Design
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          UI/UX Design
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Web Design
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          App Design
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Wordpress
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Shopify
                        </Link>
                      </li>
                    </ul>
                    <div className="vr"></div>
                    <ul className="ps-0">
                      <h6 className="nav-title">SEO & Digital Marketing</h6>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Social Media Marketing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Google Marketing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Google AdSense
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Facebook Ads
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Content Writing
                        </Link>
                      </li>
                    </ul>
                    <div className="vr"></div>
                    <ul className="ps-0">
                      <h6 className="nav-title">Video Editing</h6>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Adobe Premium Pro
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Video Design
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Digital Photography
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Google AdSense
                        </Link>
                      </li>
                    </ul>
                    <div className="vr"></div>
                    <ul className="ps-0">
                      <h6 className="nav-title">Finance & Accounting</h6>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Accounting
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Book Keeping Course
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Investing & Trading
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Economics
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Financial Modeling
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Taxes
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* <!-- mobile nav dropdown --> */}
              <li className="nav-item dropdown mobile">
                <button
                  className="nav-link"
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
            </ul>

            <form className="desktop search" role="search">
              <span className="search-icon">
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
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            {user !== null && user ? (
              <>
                {teacher !== null && teacher ? (
                  <>
                    <div className="my-courses">
                      <Button onClick={handleToggle}>
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
                  </>
                ) : (
                  <div className="my-courses">
                    <Link href="/my-courses">My courses</Link>
                  </div>
                )}
              </>
            ) : (
              <div className="cart">
                <Link href="/" className="mobile nav-link text-center">
                  Cart (0)
                </Link>
                <svg
                  className="desktop"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.25 17.25H6.54375L3.92813 2.86875C3.89752 2.69653 3.80768 2.54042 3.67415 2.42743C3.54062 2.31444 3.37179 2.25168 3.19687 2.25H1.5"
                    stroke="#101840"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 21C8.53553 21 9.375 20.1605 9.375 19.125C9.375 18.0895 8.53553 17.25 7.5 17.25C6.46447 17.25 5.625 18.0895 5.625 19.125C5.625 20.1605 6.46447 21 7.5 21Z"
                    stroke="#101840"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.25 21C18.2855 21 19.125 20.1605 19.125 19.125C19.125 18.0895 18.2855 17.25 17.25 17.25C16.2145 17.25 15.375 18.0895 15.375 19.125C15.375 20.1605 16.2145 21 17.25 21Z"
                    stroke="#101840"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.85938 13.5H17.6344C17.985 13.5011 18.3247 13.3785 18.5939 13.1539C18.8631 12.9293 19.0445 12.617 19.1063 12.2719L20.25 6H4.5"
                    stroke="#101840"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            {user !== null && user ? (
              <>
                <div className="cart me-3 ms-3 dropdown cart_dropdown">
                  <Link href="/" className="mobile nav-link text-center">
                    Cart (0)
                  </Link>
                  <button
                    type="button"
                    className="btn position-relative desktop dropdown-toggle border-0 outline-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.25 17.25H6.54375L3.92813 2.86875C3.89752 2.69653 3.80768 2.54042 3.67415 2.42743C3.54062 2.31444 3.37179 2.25168 3.19687 2.25H1.5"
                        stroke="#101840"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.5 21C8.53553 21 9.375 20.1605 9.375 19.125C9.375 18.0895 8.53553 17.25 7.5 17.25C6.46447 17.25 5.625 18.0895 5.625 19.125C5.625 20.1605 6.46447 21 7.5 21Z"
                        stroke="#101840"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.25 21C18.2855 21 19.125 20.1605 19.125 19.125C19.125 18.0895 18.2855 17.25 17.25 17.25C16.2145 17.25 15.375 18.0895 15.375 19.125C15.375 20.1605 16.2145 21 17.25 21Z"
                        stroke="#101840"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.85938 13.5H17.6344C17.985 13.5011 18.3247 13.3785 18.5939 13.1539C18.8631 12.9293 19.0445 12.617 19.1063 12.2719L20.25 6H4.5"
                        stroke="#101840"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      2<span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-3 px-4">
                    {[1, 2].map((item, index) => (
                      <div className="row mb-3 border-bottom" key={index}>
                        <div className="col-2 p-0">
                          <Image
                            className="img-fluid"
                            src="/assets/images/all-courses/img4.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="col-10">
                          <h4>Angular.JS Road to Mastery (2022 Edition)</h4>
                          <div className="d-flex align-items-center justify-content-between">
                            <p>This tutorial will help for...</p>
                            <span>$ 199.00</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="d-flex align-items-center justify-content-between total_amount">
                      <p>Total :</p>
                      <p>$ 470.00</p>
                    </div>
                    <button
                      className="w-100 btn btn-success text-bg-success py-2"
                      onClick={() => router.push("/student/checkout")}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
                <div className="cart me-3 dropdown cart_dropdown">
                  <button
                    type="button"
                    className="btn position-relative desktop dropdown-toggle border-0 outline-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.2712 2.66963C13.5643 2.39815 12.7982 2.25 12.0006 2.25C8.77198 2.25 6.05962 4.67767 5.70308 7.88659L5.45127 10.1528L5.44512 10.2078C5.32826 11.2261 4.9968 12.2081 4.47259 13.0889L4.44418 13.1364L3.86615 14.0998L3.84672 14.1321C3.60105 14.5416 3.38798 14.8966 3.24771 15.1945C3.1056 15.4962 2.97397 15.8655 3.03822 16.2727C3.10415 16.6906 3.31921 17.0704 3.64359 17.3419C3.95972 17.6066 4.34415 17.6837 4.67599 17.7171C5.00357 17.75 5.41766 17.75 5.89513 17.75L5.93288 17.75H18.0684L18.1062 17.75C18.5836 17.75 18.9977 17.75 19.3253 17.7171C19.6571 17.6837 20.0416 17.6066 20.3577 17.3419C20.6821 17.0704 20.8971 16.6906 20.9631 16.2727C21.0273 15.8655 20.8957 15.4962 20.7536 15.1945C20.6133 14.8966 20.4003 14.5416 20.1546 14.1322L20.1546 14.1322L20.1351 14.0998L19.5571 13.1364L19.5287 13.0889C19.1339 12.4255 18.8484 11.7046 18.6816 10.954C18.4589 10.9843 18.2316 11 18.0006 11C17.7095 11 17.4241 10.9751 17.1466 10.9273C17.3319 11.9598 17.7017 12.9521 18.2397 13.8561L18.2709 13.9081L18.8489 14.8715C19.1196 15.3227 19.2924 15.6124 19.3966 15.8336C19.4605 15.9694 19.4754 16.0337 19.4788 16.0527C19.4681 16.1024 19.4425 16.1477 19.4054 16.1824C19.3874 16.1893 19.3246 16.2096 19.1752 16.2246C18.9319 16.2491 18.5946 16.25 18.0684 16.25H5.93288C5.40674 16.25 5.06937 16.2491 4.82614 16.2246C4.67673 16.2096 4.61394 16.1893 4.59589 16.1824C4.5588 16.1477 4.53318 16.1024 4.52246 16.0527C4.52588 16.0337 4.54076 15.9694 4.60474 15.8336C4.7089 15.6124 4.88169 15.3227 5.15239 14.8715L5.73042 13.9081L5.76159 13.8561C6.39426 12.793 6.79431 11.6078 6.93534 10.3788L6.9421 10.3185L7.1939 8.05224C7.46604 5.60297 9.5363 3.75 12.0006 3.75C12.4976 3.75 12.9785 3.82534 13.4318 3.96573C13.6441 3.48979 13.9285 3.05312 14.2712 2.66963ZM16.7746 4.41972C16.335 4.76129 16.0417 5.2823 16.0046 5.8728C16.3407 6.368 16.588 6.93032 16.7223 7.53822C17.0689 7.82658 17.5145 8 18.0006 8C18.1052 8 18.2079 7.99197 18.3082 7.9765L18.2982 7.8866C18.1506 6.55813 17.5992 5.36357 16.7746 4.41972Z"
                        fill="#101840"
                      />
                      <path
                        d="M9.10222 17.6647C9.27315 18.6215 9.64978 19.467 10.1737 20.0701C10.6976 20.6731 11.3396 21 12 21C12.6604 21 13.3024 20.6731 13.8263 20.0701C14.3502 19.467 14.7269 18.6215 14.8978 17.6647"
                        stroke="#101840"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="18"
                        cy="6"
                        r="2.5"
                        fill="#D14343"
                        stroke="#D14343"
                      />
                    </svg>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end notification_dropdown">
                    <h4 className="title">Notifications</h4>
                    <p className="new_notification">New (1)</p>
                    <div className="notification_dropdown_content_scroll">
                      {[1, 2,3,4,5,6].map((item, index) => (
                        <div className="row notification_dropdown_content" key={index}>
                          <div className="col-12">
                            <h4>You have purchased “UI/UX Design Course”</h4>
                            <div className="d-flex align-items-center justify-content-start">
                              <span>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00065 1.33301C4.33398 1.33301 1.33398 4.33301 1.33398 7.99967C1.33398 11.6663 4.33398 14.6663 8.00065 14.6663C11.6673 14.6663 14.6673 11.6663 14.6673 7.99967C14.6673 4.33301 11.6673 1.33301 8.00065 1.33301ZM8.00065 13.333C5.06065 13.333 2.66732 10.9397 2.66732 7.99967C2.66732 5.05967 5.06065 2.66634 8.00065 2.66634C10.9407 2.66634 13.334 5.05967 13.334 7.99967C13.334 10.9397 10.9407 13.333 8.00065 13.333ZM8.33398 4.66634H7.33398V8.66634L10.8007 10.7997L11.334 9.93301L8.33398 8.13301V4.66634Z"
                                    fill="#858585"
                                  />
                                </svg>
                              </span>
                              <p className="mb-0 ms-1">07 Sep 2020 05:15 pm</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="auth-btn">
                  <ul>
                    <li className="nav-item dropdown desktop">
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="32" height="32" rx="16" fill="#EDEFF5" />
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
                      </Link>
                      <div className="dropdown-menu">
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
                              <Link className="dropdown-item" href="/student">
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
                    </li>
                  </ul>
                </div>
              </>
            ) : (
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
            )}
          </div>
        </div>
      </nav>

      {/* search */}

      <div className={`search-bar-mob ${searchOpen ? "active" : "deactive"}`}>
        <div className="search-form">
          <span>
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
          </span>
          <input type="search" name="Search" id="Search" placeholder="Search" />
        </div>

        <button className="close-btn btn" onClick={() => setSearchOpen(false)}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.66732 1.27398L8.72732 0.333984L5.00065 4.06065L1.27398 0.333984L0.333984 1.27398L4.06065 5.00065L0.333984 8.72732L1.27398 9.66732L5.00065 5.94065L8.72732 9.66732L9.66732 8.72732L5.94065 5.00065L9.66732 1.27398Z"
              fill="#1A1A1A"
            />
          </svg>
        </button>
      </div>

      <MobileNav
        user={user}
        teacher={teacher}
        handleToggle={handleToggle}
        userSwitch={userSwitch}
        handleLogout={handleLogout}
        setSearchOpen={setSearchOpen}
      />
    </>
  );
};

export default Navbar;
