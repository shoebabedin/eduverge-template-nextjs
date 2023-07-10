import Image from "next/image";
import Link from "next/link";

const CategoriesDetailsHero = () => {
  return (
    <>
      <section className="course-categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/course-categories">Categories</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link href="#">Course Details</Link>
                  </li>
                </ol>
              </nav>
              <h2 className="heading">Course Details</h2>
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

export default CategoriesDetailsHero;
