import { useState } from "react";
import { Form } from "react-bootstrap";

const WithdrawFound = () => {
  const [selectedOptions, setSelectedOptions] = useState(false);


  return (
    <>
      <div
        className="modal fade"
        id="withdrawFound"
        tabIndex="-1"
        aria-labelledby="withdrawFoundLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
            

              <div className="withdraw-found">
                <h5 className="withdraw-found-title">Withdraw Funds</h5>
                <div className="withdraw-found-body">
                  <h4 className="withdraw-avaiable-balance">
                    Available Balance
                  </h4>
                  <p className="withdraw-price">$50.00 USD</p>
                  <div className="withdraw-payment-method">
                    <p>Payment Method</p>
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option defaultValue="debit-card" selected>
                          Debit Card
                        </option>
                        <option defaultValue="credit-card">Credit Card</option>
                      </select>
                    </div>
                  </div>
                  <Form >
                  <div className="withdraw-payment-amount">
                    <p>Amount</p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="noCheck"
                        onClick={() => setSelectedOptions(false)}
                      />
                      <label className="form-check-label" htmlFor="noCheck">
                        Amount <span>$50.00</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input other"
                        type="radio"
                        name="flexRadioDefault"
                        id="yesCheck"
                        onClick={() => setSelectedOptions(true)}
                      />
                      <label className="form-check-label" htmlFor="yesCheck">
                        Other Amount
                        <span className="minimum-amount">
                          (Minimum Amount $30.00)
                        </span>
                      </label>
                    </div>
                    {selectedOptions && <div id="ifYes">
                      <input
                        type="number"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Enter your amount"
                      />
                    </div>}
                  </div>
                  </Form>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <h5>Platform fee</h5>
                          <p>(Other Bank Fees May Apply)</p>
                        </td>
                        <td>$00.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Total Fee</h5>
                        </td>
                        <td>$00.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="total">
                    This is a $50.00 payment will be sent to your credit card
                    account No (**** **** **** **47)
                  </p>
                  <button
                    type="button"
                    className="btn withdraw-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#paymentSent"
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawFound;
