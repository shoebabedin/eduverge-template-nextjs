import LarnerHeader from "@/components/Student/LarnerHeader";
import Image from "next/image";
import Link from "next/link";

const Student = () => {
  return (
    <>
      <LarnerHeader data={'My Profile'}/>

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
                          fill="#1C1D1F"
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
                          d="M7.5 21H2V9H7.5V21ZM14.75 3H9.25V21H14.75V3ZM22 11H16.5V21H22V11Z"
                          fill="#1C1D1F"
                        />
                      </svg>{" "}
                    </span>
                    2 Courses
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
                          fill="#1C1D1F"
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
                    width={59}
                    height={64}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="education-course-play-list">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="education-skill-part">
                <h2 className="education-skills-header">Education & Skill</h2>
                <div className="education-skills">
                  <div className="education-skills-items">
                    <h4>Education</h4>
                    <p>You haven&apos;t added any educational information.</p>
                  </div>
                  <div className="education-skills-items">
                    <h4>Skill</h4>
                    <p>You haven&apos;t added any skill information.</p>
                  </div>
                  <div className="education-skills-items">
                    <h4>Certification</h4>
                    <p>You haven&apos;t added any language information.</p>
                  </div>
                  <div className="education-skills-items">
                    <h4>Language</h4>
                    <p>You haven&apos;t added any language information.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className="course-list">
                <h2 className="course-title">My Course Playlist</h2>
                <hr />
                <p>
                  You haven&apos;t uploaded any courses till now!
                  <span> Become an online instructor </span> and start your
                  online teaching journey with Eduverge!
                </p>
              </div>
              <div className="purchase-courses">
                <h2 className="course-title">My Course Playlist</h2>
                <hr />
                <div className="purchase-courses-list">
                  <div className="purchase-courses-list-img">
                    <Image
                      src="/assets/images/larner-profile/ui-ux.png"
                      alt=""
                      className="img-fluid"
                      width={172}
                      height={111}
                    />
                    <span className="play-btn">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.0744 3.0498C8.82067 3.0498 2.93359 8.93688 2.93359 16.1906C2.93359 23.4443 8.82067 29.3314 16.0744 29.3314C23.3281 29.3314 29.2152 23.4443 29.2152 16.1906C29.2152 8.93688 23.3281 3.0498 16.0744 3.0498ZM13.4462 22.104V10.2772L21.3307 16.1906L13.4462 22.104Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="purchase-courses-list-title-desc">
                    <h5>
                      UI/UX Design Golden Course <span>$ 258.00</span>
                    </h5>
                    <p>
                      A website is much more than a group of pages connected by
                      links. It’s an interface, space where different things
                      meet, communicate, and affect each other ...
                      <Link href="#">Read More</Link>
                    </p>
                    <div className="progress-bar-area">
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Warning example"
                        aria-valuenow="100"
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
            </div>
          </div>
        </div>
      </div>

      <section className="online-platform">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="online-platform-div text-center">
                <h4>
                  Having problem Teaching from a reliable online platform <br />{" "}
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
    </>
  );
};

export default Student;
