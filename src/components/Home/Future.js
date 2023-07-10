import Image from "next/image";
import { useEffect, useState } from "react";

const Future = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/assets/Data/futures.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <section className="future">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h6>Features</h6>
              <h2>Why study with Eduverge?</h2>
            </div>
            {data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 col-12">
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-12">
                    <Image
                      className="img-fluid"
                      src={`/assets/images/future/${item.img}.png`}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="col-lg-10 col-md-10 col-12">
                    <h4>{item.name}</h4>
                    <p>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Future;
