import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <Image
                className="img-fluid logo"
                src="/assets/images/logo/logo.png"
                alt=""
                width={254}
                height={48}
              />
            </div>
            <div className="col-lg-4 col-12">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Enter your email"
                  aria-label="Search"
                />
                <button className="btn bg-success text-white" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
            <hr className="mt-3" />
          </div>
        </div>
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-3 col-6">
              <ul>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Jobs</Link>
                </li>
                <li>
                  <Link href="#">In Press</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-6">
              <ul>
                <li>
                  <Link href="#">Support</Link>
                </li>
                <li>
                  <Link href="#">Contact us</Link>
                </li>
                <li>
                  <Link href="#">Online Chat</Link>
                </li>
                <li>
                  <Link href="#">Whatsapp</Link>
                </li>
                <li>
                  <Link href="#">Telegram</Link>
                </li>
                <li>
                  <Link href="#">Ticketing</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-6">
              <ul>
                <li>
                  <Link href="#">Terms</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Cookies Settings</Link>
                </li>
                <li>
                  <Link href="#">Sitemap</Link>
                </li>
                <li>
                  <Link href="#">Accessibility Statement</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-6">
              <ul>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">Account</Link>
                </li>
                <li>
                  <Link href="#">Manage Deliveries</Link>
                </li>
                <li>
                  <Link href="#">Orders</Link>
                </li>
                <li>
                  <Link href="#">Payments</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tiny_footer bg-primary-subtle">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <ul className="d-flex gap-4">
                  <li>
                    <Link href="#">About us</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy policy</Link>
                  </li>
                  <li>
                    <Link href="#">Sitemap</Link>
                  </li>
                  <li>
                    <Link href="#">Terms of Use</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-12">
                <p className="text-end">© 2000-2021, All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
