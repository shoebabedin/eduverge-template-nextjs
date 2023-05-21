import Image from "next/image";

const Future = () => {
  return (
    <>
      <section className="future">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h6>Features</h6>
              <h2>Why study with Eduverge?</h2>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <Image
                    className="img-fluid"
                    src="/assets/images/future/diamondsfour.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <h4>Learn anything</h4>
                  <p>
                    Whether you want to develop as a professional or discover a
                    new hobby, there&aposs an online course.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <Image
                    className="img-fluid"
                    src="/assets/images/future/chartpie.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <h4>Flexible learning</h4>
                  <p>
                    Get a custom learning plan tailor to fit your busy life.
                    Learn at your own pace and reach your goal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <Image
                    className="img-fluid"
                    src="/assets/images/future/circlewavycheck.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <h4>Learn with experts</h4>
                  <p>
                    Whether you want to develop as a professional or discover a
                    new hobby, there&aposs an online course.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <Image
                    className="img-fluid"
                    src="/assets/images/future/usercirclegear.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <h4>Personalized learning</h4>
                  <p>
                    Whether you want to develop as a professional or discover a
                    new hobby, there&aposs an online course.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <Image
                    className="img-fluid"
                    src="/assets/images/future/pokerchip.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <h4>Trusted content</h4>
                  <p>
                    Get a custom learning plan tailor to fit your busy life.
                    Learn at your own pace and reach your goal.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <Image
                    className="img-fluid"
                    src="/assets/images/future/handfist.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <h4>Tools to empower</h4>
                  <p>
                    Whether you want to develop as a professional or discover a
                    new hobby, there&aposs an online course.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Future;
