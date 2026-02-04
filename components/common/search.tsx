const Search = () => {
    return (
        <>
            <div className="modal fade modal-search" id="search">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Search</h5>
                            <span
                                className="icon-close icon-close-popup"
                                data-bs-dismiss="modal"
                            />
                        </div>
                        <form className="form-search">
                            <fieldset className="text">
                                <input
                                    type="text"
                                    placeholder="Searching..."
                                    className=""
                                    name="text"
                                    tabIndex={0}
                                    defaultValue=""
                                    aria-required="true"
                                //required=""
                                />
                            </fieldset>
                            <button className="" type="submit">
                                <svg
                                    className="icon"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                        stroke="#181818"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.35 21.0004L17 16.6504"
                                        stroke="#181818"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </form>
                        <div>
                            <h5 className="mb_16">Feature keywords Today</h5>
                            <ul className="list-tags">
                                <li>
                                    <a href="#" className="radius-60 link">
                                        Dresses
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="radius-60 link">
                                        Dresses women
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="radius-60 link">
                                        Dresses midi
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="radius-60 link">
                                        Dress summer
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="mb_16">Recently viewed products</h6>
                            <div
                                className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4 loadmore-item"
                                data-display={4}
                                data-count={4}
                            >
                                <div className="card-product style-1 fl-item">
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
                                            Ergonomic Chair Pro
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
                                <div className="card-product style-1 fl-item">
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
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
                                <div className="card-product style-1 fl-item">
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
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
                                <div className="card-product style-1 fl-item">
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
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
                                <div className="card-product style-1 fl-item">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="image-wrap">
                                            <img
                                                className="lazyload img-product"
                                                data-src="images/shop/product-5.jpg"
                                                src="images/shop/product-5.jpg"
                                                alt="image-product"
                                            />
                                            <img
                                                className="lazyload img-hover"
                                                data-src="images/shop/product-5.1.jpg"
                                                src="images/shop/product-5.1.jpg"
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
                                            Wireless Charging Dock
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
                                                    data-src="images/shop/product-5.2.jpg"
                                                    src="images/shop/product-5.2.jpg"
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
                                                    data-src="images/shop/product-5.3.jpg"
                                                    src="images/shop/product-5.3.jpg"
                                                    alt="image-product"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-product style-1 fl-item">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="image-wrap">
                                            <img
                                                className="lazyload img-product"
                                                data-src="images/shop/product-6.jpg"
                                                src="images/shop/product-6.jpg"
                                                alt="image-product"
                                            />
                                            <img
                                                className="lazyload img-hover"
                                                data-src="images/shop/product-6.1.jpg"
                                                src="images/shop/product-6.1.jpg"
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
                                            Ergonomic Headrest
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
                                                    data-src="images/shop/product-6.jpg"
                                                    src="images/shop/product-6.jpg"
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
                                                    data-src="images/shop/product-6.2.jpg"
                                                    src="images/shop/product-6.2.jpg"
                                                    alt="image-product"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-product style-1 fl-item">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="image-wrap">
                                            <img
                                                className="lazyload img-product"
                                                data-src="images/shop/product-7.jpg"
                                                src="images/shop/product-7.jpg"
                                                alt="image-product"
                                            />
                                            <img
                                                className="lazyload img-hover"
                                                data-src="images/shop/product-7.1.jpg"
                                                src="images/shop/product-7.1.jpg"
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
                                            Hybrid Laptop Sleeve
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
                                                    data-src="images/shop/product-7.2.jpg"
                                                    src="images/shop/product-7.2.jpg"
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
                                                    data-src="images/shop/product-7.3.jpg"
                                                    src="images/shop/product-7.3.jpg"
                                                    alt="image-product"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-product style-1 fl-item">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="image-wrap">
                                            <img
                                                className="lazyload img-product"
                                                data-src="images/shop/product-8.jpg"
                                                src="images/shop/product-8.jpg"
                                                alt="image-product"
                                            />
                                            <img
                                                className="lazyload img-hover"
                                                data-src="images/shop/product-8.1.jpg"
                                                src="images/shop/product-8.1.jpg"
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
                                            Wireless Charging Tray
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
                                                    data-src="images/shop/product-8.2.jpg"
                                                    src="images/shop/product-8.2.jpg"
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
                                                    data-src="images/shop/product-8.3.jpg"
                                                    src="images/shop/product-8.3.jpg"
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
                                                    data-src="images/shop/product-8.4.jpg"
                                                    src="images/shop/product-8.4.jpg"
                                                    alt="image-product"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-product style-1 fl-item">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="image-wrap">
                                            <img
                                                className="lazyload img-product"
                                                data-src="images/shop/product-9.jpg"
                                                src="images/shop/product-9.jpg"
                                                alt="image-product"
                                            />
                                            <img
                                                className="lazyload img-hover"
                                                data-src="images/shop/product-9.1.jpg"
                                                src="images/shop/product-9.1.jpg"
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
                                            Softside Chair
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
                                                    data-src="images/shop/product-9.2.jpg"
                                                    src="images/shop/product-9.2.jpg"
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
                                                    data-src="images/shop/product-9.3.jpg"
                                                    src="images/shop/product-9.3.jpg"
                                                    alt="image-product"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-product style-1 fl-item">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="image-wrap">
                                            <img
                                                className="lazyload img-product"
                                                data-src="images/shop/product-10.jpg"
                                                src="images/shop/product-10.jpg"
                                                alt="image-product"
                                            />
                                            <img
                                                className="lazyload img-hover"
                                                data-src="images/shop/product-10.1.jpg"
                                                src="images/shop/product-10.1.jpg"
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
                                            Double Standing Desk
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
                                                    data-src="images/shop/product-10.2.jpg"
                                                    src="images/shop/product-10.2.jpg"
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
                                                    data-src="images/shop/product-10.3.jpg"
                                                    src="images/shop/product-10.3.jpg"
                                                    alt="image-product"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-product style-1 fl-item">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="image-wrap">
                                            <img
                                                className="lazyload img-product"
                                                data-src="images/shop/product-11.jpg"
                                                src="images/shop/product-11.jpg"
                                                alt="image-product"
                                            />
                                            <img
                                                className="lazyload img-hover"
                                                data-src="images/shop/product-11.1.jpg"
                                                src="images/shop/product-11.1.jpg"
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
                                            Duo Standing Desk
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
                                                    data-src="images/shop/product-11.2.jpg"
                                                    src="images/shop/product-11.2.jpg"
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
                                                    data-src="images/shop/product-11.3.jpg"
                                                    src="images/shop/product-11.3.jpg"
                                                    alt="image-product"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-product style-1 fl-item">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="image-wrap">
                                            <img
                                                className="lazyload img-product"
                                                data-src="images/shop/product-12.jpg"
                                                src="images/shop/product-12.jpg"
                                                alt="image-product"
                                            />
                                            <img
                                                className="lazyload img-hover"
                                                data-src="images/shop/product-12.1.jpg"
                                                src="images/shop/product-12.1.jpg"
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
                                                className="box-icon compare "
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip">Compare</span>
                                            </a>
                                            <a
                                                href="#quickView"
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
                                        <a href="product-detail.html" className="title link">
                                            Alumina Lamp
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
                                                    data-src="images/shop/product-12.2.jpg"
                                                    src="images/shop/product-12.2.jpg"
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
                                                    data-src="images/shop/product-12.3.jpg"
                                                    src="images/shop/product-12.3.jpg"
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
                                                    data-src="images/shop/product-12.4.jpg"
                                                    src="images/shop/product-12.4.jpg"
                                                    alt="image-product"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Load Item */}
                        <div className="wd-load view-more-button text-center">
                            <button className="tf-loading btn-loadmore tf-btn btn-reset">
                                <span className="text text-btn text-btn-uppercase">Load more</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search