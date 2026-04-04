import Breadcrum from "@/components/common/breadcrum";
import Link from "next/link";

export default function Cart() {
    return (
        <>
            <Breadcrum title={"Cart"}/>
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
                                        <Link href="/checkout" className="tf-btn btn-onsurface ">
                                            Process To Checkout
                                            <i className="icon-arrow-up-right" />
                                        </Link>
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
            </section>
        </>
    )
}
