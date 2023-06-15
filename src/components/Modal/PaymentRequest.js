import Image from "next/image";

const PaymentRequest = () => {
  return (
    <>
      <div
        className="modal fade"
        id="paymentSent"
        tabIndex="-1"
        aria-labelledby="paymentSentLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <div className="payment-success">
                <div className="payment-success-img">
                  <Image
                    src="/assets/images/payment/check.png"
                    alt=""
                    className="img-fluid"
                    width={100}
                    height={100}
                  />
                </div>
                <h2 className="payment-success-title">
                  Payment Request Been Sent!
                </h2>
                <p className="payment-success-process">
                  Your payment has been processed!
                </p>
                <ul className="payment-table">
                  <li>
                    <p>Amount</p>
                    <p>$500.00</p>
                  </li>
                  <li>
                    <p>Card Number</p>
                    <p>**** **** **** **47</p>
                  </li>
                  <li>
                    <p>Payment Type</p>
                    <p>Debit Card</p>
                  </li>
                </ul>
                <button
                  className="btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentRequest;
