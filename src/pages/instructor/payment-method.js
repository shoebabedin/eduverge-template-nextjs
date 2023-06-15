import StudentLayout from "@/components/Student/Layout";
import Image from "next/image";

const PaymentMethod = () => {
  return (
    <>
      <StudentLayout>
        <h2 className="profile-settings-title">Payment Method</h2>
        <p className="profile-settings-desc">
          We may still send you important notification about your account
          outside of your notification settings.
        </p>
        <div className="payment-method">
          <div className="payment-method-header">
            <h4>Payment Method</h4>
            <button
              className="btn add-card"
              data-bs-toggle="modal"
              data-bs-target="#addCard"
            >
              Add Card
            </button>
          </div>
          <hr />
          <div className="payment-method-items">
            <div className="card-icon-number">
              <div className="card-icon">
                <Image
                  className="img-fluid"
                  src="/assets/images/payment/master-card.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className="card-number">**** **** **** 4570</p>
            </div>

            <button className="btn">Remove</button>
          </div>
          <div className="payment-method-items">
            <div className="card-icon-number">
              <div className="card-icon">
                <Image
                  className="img-fluid"
                  src="/assets/images/payment/visa.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className="card-number">**** **** **** 4570</p>
            </div>

            <button className="btn">Remove</button>
          </div>
        </div>
      </StudentLayout>
    </>
  );
};

export default PaymentMethod;
