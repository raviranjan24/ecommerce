import Link from "next/link"

const MostSellerProducts = () => {
    return (
        <>
            <section className="flat-spacing-5 pt-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading-section text-center">
                                <h3 className="wow fadeInUp">Our Picks For You</h3>
                                <p
                                    className="text-body-default text_secondary wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    Fresh styles just in! Elevate your look.
                                </p>
                            </div>
                            <div className="tf-grid-layout tf-col-2 lg-col-4 ">
                                <div
                                    className="card-product style-1 wow fadeInUp"
                                    data-wow-delay="0s"
                                >
                                    <div className="card-product-wrapper">
                                        <Link href="/products/100" className="image-wrap">
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
                                                className="box-icon compare "
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
                                        <Link href="/products/100"
                                            className=" text-title title link"
                                        >
                                            Ergonomic Chair Pro
                                        </Link>
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
                                <div
                                    className="card-product style-1 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="card-product-wrapper">
                                        <Link href="/products/100" className="image-wrap">
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
                                                className="box-icon compare "
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
                                        <Link href="/products/100"
                                            className=" text-title title link"
                                        >
                                            Open Box - Adjustable Laptop Stand
                                        </Link>
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
                                <div
                                    className="card-product style-1 wow fadeInUp"
                                    data-wow-delay="0.2s"
                                >
                                    <div className="card-product-wrapper">
                                        <Link href="/products/100" className="image-wrap">
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
                                                className="box-icon compare "
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
                                        <Link href="/products/100"
                                            className=" text-title title link"
                                        >
                                            Laptop Stand
                                        </Link>
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
                                <div
                                    className="card-product style-1 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <div className="card-product-wrapper">
                                        <Link href="/products/100" className="image-wrap">
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
                                                className="box-icon compare "
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
                                        <Link href="/products/100"
                                            className=" text-title title link"
                                        >
                                            Double Standing Desk
                                        </Link>
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
                                    data-wow-delay="0s"
                                >
                                    <div className="card-product-wrapper">
                                        <Link href="/products/100" className="image-wrap">
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
                                                className="box-icon compare "
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
                                        <Link href="/products/100"
                                            className=" text-title title link"
                                        >
                                            Wireless Charging Dock
                                        </Link>
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
                                <div
                                    className="card-product style-1 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="card-product-wrapper">
                                        <Link href="/products/100" className="image-wrap">
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
                                                className="box-icon compare "
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
                                        <Link href="/products/100"
                                            className=" text-title title link"
                                        >
                                            Ergonomic Headrest
                                        </Link>
                                        <div className="price text-body-default ">$79.99</div>
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
                                <div
                                    className="card-product style-1 wow fadeInUp"
                                    data-wow-delay="0.2s"
                                >
                                    <div className="card-product-wrapper">
                                        <Link href="/products/100" className="image-wrap">
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
                                                className="box-icon compare "
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
                                        <Link href="/products/100"
                                            className=" text-title title link"
                                        >
                                            Hybrid Laptop Sleeve
                                        </Link>
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
                                <div
                                    className="card-product style-1 wow fadeInUp"
                                    data-wow-delay="0.3s"
                                >
                                    <div className="card-product-wrapper">
                                        <Link href="/products/100" className="image-wrap">
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
                                                className="box-icon compare "
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
                                        <Link href="/products/100"
                                            className=" text-title title link"
                                        >
                                            Wireless Charging Tray
                                        </Link>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MostSellerProducts