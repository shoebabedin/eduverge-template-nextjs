import StudentLayout from "@/components/Student/Layout";

const Settings = () => {
  return (
    <>
      <StudentLayout>
        <h2 className="profile-settings-title">Profile Setting</h2>
        <p className="profile-settings-desc">
          We do not sell or, share your details without prior notice. Find out
          more on our Privacy Policy
        </p>
        <div className="basic-info">
          <h2 className="basic-info-title">Basic Info</h2>
          <hr />
          <form action="#" className="row">
            <div className="col-lg-6 mb-3">
              <label for="firstName" className="form-label">
                First Name
              </label>
              <input
                value="Abul"
                type="text"
                id="firstName"
                className="form-control"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label for="lastName" className="form-label">
                Last Name
              </label>
              <input
                value="Hasan"
                type="text"
                id="lastName"
                className="form-control"
              />
            </div>
            <div className="col-12 mb-3">
              <label for="profile-textarea" className="form-label">
                Bio Description
              </label>
              <textarea
                className="form-control profile-desc"
                name="the-textarea"
                id="profile-textarea"
                maxlength="500"
                rows="3"
                placeholder="Write your comments"
                autofocus
              >
                I am Abul Hasan. I am a UI/UX Designer. I have working in this
                industry since 2021. In this industry there are so many works. I
                have done successfully. I have a experience to work on various
                projects...
              </textarea>
              <div
                id="the-count"
                className="d-flex align-items-center justify-content-end"
              >
                <span id="current">450</span>
                <span id="maximum">/ 500</span>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <label for="firstName" className="form-label">
                Job Title
              </label>
              <input
                value="UI/UX Designer"
                type="text"
                id="firstName"
                className="form-control"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label for="gender" className="form-label">
                Gender
              </label>
              <select name="" id="gender" className="form-control">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="col-lg-6 mb-3">
              <label for="country" className="form-label">
                Country
              </label>
              <select name="" id="country" className="form-control">
                <option value="canada">Canada</option>
                <option value="bangladesh">Bangladesh</option>
              </select>
            </div>
            <div className="col-lg-6 mb-3">
              <label for="city" className="form-label">
                City
              </label>
              <select name="" id="city" className="form-control">
                <option value="toronto">Toronto</option>
                <option value="dhaka">Dhaka</option>
              </select>
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

export default Settings;
