const NotificationCanvas = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start notificationCanvas"
        tabIndex="-1"
        id="notificationCanvas"
        aria-labelledby="notificationCanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="notificationCanvasLabel">
            Notifications
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <h4 className="notification-title">New (1)</h4>
          <div className="notification-list">
            <div className="notification-list-item unread">
              <h4>You have purchased “UI/UX Design Course 2023”</h4>
              <p>
                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00065 0.333984C3.33398 0.333984 0.333984 3.33398 0.333984 7.00065C0.333984 10.6673 3.33398 13.6673 7.00065 13.6673C10.6673 13.6673 13.6673 10.6673 13.6673 7.00065C13.6673 3.33398 10.6673 0.333984 7.00065 0.333984ZM7.00065 12.334C4.06065 12.334 1.66732 9.94065 1.66732 7.00065C1.66732 4.06065 4.06065 1.66732 7.00065 1.66732C9.94065 1.66732 12.334 4.06065 12.334 7.00065C12.334 9.94065 9.94065 12.334 7.00065 12.334ZM7.33398 3.66732H6.33398V7.66732L9.80065 9.80065L10.334 8.93398L7.33398 7.13398V3.66732Z"
                      fill="#858585"
                    />
                  </svg>
                </span>
                07 Sep 2020 05:15 pm
              </p>
            </div>
            <div className="notification-list-item">
              <h4>Your course purchased!</h4>
              <p>
                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00065 0.333984C3.33398 0.333984 0.333984 3.33398 0.333984 7.00065C0.333984 10.6673 3.33398 13.6673 7.00065 13.6673C10.6673 13.6673 13.6673 10.6673 13.6673 7.00065C13.6673 3.33398 10.6673 0.333984 7.00065 0.333984ZM7.00065 12.334C4.06065 12.334 1.66732 9.94065 1.66732 7.00065C1.66732 4.06065 4.06065 1.66732 7.00065 1.66732C9.94065 1.66732 12.334 4.06065 12.334 7.00065C12.334 9.94065 9.94065 12.334 7.00065 12.334ZM7.33398 3.66732H6.33398V7.66732L9.80065 9.80065L10.334 8.93398L7.33398 7.13398V3.66732Z"
                      fill="#858585"
                    />
                  </svg>
                </span>
                07 Sep 2020 05:15 pm
              </p>
            </div>
            <div className="notification-list-item">
              <h4>Your course purchased!</h4>
              <p>
                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00065 0.333984C3.33398 0.333984 0.333984 3.33398 0.333984 7.00065C0.333984 10.6673 3.33398 13.6673 7.00065 13.6673C10.6673 13.6673 13.6673 10.6673 13.6673 7.00065C13.6673 3.33398 10.6673 0.333984 7.00065 0.333984ZM7.00065 12.334C4.06065 12.334 1.66732 9.94065 1.66732 7.00065C1.66732 4.06065 4.06065 1.66732 7.00065 1.66732C9.94065 1.66732 12.334 4.06065 12.334 7.00065C12.334 9.94065 9.94065 12.334 7.00065 12.334ZM7.33398 3.66732H6.33398V7.66732L9.80065 9.80065L10.334 8.93398L7.33398 7.13398V3.66732Z"
                      fill="#858585"
                    />
                  </svg>
                </span>
                07 Sep 2020 05:15 pm
              </p>
            </div>
            <div className="notification-list-item">
              <h4>Your course purchased!</h4>
              <p>
                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00065 0.333984C3.33398 0.333984 0.333984 3.33398 0.333984 7.00065C0.333984 10.6673 3.33398 13.6673 7.00065 13.6673C10.6673 13.6673 13.6673 10.6673 13.6673 7.00065C13.6673 3.33398 10.6673 0.333984 7.00065 0.333984ZM7.00065 12.334C4.06065 12.334 1.66732 9.94065 1.66732 7.00065C1.66732 4.06065 4.06065 1.66732 7.00065 1.66732C9.94065 1.66732 12.334 4.06065 12.334 7.00065C12.334 9.94065 9.94065 12.334 7.00065 12.334ZM7.33398 3.66732H6.33398V7.66732L9.80065 9.80065L10.334 8.93398L7.33398 7.13398V3.66732Z"
                      fill="#858585"
                    />
                  </svg>
                </span>
                07 Sep 2020 05:15 pm
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationCanvas;
