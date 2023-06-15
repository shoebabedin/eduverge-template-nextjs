const Video = () => {
  return (
    <>
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="videoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className=""
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ph-x"></i>
              </button>
            </div>
            <div className="modal-body">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/cF0tNG6aZ_A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
