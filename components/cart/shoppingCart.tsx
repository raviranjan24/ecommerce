"use client"
import { useState } from "react";
import Link from "next/link";
import { initialCartItems } from "@/utils/initialCartItems";

const ShopingCart = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const increaseQty = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const decreaseQty = (id: number) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    return (
        <div
            className="modal fullRight fade modal-shopping-cart"
            id="shoppingCart"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="d-flex flex-column h-100" style={{ width: "100%" }}>
                        <div className="header">
                            <h5 className="title">Shopping Cart</h5>
                            <span
                                className="icon-close icon-close-popup"
                                data-bs-dismiss="modal"
                            />
                        </div>
                        <div className="wrap">
                            <div className="tf-mini-cart-wrap">
                                <div className="tf-mini-cart-main">
                                    <div className="tf-mini-cart-sroll">
                                        <div className="tf-mini-cart-items">

                                            {cartItems.length === 0 && (
                                                <p className="text-center py-4">
                                                    Your cart is empty
                                                </p>
                                            )}

                                            {cartItems.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="tf-mini-cart-item file-delete"
                                                >
                                                    <div className="tf-mini-cart-image">
                                                        <img
                                                            className="lazyload"
                                                            src={item.image}
                                                            data-src={item.image}
                                                            alt={item.title}
                                                        />
                                                    </div>

                                                    <div className="tf-mini-cart-info flex-grow-1">
                                                        <div className="content">
                                                            <div className="left">
                                                                <div className="text-title">
                                                                    <Link
                                                                        href={item.slug}
                                                                        className="link line-clamp-1"
                                                                    >
                                                                        {item.title}
                                                                    </Link>
                                                                </div>

                                                                <div className="text-secondary-2">
                                                                    {item.variant}
                                                                </div>

                                                                <div className="wg-quantity">
                                                                    <span
                                                                        className="btn-quantity btn-decrease"
                                                                        onClick={() => decreaseQty(item.id)}
                                                                    >
                                                                        -
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        className="quantity-product"
                                                                        readOnly
                                                                        value={item.qty}
                                                                    />
                                                                    <span
                                                                        className="btn-quantity btn-increase"
                                                                        onClick={() => increaseQty(item.id)}
                                                                    >
                                                                        +
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="right">
                                                                <div
                                                                    className="text-button tf-btn-remove remove"
                                                                    onClick={() => removeItem(item.id)}
                                                                >
                                                                    Remove
                                                                </div>
                                                                <div className="text-button">
                                                                    {item.qty} × ${item.price.toFixed(2)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>

                                {/* Bottom */}
                                <div className="tf-mini-cart-bottom">
                                    <div className="tf-mini-cart-bottom-wrap">
                                        <div className="tf-cart-totals-discounts">
                                            <h5>Subtotal</h5>
                                            <h5 className="tf-totals-total-value">
                                                ${subtotal.toFixed(2)}
                                            </h5>
                                        </div>

                                        <div className="tf-mini-cart-view-checkout">
                                            <Link
                                                href="/shopping-cart"
                                                className="tf-btn w-100 btn-white has-border"
                                            >
                                                View cart
                                            </Link>
                                            <Link
                                                href="/checkout"
                                                className="tf-btn w-100 btn-onsurface"
                                            >
                                                Check Out
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopingCart;