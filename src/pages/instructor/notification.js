import StudentLayout from "@/components/Student/Layout";
import { Form } from "react-bootstrap";

const Notification = () => {
  return (
    <>
      <StudentLayout>
        <h2 className="profile-settings-title">Notification Settings</h2>
        <p className="profile-settings-desc">
          We may still send you important notification about your account
          outside of your notification settings.
        </p>
        <Form>
          <div className="notification-settings">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Notification type</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">
                    <h4>Rating Reminders</h4>
                    <p>
                      Send an reminding notifications me to rate an course a
                      week after purchase
                    </p>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <h4>Course comment notification</h4>
                    <p>Notify when comment will put on course</p>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <h4>Course Review Notification</h4>
                    <p>
                      Send me an notification when my courses are approved or
                      rejected
                    </p>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <h4>Course Update Notification</h4>
                    <p>
                      Send me an notification when my courses will be updated
                      from any instructor
                    </p>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <h4>Promotional Offers</h4>
                    <p>
                      Send me an notification for Coupon Codes, freebies,
                      newsletter, course recommendations and resources from
                      Eduverge
                    </p>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <h4>Course Purchase</h4>
                    <p>Send me an notification for specific purchase course</p>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <h4>Earnings Notifications</h4>
                    <p>
                      Send me an notification for specific earnings from selling
                      of course and any type of transaction.
                    </p>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <h4>Policy or, System Update Notifications</h4>
                    <p>
                      Send me an notification when any policy of Eduverge is
                      changed and notifications about my account, security and
                      privacy
                    </p>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Form>
      </StudentLayout>
    </>
  );
};

export default Notification;
