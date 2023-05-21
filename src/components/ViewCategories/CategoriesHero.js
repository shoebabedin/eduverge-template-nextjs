import Image from "next/image";
import Link from "next/link";

const CategoriesHero = () => {
    return (
        <>
           
      <section className="product_hero course-categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link href="#">Categories </Link>
                  </li>
                </ol>
              </nav>
              <h2 className="heading">Course Categories</h2>
            </div>
            <div className="col-lg-3">
              <Image
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

export default CategoriesHero;