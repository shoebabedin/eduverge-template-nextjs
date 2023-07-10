import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/assets/Data/categories.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <section className="categories">
        <div className="wave">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 690"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,700 C 0,700 0,175 0,175 C 56.37581587083477,160.98694606664378 112.75163174166954,146.97389213328753 177,152 C 241.24836825833046,157.02610786671247 313.36928890415663,181.09137753349367 394,176 C 474.63071109584337,170.90862246650633 563.7712126417039,136.6605977327379 640,137 C 716.2287873582961,137.3394022672621 779.545860529028,172.26623153555477 833,202 C 886.454139470972,231.73376846444523 930.0453452421846,256.27447612504295 995,236 C 1059.9546547578154,215.72552387495705 1146.272758502233,150.63586396427343 1224,133 C 1301.727241497767,115.36413603572656 1370.8636207488835,145.1820680178633 1440,175 C 1440,175 1440,700 1440,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#f5fbf8"
              fillOpacity="0.4"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>

            <path
              d="M 0,700 C 0,700 0,350 0,350 C 79.49708004122294,328.76056338028167 158.9941600824459,307.52112676056333 217,305 C 275.0058399175541,302.47887323943667 311.52043971143934,318.6760563380282 376,319 C 440.47956028856066,319.3239436619718 532.9240810717966,303.7746478873239 612,318 C 691.0759189282034,332.2253521126761 756.783236001374,376.2253521126761 824,378 C 891.216763998626,379.7746478873239 959.942974922707,339.32394366197184 1022,330 C 1084.057025077293,320.67605633802816 1139.444864307798,342.4788732394366 1208,351 C 1276.555135692202,359.5211267605634 1358.277567846101,354.7605633802817 1440,350 C 1440,350 1440,700 1440,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#f5fbf8"
              fillOpacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-1"
            ></path>

            <path
              d="M 0,700 C 0,700 0,525 0,525 C 50.28443833734113,497.1051185159739 100.56887667468226,469.21023703194777 181,478 C 261.43112332531774,486.78976296805223 372.0089316386121,532.2641703881828 446,539 C 519.9910683613879,545.7358296118172 557.3953967708692,513.7330814153212 614,514 C 670.6046032291308,514.2669185846788 746.4094812779113,546.8035039505326 819,544 C 891.5905187220887,541.1964960494674 960.9666781174858,503.052902782549 1037,499 C 1113.0333218825142,494.947097217451 1195.723806252147,524.9848849192716 1264,535 C 1332.276193747853,545.0151150807284 1386.1380968739265,535.0075575403641 1440,525 C 1440,525 1440,700 1440,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#f5fbf8"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-2"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 text-start">
              <h6>Top categories</h6>
              <h4>Explore Popular Categories</h4>
            </div>
            <div className="col-lg-6 col-md-12 text-end">
              <Link
                href="/course-categories"
                className="btn border border-success-subtle text-success"
              >
                Explore All
              </Link>
            </div>
            {data.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6 col-12">
                <div className="wrap-div">
                  <Image
                    width={100}
                    height={100}
                    src={`/assets/images/categories/${item.img}.png`}
                    alt=""
                  />
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
