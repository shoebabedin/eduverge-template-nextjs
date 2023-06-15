import LarnerHeader from "@/components/Student/LarnerHeader";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Instructor = () => {
  const router = useRouter();
  return (
    <>
      <LarnerHeader data={"My Profile"} />

      {/* <!-- larner-profile --> */}
      <section className="larnerprofile">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="larner-user-img-name">
                <div className="larner-user-img">
                  <Image
                    src="/assets/images/larner-profile/profile-img.png"
                    alt=""
                    className="img-fluid"
                    width={261}
                    height={237}
                  />
                  <span className="larner-user-img-edit">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="larner-user-name">
                  <h4>Abul Hasan</h4>
                  <p>
                    <span>
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"
                          fill="#474D66"
                        />
                      </svg>{" "}
                    </span>
                    0 Star Rating
                  </p>
                  <p>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 16.5C16.1421 16.5 19.5 13.1421 19.5 9C19.5 4.85786 16.1421 1.5 12 1.5C7.85786 1.5 4.5 4.85786 4.5 9C4.5 13.1421 7.85786 16.5 12 16.5Z"
                          stroke="#474D66"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 13.5C14.4853 13.5 16.5 11.4853 16.5 9C16.5 6.51472 14.4853 4.5 12 4.5C9.51472 4.5 7.5 6.51472 7.5 9C7.5 11.4853 9.51472 13.5 12 13.5Z"
                          stroke="#474D66"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.5 15V22.5L12 20.25L7.5 22.5V15"
                          stroke="#474D66"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>{" "}
                    </span>
                    Level 1 Instructor
                  </p>
                  <p>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
                          fill="#474D66"
                        />
                      </svg>{" "}
                    </span>
                    5 Enrollments
                  </p>
                  <p>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 21H2V9H7.5V21ZM14.75 3H9.25V21H14.75V3ZM22 11H16.5V21H22V11Z"
                          fill="#474D66"
                        />
                      </svg>{" "}
                    </span>
                    0 Courses
                  </p>
                  <p>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 17H6V15H18V17ZM18 13H6V11H18V13ZM18 9H6V7H18V9ZM3 22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.5 20.5L15 22L16.5 20.5L18 22L19.5 20.5L21 22V2L19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22Z"
                          fill="#474D66"
                        />
                      </svg>{" "}
                    </span>
                    0 Reviews
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-me">
                <h2 className="about-me-title">About Me</h2>
                <hr />
                <p>
                  Hello! Abul Hasan. I’m a UI/UX designer, product designer,
                  design thinker, and human-loving optimist. I’m an established
                  experience designer with over a decade of experience. I
                  oversee diverse interdisciplinary teams, fostering
                  relationships with both designers and stakeholders to
                  establish design practices that people want to work with and
                  be a part of.
                </p>
                <br />
                <br />
                <h2 className="my-collection">My Collection</h2>
                <hr />
                <div className="badge">
                  <Image
                    src="/assets/images/larner-profile/badge.svg"
                    alt=""
                    className="img-fluid"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- larner-profile --> */}

      {/* <!-- instructor course play list --> */}
      <div className="instructor-course-play-list">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="course-play-list-div">
                <div className="course-play-list-heading">
                  My Course Playlist
                </div>
                <button
                  className="course-play-list-btn"
                  onClick={() => router.push("/become-an-instructor")}
                >
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
                  Add Courses
                </button>
              </div>
              <hr />
            </div>
            <div className="col-12">
              <div className="course-play-list">
                <div className="course-play-list-item">
                  <div className="course-play-img">
                    <Image
                      src="/assets/images/larner-profile/ui-ux.png"
                      alt=""
                      className="img-fluid"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="course-play-details-btn">
                    <div className="course-play-details">
                      <h4 className="title">UI/UX Design Golden Course</h4>
                      <p className="lesson">4 Section | 15 Lesson</p>
                      <p className="duration">Duration: 2:20:36 | Enroll: 56</p>
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
                      src="/assets/images/larner-profile/instructor1.png"
                      alt=""
                      className="img-fluid"
                      width={100}
                          height={100}
                    />
                  </div>
                  <div className="course-play-details-btn">
                    <div className="course-play-details">
                      <h4 className="title">Photoshop Design Ultimate</h4>
                      <p className="lesson">4 Section | 15 Lesson</p>
                      <p className="duration">Duration: 2:20:36 | Enroll: 56</p>
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
                      src="/assets/images/larner-profile/instructor2.png"
                      alt=""
                      className="img-fluid"
                      width={100}
                          height={100}
                    />
                  </div>
                  <div className="course-play-details-btn">
                    <div className="course-play-details">
                      <h4 className="title">Digital Marketing for Beginner</h4>
                      <p className="lesson">4 Section | 15 Lesson</p>
                      <p className="duration">Duration: 2:20:36 | Enroll: 56</p>
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
      {/* <!-- instructor course play list --> */}

      {/* <!-- online platform --> */}
      <section className="online-platform">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="online-platform-div text-center">
                <h4>
                  Having problem Teaching from a reliable online platform <br />
                  as a Teacher?
                </h4>
                <Link href="#" className="btn btn-outline-success">
                  Visit Our Support Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- online platform --> */}
    </>
  );
};

export default Instructor;
