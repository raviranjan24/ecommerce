import Breadcrum from "@/components/common/breadcrum";
import Link from "next/link";

export default function Categories() {
  return (
    <>
      <Breadcrum title={"Product Category"}/>
      <section className="flat-spacing">
        <div className="container-fluid">
          <div className="tf-shop-control">
            <div className="tf-control-filter">
              <Link
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="filterShop"
                className="tf-btn-filter"
              >
                <span className="icon icon-filter" />
                <span className="text">Filters</span>
              </Link>
              <div className="d-none d-lg-flex shop-sale-text">
                <i className="icon icon-checkcircle" />
                <p className="text-caption-1">Shop sale items only</p>
              </div>
            </div>
            <ul className="tf-control-layout">
              <li
                className="tf-view-layout-switch sw-layout-list list-layout"
                data-value-layout="list"
              >
                <div className="item">
                  <svg
                    className="icon"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={3} cy={6} r="2.5" stroke="#181818" />
                    <rect
                      x="7.5"
                      y="3.5"
                      width={12}
                      height={5}
                      rx="2.5"
                      stroke="#181818"
                    />
                    <circle cx={3} cy={14} r="2.5" stroke="#181818" />
                    <rect
                      x="7.5"
                      y="11.5"
                      width={12}
                      height={5}
                      rx="2.5"
                      stroke="#181818"
                    />
                  </svg>
                </div>
              </li>
              <li
                className="tf-view-layout-switch sw-layout-2"
                data-value-layout="tf-col-2"
              >
                <div className="item">
                  <svg
                    className="icon"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={6} cy={6} r="2.5" stroke="#181818" />
                    <circle cx={14} cy={6} r="2.5" stroke="#181818" />
                    <circle cx={6} cy={14} r="2.5" stroke="#181818" />
                    <circle cx={14} cy={14} r="2.5" stroke="#181818" />
                  </svg>
                </div>
              </li>
              <li
                className="tf-view-layout-switch sw-layout-3"
                data-value-layout="tf-col-3"
              >
                <div className="item">
                  <svg
                    className="icon"
                    width={22}
                    height={20}
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={3} cy={6} r="2.5" stroke="#181818" />
                    <circle cx={11} cy={6} r="2.5" stroke="#181818" />
                    <circle cx={19} cy={6} r="2.5" stroke="#181818" />
                    <circle cx={3} cy={14} r="2.5" stroke="#181818" />
                    <circle cx={11} cy={14} r="2.5" stroke="#181818" />
                    <circle cx={19} cy={14} r="2.5" stroke="#181818" />
                  </svg>
                </div>
              </li>
              <li
                className="tf-view-layout-switch sw-layout-4 active"
                data-value-layout="tf-col-4"
              >
                <div className="item">
                  <svg
                    className="icon"
                    width={30}
                    height={20}
                    viewBox="0 0 30 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={3} cy={6} r="2.5" stroke="#181818" />
                    <circle cx={11} cy={6} r="2.5" stroke="#181818" />
                    <circle cx={19} cy={6} r="2.5" stroke="#181818" />
                    <circle cx={27} cy={6} r="2.5" stroke="#181818" />
                    <circle cx={3} cy={14} r="2.5" stroke="#181818" />
                    <circle cx={11} cy={14} r="2.5" stroke="#181818" />
                    <circle cx={19} cy={14} r="2.5" stroke="#181818" />
                    <circle cx={27} cy={14} r="2.5" stroke="#181818" />
                  </svg>
                </div>
              </li>
            </ul>
            <div className="tf-control-sorting">
              <p className="d-none d-lg-block text-caption-1">Sort by:</p>
              <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                <div className="btn-select">
                  <span className="text-sort-value">Best Selling</span>
                  <span className="icon icon-down" />
                </div>
                <div className="dropdown-menu">
                  <div className="select-item" data-sort-value="best-selling">
                    <span className="text-value-item">Best selling</span>
                  </div>
                  <div className="select-item" data-sort-value="a-z">
                    <span className="text-value-item">Alphabetically, A-Z</span>
                  </div>
                  <div className="select-item" data-sort-value="z-a">
                    <span className="text-value-item">Alphabetically, Z-A</span>
                  </div>
                  <div className="select-item" data-sort-value="price-low-high">
                    <span className="text-value-item">Price, low to high</span>
                  </div>
                  <div className="select-item" data-sort-value="price-high-low">
                    <span className="text-value-item">Price, high to low</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-control-shop">
            <div className="meta-filter-shop">
              <div id="product-count-grid" className="count-text" />
              <div id="product-count-list" className="count-text" />
              <div id="applied-filters" />
              <button
                id="remove-all"
                className="remove-all-filters text-btn-uppercase"
                style={{ display: "none" }}
              >
                REMOVE ALL <i className="icon icon-close" />
              </button>
            </div>
            
            <div className="tf-grid-layout wrapper-shop tf-col-4" id="gridLayout">
              {/* card product 1 */}
              <div
                className="card-product style-1 grid"
                data-availability="Out of stock"
                data-brand="adidas"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-1.jpg"
                      src="/images/shop/product-1.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-1.1.jpg"
                      src="/images/shop/product-1.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Ergonomic Chair Pro
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$79.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Blue
                      </span>
                      <span className="swatch-value bg-light-blue" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-1.2.jpg"
                        src="/images/shop/product-1.2.jpg"
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
                        data-src="/images/shop/product-1.3.jpg"
                        src="/images/shop/product-1.3.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* card product 2 */}
              <div
                className="card-product style-1 grid"
                data-availability="In stock"
                data-brand="nike"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-2.jpg"
                      src="/images/shop/product-2.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-2.1.jpg"
                      src="/images/shop/product-2.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="on-sale-wrap">
                    <span className="on-sale-item">-25%</span>
                  </div>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Open Box - Adjustable Laptop Stand
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$69.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Blue
                      </span>
                      <span className="swatch-value bg-light-blue" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-2.jpg"
                        src="/images/shop/product-2.jpg"
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
                        data-src="/images/shop/product-2.2.jpg"
                        src="/images/shop/product-2.2.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* card product 3 */}
              <div
                className="card-product style-1 grid"
                data-availability="In stock"
                data-brand="LV"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-3.jpg"
                      src="/images/shop/product-3.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-3.1.jpg"
                      src="/images/shop/product-3.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="on-sale-wrap">
                    <span className="on-sale-item">-25%</span>
                  </div>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Laptop Stand
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$69.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Orange
                      </span>
                      <span className="swatch-value bg-light-orange" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-3.2.jpg"
                        src="/images/shop/product-3.2.jpg"
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
                        data-src="/images/shop/product-3.3.jpg"
                        src="/images/shop/product-3.3.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* card product 4 */}
              <div
                className="card-product style-1 grid"
                data-availability="Out of stock"
                data-brand="gucci"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-4.jpg"
                      src="/images/shop/product-4.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-4.1.jpg"
                      src="/images/shop/product-4.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Double Standing Desk
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$79.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Brown
                      </span>
                      <span className="swatch-value bg-light-brown" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-4.2.jpg"
                        src="/images/shop/product-4.2.jpg"
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
                        data-src="/images/shop/product-4.3.jpg"
                        src="/images/shop/product-4.3.jpg"
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
                        data-src="/images/shop/product-4.4.jpg"
                        src="/images/shop/product-4.4.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* card product 5 */}
              <div
                className="card-product style-1 grid"
                data-availability="Out of stock"
                data-brand="hermes"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-5.jpg"
                      src="/images/shop/product-5.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-5.1.jpg"
                      src="/images/shop/product-5.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="on-sale-wrap">
                    <span className="on-sale-item">-25%</span>
                  </div>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Wireless Charging Dock
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$79.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Orange
                      </span>
                      <span className="swatch-value bg-light-orange" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-5.2.jpg"
                        src="/images/shop/product-5.2.jpg"
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
                        data-src="/images/shop/product-5.3.jpg"
                        src="/images/shop/product-5.3.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* card product 6 */}
              <div
                className="card-product style-1 grid"
                data-availability="In stock"
                data-brand="zalando"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-6.jpg"
                      src="/images/shop/product-6.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-6.1.jpg"
                      src="/images/shop/product-6.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Ergonomic Headrest
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$79.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Blue
                      </span>
                      <span className="swatch-value bg-light-blue" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-6.jpg"
                        src="/images/shop/product-6.jpg"
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
                        data-src="/images/shop/product-6.2.jpg"
                        src="/images/shop/product-6.2.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* card product 7 */}
              <div
                className="card-product style-1 grid"
                data-availability="In stock"
                data-brand="nike"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-7.jpg"
                      src="/images/shop/product-7.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-7.1.jpg"
                      src="/images/shop/product-7.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="on-sale-wrap">
                    <span className="on-sale-item">-25%</span>
                  </div>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Hybrid Laptop Sleeve
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$69.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Blue
                      </span>
                      <span className="swatch-value bg-light-blue" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-7.2.jpg"
                        src="/images/shop/product-7.2.jpg"
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
                        data-src="/images/shop/product-7.3.jpg"
                        src="/images/shop/product-7.3.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* card product 8 */}
              <div
                className="card-product style-1 grid"
                data-availability="In stock"
                data-brand="LV"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-8.jpg"
                      src="/images/shop/product-8.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-8.1.jpg"
                      src="/images/shop/product-8.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Wireless Charging Tray
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$79.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Brown
                      </span>
                      <span className="swatch-value bg-light-brown" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-8.2.jpg"
                        src="/images/shop/product-8.2.jpg"
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
                        data-src="/images/shop/product-8.3.jpg"
                        src="/images/shop/product-8.3.jpg"
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
                        data-src="/images/shop/product-8.4.jpg"
                        src="/images/shop/product-8.4.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* card product 9 */}
              <div
                className="card-product style-1 grid"
                data-availability="In stock"
                data-brand="hermes"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-9.jpg"
                      src="/images/shop/product-9.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-9.1.jpg"
                      src="/images/shop/product-9.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Softside Chair
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$79.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Blue
                      </span>
                      <span className="swatch-value bg-light-blue" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-9.2.jpg"
                        src="/images/shop/product-9.2.jpg"
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
                        data-src="/images/shop/product-9.3.jpg"
                        src="/images/shop/product-9.3.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* card product 10 */}
              <div
                className="card-product style-1 grid"
                data-availability="In stock"
                data-brand="gucci"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-10.jpg"
                      src="/images/shop/product-10.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-10.1.jpg"
                      src="/images/shop/product-10.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="on-sale-wrap">
                    <span className="on-sale-item">-25%</span>
                  </div>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Double Standing Desk
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$79.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Blue
                      </span>
                      <span className="swatch-value bg-light-blue" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-10.2.jpg"
                        src="/images/shop/product-10.2.jpg"
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
                        data-src="/images/shop/product-10.3.jpg"
                        src="/images/shop/product-10.3.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* card product 11 */}
              <div
                className="card-product style-1 grid"
                data-availability="In stock"
                data-brand="zalando"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-11.jpg"
                      src="/images/shop/product-11.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-11.1.jpg"
                      src="/images/shop/product-11.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="on-sale-wrap">
                    <span className="on-sale-item">-25%</span>
                  </div>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Duo Standing Desk
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$69.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Orange
                      </span>
                      <span className="swatch-value bg-light-orange" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-11.2.jpg"
                        src="/images/shop/product-11.2.jpg"
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
                        data-src="/images/shop/product-11.3.jpg"
                        src="/images/shop/product-11.3.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* card product 12 */}
              <div
                className="card-product style-1 grid"
                data-availability="In stock"
                data-brand="adidas"
              >
                <div className="card-product-wrapper">
                  <Link href="/products/100" className="image-wrap">
                    <img
                      className="lazyload img-product"
                      data-src="/images/shop/product-12.jpg"
                      src="/images/shop/product-12.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/images/shop/product-12.1.jpg"
                      src="/images/shop/product-12.1.jpg"
                      alt="image-product"
                    />
                  </Link>
                  <div className="list-product-btn">
                    <Link
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </Link>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      aria-controls="compare"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>
                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>
                <div className="card-product-info ">
                  <Link href="/products/100" className="title link">
                    Alumina Lamp
                  </Link>
                  <div className="price text-body-default ">
                    <span className="text-caption-1 old-price">$98.00</span>
                    <span className="current-price">$79.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Brown
                      </span>
                      <span className="swatch-value bg-light-brown" />
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-12.2.jpg"
                        src="/images/shop/product-12.2.jpg"
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
                        data-src="/images/shop/product-12.3.jpg"
                        src="/images/shop/product-12.3.jpg"
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
                        data-src="/images/shop/product-12.4.jpg"
                        src="/images/shop/product-12.4.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* pagination */}
              <ul className="wg-pagination justify-content-center">
                <li>
                  <Link href="#" className="pagination-item text-button">
                    1
                  </Link>
                </li>
                <li className="active">
                  <div className="pagination-item text-button">2</div>
                </li>
                <li>
                  <Link href="#" className="pagination-item text-button">
                    3
                  </Link>
                </li>
                <li>
                  <Link href="#" className="pagination-item text-button">
                    <i className="icon-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}