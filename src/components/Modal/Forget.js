import Link from "next/link";
import { useState } from "react";

const Forget = () => {
  const [forgotEmail, setForgotEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <>
      <div
        className="modal fade"
        id="forgetpass"
        tabIndex="-1"
        aria-labelledby="forgetpassLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable login-modal forgot-pass-modal">
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
                <h3>Forgot password</h3>
                <p>
                  Enter the email address you use on Eduverge. We&apos;ll send you a
                  link to reset your password.
                </p>
              </div>
              <div className="auth-pad">
                <div id="message"></div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="name@email.com"
                      defaultValue={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <button
                      className="btn bg-success w-100 text-white submit-btn"
                      id="btn"
                      type="submit"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
                <div className="mb-3 position-relative">
                  <hr />
                  <p className="or">or</p>
                </div>
                <div className="mb-3 scial-link">
                  <Link
                    href="#"
                    className="btn mail-me-link"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#loginLink"
                  >
                    Email me a login link
                  </Link>
                </div>

                <div className="mb-3 text-center forget-pass">
                  <p>
                    <Link
                      href="!?#"
                      className="d-flex align-items-center justify-content-center gap-1"
                    >
                      <i className="ph-arrow-left"></i>Back to Log in
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

export default Forget;
