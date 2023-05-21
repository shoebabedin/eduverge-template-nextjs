import Image from "next/image";
import Link from "next/link";

const PurchaseDetailsCourse = () => {
  return (
    <>
      <section className="course-categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/course-categories">Categories</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link href="#">Course Details</Link>
                  </li>
                </ol>
              </nav>
              <h2 className="heading">
                Introduction to User Experience Design -2022
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="singlecoursedetails">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="singlecourse-section">
                <div className="singlecoursedetails-head">
                  <p>Section: Introduction</p>
                  <p>
                    Videos: 03 <span>|</span> Duration: 00:32:51
                  </p>
                </div>
                <div className="singlecoursedetails-class">
                  <div className="row">
                    <div className="col-1">
                      <div className="icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                            fill="#429777"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="img-title">
                        <div className="img">
                          <Image
                            className="img-fluid"
                            src="/assets/images/single-course/img1.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="title">
                          <h5>Introduction to UI/UX part-1</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <p>Duration: 7:51</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-1">
                      <div className="icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                            fill="#429777"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="img-title">
                        <div className="img">
                          <Image
                            className="img-fluid"
                            src="/assets/images/single-course/img2.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="title">
                          <h5>Introduction to UI/UX part-1</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <p>Duration: 7:51</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-1">
                      <div className="icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 16.5L16 12L10 7.5V16.5ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                            fill="#474D66"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="img-title">
                        <div className="img">
                          <Image
                            className="img-fluid"
                            src="/assets/images/single-course/img3.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="title">
                          <h5>Introduction to UI/UX part-1</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <p>Duration: 7:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="singlecourse-section">
                <div className="singlecoursedetails-head">
                  <p>Section: Site Map</p>
                  <p>
                    Videos: 03 <span>|</span> Duration: 00:32:51
                  </p>
                </div>
                <div className="singlecoursedetails-class">
                  <div className="row">
                    <div className="col-1">
                      <div className="icon">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 15.5837C12.0084 15.5837 12.8334 14.7587 12.8334 13.7503C12.8334 12.742 12.0084 11.917 11 11.917C9.99169 11.917 9.16669 12.742 9.16669 13.7503C9.16669 14.7587 9.99169 15.5837 11 15.5837ZM16.5 7.33366H15.5834V5.50033C15.5834 2.97033 13.53 0.916992 11 0.916992C8.47002 0.916992 6.41669 2.97033 6.41669 5.50033V7.33366H5.50002C4.49169 7.33366 3.66669 8.15866 3.66669 9.16699V18.3337C3.66669 19.342 4.49169 20.167 5.50002 20.167H16.5C17.5084 20.167 18.3334 19.342 18.3334 18.3337V9.16699C18.3334 8.15866 17.5084 7.33366 16.5 7.33366ZM8.15835 5.50033C8.15835 3.93283 9.43252 2.65866 11 2.65866C12.5675 2.65866 13.8417 3.93283 13.8417 5.50033V7.33366H8.15835V5.50033ZM16.5 18.3337H5.50002V9.16699H16.5V18.3337Z"
                            fill="#474D66"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="img-title">
                        <div className="img">
                          <Image
                            className="img-fluid"
                            src="/assets/images/single-course/img4.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="title">
                          <h5>Introduction to UI/UX part-1</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <p>Duration: 7:51</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-1">
                      <div className="icon">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 15.5837C12.0084 15.5837 12.8334 14.7587 12.8334 13.7503C12.8334 12.742 12.0084 11.917 11 11.917C9.99169 11.917 9.16669 12.742 9.16669 13.7503C9.16669 14.7587 9.99169 15.5837 11 15.5837ZM16.5 7.33366H15.5834V5.50033C15.5834 2.97033 13.53 0.916992 11 0.916992C8.47002 0.916992 6.41669 2.97033 6.41669 5.50033V7.33366H5.50002C4.49169 7.33366 3.66669 8.15866 3.66669 9.16699V18.3337C3.66669 19.342 4.49169 20.167 5.50002 20.167H16.5C17.5084 20.167 18.3334 19.342 18.3334 18.3337V9.16699C18.3334 8.15866 17.5084 7.33366 16.5 7.33366ZM8.15835 5.50033C8.15835 3.93283 9.43252 2.65866 11 2.65866C12.5675 2.65866 13.8417 3.93283 13.8417 5.50033V7.33366H8.15835V5.50033ZM16.5 18.3337H5.50002V9.16699H16.5V18.3337Z"
                            fill="#474D66"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="img-title">
                        <div className="img">
                          <Image
                            className="img-fluid"
                            src="/assets/images/single-course/img5.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="title">
                          <h5>Introduction to UI/UX part-1</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <p>Duration: 7:51</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-1">
                      <div className="icon">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 15.5837C12.0084 15.5837 12.8334 14.7587 12.8334 13.7503C12.8334 12.742 12.0084 11.917 11 11.917C9.99169 11.917 9.16669 12.742 9.16669 13.7503C9.16669 14.7587 9.99169 15.5837 11 15.5837ZM16.5 7.33366H15.5834V5.50033C15.5834 2.97033 13.53 0.916992 11 0.916992C8.47002 0.916992 6.41669 2.97033 6.41669 5.50033V7.33366H5.50002C4.49169 7.33366 3.66669 8.15866 3.66669 9.16699V18.3337C3.66669 19.342 4.49169 20.167 5.50002 20.167H16.5C17.5084 20.167 18.3334 19.342 18.3334 18.3337V9.16699C18.3334 8.15866 17.5084 7.33366 16.5 7.33366ZM8.15835 5.50033C8.15835 3.93283 9.43252 2.65866 11 2.65866C12.5675 2.65866 13.8417 3.93283 13.8417 5.50033V7.33366H8.15835V5.50033ZM16.5 18.3337H5.50002V9.16699H16.5V18.3337Z"
                            fill="#474D66"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="img-title">
                        <div className="img">
                          <Image
                            className="img-fluid"
                            src="/assets/images/single-course/img6.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="title">
                          <h5>Introduction to UI/UX part-1</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <p>Duration: 7:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PurchaseDetailsCourse;
