import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

const PopularCourses = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [keys, setKeys] = useState("all");

  useEffect(() => {
    // tabs
    fetch("/assets/Data/popularTabs.json")
      .then((res) => res.json())
      .then((data) => setData(data));

    // items
    fetch("/assets/Data/popularItems.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <section className="popular_courses">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6>POPULAR COURSES</h6>
              <h4>Learn in-demand professional skill</h4>
            </div>
            <div className="col-12">
              <div className="shorting-menu">
                <button
                  className={`filter ${keys === "all" ? "active" : ""}`}
                  data-filter="all"
                  onClick={() => {
                    setKeys("all");
                  }}
                >
                  All Projects
                </button>
                {data.length > 0 &&
                  data.map((item) => (
                    <button
                      key={item.id}
                      className={`filter ${
                        keys === item.filter ? "active" : ""
                      }`}
                      data-filter={`.${item.filter}`}
                      onClick={() => {
                        setKeys(item.filter);
                      }}
                    >
                      {item.btn}
                    </button>
                  ))}
              </div>

              <div className="shorting">
                <div className="row">
                  <div className="col-lg-12 col-md-12 text-end">
                    <Link
                      href="#"
                      className="btn border border-success-subtle text-success shorting-btn mb-lg-5"
                    >
                      Explore All
                      {items.length}
                    </Link>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`col-lg-4 col-md-6 mix  ${
                        keys === "all" && "d-block"
                      }  ${keys === `${item.filter}` && "d-block"}`}
                    >
                      <div className="mix-item">
                        <div className="img">
                          <Image
                            className="img-fluid"
                            src={`/assets/images/popular-courses/${item.img}.png`}
                            alt=""
                            width={368}
                            height={209}
                          />
                          <div className="overlay"></div>
                        </div>
                        <div className="desc">
                          <div className="row">
                            <div className="col-5">
                              <p className="cat">{item.cat}</p>
                            </div>
                            <div className="col-7">
                              <div className="star">
                                <Rating size={20} initialValue={item.star} />
                                <p className="star-rating">4.0 ({item.star})</p>
                              </div>
                            </div>
                            <div className="col-12">
                              <h4>{item.desc}</h4>
                              <div className="lessong_person">
                                <p>
                                  <span>
                                    <svg
                                      width="23"
                                      height="22"
                                      viewBox="0 0 23 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        width="22"
                                        height="22"
                                        transform="translate(0.5)"
                                        fill="white"
                                      />
                                      <path
                                        d="M1.1875 8.25L11.5 2.75L21.8125 8.25L11.5 13.75L1.1875 8.25Z"
                                        stroke="#474D66"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M16.6562 20.625V11L11.5 8.25"
                                        stroke="#474D66"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M19.4062 9.53125V14.2234C19.4056 14.3695 19.3574 14.5113 19.2687 14.6273C18.693 15.4008 16.2523 18.2195 11.5 18.2195C6.74766 18.2195 4.30703 15.4008 3.73125 14.6273C3.64265 14.5113 3.59437 14.3695 3.59375 14.2234V9.53125"
                                        stroke="#474D66"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  {item.lesson} Lesson
                                </p>
                                <p>
                                  <span>
                                    <svg
                                      width="23"
                                      height="22"
                                      viewBox="0 0 23 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.74935 10.9993C10.7752 10.9993 12.416 9.35852 12.416 7.33268C12.416 5.30685 10.7752 3.66602 8.74935 3.66602C6.72352 3.66602 5.08268 5.30685 5.08268 7.33268C5.08268 9.35852 6.72352 10.9993 8.74935 10.9993ZM8.74935 5.49935C9.75768 5.49935 10.5827 6.32435 10.5827 7.33268C10.5827 8.34102 9.75768 9.16602 8.74935 9.16602C7.74102 9.16602 6.91602 8.34102 6.91602 7.33268C6.91602 6.32435 7.74102 5.49935 8.74935 5.49935ZM17.9159 7.33268C17.9159 9.35852 16.2751 10.9993 14.2493 10.9993C13.8184 10.9993 13.4151 10.9077 13.0301 10.7793C13.7909 9.83518 14.2493 8.63435 14.2493 7.33268C14.2493 6.03102 13.7909 4.83018 13.0301 3.88602C13.4151 3.75768 13.8184 3.66602 14.2493 3.66602C16.2751 3.66602 17.9159 5.30685 17.9159 7.33268ZM17.9159 15.5827C17.9159 14.0427 17.0359 12.8877 15.7801 12.0352C18.3101 12.4018 21.5826 13.5843 21.5826 15.5827V18.3327H17.9159V15.5827ZM1.41602 15.5827C1.41602 13.1443 6.30185 11.916 8.74935 11.916C11.1968 11.916 16.0827 13.1443 16.0827 15.5827V18.3327H1.41602V15.5827ZM3.24935 15.5918V16.4993H14.2493V15.5827C14.066 14.9318 11.2243 13.7493 8.74935 13.7493C6.27435 13.7493 3.43268 14.9318 3.24935 15.5918Z"
                                        fill="#474D66"
                                      />
                                    </svg>
                                  </span>
                                  {item.people}
                                </p>
                              </div>
                              <hr />
                              <div className="price">
                                <p>${item.price}</p>
                                <Link href="/course-categories/categories-details">
                                  <i className="ph-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCourses;
