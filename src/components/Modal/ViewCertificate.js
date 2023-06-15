import Image from "next/image";

const ViewCertificate = () => {
  return (
    <>
      <div
        className="modal fade"
        id="viewCertificate"
        tabIndex="-1"
        aria-labelledby="viewCertificateLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable login-modal">
          <div className="modal-content">
            <div className="modal-body">
              <div className="img">
                <Image
                  className="img-fluid"
                  src="/assets/images/my-certificate/certificate.png"
                  alt=""
                  width={823}
                  height={574}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCertificate;
