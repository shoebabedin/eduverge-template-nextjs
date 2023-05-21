import Image from "next/image";
import Link from "next/link";

const CategoriesDetailsHero = () => {
  return (
    <>
      <section class="course-categories">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link href="/">Home </Link>
                  </li>
                  <li class="breadcrumb-item">
                    <Link href="/course-categories">Categories</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    <Link href="#">Course Details</Link>
                  </li>
                </ol>
              </nav>
              <h2 class="heading">Course Details</h2>
            </div>
            <div class="col-lg-3">
              <Image
                class="img-fluid"
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
