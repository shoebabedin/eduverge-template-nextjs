import Image from "next/image";
import LarnerHeader from "./LarnerHeader";
import LarnerProfileMenu from "./LarnerProfileMenu";

const StudentLayout = ({ children }) => {
  return (
    <>
      <LarnerHeader />
      <div className="profile-settings">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="larner-user-img-name">
                <div className="larner-user-img">
                  <Image
                    src="/assets/images/larner-profile/profile-img.png"
                    alt=""
                    className="img-fluid"
                    width={100}
                    height={100}
                  />
                  <span className="larner-user-img-edit">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.0761719 9.93622V12.5312H2.67111L10.3244 4.87782L7.72951 2.28289L0.0761719 9.93622ZM12.3312 2.87107C12.6011 2.6012 12.6011 2.16525 12.3312 1.89538L10.712 0.276136C10.4421 0.00626212 10.0061 0.00626212 9.73626 0.276136L8.46993 1.54246L11.0649 4.1374L12.3312 2.87107Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div className="larner-user-name">
                  <h4>Abul Hasan</h4>
                  <p>Instructor profile</p>
                </div>
              </div>
              <LarnerProfileMenu />
            </div>
            <div className="col-lg-7">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLayout;
