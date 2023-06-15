import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const CheckoutList = () => {
  
  
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 1,

    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipeToSlide: true
  };
  return (
    <>

      <div className="checkout_process_modal view_cart_modal">
        <div className="modal-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="checkout-list">Checkout List</h2>
                <p className="count-course">2 Course in Cart</p>
                <hr />
              </div>
              <div className="col-lg-8">
                <div className="cart-item">
                  <div className="row">
                    <div className="col-7">
                      <div className="cart-item-left">
                        <div className="cart-item-img">
                          <Image
                            src="/assets/images/check-list/img1.png"
                            alt=""
                            className="img-fluid"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="cart-item-desc">
                          <h4>Angular - The Complete Guide (2020 Edition)</h4>
                          <p>Mentor: Kevin Perry</p>
                          <div className="rating-seller">
                            <div className="rating">
                              <ul className="star">
                                <li>
                                  <i className="ph-star-fill"></i>
                                </li>
                                <li>
                                  <i className="ph-star-fill"></i>
                                </li>
                                <li>
                                  <i className="ph-star-fill"></i>
                                </li>
                                <li>
                                  <i className="ph-star-fill"></i>
                                </li>
                                <li>
                                  <i className="ph-star"></i>
                                </li>
                                <p className="star-rating">4.6</p>
                              </ul>
                            </div>
                            <div className="seller">
                              <p className="cat">Best Seller</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="cart-item-right">
                        <div className="price">
                          <p>$345</p>
                        </div>
                        <div className="del">
                          <svg
                            width="14"
                            height="16"
                            viewBox="0 0 14 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.1082 4.69635H0.872932C0.609403 4.69635 0.402344 4.90341 0.402344 5.16693C0.402344 5.43046 0.609403 5.63752 0.872932 5.63752H1.34352V15.0493C1.34352 15.5669 1.76705 15.9905 2.2847 15.9905H11.6965C12.2141 15.9905 12.6376 15.5669 12.6376 15.0493V5.63752H13.1082C13.3718 5.63752 13.5788 5.43046 13.5788 5.16693C13.5788 4.90341 13.3718 4.69635 13.1082 4.69635ZM5.10823 13.1669C5.10823 13.6846 4.6847 14.1081 4.16705 14.1081C3.6494 14.1081 3.22587 13.6846 3.22587 13.1669V7.51988C3.22587 7.00223 3.6494 6.5787 4.16705 6.5787C4.6847 6.5787 5.10823 7.00223 5.10823 7.51988V13.1669ZM7.93176 13.1669C7.93176 13.6846 7.50823 14.1081 6.99058 14.1081C6.47293 14.1081 6.0494 13.6846 6.0494 13.1669V7.51988C6.0494 7.00223 6.47293 6.5787 6.99058 6.5787C7.50823 6.5787 7.93176 7.00223 7.93176 7.51988V13.1669ZM10.7553 13.1669C10.7553 13.6846 10.3318 14.1081 9.81411 14.1081C9.29646 14.1081 8.87293 13.6846 8.87293 13.1669V7.51988C8.87293 7.00223 9.29646 6.5787 9.81411 6.5787C10.3318 6.5787 10.7553 7.00223 10.7553 7.51988V13.1669ZM12.6376 1.87282H8.87293C8.87293 1.35517 8.4494 0.931641 7.93176 0.931641H6.0494C5.53176 0.931641 5.10823 1.35517 5.10823 1.87282H1.34352C0.825873 1.87282 0.402344 2.29635 0.402344 2.81399V3.75517H13.5788V2.81399C13.5788 2.29635 13.1553 1.87282 12.6376 1.87282Z"
                              fill="#474D66"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-item">
                  <div className="row">
                    <div className="col-7">
                      <div className="cart-item-left">
                        <div className="cart-item-img">
                          <Image
                            src="/assets/images/check-list/img2.png"
                            alt=""
                            className="img-fluid"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="cart-item-desc">
                          <h4>JavaScript: Understanding the Weird Parts</h4>
                          <p>Mentor: Kevin Perry</p>
                          <div className="rating-seller">
                            <div className="rating">
                              <ul className="star">
                                <li>
                                  <i className="ph-star-fill"></i>
                                </li>
                                <li>
                                  <i className="ph-star-fill"></i>
                                </li>
                                <li>
                                  <i className="ph-star-fill"></i>
                                </li>
                                <li>
                                  <i className="ph-star-fill"></i>
                                </li>
                                <li>
                                  <i className="ph-star"></i>
                                </li>
                                <p className="star-rating">4.6</p>
                              </ul>
                            </div>
                            <div className="seller">
                              <p className="cat">Best Seller</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="cart-item-right">
                        <div className="price">
                          <p>$345</p>
                        </div>
                        <div className="del">
                          <svg
                            width="14"
                            height="16"
                            viewBox="0 0 14 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.1082 4.69635H0.872932C0.609403 4.69635 0.402344 4.90341 0.402344 5.16693C0.402344 5.43046 0.609403 5.63752 0.872932 5.63752H1.34352V15.0493C1.34352 15.5669 1.76705 15.9905 2.2847 15.9905H11.6965C12.2141 15.9905 12.6376 15.5669 12.6376 15.0493V5.63752H13.1082C13.3718 5.63752 13.5788 5.43046 13.5788 5.16693C13.5788 4.90341 13.3718 4.69635 13.1082 4.69635ZM5.10823 13.1669C5.10823 13.6846 4.6847 14.1081 4.16705 14.1081C3.6494 14.1081 3.22587 13.6846 3.22587 13.1669V7.51988C3.22587 7.00223 3.6494 6.5787 4.16705 6.5787C4.6847 6.5787 5.10823 7.00223 5.10823 7.51988V13.1669ZM7.93176 13.1669C7.93176 13.6846 7.50823 14.1081 6.99058 14.1081C6.47293 14.1081 6.0494 13.6846 6.0494 13.1669V7.51988C6.0494 7.00223 6.47293 6.5787 6.99058 6.5787C7.50823 6.5787 7.93176 7.00223 7.93176 7.51988V13.1669ZM10.7553 13.1669C10.7553 13.6846 10.3318 14.1081 9.81411 14.1081C9.29646 14.1081 8.87293 13.6846 8.87293 13.1669V7.51988C8.87293 7.00223 9.29646 6.5787 9.81411 6.5787C10.3318 6.5787 10.7553 7.00223 10.7553 7.51988V13.1669ZM12.6376 1.87282H8.87293C8.87293 1.35517 8.4494 0.931641 7.93176 0.931641H6.0494C5.53176 0.931641 5.10823 1.35517 5.10823 1.87282H1.34352C0.825873 1.87282 0.402344 2.29635 0.402344 2.81399V3.75517H13.5788V2.81399C13.5788 2.29635 13.1553 1.87282 12.6376 1.87282Z"
                              fill="#474D66"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cart_footer">
                  <div className="promocode">
                    <h4 className="pcode_header">Order Summary</h4>
                    <div className="subtotal">
                      <p className="itemSubtotal">Total :</p>
                      <span className="price">$ 690.00</span>
                    </div>
                    <Link href="/payment-method" className="shipping d-block">
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="Suggested">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Suggested</p>
              <h4>You might also like</h4>
            </div>
            <div className="col-lg-12">
              <Slider {...settings} className="suggested-slider">
                <div className="mix-item">
                  <div className="img">
                    <Image
                      className="img-fluid"
                      src="/assets/images/check-list/img-slide1.png"
                      alt=""
                      width={300}
                      height={160}
                    />
                  </div>
                  <div className="desc">
                    <div className="row">
                      <div className="col-12">
                        <ul className="star">
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star"></i>
                          </li>
                          <p className="star-rating">4.0 (2)</p>
                        </ul>
                      </div>
                      <div className="col-12">
                        <h4>Introduction to User Experience Design -2022</h4>
                        <div className="lessong_person">
                          <p>Cristofer Jonas</p>
                        </div>
                        <hr />
                        <div className="price-cat">
                          <p className="price">$199.00</p>
                          <p className="cat">UI/UX Design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mix-item">
                  <div className="img">
                    <Image
                      className="img-fluid"
                      src="/assets/images/check-list/img-slide2.png"
                      alt=""
                      width={300}
                      height={160}
                    />
                  </div>
                  <div className="desc">
                    <div className="row">
                      <div className="col-12">
                        <ul className="star">
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star"></i>
                          </li>
                          <p className="star-rating">4.0 (2)</p>
                        </ul>
                      </div>
                      <div className="col-12">
                        <h4>Introduction to User Experience Design -2022</h4>
                        <div className="lessong_person">
                          <p>Cristofer Jonas</p>
                        </div>
                        <hr />
                        <div className="price-cat">
                          <p className="price">$199.00</p>
                          <p className="cat">UI/UX Design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mix-item">
                  <div className="img">
                    <Image
                      className="img-fluid"
                      src="/assets/images/check-list/img-slide3.png"
                      alt=""
                      width={300}
                      height={160}
                    />
                  </div>
                  <div className="desc">
                    <div className="row">
                      <div className="col-12">
                        <ul className="star">
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star"></i>
                          </li>
                          <p className="star-rating">4.0 (2)</p>
                        </ul>
                      </div>
                      <div className="col-12">
                        <h4>Introduction to User Experience Design -2022</h4>
                        <div className="lessong_person">
                          <p>Cristofer Jonas</p>
                        </div>
                        <hr />
                        <div className="price-cat">
                          <p className="price">$199.00</p>
                          <p className="cat">UI/UX Design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mix-item">
                  <div className="img">
                    <Image
                      className="img-fluid"
                      src="/assets/images/check-list/img-slide4.png"
                      alt=""
                      width={300}
                      height={160}
                    />
                  </div>
                  <div className="desc">
                    <div className="row">
                      <div className="col-12">
                        <ul className="star">
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star"></i>
                          </li>
                          <p className="star-rating">4.0 (2)</p>
                        </ul>
                      </div>
                      <div className="col-12">
                        <h4>Introduction to User Experience Design -2022</h4>
                        <div className="lessong_person">
                          <p>Cristofer Jonas</p>
                        </div>
                        <hr />
                        <div className="price-cat">
                          <p className="price">$199.00</p>
                          <p className="cat">UI/UX Design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mix-item">
                  <div className="img">
                    <Image
                      className="img-fluid"
                      src="/assets/images/check-list/img-slide2.png"
                      alt=""
                      width={300}
                      height={160}
                    />
                  </div>
                  <div className="desc">
                    <div className="row">
                      <div className="col-12">
                        <ul className="star">
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star-fill"></i>
                          </li>
                          <li>
                            <i className="ph-star"></i>
                          </li>
                          <p className="star-rating">4.0 (2)</p>
                        </ul>
                      </div>
                      <div className="col-12">
                        <h4>Introduction to User Experience Design -2022</h4>
                        <div className="lessong_person">
                          <p>Cristofer Jonas</p>
                        </div>
                        <hr />
                        <div className="price-cat">
                          <p className="price">$199.00</p>
                          <p className="cat">UI/UX Design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default CheckoutList;
