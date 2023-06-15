const StudentAddCard = () => {
  return (
    <>
      <div
        className="modal fade"
        id="addCard"
        tabIndex="-1"
        aria-labelledby="addCardLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Card
              </h1>
            </div>
            <div className="modal-body">
              <form action="" className="row">
                <div className="col-12 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                    placeholder="Card Holder Name"
                  />
                </div>
                <div className="col-12 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                    placeholder="Card Number"
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                    placeholder="MM/YY"
                  />
                </div>
                <div className="col-lg-6 mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                    placeholder="CVV"
                  />
                </div>
                <div className="col-12">
                  <div className="submit-btn">
                    <button
                      type="button"
                      className="btn cancel"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" className="btn add-card-btn">
                      Add Card
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentAddCard;
