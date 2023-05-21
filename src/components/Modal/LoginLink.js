import Link from "next/link";

const LoginLink = () => {
  return (
    <>
      <div
        className="modal fade"
        id="loginLink"
        tabIndex="-1"
        aria-labelledby="loginLinkLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable login-modal forgot-pass-modal loginLink-modal">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <h3>Email has been sent</h3>
                <p>
                  Please check your email inbox for a password recovery link.
                  Don&apost forget to check your spam folder.
                </p>
              </div>
              <div className="auth-pad">
                <p>We emailed you an login link to</p>
                <h6>namerer.sample@gmail.com.</h6>
                <div className="mb-3 scial-link">
                  <Link href="#" className="btn mail-me-link">
                    {" "}
                    Re-send email{" "}
                  </Link>
                </div>
                <div className="mb-3">
                  <p>Can’t find your link? Check your spam, folder.</p>
                </div>

                <div className="mb-3 text-center forget-pass">
                  <p data-bs-toggle="modal" data-bs-target="#forgetpass">
                    <Link
                      href=""
                      className="d-flex align-items-center justify-content-center gap-1"
                      role="button"
                      data-bs-toggle="modal"
                      data-bs-target="#emailmodal"
                    >
                      <i className="ph-arrow-left"></i>Go Back
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLink;
