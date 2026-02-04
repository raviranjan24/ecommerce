export default function wishlist() {
  return (
    <>
      <div className="page-title relative">
        <div
          className="paralaximg"
          data-parallax="scroll"
          data-image-src="images/page-title/page-title-3.jpg"
        ></div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="title">Your Wishlist</h3>
                <ul className="breadcrumb">
                  <li>
                    <a href="index-2.html">Homepage</a>
                  </li>
                  <li>Your Wishlist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-title */}
      <section className="flat-spacing pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tf-grid-layout tf-col-2 lg-col-4 ">
                <div
                  className="card-product style-1 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="image-wrap">
                      <img
                        className="lazyload img-product"
                        data-src="images/shop/product-4.jpg"
                        src="images/shop/product-4.jpg"
                        alt="image-product"
                      />
                      <img
                        className="lazyload img-hover"
                        data-src="images/shop/product-4.1.jpg"
                        src="images/shop/product-4.1.jpg"
                        alt="image-product"
                      />
                    </a>
                    <div className="list-product-btn">
                      <a
                        href="javascript:void(0);"
                        className="box-icon wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart" />
                        <span className="tooltip">Wishlist</span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="modal"
                        aria-controls="compare"
                        className="box-icon compare"
                      >
                        <span className="icon icon-compare" />
                        <span className="tooltip">Compare</span>
                      </a>
                      <a
                        href="#quickView"
                        aria-controls="quickView"
                        data-bs-toggle="modal"
                        className="box-icon quickview tf-btn-loading"
                      >
                        <span className="icon icon-eye" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="list-btn-main">
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="modal"
                        className="btn-main-product"
                      >
                        Add To cart
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info ">
                    <a
                      href="product-detail.html"
                      className=" text-title title link"
                    >
                      Double Standing Desk
                    </a>
                    <div className="price text-body-default ">$69.99</div>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active">
                        <span className="d-none text-capitalize color-filter">
                          Light Brown
                        </span>
                        <span className="swatch-value bg-light-brown" />
                        <img
                          className="lazyload"
                          data-src="images/shop/product-4.2.jpg"
                          src="images/shop/product-4.2.jpg"
                          alt="image-product"
                        />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="d-none text-capitalize color-filter">
                          Light Bink
                        </span>
                        <span className="swatch-value bg-light-pink" />
                        <img
                          className="lazyload"
                          data-src="images/shop/product-4.3.jpg"
                          src="images/shop/product-4.3.jpg"
                          alt="image-product"
                        />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="d-none text-capitalize color-filter">
                          Light Grey
                        </span>
                        <span className="swatch-value bg-dark-grey-2" />
                        <img
                          className="lazyload"
                          data-src="images/shop/product-4.4.jpg"
                          src="images/shop/product-4.4.jpg"
                          alt="image-product"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="card-product style-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="image-wrap">
                      <img
                        className="lazyload img-product"
                        data-src="images/shop/product-3.jpg"
                        src="images/shop/product-3.jpg"
                        alt="image-product"
                      />
                      <img
                        className="lazyload img-hover"
                        data-src="images/shop/product-3.1.jpg"
                        src="images/shop/product-3.1.jpg"
                        alt="image-product"
                      />
                    </a>
                    <div className="on-sale-wrap">
                      <span className="on-sale-item">-25%</span>
                    </div>
                    <div className="list-product-btn">
                      <a
                        href="javascript:void(0);"
                        className="box-icon wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart" />
                        <span className="tooltip">Wishlist</span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="modal"
                        aria-controls="compare"
                        className="box-icon compare"
                      >
                        <span className="icon icon-compare" />
                        <span className="tooltip">Compare</span>
                      </a>
                      <a
                        href="#quickView"
                        aria-controls="quickView"
                        data-bs-toggle="modal"
                        className="box-icon quickview tf-btn-loading"
                      >
                        <span className="icon icon-eye" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="list-btn-main">
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="modal"
                        className="btn-main-product"
                      >
                        Add To cart
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info ">
                    <a
                      href="product-detail.html"
                      className=" text-title title link"
                    >
                      Laptop Stand
                    </a>
                    <div className="price text-body-default ">
                      <span className="text-caption-1 old-price">$98.00</span>$89.99
                    </div>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active">
                        <span className="d-none text-capitalize color-filter">
                          Light Orange
                        </span>
                        <span className="swatch-value bg-light-orange" />
                        <img
                          className="lazyload"
                          data-src="images/shop/product-3.2.jpg"
                          src="images/shop/product-3.2.jpg"
                          alt="image-product"
                        />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="d-none text-capitalize color-filter">
                          Light Grey
                        </span>
                        <span className="swatch-value bg-light-grey" />
                        <img
                          className="lazyload"
                          data-src="images/shop/product-3.3.jpg"
                          src="images/shop/product-3.3.jpg"
                          alt="image-product"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="card-product style-1 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="image-wrap">
                      <img
                        className="lazyload img-product"
                        data-src="images/shop/product-2.jpg"
                        src="images/shop/product-2.jpg"
                        alt="image-product"
                      />
                      <img
                        className="lazyload img-hover"
                        data-src="images/shop/product-2.1.jpg"
                        src="images/shop/product-2.1.jpg"
                        alt="image-product"
                      />
                    </a>
                    <div className="on-sale-wrap">
                      <span className="on-sale-item">-25%</span>
                    </div>
                    <div className="list-product-btn">
                      <a
                        href="javascript:void(0);"
                        className="box-icon wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart" />
                        <span className="tooltip">Wishlist</span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="modal"
                        aria-controls="compare"
                        className="box-icon compare"
                      >
                        <span className="icon icon-compare" />
                        <span className="tooltip">Compare</span>
                      </a>
                      <a
                        href="#quickView"
                        aria-controls="quickView"
                        data-bs-toggle="modal"
                        className="box-icon quickview tf-btn-loading"
                      >
                        <span className="icon icon-eye" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="list-btn-main">
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="modal"
                        className="btn-main-product"
                      >
                        Add To cart
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info ">
                    <a
                      href="product-detail.html"
                      className=" text-title title link"
                    >
                      Open Box - Adjustable Laptop Stand
                    </a>
                    <div className="price text-body-default ">
                      <span className="text-caption-1 old-price">$98.00</span>$79.99
                    </div>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active">
                        <span className="d-none text-capitalize color-filter">
                          Light Blue
                        </span>
                        <span className="swatch-value bg-light-blue" />
                        <img
                          className="lazyload"
                          data-src="images/shop/product-2.jpg"
                          src="images/shop/product-2.jpg"
                          alt="image-product"
                        />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="d-none text-capitalize color-filter">
                          Light Blue
                        </span>
                        <span className="swatch-value bg-light-blue-2" />
                        <img
                          className="lazyload"
                          data-src="images/shop/product-2.2.jpg"
                          src="images/shop/product-2.2.jpg"
                          alt="image-product"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="card-product style-1 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="card-product-wrapper">
                    <a href="product-detail.html" className="image-wrap">
                      <img
                        className="lazyload img-product"
                        data-src="images/shop/product-1.jpg"
                        src="images/shop/product-1.jpg"
                        alt="image-product"
                      />
                      <img
                        className="lazyload img-hover"
                        data-src="images/shop/product-1.1.jpg"
                        src="images/shop/product-1.1.jpg"
                        alt="image-product"
                      />
                    </a>
                    <div className="list-product-btn">
                      <a
                        href="javascript:void(0);"
                        className="box-icon wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart" />
                        <span className="tooltip">Wishlist</span>
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="modal"
                        aria-controls="compare"
                        className="box-icon compare"
                      >
                        <span className="icon icon-compare" />
                        <span className="tooltip">Compare</span>
                      </a>
                      <a
                        href="#quickView"
                        aria-controls="quickView"
                        data-bs-toggle="modal"
                        className="box-icon quickview tf-btn-loading"
                      >
                        <span className="icon icon-eye" />
                        <span className="tooltip">Quick View</span>
                      </a>
                    </div>
                    <div className="list-btn-main">
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="modal"
                        className="btn-main-product"
                      >
                        Add To cart
                      </a>
                    </div>
                  </div>
                  <div className="card-product-info ">
                    <a
                      href="product-detail.html"
                      className=" text-title title link"
                    >
                      Ergonomic Chair Pro
                    </a>
                    <div className="price text-body-default ">$79.99</div>
                    <ul className="list-color-product">
                      <li className="list-color-item color-swatch active">
                        <span className="d-none text-capitalize color-filter">
                          Light Blue
                        </span>
                        <span className="swatch-value bg-light-blue" />
                        <img
                          className="lazyload"
                          data-src="images/shop/product-1.2.jpg"
                          src="images/shop/product-1.2.jpg"
                          alt="image-product"
                        />
                      </li>
                      <li className="list-color-item color-swatch">
                        <span className="d-none text-capitalize color-filter">
                          Light Blue
                        </span>
                        <span className="swatch-value bg-light-blue-2" />
                        <img
                          className="lazyload"
                          data-src="images/shop/product-1.3.jpg"
                          src="images/shop/product-1.3.jpg"
                          alt="image-product"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-wishlist */}
      {/* Related Products */}
      <section className="flat-spacing ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="mb_40 wow fadeInUp">You may be interested in…</h4>
              <div
                dir="ltr"
                className="swiper tf-sw-latest"
                data-preview={4}
                data-tablet={3}
                data-mobile={2}
                data-space-lg={30}
                data-space-md={30}
                data-space={15}
                data-pagination={1}
                data-pagination-md={1}
                data-pagination-lg={1}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div
                      className="card-product style-1 wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="image-wrap">
                          <img
                            className="lazyload img-product"
                            data-src="images/shop/product-1.jpg"
                            src="images/shop/product-1.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="images/shop/product-1.1.jpg"
                            src="images/shop/product-1.1.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn">
                          <a
                            href="javascript:void(0);"
                            className="box-icon wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Wishlist</span>
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="modal"
                            aria-controls="compare"
                            className="box-icon compare"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Compare</span>
                          </a>
                          <a
                            href="#quickView"
                            aria-controls="quickView"
                            data-bs-toggle="modal"
                            className="box-icon quickview tf-btn-loading"
                          >
                            <span className="icon icon-eye" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="list-btn-main">
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="modal"
                            className="btn-main-product"
                          >
                            Add To cart
                          </a>
                        </div>
                      </div>
                      <div className="card-product-info ">
                        <a
                          href="product-detail.html"
                          className="title link line-clamp-1"
                        >
                          Ergonomic Chair Pro
                        </a>
                        <div className="price text-body-default ">
                          <span className="text-caption-1 old-price">$98.00</span>
                          $79.99
                        </div>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="d-none text-capitalize color-filter">
                              Light Blue
                            </span>
                            <span className="swatch-value bg-light-blue" />
                            <img
                              className="lazyload"
                              data-src="images/shop/product-1.2.jpg"
                              src="images/shop/product-1.2.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="d-none text-capitalize color-filter">
                              Light Blue
                            </span>
                            <span className="swatch-value bg-light-blue-2" />
                            <img
                              className="lazyload"
                              data-src="images/shop/product-1.3.jpg"
                              src="images/shop/product-1.3.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="card-product style-1 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="image-wrap">
                          <img
                            className="lazyload img-product"
                            data-src="images/shop/product-2.jpg"
                            src="images/shop/product-2.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="images/shop/product-2.1.jpg"
                            src="images/shop/product-2.1.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="on-sale-wrap">
                          <span className="on-sale-item">-25%</span>
                        </div>
                        <div className="list-product-btn">
                          <a
                            href="wish-list.html"
                            className="box-icon wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Wishlist</span>
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="modal"
                            aria-controls="compare"
                            className="box-icon compare"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Compare</span>
                          </a>
                          <a
                            href="#quickView"
                            aria-controls="quickView"
                            data-bs-toggle="modal"
                            className="box-icon quickview tf-btn-loading"
                          >
                            <span className="icon icon-eye" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="list-btn-main">
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="modal"
                            className="btn-main-product"
                          >
                            Add To cart
                          </a>
                        </div>
                      </div>
                      <div className="card-product-info ">
                        <a
                          href="product-detail.html"
                          className="title link line-clamp-1"
                        >
                          Open Box - Adjustable Laptop Stand
                        </a>
                        <div className="price text-body-default ">
                          <span className="text-caption-1 old-price">$98.00</span>
                          $79.99
                        </div>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="d-none text-capitalize color-filter">
                              Light Blue
                            </span>
                            <span className="swatch-value bg-light-blue" />
                            <img
                              className="lazyload"
                              data-src="images/shop/product-2.jpg"
                              src="images/shop/product-2.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="d-none text-capitalize color-filter">
                              Light Blue
                            </span>
                            <span className="swatch-value bg-light-blue-2" />
                            <img
                              className="lazyload"
                              data-src="images/shop/product-2.2.jpg"
                              src="images/shop/product-2.2.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="card-product style-1 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="image-wrap">
                          <img
                            className="lazyload img-product"
                            data-src="images/shop/product-3.jpg"
                            src="images/shop/product-3.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="images/shop/product-3.1.jpg"
                            src="images/shop/product-3.1.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="on-sale-wrap">
                          <span className="on-sale-item">-25%</span>
                        </div>
                        <div className="list-product-btn">
                          <a
                            href="javascript:void(0);"
                            className="box-icon wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Wishlist</span>
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="modal"
                            aria-controls="compare"
                            className="box-icon compare"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Compare</span>
                          </a>
                          <a
                            href="#quickView"
                            aria-controls="quickView"
                            data-bs-toggle="modal"
                            className="box-icon quickview tf-btn-loading"
                          >
                            <span className="icon icon-eye" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="list-btn-main">
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="modal"
                            className="btn-main-product"
                          >
                            Add To cart
                          </a>
                        </div>
                      </div>
                      <div className="card-product-info ">
                        <a
                          href="product-detail.html"
                          className="title link line-clamp-1"
                        >
                          Laptop Stand
                        </a>
                        <div className="price text-body-default ">
                          <span className="text-caption-1 old-price">$98.00</span>
                          $89.99
                        </div>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="d-none text-capitalize color-filter">
                              Light Orange
                            </span>
                            <span className="swatch-value bg-light-orange" />
                            <img
                              className="lazyload"
                              data-src="images/shop/product-3.2.jpg"
                              src="images/shop/product-3.2.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="d-none text-capitalize color-filter">
                              Light Grey
                            </span>
                            <span className="swatch-value bg-light-grey" />
                            <img
                              className="lazyload"
                              data-src="images/shop/product-3.3.jpg"
                              src="images/shop/product-3.3.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="card-product style-1 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="image-wrap">
                          <img
                            className="lazyload img-product"
                            data-src="images/shop/product-4.jpg"
                            src="images/shop/product-4.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="images/shop/product-4.1.jpg"
                            src="images/shop/product-4.1.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn">
                          <a
                            href="javascript:void(0);"
                            className="box-icon wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Wishlist</span>
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="modal"
                            aria-controls="compare"
                            className="box-icon compare"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Compare</span>
                          </a>
                          <a
                            href="#quickView"
                            aria-controls="quickView"
                            data-bs-toggle="modal"
                            className="box-icon quickview tf-btn-loading"
                          >
                            <span className="icon icon-eye" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="list-btn-main">
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="modal"
                            className="btn-main-product"
                          >
                            Add To cart
                          </a>
                        </div>
                      </div>
                      <div className="card-product-info ">
                        <a
                          href="product-detail.html"
                          className="title link line-clamp-1"
                        >
                          Double Standing Desk
                        </a>
                        <div className="price text-body-default ">$69.99</div>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="d-none text-capitalize color-filter">
                              Light Brown
                            </span>
                            <span className="swatch-value bg-light-brown" />
                            <img
                              className="lazyload"
                              data-src="images/shop/product-4.2.jpg"
                              src="images/shop/product-4.2.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="d-none text-capitalize color-filter">
                              Light Bink
                            </span>
                            <span className="swatch-value bg-light-pink" />
                            <img
                              className="lazyload"
                              data-src="images/shop/product-4.3.jpg"
                              src="images/shop/product-4.3.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="d-none text-capitalize color-filter">
                              Light Grey
                            </span>
                            <span className="swatch-value bg-dark-grey-2" />
                            <img
                              className="lazyload"
                              data-src="images/shop/product-4.4.jpg"
                              src="images/shop/product-4.4.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-pagination-latest sw-dots type-circle justify-content-center" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Related Products */}
    </>
  )
}