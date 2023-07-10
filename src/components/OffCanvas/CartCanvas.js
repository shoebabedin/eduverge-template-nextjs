import Image from "next/image";
import { useRouter } from "next/router";

const CartCanvas = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="offcanvas offcanvas-start mob_navbar cart-canvas"
        tabIndex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasCartLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="py-3 px-2">
            {[1, 2].map((item, index) => (
              <div className="row mb-3 border-bottom" key={index}>
                <div className="col-3 p-0">
                  <Image
                    className="img-fluid"
                    src="/assets/images/all-courses/img4.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="col-9">
                  <h4>Angular.JS Road to Mastery (2022 Edition)</h4>
                  <div className="d-flex align-items-center justify-content-between">
                    <p>This tutorial will help for...</p>
                    <span>$ 199.00</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex align-items-center justify-content-between total_amount">
              <p>Total :</p>
              <p>$ 470.00</p>
            </div>
            <button
              className="w-100 btn btn-success text-bg-success py-2"
              onClick={() => router.push("/student/checkout")}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCanvas;
