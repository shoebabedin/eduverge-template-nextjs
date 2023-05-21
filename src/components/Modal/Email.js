import Link from "next/link";

const Email = () => {
  return (
    <>
      <div
        className="modal fade"
        id="emailmodal"
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
                <h3>Here&aposs your login link</h3>
                <p>
                  You requested a login link for your Eduverge account
                  associated with this email. To log in click the link below.
                  This Link will expire in 10 minutes.
                </p>
              </div>
              <div className="auth-pad">
                <p>We emailed you an login link to</p>
                <h6>namerer.sample@gmail.com.</h6>
                <div className="mb-3">
                  <button
                    className="btn bg-success w-100 text-white submit-btn"
                    id="btn"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="mb-3 text-center forget-pass">
                  <p data-bs-toggle="modal" data-bs-target="#forgetpass">
                    <Link href="#" className="">
                      Or Sign in using this link.
                    </Link>
                  </p>
                </div>
                <div className="mb-3">
                  <p>
                    If you didn&apost request this login link please ignore this
                    email.
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

export default Email;
