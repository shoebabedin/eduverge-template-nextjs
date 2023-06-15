import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AllCategories = ({ item }) => {
  const route = useRouter();
  const [screenWidth, setScreenWidth] = useState(undefined);

  useEffect(() => {
    const label = document.querySelector(".dropdown__filter-selected");
    const options = Array.from(
      document.querySelectorAll(".dropdown__select-option")
    );

    options.forEach((option) => {
      option.addEventListener("click", () => {
        label.textContent = option.textContent;
      });
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Check if window object is available (browser environment)
    if (typeof window !== "undefined") {
      // Get initial screenWidth on component load
      updateScreenWidth();

      window.addEventListener("resize", handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  console.log(screenWidth);

  return (
    <>
      <section className="all-course-categories">
        <div className="container">
          <div className="row">
            {screenWidth > "992" && (
              <div className="col-lg-3 col-12">
                <div className="all-course-sidebar">
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
                      placeholder="Search Courses..."
                      aria-label="Search"
                    />
                  </form>
                  <h4>All Categories</h4>
                  <hr />
                  <ul>
                    <h6>Design & Development</h6>
                    <li className="active">
                      <Link href="#">Graphics Design (12)</Link>
                    </li>
                    <li>
                      <Link href="#">UI/UX Design (15)</Link>
                    </li>
                    <li>
                      <Link href="#">Web Design (12)</Link>
                    </li>
                    <li>
                      <Link href="#">App Design (26)</Link>
                    </li>
                    <li>
                      <Link href="#">Wordpress (12)</Link>
                    </li>
                    <li>
                      <Link href="#">Shopify (12)</Link>
                    </li>
                  </ul>
                  <ul>
                    <h6>SEO & Digital Marketing</h6>
                    <li>
                      <Link href="#">Social Media Marketing (4)</Link>
                    </li>
                    <li>
                      <Link href="#">Google Marketing (21)</Link>
                    </li>
                    <li>
                      <Link href="#">Digital Marketing (25)</Link>
                    </li>
                    <li>
                      <Link href="#">Google AdSense (12)</Link>
                    </li>
                    <li>
                      <Link href="#">Facebook Ads (23)</Link>
                    </li>
                    <li>
                      <Link href="#">Content Writing (21)</Link>
                    </li>
                  </ul>
                  <ul>
                    <h6>Video Editing</h6>
                    <li>
                      <Link href="#">Social Media Marketing (5)</Link>
                    </li>
                    <li>
                      <Link href="#">Google Marketing (15)</Link>
                    </li>
                    <li>
                      <Link href="#">Digital Marketing (22)</Link>
                    </li>
                    <li>
                      <Link href="#">Google AdSense (23)</Link>
                    </li>
                    <li>
                      <Link href="#">Facebook Ads (13)</Link>
                    </li>
                    <li>
                      <Link href="#">Content Writing (23)</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <div className="col-lg-9 col-12">
              <div className="courses-header-mob">
                {screenWidth < "992" ? <h3>116 Course Found</h3> : ""}
              </div>
              <div className="courses-header">
                {screenWidth > "992" ? <h3>116 Course Found</h3> : ""}
                {screenWidth < "992" ? (
                  <button
                    className="filter btn d-flex align-items-center justify-content-center gap-1 p-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#filtercanvasExample"
                    aria-controls="filtercanvasExample"
                  >
                    Filter
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0007 8.66732H4.00065C3.60065 8.66732 3.33398 8.40065 3.33398 8.00065C3.33398 7.60065 3.60065 7.33398 4.00065 7.33398H12.0007C12.4007 7.33398 12.6673 7.60065 12.6673 8.00065C12.6673 8.40065 12.4007 8.66732 12.0007 8.66732Z"
                          fill="#101840"
                        />
                        <path
                          d="M10.0007 12.6673H6.00065C5.60065 12.6673 5.33398 12.4007 5.33398 12.0007C5.33398 11.6007 5.60065 11.334 6.00065 11.334H10.0007C10.4007 11.334 10.6673 11.6007 10.6673 12.0007C10.6673 12.4007 10.4007 12.6673 10.0007 12.6673Z"
                          fill="#101840"
                        />
                        <path
                          d="M14.0007 4.66732H2.00065C1.60065 4.66732 1.33398 4.40065 1.33398 4.00065C1.33398 3.60065 1.60065 3.33398 2.00065 3.33398H14.0007C14.4007 3.33398 14.6673 3.60065 14.6673 4.00065C14.6673 4.40065 14.4007 4.66732 14.0007 4.66732Z"
                          fill="#101840"
                        />
                      </svg>
                    </span>
                  </button>
                ) : (
                  ""
                )}
                <div className="short_by">
                  <p>Sort By</p>
                  <span className="dropdown">
                    <input
                      type="checkbox"
                      className="dropdown__switch"
                      id="filter-switch"
                      hidden
                    />
                    <label
                      htmlFor="filter-switch"
                      className="dropdown__options-filter"
                    >
                      <ul
                        className="dropdown__filter"
                        role="listbox"
                        tabIndex="-1"
                      >
                        <li
                          className="dropdown__filter-selected"
                          aria-selected="true"
                        >
                          Default
                        </li>
                        <li>
                          <ul className="dropdown__select">
                            <li
                              className="dropdown__select-option"
                              role="option"
                            >
                              Default
                            </li>
                            <li
                              className="dropdown__select-option"
                              role="option"
                            >
                              Newest
                            </li>
                            <li
                              className="dropdown__select-option"
                              role="option"
                            >
                              Oldest
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </label>
                  </span>
                </div>
              </div>
              <div className="course-grid">
                <div className="row">
                  <div className="col-lg-4 col-md-6 mix design">
                    <div className="mix-item">
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src="/assets/images/popular-courses/img1.png"
                          alt=""
                          width={258}
                          height={146}
                        />
                        <div className="overlay"></div>
                      </div>
                      <div className="desc">
                        <div className="row">
                          <div className="col-12">
                            <p className="cat">UI/UX Design</p>
                          </div>
                          <div className="col-12">
                            <ul className="star">
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star"></i>
                              </li>
                              <p className="star-rating">4.0 (2)</p>
                            </ul>
                          </div>
                          <div className="col-12">
                            <h4>
                              Introduction to User Experience Design -2022
                            </h4>
                            <div className="lessong_person">
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="22"
                                      height="22"
                                      transform="translate(0.5)"
                                      fill="white"
                                    />
                                    <path
                                      d="M1.1875 8.25L11.5 2.75L21.8125 8.25L11.5 13.75L1.1875 8.25Z"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16.6562 20.625V11L11.5 8.25"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M19.4062 9.53125V14.2234C19.4056 14.3695 19.3574 14.5113 19.2687 14.6273C18.693 15.4008 16.2523 18.2195 11.5 18.2195C6.74766 18.2195 4.30703 15.4008 3.73125 14.6273C3.64265 14.5113 3.59437 14.3695 3.59375 14.2234V9.53125"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                10 Lesson
                              </p>
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8.74935 10.9993C10.7752 10.9993 12.416 9.35852 12.416 7.33268C12.416 5.30685 10.7752 3.66602 8.74935 3.66602C6.72352 3.66602 5.08268 5.30685 5.08268 7.33268C5.08268 9.35852 6.72352 10.9993 8.74935 10.9993ZM8.74935 5.49935C9.75768 5.49935 10.5827 6.32435 10.5827 7.33268C10.5827 8.34102 9.75768 9.16602 8.74935 9.16602C7.74102 9.16602 6.91602 8.34102 6.91602 7.33268C6.91602 6.32435 7.74102 5.49935 8.74935 5.49935ZM17.9159 7.33268C17.9159 9.35852 16.2751 10.9993 14.2493 10.9993C13.8184 10.9993 13.4151 10.9077 13.0301 10.7793C13.7909 9.83518 14.2493 8.63435 14.2493 7.33268C14.2493 6.03102 13.7909 4.83018 13.0301 3.88602C13.4151 3.75768 13.8184 3.66602 14.2493 3.66602C16.2751 3.66602 17.9159 5.30685 17.9159 7.33268ZM17.9159 15.5827C17.9159 14.0427 17.0359 12.8877 15.7801 12.0352C18.3101 12.4018 21.5826 13.5843 21.5826 15.5827V18.3327H17.9159V15.5827ZM1.41602 15.5827C1.41602 13.1443 6.30185 11.916 8.74935 11.916C11.1968 11.916 16.0827 13.1443 16.0827 15.5827V18.3327H1.41602V15.5827ZM3.24935 15.5918V16.4993H14.2493V15.5827C14.066 14.9318 11.2243 13.7493 8.74935 13.7493C6.27435 13.7493 3.43268 14.9318 3.24935 15.5918Z"
                                      fill="#474D66"
                                    />
                                  </svg>
                                </span>
                                50
                              </p>
                            </div>
                            <hr />
                            <div className="price">
                              <p>$199.00</p>
                              <Link
                                href={`/course-categories/categories-details`}
                              >
                                <i className="ph-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mix design">
                    <div className="mix-item">
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src="/assets/images/course-categories/img1.png"
                          alt=""
                          width={258}
                          height={146}
                        />
                        <div className="overlay"></div>
                      </div>
                      <div className="desc">
                        <div className="row">
                          <div className="col-12">
                            <p className="cat">Development</p>
                          </div>
                          <div className="col-12">
                            <ul className="star">
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star"></i>
                              </li>
                              <p className="star-rating">4.0 (2)</p>
                            </ul>
                          </div>
                          <div className="col-12">
                            <h4>JavaScript: Understanding the Weird Parts</h4>
                            <div className="lessong_person">
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="22"
                                      height="22"
                                      transform="translate(0.5)"
                                      fill="white"
                                    />
                                    <path
                                      d="M1.1875 8.25L11.5 2.75L21.8125 8.25L11.5 13.75L1.1875 8.25Z"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16.6562 20.625V11L11.5 8.25"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M19.4062 9.53125V14.2234C19.4056 14.3695 19.3574 14.5113 19.2687 14.6273C18.693 15.4008 16.2523 18.2195 11.5 18.2195C6.74766 18.2195 4.30703 15.4008 3.73125 14.6273C3.64265 14.5113 3.59437 14.3695 3.59375 14.2234V9.53125"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                10 Lesson
                              </p>
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8.74935 10.9993C10.7752 10.9993 12.416 9.35852 12.416 7.33268C12.416 5.30685 10.7752 3.66602 8.74935 3.66602C6.72352 3.66602 5.08268 5.30685 5.08268 7.33268C5.08268 9.35852 6.72352 10.9993 8.74935 10.9993ZM8.74935 5.49935C9.75768 5.49935 10.5827 6.32435 10.5827 7.33268C10.5827 8.34102 9.75768 9.16602 8.74935 9.16602C7.74102 9.16602 6.91602 8.34102 6.91602 7.33268C6.91602 6.32435 7.74102 5.49935 8.74935 5.49935ZM17.9159 7.33268C17.9159 9.35852 16.2751 10.9993 14.2493 10.9993C13.8184 10.9993 13.4151 10.9077 13.0301 10.7793C13.7909 9.83518 14.2493 8.63435 14.2493 7.33268C14.2493 6.03102 13.7909 4.83018 13.0301 3.88602C13.4151 3.75768 13.8184 3.66602 14.2493 3.66602C16.2751 3.66602 17.9159 5.30685 17.9159 7.33268ZM17.9159 15.5827C17.9159 14.0427 17.0359 12.8877 15.7801 12.0352C18.3101 12.4018 21.5826 13.5843 21.5826 15.5827V18.3327H17.9159V15.5827ZM1.41602 15.5827C1.41602 13.1443 6.30185 11.916 8.74935 11.916C11.1968 11.916 16.0827 13.1443 16.0827 15.5827V18.3327H1.41602V15.5827ZM3.24935 15.5918V16.4993H14.2493V15.5827C14.066 14.9318 11.2243 13.7493 8.74935 13.7493C6.27435 13.7493 3.43268 14.9318 3.24935 15.5918Z"
                                      fill="#474D66"
                                    />
                                  </svg>
                                </span>
                                50
                              </p>
                            </div>
                            <hr />
                            <div className="price">
                              <p>$199.00</p>
                              <Link
                                href={`/course-categories/categories-details`}
                              >
                                <i className="ph-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mix design">
                    <div className="mix-item">
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src="/assets/images/course-categories/img2.png"
                          alt=""
                          width={258}
                          height={146}
                        />
                        <div className="overlay"></div>
                      </div>
                      <div className="desc">
                        <div className="row">
                          <div className="col-12">
                            <p className="cat">Development</p>
                          </div>
                          <div className="col-12">
                            <ul className="star">
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star"></i>
                              </li>
                              <p className="star-rating">4.0 (2)</p>
                            </ul>
                          </div>
                          <div className="col-12">
                            <h4>Complete C# Unity Game Developer 2D</h4>
                            <div className="lessong_person">
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="22"
                                      height="22"
                                      transform="translate(0.5)"
                                      fill="white"
                                    />
                                    <path
                                      d="M1.1875 8.25L11.5 2.75L21.8125 8.25L11.5 13.75L1.1875 8.25Z"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16.6562 20.625V11L11.5 8.25"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M19.4062 9.53125V14.2234C19.4056 14.3695 19.3574 14.5113 19.2687 14.6273C18.693 15.4008 16.2523 18.2195 11.5 18.2195C6.74766 18.2195 4.30703 15.4008 3.73125 14.6273C3.64265 14.5113 3.59437 14.3695 3.59375 14.2234V9.53125"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                10 Lesson
                              </p>
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8.74935 10.9993C10.7752 10.9993 12.416 9.35852 12.416 7.33268C12.416 5.30685 10.7752 3.66602 8.74935 3.66602C6.72352 3.66602 5.08268 5.30685 5.08268 7.33268C5.08268 9.35852 6.72352 10.9993 8.74935 10.9993ZM8.74935 5.49935C9.75768 5.49935 10.5827 6.32435 10.5827 7.33268C10.5827 8.34102 9.75768 9.16602 8.74935 9.16602C7.74102 9.16602 6.91602 8.34102 6.91602 7.33268C6.91602 6.32435 7.74102 5.49935 8.74935 5.49935ZM17.9159 7.33268C17.9159 9.35852 16.2751 10.9993 14.2493 10.9993C13.8184 10.9993 13.4151 10.9077 13.0301 10.7793C13.7909 9.83518 14.2493 8.63435 14.2493 7.33268C14.2493 6.03102 13.7909 4.83018 13.0301 3.88602C13.4151 3.75768 13.8184 3.66602 14.2493 3.66602C16.2751 3.66602 17.9159 5.30685 17.9159 7.33268ZM17.9159 15.5827C17.9159 14.0427 17.0359 12.8877 15.7801 12.0352C18.3101 12.4018 21.5826 13.5843 21.5826 15.5827V18.3327H17.9159V15.5827ZM1.41602 15.5827C1.41602 13.1443 6.30185 11.916 8.74935 11.916C11.1968 11.916 16.0827 13.1443 16.0827 15.5827V18.3327H1.41602V15.5827ZM3.24935 15.5918V16.4993H14.2493V15.5827C14.066 14.9318 11.2243 13.7493 8.74935 13.7493C6.27435 13.7493 3.43268 14.9318 3.24935 15.5918Z"
                                      fill="#474D66"
                                    />
                                  </svg>
                                </span>
                                50
                              </p>
                            </div>
                            <hr />
                            <div className="price">
                              <p>$199.00</p>
                              <Link
                                href={`/course-categories/categories-details`}
                              >
                                <i className="ph-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mix design">
                    <div className="mix-item">
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src="/assets/images/course-categories/img3.png"
                          alt=""
                          width={258}
                          height={146}
                        />
                        <div className="overlay"></div>
                      </div>
                      <div className="desc">
                        <div className="row">
                          <div className="col-12">
                            <p className="cat">UI/UX Design</p>
                          </div>
                          <div className="col-12">
                            <ul className="star">
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star"></i>
                              </li>
                              <p className="star-rating">4.0 (2)</p>
                            </ul>
                          </div>
                          <div className="col-12">
                            <h4>The Ultimate Guide to Usability and UX</h4>
                            <div className="lessong_person">
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="22"
                                      height="22"
                                      transform="translate(0.5)"
                                      fill="white"
                                    />
                                    <path
                                      d="M1.1875 8.25L11.5 2.75L21.8125 8.25L11.5 13.75L1.1875 8.25Z"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16.6562 20.625V11L11.5 8.25"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M19.4062 9.53125V14.2234C19.4056 14.3695 19.3574 14.5113 19.2687 14.6273C18.693 15.4008 16.2523 18.2195 11.5 18.2195C6.74766 18.2195 4.30703 15.4008 3.73125 14.6273C3.64265 14.5113 3.59437 14.3695 3.59375 14.2234V9.53125"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                10 Lesson
                              </p>
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8.74935 10.9993C10.7752 10.9993 12.416 9.35852 12.416 7.33268C12.416 5.30685 10.7752 3.66602 8.74935 3.66602C6.72352 3.66602 5.08268 5.30685 5.08268 7.33268C5.08268 9.35852 6.72352 10.9993 8.74935 10.9993ZM8.74935 5.49935C9.75768 5.49935 10.5827 6.32435 10.5827 7.33268C10.5827 8.34102 9.75768 9.16602 8.74935 9.16602C7.74102 9.16602 6.91602 8.34102 6.91602 7.33268C6.91602 6.32435 7.74102 5.49935 8.74935 5.49935ZM17.9159 7.33268C17.9159 9.35852 16.2751 10.9993 14.2493 10.9993C13.8184 10.9993 13.4151 10.9077 13.0301 10.7793C13.7909 9.83518 14.2493 8.63435 14.2493 7.33268C14.2493 6.03102 13.7909 4.83018 13.0301 3.88602C13.4151 3.75768 13.8184 3.66602 14.2493 3.66602C16.2751 3.66602 17.9159 5.30685 17.9159 7.33268ZM17.9159 15.5827C17.9159 14.0427 17.0359 12.8877 15.7801 12.0352C18.3101 12.4018 21.5826 13.5843 21.5826 15.5827V18.3327H17.9159V15.5827ZM1.41602 15.5827C1.41602 13.1443 6.30185 11.916 8.74935 11.916C11.1968 11.916 16.0827 13.1443 16.0827 15.5827V18.3327H1.41602V15.5827ZM3.24935 15.5918V16.4993H14.2493V15.5827C14.066 14.9318 11.2243 13.7493 8.74935 13.7493C6.27435 13.7493 3.43268 14.9318 3.24935 15.5918Z"
                                      fill="#474D66"
                                    />
                                  </svg>
                                </span>
                                50
                              </p>
                            </div>
                            <hr />
                            <div className="price">
                              <p>$199.00</p>
                              <Link
                                href={`/course-categories/categories-details`}
                              >
                                <i className="ph-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mix design">
                    <div className="mix-item">
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src="/assets/images/course-categories/img4.png"
                          alt=""
                          width={258}
                          height={146}
                        />
                        <div className="overlay"></div>
                      </div>
                      <div className="desc">
                        <div className="row">
                          <div className="col-12">
                            <p className="cat">UI/UX Design</p>
                          </div>
                          <div className="col-12">
                            <ul className="star">
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star"></i>
                              </li>
                              <p className="star-rating">4.0 (2)</p>
                            </ul>
                          </div>
                          <div className="col-12">
                            <h4>Research to Product Innovation</h4>
                            <div className="lessong_person">
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="22"
                                      height="22"
                                      transform="translate(0.5)"
                                      fill="white"
                                    />
                                    <path
                                      d="M1.1875 8.25L11.5 2.75L21.8125 8.25L11.5 13.75L1.1875 8.25Z"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16.6562 20.625V11L11.5 8.25"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M19.4062 9.53125V14.2234C19.4056 14.3695 19.3574 14.5113 19.2687 14.6273C18.693 15.4008 16.2523 18.2195 11.5 18.2195C6.74766 18.2195 4.30703 15.4008 3.73125 14.6273C3.64265 14.5113 3.59437 14.3695 3.59375 14.2234V9.53125"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                10 Lesson
                              </p>
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8.74935 10.9993C10.7752 10.9993 12.416 9.35852 12.416 7.33268C12.416 5.30685 10.7752 3.66602 8.74935 3.66602C6.72352 3.66602 5.08268 5.30685 5.08268 7.33268C5.08268 9.35852 6.72352 10.9993 8.74935 10.9993ZM8.74935 5.49935C9.75768 5.49935 10.5827 6.32435 10.5827 7.33268C10.5827 8.34102 9.75768 9.16602 8.74935 9.16602C7.74102 9.16602 6.91602 8.34102 6.91602 7.33268C6.91602 6.32435 7.74102 5.49935 8.74935 5.49935ZM17.9159 7.33268C17.9159 9.35852 16.2751 10.9993 14.2493 10.9993C13.8184 10.9993 13.4151 10.9077 13.0301 10.7793C13.7909 9.83518 14.2493 8.63435 14.2493 7.33268C14.2493 6.03102 13.7909 4.83018 13.0301 3.88602C13.4151 3.75768 13.8184 3.66602 14.2493 3.66602C16.2751 3.66602 17.9159 5.30685 17.9159 7.33268ZM17.9159 15.5827C17.9159 14.0427 17.0359 12.8877 15.7801 12.0352C18.3101 12.4018 21.5826 13.5843 21.5826 15.5827V18.3327H17.9159V15.5827ZM1.41602 15.5827C1.41602 13.1443 6.30185 11.916 8.74935 11.916C11.1968 11.916 16.0827 13.1443 16.0827 15.5827V18.3327H1.41602V15.5827ZM3.24935 15.5918V16.4993H14.2493V15.5827C14.066 14.9318 11.2243 13.7493 8.74935 13.7493C6.27435 13.7493 3.43268 14.9318 3.24935 15.5918Z"
                                      fill="#474D66"
                                    />
                                  </svg>
                                </span>
                                50
                              </p>
                            </div>
                            <hr />
                            <div className="price">
                              <p>$199.00</p>
                              <Link
                                href={`/course-categories/categories-details`}
                              >
                                <i className="ph-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mix design">
                    <div className="mix-item">
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src="/assets/images/course-categories/img5.png"
                          alt=""
                          width={258}
                          height={146}
                        />
                        <div className="overlay"></div>
                      </div>
                      <div className="desc">
                        <div className="row">
                          <div className="col-12">
                            <p className="cat">UI/UX Design</p>
                          </div>
                          <div className="col-12">
                            <ul className="star">
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star"></i>
                              </li>
                              <p className="star-rating">4.0 (2)</p>
                            </ul>
                          </div>
                          <div className="col-12">
                            <h4>
                              Essential Skills for Designers - Masking 2022
                            </h4>
                            <div className="lessong_person">
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="22"
                                      height="22"
                                      transform="translate(0.5)"
                                      fill="white"
                                    />
                                    <path
                                      d="M1.1875 8.25L11.5 2.75L21.8125 8.25L11.5 13.75L1.1875 8.25Z"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16.6562 20.625V11L11.5 8.25"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M19.4062 9.53125V14.2234C19.4056 14.3695 19.3574 14.5113 19.2687 14.6273C18.693 15.4008 16.2523 18.2195 11.5 18.2195C6.74766 18.2195 4.30703 15.4008 3.73125 14.6273C3.64265 14.5113 3.59437 14.3695 3.59375 14.2234V9.53125"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                10 Lesson
                              </p>
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8.74935 10.9993C10.7752 10.9993 12.416 9.35852 12.416 7.33268C12.416 5.30685 10.7752 3.66602 8.74935 3.66602C6.72352 3.66602 5.08268 5.30685 5.08268 7.33268C5.08268 9.35852 6.72352 10.9993 8.74935 10.9993ZM8.74935 5.49935C9.75768 5.49935 10.5827 6.32435 10.5827 7.33268C10.5827 8.34102 9.75768 9.16602 8.74935 9.16602C7.74102 9.16602 6.91602 8.34102 6.91602 7.33268C6.91602 6.32435 7.74102 5.49935 8.74935 5.49935ZM17.9159 7.33268C17.9159 9.35852 16.2751 10.9993 14.2493 10.9993C13.8184 10.9993 13.4151 10.9077 13.0301 10.7793C13.7909 9.83518 14.2493 8.63435 14.2493 7.33268C14.2493 6.03102 13.7909 4.83018 13.0301 3.88602C13.4151 3.75768 13.8184 3.66602 14.2493 3.66602C16.2751 3.66602 17.9159 5.30685 17.9159 7.33268ZM17.9159 15.5827C17.9159 14.0427 17.0359 12.8877 15.7801 12.0352C18.3101 12.4018 21.5826 13.5843 21.5826 15.5827V18.3327H17.9159V15.5827ZM1.41602 15.5827C1.41602 13.1443 6.30185 11.916 8.74935 11.916C11.1968 11.916 16.0827 13.1443 16.0827 15.5827V18.3327H1.41602V15.5827ZM3.24935 15.5918V16.4993H14.2493V15.5827C14.066 14.9318 11.2243 13.7493 8.74935 13.7493C6.27435 13.7493 3.43268 14.9318 3.24935 15.5918Z"
                                      fill="#474D66"
                                    />
                                  </svg>
                                </span>
                                50
                              </p>
                            </div>
                            <hr />
                            <div className="price">
                              <p>$199.00</p>
                              <Link
                                href={`/course-categories/categories-details`}
                              >
                                <i className="ph-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mix design">
                    <div className="mix-item">
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src="/assets/images/course-categories/img6.png"
                          alt=""
                          width={258}
                          height={146}
                        />
                        <div className="overlay"></div>
                      </div>
                      <div className="desc">
                        <div className="row">
                          <div className="col-12">
                            <p className="cat">UI/UX Design</p>
                          </div>
                          <div className="col-12">
                            <ul className="star">
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star"></i>
                              </li>
                              <p className="star-rating">4.0 (2)</p>
                            </ul>
                          </div>
                          <div className="col-12">
                            <h4>Mastering the Human Figure-2022</h4>
                            <div className="lessong_person">
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="22"
                                      height="22"
                                      transform="translate(0.5)"
                                      fill="white"
                                    />
                                    <path
                                      d="M1.1875 8.25L11.5 2.75L21.8125 8.25L11.5 13.75L1.1875 8.25Z"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16.6562 20.625V11L11.5 8.25"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M19.4062 9.53125V14.2234C19.4056 14.3695 19.3574 14.5113 19.2687 14.6273C18.693 15.4008 16.2523 18.2195 11.5 18.2195C6.74766 18.2195 4.30703 15.4008 3.73125 14.6273C3.64265 14.5113 3.59437 14.3695 3.59375 14.2234V9.53125"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                10 Lesson
                              </p>
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8.74935 10.9993C10.7752 10.9993 12.416 9.35852 12.416 7.33268C12.416 5.30685 10.7752 3.66602 8.74935 3.66602C6.72352 3.66602 5.08268 5.30685 5.08268 7.33268C5.08268 9.35852 6.72352 10.9993 8.74935 10.9993ZM8.74935 5.49935C9.75768 5.49935 10.5827 6.32435 10.5827 7.33268C10.5827 8.34102 9.75768 9.16602 8.74935 9.16602C7.74102 9.16602 6.91602 8.34102 6.91602 7.33268C6.91602 6.32435 7.74102 5.49935 8.74935 5.49935ZM17.9159 7.33268C17.9159 9.35852 16.2751 10.9993 14.2493 10.9993C13.8184 10.9993 13.4151 10.9077 13.0301 10.7793C13.7909 9.83518 14.2493 8.63435 14.2493 7.33268C14.2493 6.03102 13.7909 4.83018 13.0301 3.88602C13.4151 3.75768 13.8184 3.66602 14.2493 3.66602C16.2751 3.66602 17.9159 5.30685 17.9159 7.33268ZM17.9159 15.5827C17.9159 14.0427 17.0359 12.8877 15.7801 12.0352C18.3101 12.4018 21.5826 13.5843 21.5826 15.5827V18.3327H17.9159V15.5827ZM1.41602 15.5827C1.41602 13.1443 6.30185 11.916 8.74935 11.916C11.1968 11.916 16.0827 13.1443 16.0827 15.5827V18.3327H1.41602V15.5827ZM3.24935 15.5918V16.4993H14.2493V15.5827C14.066 14.9318 11.2243 13.7493 8.74935 13.7493C6.27435 13.7493 3.43268 14.9318 3.24935 15.5918Z"
                                      fill="#474D66"
                                    />
                                  </svg>
                                </span>
                                50
                              </p>
                            </div>
                            <hr />
                            <div className="price">
                              <p>$199.00</p>
                              <Link
                                href={`/course-categories/categories-details`}
                              >
                                <i className="ph-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mix design">
                    <div className="mix-item">
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src="/assets/images/course-categories/img7.png"
                          alt=""
                          width={258}
                          height={146}
                        />
                        <div className="overlay"></div>
                      </div>
                      <div className="desc">
                        <div className="row">
                          <div className="col-12">
                            <p className="cat">UI/UX Design</p>
                          </div>
                          <div className="col-12">
                            <ul className="star">
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star"></i>
                              </li>
                              <p className="star-rating">4.0 (2)</p>
                            </ul>
                          </div>
                          <div className="col-12">
                            <h4>
                              3D Visualization For Interior Scene with 3DS
                            </h4>
                            <div className="lessong_person">
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="22"
                                      height="22"
                                      transform="translate(0.5)"
                                      fill="white"
                                    />
                                    <path
                                      d="M1.1875 8.25L11.5 2.75L21.8125 8.25L11.5 13.75L1.1875 8.25Z"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16.6562 20.625V11L11.5 8.25"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M19.4062 9.53125V14.2234C19.4056 14.3695 19.3574 14.5113 19.2687 14.6273C18.693 15.4008 16.2523 18.2195 11.5 18.2195C6.74766 18.2195 4.30703 15.4008 3.73125 14.6273C3.64265 14.5113 3.59437 14.3695 3.59375 14.2234V9.53125"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                10 Lesson
                              </p>
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8.74935 10.9993C10.7752 10.9993 12.416 9.35852 12.416 7.33268C12.416 5.30685 10.7752 3.66602 8.74935 3.66602C6.72352 3.66602 5.08268 5.30685 5.08268 7.33268C5.08268 9.35852 6.72352 10.9993 8.74935 10.9993ZM8.74935 5.49935C9.75768 5.49935 10.5827 6.32435 10.5827 7.33268C10.5827 8.34102 9.75768 9.16602 8.74935 9.16602C7.74102 9.16602 6.91602 8.34102 6.91602 7.33268C6.91602 6.32435 7.74102 5.49935 8.74935 5.49935ZM17.9159 7.33268C17.9159 9.35852 16.2751 10.9993 14.2493 10.9993C13.8184 10.9993 13.4151 10.9077 13.0301 10.7793C13.7909 9.83518 14.2493 8.63435 14.2493 7.33268C14.2493 6.03102 13.7909 4.83018 13.0301 3.88602C13.4151 3.75768 13.8184 3.66602 14.2493 3.66602C16.2751 3.66602 17.9159 5.30685 17.9159 7.33268ZM17.9159 15.5827C17.9159 14.0427 17.0359 12.8877 15.7801 12.0352C18.3101 12.4018 21.5826 13.5843 21.5826 15.5827V18.3327H17.9159V15.5827ZM1.41602 15.5827C1.41602 13.1443 6.30185 11.916 8.74935 11.916C11.1968 11.916 16.0827 13.1443 16.0827 15.5827V18.3327H1.41602V15.5827ZM3.24935 15.5918V16.4993H14.2493V15.5827C14.066 14.9318 11.2243 13.7493 8.74935 13.7493C6.27435 13.7493 3.43268 14.9318 3.24935 15.5918Z"
                                      fill="#474D66"
                                    />
                                  </svg>
                                </span>
                                50
                              </p>
                            </div>
                            <hr />
                            <div className="price">
                              <p>$199.00</p>
                              <Link
                                href={`/course-categories/categories-details`}
                              >
                                <i className="ph-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mix design">
                    <div className="mix-item">
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src="/assets/images/course-categories/img8.png"
                          alt=""
                          width={258}
                          height={146}
                        />
                        <div className="overlay"></div>
                      </div>
                      <div className="desc">
                        <div className="row">
                          <div className="col-12">
                            <p className="cat">UI/UX Design</p>
                          </div>
                          <div className="col-12">
                            <ul className="star">
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star-fill"></i>
                              </li>
                              <li>
                                <i className="ph-star"></i>
                              </li>
                              <p className="star-rating">4.0 (2)</p>
                            </ul>
                          </div>
                          <div className="col-12">
                            <h4>Pro Engineer Fundamental 3D design course</h4>
                            <div className="lessong_person">
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="22"
                                      height="22"
                                      transform="translate(0.5)"
                                      fill="white"
                                    />
                                    <path
                                      d="M1.1875 8.25L11.5 2.75L21.8125 8.25L11.5 13.75L1.1875 8.25Z"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M16.6562 20.625V11L11.5 8.25"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M19.4062 9.53125V14.2234C19.4056 14.3695 19.3574 14.5113 19.2687 14.6273C18.693 15.4008 16.2523 18.2195 11.5 18.2195C6.74766 18.2195 4.30703 15.4008 3.73125 14.6273C3.64265 14.5113 3.59437 14.3695 3.59375 14.2234V9.53125"
                                      stroke="#474D66"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                10 Lesson
                              </p>
                              <p>
                                <span>
                                  <svg
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8.74935 10.9993C10.7752 10.9993 12.416 9.35852 12.416 7.33268C12.416 5.30685 10.7752 3.66602 8.74935 3.66602C6.72352 3.66602 5.08268 5.30685 5.08268 7.33268C5.08268 9.35852 6.72352 10.9993 8.74935 10.9993ZM8.74935 5.49935C9.75768 5.49935 10.5827 6.32435 10.5827 7.33268C10.5827 8.34102 9.75768 9.16602 8.74935 9.16602C7.74102 9.16602 6.91602 8.34102 6.91602 7.33268C6.91602 6.32435 7.74102 5.49935 8.74935 5.49935ZM17.9159 7.33268C17.9159 9.35852 16.2751 10.9993 14.2493 10.9993C13.8184 10.9993 13.4151 10.9077 13.0301 10.7793C13.7909 9.83518 14.2493 8.63435 14.2493 7.33268C14.2493 6.03102 13.7909 4.83018 13.0301 3.88602C13.4151 3.75768 13.8184 3.66602 14.2493 3.66602C16.2751 3.66602 17.9159 5.30685 17.9159 7.33268ZM17.9159 15.5827C17.9159 14.0427 17.0359 12.8877 15.7801 12.0352C18.3101 12.4018 21.5826 13.5843 21.5826 15.5827V18.3327H17.9159V15.5827ZM1.41602 15.5827C1.41602 13.1443 6.30185 11.916 8.74935 11.916C11.1968 11.916 16.0827 13.1443 16.0827 15.5827V18.3327H1.41602V15.5827ZM3.24935 15.5918V16.4993H14.2493V15.5827C14.066 14.9318 11.2243 13.7493 8.74935 13.7493C6.27435 13.7493 3.43268 14.9318 3.24935 15.5918Z"
                                      fill="#474D66"
                                    />
                                  </svg>
                                </span>
                                50
                              </p>
                            </div>
                            <hr />
                            <div className="price">
                              <p>$199.00</p>
                              <Link
                                href={`/course-categories/categories-details`}
                              >
                                <i className="ph-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <Link href="#" className="page-link">
                        <i className="ph-caret-left"></i>
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
                        <i className="ph-caret-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCategories;
