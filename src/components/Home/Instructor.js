import Image from "next/image";
import Link from "next/link";

const Instructor = () => {
  return (
    <>
      <section className="instructor">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <h2>Become An Instructor</h2>
              <p>
                Join one of the world’s largest online learning marketplaces,
                <br />
                Get started
              </p>
              <Link href="#" className="btn bg-success text-white">
                Get Started Now
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <Image
                className="img-fluid"
                src="/assets/images/instructor/Frame.svg"
                alt=""
                width={546}
                height={336}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructor;
