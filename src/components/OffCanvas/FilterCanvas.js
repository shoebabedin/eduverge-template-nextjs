import Link from "next/link";

const FilterCanvas = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end category-canvas"
        tabIndex="-1"
        id="filtercanvasExample"
        aria-labelledby="filtercanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="filtercanvasExampleLabel">
            Categories
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="all-course-categories">
            <div className="all-course-sidebar">
              <form className="desktop search" role="search">
                <span className="search-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
                      fill="#696F8C"
                    />
                  </svg>
                </span>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search Courses..."
                  aria-label="Search"
                />
              </form>
              <h4>All Categories</h4>
              <hr />
              <ul>
                <h6>Design & Development</h6>
                <li className="active">
                  <Link href="#">Graphics Design (12)</Link>
                </li>
                <li>
                  <Link href="#">UI/UX Design (15)</Link>
                </li>
                <li>
                  <Link href="#">Web Design (12)</Link>
                </li>
                <li>
                  <Link href="#">App Design (26)</Link>
                </li>
                <li>
                  <Link href="#">Wordpress (12)</Link>
                </li>
                <li>
                  <Link href="#">Shopify (12)</Link>
                </li>
              </ul>
              <ul>
                <h6>SEO & Digital Marketing</h6>
                <li>
                  <Link href="#">Social Media Marketing (4)</Link>
                </li>
                <li>
                  <Link href="#">Google Marketing (21)</Link>
                </li>
                <li>
                  <Link href="#">Digital Marketing (25)</Link>
                </li>
                <li>
                  <Link href="#">Google AdSense (12)</Link>
                </li>
                <li>
                  <Link href="#">Facebook Ads (23)</Link>
                </li>
                <li>
                  <Link href="#">Content Writing (21)</Link>
                </li>
              </ul>
              <ul>
                <h6>Video Editing</h6>
                <li>
                  <Link href="#">Social Media Marketing (5)</Link>
                </li>
                <li>
                  <Link href="#">Google Marketing (15)</Link>
                </li>
                <li>
                  <Link href="#">Digital Marketing (22)</Link>
                </li>
                <li>
                  <Link href="#">Google AdSense (23)</Link>
                </li>
                <li>
                  <Link href="#">Facebook Ads (13)</Link>
                </li>
                <li>
                  <Link href="#">Content Writing (23)</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCanvas;
