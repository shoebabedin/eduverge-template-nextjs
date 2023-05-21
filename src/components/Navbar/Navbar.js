import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
          <button
            className="navbar-toggler position-relative border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger-icon" id="icon">
              <div className="icon-1" id="a"></div>
              <div className="icon-2" id="b"></div>
              <div className="icon-3" id="c"></div>
              <div className="clear"></div>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Become an Instructor
                </Link>
              </li>
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

            <div className="cart">
              <Link href="!?#" className="mobile nav-link text-center">
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
