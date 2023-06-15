import StudentLayout from "@/components/Student/Layout";
import { useEffect } from "react";

const ChangePassword = () => {
  useEffect(() => {
    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    // When the user starts to type something inside the password field
    myInput.onkeyup = function () {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if (myInput.value.match(lowerCaseLetters)) {
        letter?.classList.remove("invalid");
        letter?.classList.add("valid");
      } else {
        letter?.classList.remove("valid");
        letter?.classList.add("invalid");
      }

      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
        capital?.classList.remove("invalid");
        capital?.classList.add("valid");
      } else {
        capital?.classList.remove("valid");
        capital?.classList.add("invalid");
      }

      // Validate numbers
      var numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
        number?.classList.remove("invalid");
        number?.classList.add("valid");
      } else {
        number?.classList.remove("valid");
        number?.classList.add("invalid");
      }

      // Validate length
      if (myInput.value.length >= 8) {
        length?.classList.remove("invalid");
        length?.classList.add("valid");
      } else {
        length?.classList.remove("valid");
        length?.classList.add("invalid");
      }
    };
  }, []);
  return (
    <>
      <StudentLayout>
        <div className="basic-info">
          <h2 className="basic-info-title">Change Password</h2>
          <hr />
          <form className="row">
            <div className="col-12 mb-3">
              <label for="firstName" className="form-label">
                Current Password
              </label>
              <div className="position-relative">
                <input
                  value="password"
                  type="password"
                  id="firstName"
                  className="form-control"
                />
                <span className="eye">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 7.9625C20 7.95 20 7.95 20 7.9375V7.925C20 7.9125 20 7.9125 20 7.9C20 7.8875 20 7.8875 20 7.875C19.975 7.7 19.9 7.55 19.7875 7.425C19.175 6.6375 18.45 5.925 17.725 5.275L13.775 8.1C13.725 10.1125 12.075 11.725 10.05 11.725C9.6625 11.725 9.3 11.65 8.95 11.5375L6.3625 13.375C6.9125 13.6125 7.4875 13.825 8.075 13.9625C9.2875 14.25 10.5 14.2625 11.725 14.025C12.825 13.8125 13.9 13.35 14.8875 12.8C16.45 11.925 17.875 10.7125 19.1125 9.3625C19.3375 9.1125 19.575 8.85 19.775 8.5875C19.8875 8.4625 19.9625 8.3125 19.9875 8.1375C19.9875 8.125 19.9875 8.125 19.9875 8.1125C19.9875 8.1 19.9875 8.1 19.9875 8.0875V8.075C19.9875 8.0625 19.9875 8.0625 19.9875 8.05C19.9875 8.0375 19.9875 8.025 19.9875 8.0125C20 7.9875 20 7.975 20 7.9625ZM19.4625 2.75C19.775 2.525 20 2.175 20 1.75C20 1.0625 19.4375 0.5 18.75 0.5C18.475 0.5 18.2375 0.6 18.0375 0.75L18.025 0.7375L14.6875 3.125C13.825 2.65 12.925 2.2625 11.975 2.0375C10.775 1.75 9.55 1.7375 8.3375 1.975C7.2375 2.2 6.1625 2.65 5.175 3.2125C3.6125 4.0875 2.1875 5.3 0.95 6.65C0.725 6.9 0.4875 7.1625 0.2875 7.425C0 7.7875 0 8.2125 0.275 8.575C0.9125 9.4 1.6625 10.1375 2.4375 10.8125C2.6625 11.0125 2.9125 11.175 3.1375 11.3625L0.525 13.2375L0.5375 13.25C0.225 13.475 0 13.825 0 14.25C0 14.9375 0.5625 15.5 1.25 15.5C1.525 15.5 1.7625 15.4 1.9625 15.25L1.975 15.2625L19.475 2.7625L19.4625 2.75ZM6.45 9C6.3625 8.675 6.3125 8.35 6.3125 8C6.3125 5.95 7.9875 4.275 10.05 4.275C10.825 4.275 11.5375 4.5375 12.125 4.9375L6.45 9Z"
                      fill="#8F95B2"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-12 mb-3">
              <label for="psw" className="form-label">
                New Password
              </label>
              <div className="position-relative">
                <input
                  value="By$lglobal"
                  type="password"
                  id="psw"
                  className="form-control"
                />
                <span className="eye">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 7.9625C20 7.95 20 7.95 20 7.9375V7.925C20 7.9125 20 7.9125 20 7.9C20 7.8875 20 7.8875 20 7.875C19.975 7.7 19.9 7.55 19.7875 7.425C19.175 6.6375 18.45 5.925 17.725 5.275L13.775 8.1C13.725 10.1125 12.075 11.725 10.05 11.725C9.6625 11.725 9.3 11.65 8.95 11.5375L6.3625 13.375C6.9125 13.6125 7.4875 13.825 8.075 13.9625C9.2875 14.25 10.5 14.2625 11.725 14.025C12.825 13.8125 13.9 13.35 14.8875 12.8C16.45 11.925 17.875 10.7125 19.1125 9.3625C19.3375 9.1125 19.575 8.85 19.775 8.5875C19.8875 8.4625 19.9625 8.3125 19.9875 8.1375C19.9875 8.125 19.9875 8.125 19.9875 8.1125C19.9875 8.1 19.9875 8.1 19.9875 8.0875V8.075C19.9875 8.0625 19.9875 8.0625 19.9875 8.05C19.9875 8.0375 19.9875 8.025 19.9875 8.0125C20 7.9875 20 7.975 20 7.9625ZM19.4625 2.75C19.775 2.525 20 2.175 20 1.75C20 1.0625 19.4375 0.5 18.75 0.5C18.475 0.5 18.2375 0.6 18.0375 0.75L18.025 0.7375L14.6875 3.125C13.825 2.65 12.925 2.2625 11.975 2.0375C10.775 1.75 9.55 1.7375 8.3375 1.975C7.2375 2.2 6.1625 2.65 5.175 3.2125C3.6125 4.0875 2.1875 5.3 0.95 6.65C0.725 6.9 0.4875 7.1625 0.2875 7.425C0 7.7875 0 8.2125 0.275 8.575C0.9125 9.4 1.6625 10.1375 2.4375 10.8125C2.6625 11.0125 2.9125 11.175 3.1375 11.3625L0.525 13.2375L0.5375 13.25C0.225 13.475 0 13.825 0 14.25C0 14.9375 0.5625 15.5 1.25 15.5C1.525 15.5 1.7625 15.4 1.9625 15.25L1.975 15.2625L19.475 2.7625L19.4625 2.75ZM6.45 9C6.3625 8.675 6.3125 8.35 6.3125 8C6.3125 5.95 7.9875 4.275 10.05 4.275C10.825 4.275 11.5375 4.5375 12.125 4.9375L6.45 9Z"
                      fill="#8F95B2"
                    />
                  </svg>
                </span>
              </div>
              <div id="message">
                <p id="number" className="invalid">
                  - At least 8 characters
                </p>
                <p id="capital" className="invalid">
                  - At least one uppercase and one lowercase letter
                </p>
                <p id="letter" className="invalid">
                  - Use mixed letters, numbers, and symbols
                </p>
              </div>
            </div>
            <div className="col-12 mb-3">
              <label for="firstName" className="form-label">
                Confirm New Password
              </label>
              <div className="position-relative">
                <input
                  value="password"
                  type="password"
                  id="firstName"
                  className="form-control"
                />
                <span className="eye">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 7.9625C20 7.95 20 7.95 20 7.9375V7.925C20 7.9125 20 7.9125 20 7.9C20 7.8875 20 7.8875 20 7.875C19.975 7.7 19.9 7.55 19.7875 7.425C19.175 6.6375 18.45 5.925 17.725 5.275L13.775 8.1C13.725 10.1125 12.075 11.725 10.05 11.725C9.6625 11.725 9.3 11.65 8.95 11.5375L6.3625 13.375C6.9125 13.6125 7.4875 13.825 8.075 13.9625C9.2875 14.25 10.5 14.2625 11.725 14.025C12.825 13.8125 13.9 13.35 14.8875 12.8C16.45 11.925 17.875 10.7125 19.1125 9.3625C19.3375 9.1125 19.575 8.85 19.775 8.5875C19.8875 8.4625 19.9625 8.3125 19.9875 8.1375C19.9875 8.125 19.9875 8.125 19.9875 8.1125C19.9875 8.1 19.9875 8.1 19.9875 8.0875V8.075C19.9875 8.0625 19.9875 8.0625 19.9875 8.05C19.9875 8.0375 19.9875 8.025 19.9875 8.0125C20 7.9875 20 7.975 20 7.9625ZM19.4625 2.75C19.775 2.525 20 2.175 20 1.75C20 1.0625 19.4375 0.5 18.75 0.5C18.475 0.5 18.2375 0.6 18.0375 0.75L18.025 0.7375L14.6875 3.125C13.825 2.65 12.925 2.2625 11.975 2.0375C10.775 1.75 9.55 1.7375 8.3375 1.975C7.2375 2.2 6.1625 2.65 5.175 3.2125C3.6125 4.0875 2.1875 5.3 0.95 6.65C0.725 6.9 0.4875 7.1625 0.2875 7.425C0 7.7875 0 8.2125 0.275 8.575C0.9125 9.4 1.6625 10.1375 2.4375 10.8125C2.6625 11.0125 2.9125 11.175 3.1375 11.3625L0.525 13.2375L0.5375 13.25C0.225 13.475 0 13.825 0 14.25C0 14.9375 0.5625 15.5 1.25 15.5C1.525 15.5 1.7625 15.4 1.9625 15.25L1.975 15.2625L19.475 2.7625L19.4625 2.75ZM6.45 9C6.3625 8.675 6.3125 8.35 6.3125 8C6.3125 5.95 7.9875 4.275 10.05 4.275C10.825 4.275 11.5375 4.5375 12.125 4.9375L6.45 9Z"
                      fill="#8F95B2"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="col-12 submit-btn">
              <button className="btn cancel">Cancel</button>
              <button className="btn save">Save</button>
            </div>
          </form>
        </div>
      </StudentLayout>
    </>
  );
};

export default ChangePassword;
