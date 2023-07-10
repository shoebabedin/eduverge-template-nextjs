import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const Instructor = () => {
  const router = useRouter();

  const handleCheck = () => {
    const element = document.querySelector('[data-bs-target="#login"]');
    if (localStorage.getItem("token") == null) {
      console.log("not login");
      element.click();
      setTimeout(() => {
        router.push("/become-an-instructor");
      }, 100); // Adjust the delay as needed
    } else {
      console.log("login");
      router.push("/become-an-instructor");
    }
  };
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
              <Button
                className="btn bg-success text-white"
                onClick={handleCheck}
              >
                Get Started Now
              </Button>
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
