import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div
        className="modal fade"
        id="login"
        tabIndex="-1"
        aria-labelledby="loginLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable login-modal">
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
                <h3>Welcome back!</h3>
                <p>
                  Eduverge gives you the resources and tutorials you need to
                  create a truly professional career.
                </p>
              </div>
              <div className="auth-pad">
                <form action="!?#">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@email.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                      />
                      <span className="eye position-absolute">
                        <svg
                          width="21"
                          height="14"
                          viewBox="0 0 21 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5031 5.75335C9.81669 5.75335 9.25507 6.31731 9.25507 7.0066C9.25507 7.69588 9.81669 8.25984 10.5031 8.25984C11.1895 8.25984 11.7512 7.69588 11.7512 7.0066C11.7512 6.31731 11.1895 5.75335 10.5031 5.75335ZM20.4875 6.969C20.4875 6.95647 20.4875 6.95647 20.4875 6.94393V6.9314C20.4875 6.91887 20.4875 6.91887 20.4875 6.90634C20.4875 6.8938 20.4875 6.8938 20.4875 6.88127C20.4626 6.70582 20.3877 6.55543 20.2754 6.4301C19.6388 5.59043 18.8775 4.85102 18.1037 4.17426C16.4438 2.70797 14.5468 1.47979 12.4501 0.991024C11.227 0.690246 10.0164 0.677713 8.79329 0.91583C7.68253 1.14141 6.62169 1.59258 5.61076 2.15654C4.0507 3.04634 2.61544 4.26199 1.36739 5.62803C1.14275 5.89121 0.918097 6.14186 0.705928 6.41757C0.431357 6.78101 0.431357 7.21965 0.705928 7.58309C1.34243 8.42276 2.10374 9.16217 2.87754 9.83893C4.53744 11.3052 6.43448 12.5334 8.5312 13.0222C9.74181 13.3104 10.9649 13.3229 12.188 13.0723C13.2988 12.8467 14.3596 12.3955 15.3705 11.8316C16.9306 10.9418 18.3658 9.72613 19.6139 8.3601C19.8385 8.10945 20.0757 7.84627 20.2878 7.57056C20.4002 7.44523 20.475 7.28231 20.5 7.11939C20.5 7.10685 20.5 7.10685 20.5 7.09432C20.5 7.08179 20.5 7.08179 20.5 7.06926V7.05673C20.5 7.04419 20.5 7.04419 20.5 7.03166C20.5 7.01913 20.5 7.0066 20.5 6.99406C20.5 6.98153 20.4875 6.98153 20.4875 6.969ZM10.5031 10.7663C8.43136 10.7663 6.75897 9.08698 6.75897 7.0066C6.75897 4.92621 8.43136 3.24686 10.5031 3.24686C12.5749 3.24686 14.2473 4.92621 14.2473 7.0066C14.2473 9.08698 12.5749 10.7663 10.5031 10.7663Z"
                            fill="#696F8C"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3 d-flex align-items-center justify-content-between remember-me position-relative">
                    <label className="check-container">
                      <input type="checkbox" />
                      <span className="checkmark">
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.5 0.5C9.22 0.5 8.97 0.61 8.79 0.79L4.5 5.09L2.21 2.79C2.03 2.61 1.78 2.5 1.5 2.5C0.95 2.5 0.5 2.95 0.5 3.5C0.5 3.78 0.61 4.03 0.79 4.21L3.79 7.21C3.97 7.39 4.22 7.5 4.5 7.5C4.78 7.5 5.03 7.39 5.21 7.21L10.21 2.21C10.39 2.03 10.5 1.78 10.5 1.5C10.5 0.95 10.05 0.5 9.5 0.5Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <p>Remember me</p>
                    </label>
                    <span className="forget-password">
                      <Link
                        href="#"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#forgetpass"
                      >
                        Forgot password?
                      </Link>
                    </span>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn bg-success w-100 text-white submit-btn"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="mb-3 position-relative">
                  <hr />
                  <p className="or">or</p>
                </div>
                <div className="mb-3 scial-link">
                  <span>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8957 6.60969L9.36944 6.60938C9.08125 6.60938 8.84766 6.84294 8.84766 7.13113V9.21597C8.84766 9.50409 9.08125 9.73772 9.36941 9.73772H13.0446C12.6422 10.7821 11.891 11.6568 10.9327 12.2125L12.4998 14.9253C15.0137 13.4715 16.4999 10.9206 16.4999 8.065C16.4999 7.65841 16.4699 7.36775 16.4099 7.04047C16.3644 6.79181 16.1485 6.60969 15.8957 6.60969Z"
                        fill="#167EE6"
                      />
                      <path
                        d="M8.49891 12.8704C6.70034 12.8704 5.13021 11.8878 4.28692 10.4336L1.57422 11.9972C2.95469 14.3897 5.54077 16.0009 8.49891 16.0009C9.95007 16.0009 11.3194 15.6102 12.4989 14.9293V14.9255L10.9318 12.2127C10.215 12.6285 9.38551 12.8704 8.49891 12.8704Z"
                        fill="#12B347"
                      />
                      <path
                        d="M12.5 14.9275V14.9237L10.9329 12.2109C10.2161 12.6267 9.38666 12.8687 8.5 12.8687V15.9991C9.95116 15.9991 11.3205 15.6084 12.5 14.9275Z"
                        fill="#0F993E"
                      />
                      <path
                        d="M3.63045 8.00019C3.63045 7.11366 3.87239 6.28425 4.28805 5.56747L1.57535 4.00391C0.890689 5.17975 0.5 6.54531 0.5 8.00019C0.5 9.45506 0.890689 10.8206 1.57535 11.9965L4.28805 10.4329C3.87239 9.71613 3.63045 8.88672 3.63045 8.00019Z"
                        fill="#FFD500"
                      />
                      <path
                        d="M8.49891 3.13044C9.67176 3.13044 10.7491 3.54719 11.5906 4.24041C11.7981 4.41141 12.0999 4.39906 12.29 4.20891L13.7672 2.73172C13.983 2.51597 13.9676 2.16281 13.7371 1.96288C12.3273 0.739781 10.4929 0 8.49891 0C5.54077 0 2.95469 1.61116 1.57422 4.00372L4.28692 5.56728C5.13021 4.11313 6.70034 3.13044 8.49891 3.13044Z"
                        fill="#FF4B26"
                      />
                      <path
                        d="M11.5916 4.24041C11.7992 4.41141 12.101 4.39906 12.2911 4.20891L13.7683 2.73172C13.984 2.51597 13.9687 2.16281 13.7382 1.96288C12.3284 0.73975 10.494 0 8.5 0V3.13044C9.67282 3.13044 10.7502 3.54719 11.5916 4.24041Z"
                        fill="#D93F21"
                      />
                    </svg>
                  </span>
                  <Link href="#" className="btn">
                    {" "}
                    Continue with Google{" "}
                  </Link>
                </div>
                <div className="mb-3 scial-link">
                  <span>
                    <Image
                      src="/assets/images/auth/facebook.svg"
                      alt=""
                      width={17}
                      height={17}
                    />
                  </span>
                  <Link href="#" className="btn">
                    {" "}
                    Continue with Facebook{" "}
                  </Link>
                </div>
                <div className="mb-3 text-center forget-pass">
                  <p>
                    Don’t have an account? <a href="!#">Create an account</a>
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

export default Nav;
