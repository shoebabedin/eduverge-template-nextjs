const RemoveAccount = () => {
  return (
    <>
      <div
      className="modal fade"
      id="removeUser"
      tabIndex="-1"
      aria-labelledby="removeUserLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h2>Remove your account?</h2>
            <p>
              Once your delete your account, There is no getting back. May sure
              your want to do this. If your want to remove your account please
              give your password below.
            </p>
            <form action="" className="row">
              <div className="col-12 mb-3">
                <input
                  className="form-control"
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter your password"
                />
              </div>
              <div className="col-12">
                <div className="submit-btn">
                  <button
                    type="button"
                    className="btn cancel"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn remove-user-btn">
                    <span className="trash">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.1082 4.69635H1.87293C1.6094 4.69635 1.40234 4.90341 1.40234 5.16693C1.40234 5.43046 1.6094 5.63752 1.87293 5.63752H2.34352V15.0493C2.34352 15.5669 2.76705 15.9905 3.2847 15.9905H12.6965C13.2141 15.9905 13.6376 15.5669 13.6376 15.0493V5.63752H14.1082C14.3718 5.63752 14.5788 5.43046 14.5788 5.16693C14.5788 4.90341 14.3718 4.69635 14.1082 4.69635ZM6.10823 13.1669C6.10823 13.6846 5.6847 14.1081 5.16705 14.1081C4.6494 14.1081 4.22587 13.6846 4.22587 13.1669V7.51988C4.22587 7.00223 4.6494 6.5787 5.16705 6.5787C5.6847 6.5787 6.10823 7.00223 6.10823 7.51988V13.1669ZM8.93176 13.1669C8.93176 13.6846 8.50823 14.1081 7.99058 14.1081C7.47293 14.1081 7.0494 13.6846 7.0494 13.1669V7.51988C7.0494 7.00223 7.47293 6.5787 7.99058 6.5787C8.50823 6.5787 8.93176 7.00223 8.93176 7.51988V13.1669ZM11.7553 13.1669C11.7553 13.6846 11.3318 14.1081 10.8141 14.1081C10.2965 14.1081 9.87293 13.6846 9.87293 13.1669V7.51988C9.87293 7.00223 10.2965 6.5787 10.8141 6.5787C11.3318 6.5787 11.7553 7.00223 11.7553 7.51988V13.1669ZM13.6376 1.87282H9.87293C9.87293 1.35517 9.4494 0.931641 8.93176 0.931641H7.0494C6.53176 0.931641 6.10823 1.35517 6.10823 1.87282H2.34352C1.82587 1.87282 1.40234 2.29635 1.40234 2.81399V3.75517H14.5788V2.81399C14.5788 2.29635 14.1553 1.87282 13.6376 1.87282Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Remove
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RemoveAccount;
