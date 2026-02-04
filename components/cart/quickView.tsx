const QuickView = () => {
    return (
        <>
            <div className="modal fullRight fade modal-quick-view" id="quickView">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="tf-quick-view-image">
                            <div className="wrap-quick-view wrapper-scroll-quickview">
                                <div
                                    className="quickView-item item-scroll-quickview"
                                    data-scroll-quickview="beige"
                                >
                                    <img
                                        className="lazyload"
                                        data-src="images/shop/quickview-slidebar-1.jpg"
                                        src="images/shop/quickview-slidebar-1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="quickView-item item-scroll-quickview"
                                    data-scroll-quickview="gray"
                                >
                                    <img
                                        className="lazyload"
                                        data-src="images/shop/quickview-slidebar-2.jpg"
                                        src="images/shop/quickview-slidebar-2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="quickView-item item-scroll-quickview"
                                    data-scroll-quickview="grey"
                                >
                                    <img
                                        className="lazyload"
                                        data-src="images/shop/quickview-slidebar-3.jpg"
                                        src="images/shop/quickview-slidebar-3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="quickView-item item-scroll-quickview">
                                    <img
                                        className="lazyload"
                                        data-src="images/shop/quickview-slidebar-4.jpg"
                                        src="images/shop/quickview-slidebar-4.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="quickView-item item-scroll-quickview">
                                    <img
                                        className="lazyload"
                                        data-src="images/shop/quickview-slidebar-5.jpg"
                                        src="images/shop/quickview-slidebar-5.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="header">
                                <h5 className="title">Quick View</h5>
                                <span
                                    className="icon-close icon-close-popup"
                                    data-bs-dismiss="modal"
                                />
                            </div>
                            <div className="tf-product-info-list">
                                <div className="tf-product-info-heading">
                                    <div className="tf-product-info-name">
                                        <h3 className="name">Ergonomic Chair Pro</h3>
                                        <div className="sub">
                                            <div className="tf-product-info-rate">
                                                <div className="list-star-default">
                                                    <i className="icon icon-star" />
                                                    <i className="icon icon-star" />
                                                    <i className="icon icon-star" />
                                                    <i className="icon icon-star" />
                                                    <i className="icon icon-star" />
                                                </div>
                                                <div className="text text-caption-1">(134 reviews)</div>
                                            </div>
                                            <div className="tf-product-info-sold">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16.7076 9.80077L7.95759 19.1758C7.86487 19.2747 7.74247 19.3408 7.60888 19.3641C7.47528 19.3874 7.33773 19.3666 7.21699 19.3049C7.09625 19.2432 6.99886 19.1438 6.93953 19.0219C6.88019 18.8999 6.86213 18.762 6.88806 18.6289L8.03338 12.9L3.53103 11.2094C3.43434 11.1732 3.34811 11.1136 3.28005 11.036C3.21199 10.9584 3.16422 10.8651 3.14101 10.7645C3.11779 10.6639 3.11986 10.5591 3.14702 10.4595C3.17418 10.3599 3.22559 10.2686 3.29666 10.1937L12.0467 0.818744C12.1394 0.719788 12.2618 0.653675 12.3954 0.630383C12.529 0.60709 12.6665 0.627882 12.7873 0.68962C12.908 0.751359 13.0054 0.850694 13.0647 0.972636C13.1241 1.09458 13.1421 1.23251 13.1162 1.36562L11.9677 7.10077L16.4701 8.78906C16.5661 8.82547 16.6516 8.88496 16.7191 8.96228C16.7867 9.0396 16.8341 9.13236 16.8573 9.23237C16.8805 9.33237 16.8786 9.43655 16.852 9.53569C16.8253 9.63482 16.7747 9.72587 16.7045 9.80077H16.7076Z"
                                                        fill="#DC9056"
                                                    />
                                                </svg>
                                                <div className="text text-caption-1">
                                                    18&nbsp;sold in last&nbsp;32&nbsp;hours
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tf-product-info-desc">
                                        <div className="tf-product-info-price">
                                            <h5 className="price-on-sale">$79.99</h5>
                                            <div className="compare-at-price">$98.99</div>
                                            <div className="badges-on-sale text-btn-uppercase">-25%</div>
                                        </div>
                                        <p>
                                            The garments labelled as Committed are products that have been
                                            produced using sustainable fibres or processes, reducing their
                                            environmental impact.
                                        </p>
                                        <div className="tf-product-info-liveview">
                                            <i className="icon icon-eye" />
                                            <p className="text-caption-1">
                                                <span className="liveview-count">28</span>
                                                people are viewing this right now
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tf-product-info-choose-option">
                                    <div className="variant-picker-item">
                                        <div className="variant-picker-label mb_12">
                                            Colors:
                                            <span className="text-title variant-picker-label-value">
                                                Beige
                                            </span>
                                        </div>
                                        <div className="variant-picker-values">
                                            <input
                                                id="values-beige1"
                                                type="radio"
                                                name="color2"
                                            //defaultChecked=""
                                            />
                                            <label
                                                className="hover-tooltip tooltip-bot radius-60 color-btn btn-scroll-quickview active"
                                                data-slide={0}
                                                data-price="79.99"
                                                htmlFor="values-beige1"
                                                data-value="Beige"
                                                data-scroll-quickview="beige"
                                            >
                                                <span className="btn-checkbox bg-color-beige1" />
                                                <span className="tooltip">Beige</span>
                                            </label>
                                            <input id="values-gray1" type="radio" name="color2" />
                                            <label
                                                className="hover-tooltip tooltip-bot radius-60 color-btn btn-scroll-quickview"
                                                data-slide={1}
                                                data-price="79.99"
                                                htmlFor="values-gray1"
                                                data-value="Gray"
                                                data-scroll-quickview="gray"
                                            >
                                                <span className="btn-checkbox bg-color-gray" />
                                                <span className="tooltip">Gray</span>
                                            </label>
                                            <input id="values-grey1" type="radio" name="color2" />
                                            <label
                                                className="hover-tooltip tooltip-bot radius-60 color-btn btn-scroll-quickview"
                                                data-slide={2}
                                                data-price="89.99"
                                                htmlFor="values-grey1"
                                                data-value="Grey"
                                                data-scroll-quickview="grey"
                                            >
                                                <span className="btn-checkbox bg-color-grey" />
                                                <span className="tooltip">Grey</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="variant-picker-item">
                                        <div className="d-flex justify-content-between mb_12">
                                            <div className="variant-picker-label">
                                                Size:
                                                <span className="text-title variant-picker-label-value">
                                                    Size c - Large
                                                </span>
                                            </div>
                                            <a className="size-guide text-title link show-size-guide">
                                                Size Guide
                                            </a>
                                        </div>
                                        <div className="variant-picker-values gap12">
                                            <input type="radio" name="size2" id="values-s1" />
                                            <label
                                                className="style-text size-btn"
                                                htmlFor="values-s1"
                                                data-value="Size A - Small"
                                            >
                                                <span className="text-title">Size A - Small</span>
                                            </label>
                                            <input type="radio" name="size2" id="values-m1" />
                                            <label
                                                className="style-text size-btn"
                                                htmlFor="values-m1"
                                                data-price="89.99"
                                                data-value="Size B - Medium"
                                            >
                                                <span className="text-title">Size B - Medium</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="tf-product-info-quantity">
                                        <div className="title mb_12">Quantity:</div>
                                        <div className="wg-quantity">
                                            <span className="btn-quantity btn-decrease">-</span>
                                            <input
                                                className="quantity-product"
                                                type="text"
                                                name="number"
                                                defaultValue={1}
                                            />
                                            <span className="btn-quantity btn-increase">+</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="tf-product-info-by-btn mb_10">
                                            <a className="tf-btn btn-onsurface flex-grow-1   show-shopping-cart">
                                                <span>Add to cart -&nbsp;</span>
                                                <span className="tf-qty-price total-price">$79.99</span>
                                            </a>
                                            <a
                                                href="#compare"
                                                data-bs-toggle="modal"
                                                aria-controls="compare"
                                                className="box-icon hover-tooltip compare  show-compare"
                                            >
                                                <span className="icon icon-compare" />
                                                <span className="tooltip text-caption-2">Compare</span>
                                            </a>
                                            <a
                                                href="javascript:void(0);"
                                                className="box-icon hover-tooltip text-caption-2 wishlist btn-icon-action"
                                            >
                                                <span className="icon icon-heart" />
                                                <span className="tooltip text-caption-2">Wishlist</span>
                                            </a>
                                        </div>
                                        <a href="#" className="tf-btn btn-primary w-full">
                                            Buy it now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuickView