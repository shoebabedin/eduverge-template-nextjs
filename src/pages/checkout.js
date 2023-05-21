import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  return (
    <>
      <div className="checkout_process_modal checkout">
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="checkout-head">Payment Method</h2>
              </div>
              <div className="col-12">
                <div className="tab">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="payment-method">
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic radio toggle button group"
                        >
                          <div className="img">
                            <input
                              type="radio"
                              className="btn-check"
                              name="btnradio"
                              id="btnradio1"
                              autocomplete="off"
                              checked
                            />
                            <label className="btn" for="btnradio1">
                              <Image
                                src="/assets/images/payment/master-card.png"
                                alt=""
                                className="img-fluid"
                                width={58}
                                height={58}
                              />

                              <span className="select">
                                <Image
                                  className="img-fluid"
                                  src="/assets/images/payment/select.png"
                                  alt=""
                                  width={14}
                                  height={14}
                                />
                              </span>
                            </label>
                          </div>
                          <div className="img">
                            <input
                              type="radio"
                              className="btn-check"
                              name="btnradio"
                              id="btnradio2"
                              autocomplete="off"
                            />
                            <label className="btn" for="btnradio2">
                              <Image
                                src="/assets/images/payment/visa.png"
                                alt=""
                                className="img-fluid"
                                width={50}
                                height={16}
                              />
                              <span className="select">
                                <Image
                                  className="img-fluid"
                                  src="/assets/images/payment/select.png"
                                  alt=""
                                  width={14}
                                  height={14}
                                />
                              </span>
                            </label>
                          </div>
                          <div className="img">
                            <input
                              type="radio"
                              className="btn-check"
                              name="btnradio"
                              id="btnradio3"
                              autocomplete="off"
                            />
                            <label className="btn" for="btnradio3">
                              <Image
                                src="/assets/images/payment/american-express.png"
                                alt=""
                                className="img-fluid"
                                width={38}
                                height={38}
                              />

                              <span className="select">
                                <Image
                                  className="img-fluid"
                                  src="/assets/images/payment/select.png"
                                  alt=""
                                  width={14}
                                  height={14}
                                />
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="payment-form">
                          <form className="row g-3">
                            <div className="col-md-12">
                              <label
                                htmlFor="inputEmail4"
                                className="form-label"
                              >
                                Card Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="5521 4584 6559 5994"
                              />
                            </div>
                            <div className="col-md-12">
                              <label
                                for="inputPassword4"
                                className="form-label"
                              >
                                Card Holder Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputPassword4"
                                placeholder="Rehan Khan"
                              />
                            </div>
                            <div className="col-md-6">
                              <label
                                for="custom-input-date"
                                className="form-label"
                              >
                                Expiration Date
                              </label>
                              <input
                                type="date"
                                className="form-control calendar"
                                id="custom-input-date"
                                placeholder="08/25"
                              />
                            </div>
                            <div className="col-md-6">
                              <label for="password" className="form-label">
                                CVC / CVV
                              </label>
                              <div className="password-filed">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  placeholder="***"
                                />
                                <span onclick="myFunction()">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M20 9.9625C20 9.95 20 9.95 20 9.9375V9.925C20 9.9125 20 9.9125 20 9.9C20 9.8875 20 9.8875 20 9.875C19.975 9.7 19.9 9.55 19.7875 9.425C19.175 8.6375 18.45 7.925 17.725 7.275L13.775 10.1C13.725 12.1125 12.075 13.725 10.05 13.725C9.6625 13.725 9.3 13.65 8.95 13.5375L6.3625 15.375C6.9125 15.6125 7.4875 15.825 8.075 15.9625C9.2875 16.25 10.5 16.2625 11.725 16.025C12.825 15.8125 13.9 15.35 14.8875 14.8C16.45 13.925 17.875 12.7125 19.1125 11.3625C19.3375 11.1125 19.575 10.85 19.775 10.5875C19.8875 10.4625 19.9625 10.3125 19.9875 10.1375C19.9875 10.125 19.9875 10.125 19.9875 10.1125C19.9875 10.1 19.9875 10.1 19.9875 10.0875V10.075C19.9875 10.0625 19.9875 10.0625 19.9875 10.05C19.9875 10.0375 19.9875 10.025 19.9875 10.0125C20 9.9875 20 9.975 20 9.9625ZM19.4625 4.75C19.775 4.525 20 4.175 20 3.75C20 3.0625 19.4375 2.5 18.75 2.5C18.475 2.5 18.2375 2.6 18.0375 2.75L18.025 2.7375L14.6875 5.125C13.825 4.65 12.925 4.2625 11.975 4.0375C10.775 3.75 9.55 3.7375 8.3375 3.975C7.2375 4.2 6.1625 4.65 5.175 5.2125C3.6125 6.0875 2.1875 7.3 0.95 8.65C0.725 8.9 0.4875 9.1625 0.2875 9.425C0 9.7875 0 10.2125 0.275 10.575C0.9125 11.4 1.6625 12.1375 2.4375 12.8125C2.6625 13.0125 2.9125 13.175 3.1375 13.3625L0.525 15.2375L0.5375 15.25C0.225 15.475 0 15.825 0 16.25C0 16.9375 0.5625 17.5 1.25 17.5C1.525 17.5 1.7625 17.4 1.9625 17.25L1.975 17.2625L19.475 4.7625L19.4625 4.75ZM6.45 11C6.3625 10.675 6.3125 10.35 6.3125 10C6.3125 7.95 7.9875 6.275 10.05 6.275C10.825 6.275 11.5375 6.5375 12.125 6.9375L6.45 11Z"
                                      fill="#8F95B2"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="gridCheck"
                                />
                                <label
                                  className="form-check-label"
                                  for="gridCheck"
                                >
                                  Save my payments details for future purchases
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="cart_footer">
                        <div className="promocode">
                          <h4 className="pcode_header">Order Summary</h4>
                          <hr />
                          <div className="subtotal d-flex">
                            <p className="itemSubtotal">
                              Angular - The Complete Guide (2020 Edition)
                            </p>
                            <span className="price">$ 690.00</span>
                          </div>
                          <div className="subtotal d-flex">
                            <p className="itemSubtotal">
                              Angular - The Complete Guide (2020 Edition)
                            </p>
                            <span className="price">$ 690.00</span>
                          </div>
                          <hr />
                          <div className="subtotal d-flex">
                            <p className="itemSubtotal">Sub Total</p>
                            <span className="price">$ 690.00</span>
                          </div>
                          <div className="subtotal d-flex">
                            <p className="itemSubtotal">Discount</p>
                            <span className="price">$ 690.00</span>
                          </div>
                          <div className="subtotal d-flex">
                            <p className="itemSubtotal">Total</p>
                            <span className="price">$ 690.00</span>
                          </div>
                          <div className="process-btn d-flex">
                            <Link
                              href="/"
                              className="shipping btn btn-outline-success"
                            >
                              Cancel & Return
                            </Link>
                            <button
                              className="btn bg-success text-white"
                              data-bs-toggle="modal"
                              data-bs-target="#payment"
                            >
                              Pay $500.00
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
