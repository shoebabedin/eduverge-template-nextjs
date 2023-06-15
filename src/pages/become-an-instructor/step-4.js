import Image from "next/image";
import Link from "next/link";

const Step4 = () => {

  const handleReview = () => {
    const token = JSON.stringify({ teacher: "teacher" });
    localStorage.setItem("teacher", token);
    window.location.replace("/instructor");
  };

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
                    <Link href="#">Create New Course</Link>
                  </li>
                </ol>
              </nav>
              <h2 className="heading">Create Your Dream Course</h2>
            </div>
            <div className="col-lg-3">
              <Image
                className="img-fluid"
                src="/assets/images/create-new-course/group.png"
                alt=""
                width={239}
                height={155}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="create-new-course">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="#">Course overview </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="#">Upload Video </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link href="#">Submit</Link>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-12">
              <div className="upload-finish">
                <h2>Almost Finish!</h2>
                <p>
                  Let&apos;s submit your course and wait till our response. Our
                  team will review the course and you will get the confirmation
                  after approve. For further query call 01000 00 0000
                </p>
                <div className="upload-finish-btn">
                  <button className="btn cancel">Cancel</button>
                  <button className="btn submit-review" onClick={handleReview}>
                    Submit For Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Step4;
