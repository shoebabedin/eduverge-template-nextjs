import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const LarnerHeader = ({data}) => {
  const router = useRouter();
  const pathname = router.pathname.split("/");

  
  return (
    <>
      <section className="course-categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="#">Home </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link href="#">{pathname[2] || data}</Link>
                  </li>
                </ol>
              </nav>
              <h2 className="heading text-capitalize">{pathname[2] || data}</h2>
            </div>
            <div className="col-lg-3">
              <Image
                className="img-fluid"
                src="/assets/images/course-categories/globe.png"
                alt=""
                width={145}
                height={184}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LarnerHeader;
