import Image from "next/image";
import Link from "next/link";

const NoPage = () => {
  return (
    <div className="notFound">
      <div className="container-fluid">
        <div className="col-12 text-center">
          <div className="img">
            <Image
              className="img-fluid"
              src="/assets/images/4O4/error.png"
              alt=""
              width={697}
              height={498}
            />
          </div>
          <h2>Page Not Found !</h2>

          <Link href="#" className="align-items-center justify-content-center">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
