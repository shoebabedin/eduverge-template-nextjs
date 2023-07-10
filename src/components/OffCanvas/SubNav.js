const SubNav = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end nav-offcanvas"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="border-0"
            data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            aria-label="Close"
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49935 11.8327L7.67435 10.6577L3.85768 6.83268H17.3327V5.16602H3.85768L7.68268 1.34102L6.49935 0.166016L0.666016 5.99935L6.49935 11.8327Z"
                fill="#101840"
              />
            </svg>
          </button>
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Categories
          </h5>
        </div>
        <div className="offcanvas-body">
          <div className="">
            <ul className="ps-0">
              <h6 className="nav-title">Design & Development</h6>
              <li>
                <a className="dropdown-item" href="#">
                  Graphics Design
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Web Design
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  App Design
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Wordpress
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Shopify
                </a>
              </li>
            </ul>
            <ul className="ps-0">
              <h6 className="nav-title">SEO & Digital Marketing</h6>
              <li>
                <a className="dropdown-item" href="#">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Google Marketing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Google AdSense
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Facebook Ads
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Content Writing
                </a>
              </li>
            </ul>
            <ul className="ps-0">
              <h6 className="nav-title">Video Editing</h6>
              <li>
                <a className="dropdown-item" href="#">
                  Adobe Premium Pro
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Video Design
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Digital Photography
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Google AdSense
                </a>
              </li>
            </ul>
            <ul className="ps-0">
              <h6 className="nav-title">Finance & Accounting</h6>
              <li>
                <a className="dropdown-item" href="#">
                  Accounting
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Book Keeping Course
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Investing & Trading
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Economics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Financial Modeling
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Taxes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNav;
