import Link from "next/link";

export default function Cart() {
    return (
        <>
            <div className="page-title relative">
                <div
                    className="paralaximg"
                    data-parallax="scroll"
                    data-image-src="/images/page-title/page-title-3.jpg"
                ></div>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="title">Cart</h3>
                                <ul className="breadcrumb">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>Shopping Cart</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /.page-title */}
            {/* section-cart */}
            <section className="flat-spacing pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <form>
                                <table className="tf-table-page-cart">
                                    <thead>
                                        <tr>
                                            <th>Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="tf-cart-item file-delete">
                                            <td className="tf-cart-item_product">
                                                <a href="product-detail.html" className="img-box">
                                                    <img src="/images/shop/product-4.jpg" alt="product" />
                                                </a>
                                                <div className="cart-info">
                                                    <a
                                                        href="product-detail.html"
                                                        className="cart-title link"
                                                    >
                                                        Open Box - Adjustable...
                                                    </a>
                                                    <div className="variant text-caption-1">
                                                        Gray, Size C
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                data-cart-title="Price"
                                                className="tf-cart-item_price text-center"
                                            >
                                                <div className="cart-price text-button price-on-sale">
                                                    $60.00
                                                </div>
                                            </td>
                                            <td
                                                data-cart-title="Quantity"
                                                className="tf-cart-item_quantity"
                                            >
                                                <div className="wg-quantity mx-md-auto">
                                                    <span className="btn-quantity btn-decrease">-</span>
                                                    <input
                                                        type="text"
                                                        className="quantity-product"
                                                        name="number"
                                                        defaultValue={1}
                                                    />
                                                    <span className="btn-quantity btn-increase">+</span>
                                                </div>
                                            </td>
                                            <td
                                                data-cart-title="Total"
                                                className="tf-cart-item_total text-center"
                                            >
                                                <div className="cart-total text-button total-price">
                                                    $60.00
                                                </div>
                                            </td>
                                            <td data-cart-title="Remove" className="remove-cart">
                                                <span className="remove icon icon-close" />
                                            </td>
                                        </tr>
                                        <tr className="tf-cart-item file-delete">
                                            <td className="tf-cart-item_product">
                                                <a href="product-detail.html" className="img-box">
                                                    <img src="/images/shop/product-6.jpg" alt="product" />
                                                </a>
                                                <div className="cart-info">
                                                    <a
                                                        href="product-detail.html"
                                                        className="cart-title link"
                                                    >
                                                        Ergonomic Chair Pro
                                                    </a>
                                                    <div className="variant text-caption-1">
                                                        Gray, Size C
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                data-cart-title="Price"
                                                className="tf-cart-item_price text-center"
                                            >
                                                <div className="cart-price text-button price-on-sale">
                                                    $40.00
                                                </div>
                                            </td>
                                            <td
                                                data-cart-title="Quantity"
                                                className="tf-cart-item_quantity"
                                            >
                                                <div className="wg-quantity mx-md-auto">
                                                    <span className="btn-quantity btn-decrease">-</span>
                                                    <input
                                                        type="text"
                                                        className="quantity-product"
                                                        name="number"
                                                        defaultValue={1}
                                                    />
                                                    <span className="btn-quantity btn-increase">+</span>
                                                </div>
                                            </td>
                                            <td
                                                data-cart-title="Total"
                                                className="tf-cart-item_total text-center"
                                            >
                                                <div className="cart-total text-button total-price">
                                                    $40.00
                                                </div>
                                            </td>
                                            <td data-cart-title="Remove" className="remove-cart">
                                                <span className="remove icon icon-close" />
                                            </td>
                                        </tr>
                                        <tr className="tf-cart-item file-delete">
                                            <td className="tf-cart-item_product">
                                                <a href="product-detail.html" className="img-box">
                                                    <img src="/images/shop/product-1.jpg" alt="product" />
                                                </a>
                                                <div className="cart-info">
                                                    <a
                                                        href="product-detail.html"
                                                        className="cart-title link"
                                                    >
                                                        Double Standing Desk
                                                    </a>
                                                    <div className="variant text-caption-1">
                                                        Gray, Size C
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                data-cart-title="Price"
                                                className="tf-cart-item_price text-center"
                                            >
                                                <div className="cart-price">
                                                    <span className="old-price">$80.00</span>
                                                    <span className="text-button new-price price-on-sale">
                                                        $129.00
                                                    </span>
                                                </div>
                                            </td>
                                            <td
                                                data-cart-title="Quantity"
                                                className="tf-cart-item_quantity"
                                            >
                                                <div className="wg-quantity mx-md-auto">
                                                    <span className="btn-quantity btn-decrease">-</span>
                                                    <input
                                                        type="text"
                                                        className="quantity-product"
                                                        name="number"
                                                        defaultValue={1}
                                                    />
                                                    <span className="btn-quantity btn-increase">+</span>
                                                </div>
                                            </td>
                                            <td
                                                data-cart-title="Total"
                                                className="tf-cart-item_total text-center"
                                            >
                                                <div className="cart-total text-button total-price">
                                                    $129.00
                                                </div>
                                            </td>
                                            <td data-cart-title="Remove" className="remove-cart">
                                                <span className="remove icon icon-close" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="ip-discount-code">
                                    <input type="text" placeholder="Add voucher discount" />
                                    <button className="tf-btn btn-onsurface">Apply Code</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-4">
                            <div className="fl-sidebar-cart">
                                <div className="box-order bg-surface">
                                    <h5 className="title">Order Summary</h5>
                                    <div className="subtotal text-button d-flex justify-content-between align-items-center">
                                        <span>Subtotal</span>
                                        <span className="total">-$80.00</span>
                                    </div>
                                    <div className="discount text-button d-flex justify-content-between align-items-center">
                                        <span>Discounts</span>
                                        <span className="total">-$80.00</span>
                                    </div>
                                    <div className="ship">
                                        <span className="text-button">Shipping</span>
                                        <div className="flex-grow-1">
                                            <fieldset className="ship-item">
                                                <input
                                                    type="radio"
                                                    name="ship-check"
                                                    className="tf-check-rounded"
                                                    id="free"
                                                />
                                                <label htmlFor="free">
                                                    <span>Free Shipping</span>
                                                    <span className="price">$0.00</span>
                                                </label>
                                            </fieldset>
                                            <fieldset className="ship-item">
                                                <input
                                                    type="radio"
                                                    name="ship-check"
                                                    className="tf-check-rounded"
                                                    id="local"
                                                />
                                                <label htmlFor="local">
                                                    <span>Local:</span>
                                                    <span className="price">$35.00</span>
                                                </label>
                                            </fieldset>
                                            <fieldset className="ship-item">
                                                <input
                                                    type="radio"
                                                    name="ship-check"
                                                    className="tf-check-rounded"
                                                    id="rate"
                                                />
                                                <label htmlFor="rate">
                                                    <span>Flat Rate:</span>
                                                    <span className="price">$35.00</span>
                                                </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <h5 className="total-order d-flex justify-content-between align-items-center">
                                        <span>Total</span>
                                        <span className="total">$186,99</span>
                                    </h5>
                                    <div className="box-progress-checkout">
                                        <fieldset className="check-agree">
                                            <input
                                                type="checkbox"
                                                id="check-agree"
                                                className="tf-check-rounded"
                                            />
                                            <label htmlFor="check-agree">
                                                I agree with the{" "}
                                                <a href="term-of-use.html" className="link">
                                                    terms and conditions
                                                </a>
                                            </label>
                                        </fieldset>
                                        <a href="checkout.html" className="tf-btn btn-onsurface ">
                                            Process To Checkout
                                            <i className="icon-arrow-up-right" />
                                        </a>
                                        <a
                                            href="shop-default.html"
                                            className="text-button text-center link"
                                        >
                                            Or continue shopping
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{" "}
            {/* section-cart */}
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
                                    </div>
                                </div>
                                <div className="sw-pagination-latest sw-dots type-circle justify-content-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
