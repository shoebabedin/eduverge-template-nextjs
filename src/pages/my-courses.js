import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MyCourses = () => {
  const [role, setRole] = useState({});

  useEffect(() => {
    const isUserRole = localStorage.getItem("userRole");
    if (isUserRole) {
      const tokenObject = JSON.parse(isUserRole);
      console.log(tokenObject.teacher);
      setRole(tokenObject);
    }
  }, []);

  console.log(role.role);
  return (
    <>
      {role.role === "student" && (
        <div className="checkout_process_modal my-purchase-course-modal">
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="checkout-list">My Purchase Course</h2>
                  <hr />
                </div>
                <div className="col-lg-12">
                  <div className="cart-item">
                    <div className="row">
                      <div className="col-10">
                        <div className="cart-item-left">
                          <div className="cart-item-img">
                            <Image
                              src="/assets/images/check-list/img1.png"
                              alt=""
                              className="img-fluid"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="cart-item-desc">
                            <h4>UI/UX Design Golden Course</h4>
                            <p>
                              A website is much more than a group of pages
                              connected by links. It&apos;s an interface, space
                              where different things meet, communicate, and
                              affect each other.
                            </p>
                            <h5>Learning Progress (Completed)</h5>
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
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                              <p>100%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="cart-item-right">
                          <Link
                            className="btn bg-success text-white go-course"
                            href="/course-categories/categories-details"
                          >
                            Go to Course <i className="ph ph-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item">
                    <div className="row">
                      <div className="col-10">
                        <div className="cart-item-left">
                          <div className="cart-item-img">
                            <Image
                              src="/assets/images/check-list/img1.png"
                              alt=""
                              className="img-fluid"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="cart-item-desc">
                            <h4>T-Shirt Design- Freelancing Course</h4>
                            <p>
                              A website is much more than a group of pages
                              connected by links. It&apos;s an interface, space
                              where different things meet, communicate, and
                              affect each other.
                            </p>
                            <h5>Learning Progress</h5>
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
                                  style={{ width: "30%" }}
                                ></div>
                              </div>
                              <p>30%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="cart-item-right">
                          <Link
                            className="btn bg-success text-white go-course"
                            href="/course-categories/categories-details"
                          >
                            Go to Course <i className="ph ph-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart-item">
                    <div className="row">
                      <div className="col-10">
                        <div className="cart-item-left">
                          <div className="cart-item-img">
                            <Image
                              src="/assets/images/check-list/img1.png"
                              alt=""
                              className="img-fluid"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="cart-item-desc">
                            <h4>Big Data Analysis- Full Course 2023</h4>
                            <p>
                              A website is much more than a group of pages
                              connected by links. It&apos;s an interface, space
                              where different things meet, communicate, and
                              affect each other.
                            </p>
                            <h5>Progress</h5>
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
                                  style={{ width: "30%" }}
                                ></div>
                              </div>
                              <p>30%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="cart-item-right">
                          <Link
                            className="btn bg-success text-white go-course"
                            href="/course-categories/categories-details"
                          >
                            Go to Course <i className="ph ph-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {role.role === "instructor" && (
        <>
          <div className="instructor-course-play-list">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="course-play-list-div">
                    <div className="course-play-list-heading">
                      Created Courses
                    </div>
                    <button className="course-play-list-btn">
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.6673 8.66683H8.66732V12.6668H7.33398V8.66683H3.33398V7.3335H7.33398V3.3335H8.66732V7.3335H12.6673V8.66683Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Add New Course
                    </button>
                  </div>
                  <hr />
                </div>
                <div className="col-12">
                  <div className="course-play-list">
                    <div className="course-play-list-item">
                      <div className="course-play-img">
                        <Image
                          src="/assets/images/my-courses/img1.png"
                          alt=""
                          className="img-fluid"
                          width={100}
                          height={100}
                        />
                        <div className="overlay">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM16 29V11L28 20L16 29Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="course-play-details-btn">
                        <div className="course-play-details">
                          <h4 className="title">UI/UX Design Golden Course</h4>
                          <p className="lesson">4 Section | 15 Lesson</p>
                          <p className="duration">
                            Duration: 2:20:36 | Enroll: 56
                          </p>
                        </div>
                        <div className="course-play-btn">
                          <Link className="btn" href="#">
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
                          </Link>
                          <button className="btn">
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
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="course-play-list-item">
                      <div className="course-play-img">
                        <Image
                          src="/assets/images/my-courses/img2.png"
                          alt=""
                          className="img-fluid"
                          width={261}
                          height={168}
                        />
                        <div className="overlay">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM16 29V11L28 20L16 29Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="course-play-details-btn">
                        <div className="course-play-details">
                          <h4 className="title">The Web Developer Bootcamp</h4>
                          <p className="lesson">4 Section | 15 Lesson</p>
                          <p className="duration">
                            Duration: 2:20:36 | Enroll: 56
                          </p>
                        </div>
                        <div className="course-play-btn">
                          <Link className="btn" href="#">
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
                          </Link>
                          <button className="btn">
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
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="course-play-list-item">
                      <div className="course-play-img">
                        <Image
                          src="/assets/images/my-courses/img2.png"
                          alt=""
                          className="img-fluid"
                          width={100}
                          height={100}
                        />
                        <div className="overlay">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM16 29V11L28 20L16 29Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="course-play-details-btn">
                        <div className="course-play-details">
                          <h4 className="title">
                            Digital Marketing For Beginners
                          </h4>
                          <p className="lesson">4 Section | 15 Lesson</p>
                          <p className="duration">
                            Duration: 2:20:36 | Enroll: 56
                          </p>
                        </div>
                        <div className="course-play-btn">
                          <Link className="btn" href="#">
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
                          </Link>
                          <button className="btn">
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
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout_process_modal my-purchase-course-modal">
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="checkout-list">My Purchase Course</h2>
                    <hr />
                  </div>
                  <div className="col-lg-12">
                    <div className="cart-item">
                      <div className="row">
                        <div className="col-10">
                          <div className="cart-item-left">
                            <div className="cart-item-img">
                              <Image
                                src="/assets/images/check-list/img1.png"
                                alt=""
                                className="img-fluid"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="cart-item-desc">
                              <h4>UI/UX Design Golden Course</h4>
                              <p>
                                A website is much more than a group of pages
                                connected by links. It&apos;s an interface,
                                space where different things meet, communicate,
                                and affect each other.
                              </p>
                              <h5>Learning Progress (Completed)</h5>
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
                                    style={{ width: "100%" }}
                                  ></div>
                                </div>
                                <p>100%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cart-item-right">
                            <Link
                              className="btn bg-success text-white go-course"
                              href="/course-categories/categories-details"
                            >
                              Go to Course <i className="ph ph-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item">
                      <div className="row">
                        <div className="col-10">
                          <div className="cart-item-left">
                            <div className="cart-item-img">
                              <Image
                                src="/assets/images/check-list/img1.png"
                                alt=""
                                className="img-fluid"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="cart-item-desc">
                              <h4>T-Shirt Design- Freelancing Course</h4>
                              <p>
                                A website is much more than a group of pages
                                connected by links. It&apos;s an interface,
                                space where different things meet, communicate,
                                and affect each other.
                              </p>
                              <h5>Learning Progress</h5>
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
                                    style={{ width: "30%" }}
                                  ></div>
                                </div>
                                <p>30%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cart-item-right">
                            <Link
                              className="btn bg-success text-white go-course"
                              href="/course-categories/categories-details"
                            >
                              Go to Course <i className="ph ph-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item">
                      <div className="row">
                        <div className="col-10">
                          <div className="cart-item-left">
                            <div className="cart-item-img">
                              <Image
                                src="/assets/images/check-list/img1.png"
                                alt=""
                                className="img-fluid"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="cart-item-desc">
                              <h4>Big Data Analysis- Full Course 2023</h4>
                              <p>
                                A website is much more than a group of pages
                                connected by links. It&apos;s an interface,
                                space where different things meet, communicate,
                                and affect each other.
                              </p>
                              <h5>Progress</h5>
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
                                    style={{ width: "30%" }}
                                  ></div>
                                </div>
                                <p>30%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="cart-item-right">
                            <Link
                              className="btn bg-success text-white go-course"
                              href="/course-categories/categories-details"
                            >
                              Go to Course <i className="ph ph-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyCourses;
