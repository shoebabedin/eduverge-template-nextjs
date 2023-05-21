const ResetPassword = () => {
  return (
    <>
      <section className="reset-password">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="reset-pass-inner">
                <h3>Set Up Eduverge Acount</h3>
                <p>
                  Setting up password for: <b>namerer.sample@gmail.com</b>
                </p>
                <form action="#">
                  <div className="mb-3">
                    <label for="newpass" className="form-label">
                      Password
                      <span>(Between 8 and 25 characters)</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="newpass"
                      placeholder="New Password"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="confirmpass" className="form-label">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmpass"
                      placeholder="Confirm New Password"
                    />
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
