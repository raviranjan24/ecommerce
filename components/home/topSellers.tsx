const TopSellers = () => {
    return (
        <>
            <section className="flat-spacing-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading-section style-2">
                                <div className="left">
                                    <h3 className="wow fadeInUp">Shop Top Sellers</h3>
                                    <p
                                        className="text-body-default text_secondary wow fadeInUp"
                                        data-wow-delay="0s"
                                    >
                                        Fresh styles just in! Elevate your look.
                                    </p>
                                </div>
                                <div className="right wow fadeInUp">
                                    <a href="shop-default.html" className="btn-line">
                                        <span>View All Products</span>
                                    </a>
                                </div>
                            </div>
                            <div className="sw-button-over">
                                <div
                                    className="swiper tf-sw-collection"
                                    data-preview={4}
                                    data-tablet={3}
                                    data-mobile-sm={2}
                                    data-mobile={1}
                                    data-space-lg={30}
                                    data-space-md={20}
                                    data-space={15}
                                    data-loop="false"
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
                                                    <a
                                                        href="product-detail.html"
                                                        className=" text-title title link"
                                                    >
                                                        Softside Chair
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
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="card-product style-1 wow fadeInUp"
                                                data-wow-delay="0s"
                                            >
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
                                                    <a
                                                        href="product-detail.html"
                                                        className=" text-title title link"
                                                    >
                                                        Softside Chair
                                                    </a>
                                                    <div className="price text-body-default ">
                                                        <span className="text-caption-1 old-price">
                                                            $98.00
                                                        </span>
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
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="card-product style-1 wow fadeInUp"
                                                data-wow-delay="0s"
                                            >
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
                                                    <a
                                                        href="product-detail.html"
                                                        className=" text-title title link"
                                                    >
                                                        Double Standing Desk
                                                    </a>
                                                    <div className="price text-body-default ">
                                                        <span className="text-caption-1 old-price">
                                                            $98.00
                                                        </span>
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
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="card-product style-1 wow fadeInUp"
                                                data-wow-delay="0s"
                                            >
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
                                                    <a
                                                        href="product-detail.html"
                                                        className=" text-title title link"
                                                    >
                                                        Duo Standing Desk
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
                                        <div className="swiper-slide">
                                            <div className="card-product style-1">
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
                                                    <a
                                                        href="product-detail.html"
                                                        className=" text-title title link"
                                                    >
                                                        Alumina Lamp
                                                    </a>
                                                    <div className="price text-body-default ">
                                                        <span className="text-caption-1 old-price">
                                                            $98.00
                                                        </span>
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
                                    </div>
                                    <div className="wrap-pagination d-lg-none d-block">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="sw-pagination-collection sw-dots  type-circle d-flex justify-content-center"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sw-button swiper-button-next nav-next-collection has-border d_lg_none " />
                                <div className="sw-button swiper-button-prev nav-prev-collection has-border d_lg_none " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopSellers