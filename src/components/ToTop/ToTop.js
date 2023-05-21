import { useEffect, useState } from "react";

const ToTop = () => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setTop(window.pageYOffset < 100 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <button
        type="button"
        className={`btn btn-danger btn-floating btn-lg ${top && "show"}`}
        id="btn-back-to-top"
        onClick={toTop}
      >
        <i className="ph-arrow-up"></i>
      </button>
    </>
  );
};

export default ToTop;
