import Image from "next/image";
import Link from "next/link";

const MyCourses = () => {
  return (
    <>
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
                            connected by links. It&apos;s an interface, space where
                            different things meet, communicate, and affect each
                            other.
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
                                style={{width: "100%"}}
                              ></div>
                            </div>
                            <p>100%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart-item-right">
                        <Link className="btn bg-success text-white go-course" href="#">
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
                            connected by links. It&apos;s an interface, space where
                            different things meet, communicate, and affect each
                            other.
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
                                style={{width: "30%"}}
                              ></div>
                            </div>
                            <p>30%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart-item-right">
                        <Link className="btn bg-success text-white go-course" href="#">
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
                            connected by links. It&apos;s an interface, space where
                            different things meet, communicate, and affect each
                            other.
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
                                style={{width: "30%"}}
                              ></div>
                            </div>
                            <p>30%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart-item-right">
                        <Link className="btn bg-success text-white go-course" href="#">
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
  );
};

export default MyCourses;
