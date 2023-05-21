import Image from "next/image";

const PaymentSuccess = () => {
  return (
    <>
      <div
        className="modal fade"
        id="payment"
        tabindex="-1"
        aria-labelledby="paymentLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable payment-modal">
          <div className="modal-content">
            <div className="modal-body">
              <div className="payment_img">
                <Image
                  src="/assets/images/payment/success.svg"
                  alt=""
                  className="img-fluid"
                  width={100}
                  height={100}
                />
              </div>
              <h4>Payment Successful</h4>
              <p>
                Your payment has been processed! <br />
                Details of the transaction has been included below
              </p>
              <div className="payment-details">
                <div className="payment-details-item">
                  <p>Amount</p>
                  <span>$500.00</span>
                </div>
                <div className="payment-details-item">
                  <p>Transaction ID</p>
                  <span>#745458S5D4</span>
                </div>
                <div className="payment-details-item">
                  <p>Payment Type</p>
                  <span>Debit Card</span>
                </div>
              </div>
              <div className="payment-btn">
                <a className="btn bg-success text-white" href="#">
                  Ok
                </a>
                <button className="btn btn-outline-success">
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9997 2H3.99967V4.66667H11.9997V2ZM12.6663 8C12.4895 8 12.32 7.92976 12.1949 7.80474C12.0699 7.67971 11.9997 7.51014 11.9997 7.33333C11.9997 7.15652 12.0699 6.98695 12.1949 6.86193C12.32 6.7369 12.4895 6.66667 12.6663 6.66667C12.8432 6.66667 13.0127 6.7369 13.1377 6.86193C13.2628 6.98695 13.333 7.15652 13.333 7.33333C13.333 7.51014 13.2628 7.67971 13.1377 7.80474C13.0127 7.92976 12.8432 8 12.6663 8ZM10.6663 12.6667H5.33301V9.33333H10.6663V12.6667ZM12.6663 5.33333H3.33301C2.80257 5.33333 2.29387 5.54405 1.91879 5.91912C1.54372 6.29419 1.33301 6.8029 1.33301 7.33333V11.3333H3.99967V14H11.9997V11.3333H14.6663V7.33333C14.6663 6.8029 14.4556 6.29419 14.0806 5.91912C13.7055 5.54405 13.1968 5.33333 12.6663 5.33333Z"
                        fill="#429777"
                      />
                    </svg>
                  </span>
                  Print Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
