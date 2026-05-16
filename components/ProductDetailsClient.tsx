"use client";
import { useState } from "react";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductDetailsClient({ productsDetails }: any) {
  const product = productsDetails?.data?.product;
  const allImages = [product?.images?.main, product?.images?.hover].filter(
    Boolean
  );
  const [selectedImage, setSelectedImage] = useState(product?.images?.main);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(
    product?.variants?.sizes?.[0] || ""
  );
  const [selectedColor, setSelectedColor] = useState(
    product?.variants?.colors?.find((c: any) => c.active) ||
      product?.variants?.colors?.[0]
  );
  const [openAccordion, setOpenAccordion] = useState("");
  return (
    <>
      <div className="tf-breadcrumb">
        <div className="container">
          <div className="tf-breadcrumb-wrap">
            <div className="tf-breadcrumb-list">
              <Link href="/" className="text text-caption-1">
                Home
              </Link>

              <i className="icon icon-right" />

              <span className="text_secondary2 text-caption-1">
                {product?.category?.title}
              </span>

              <i className="icon icon-right" />

              <span className="text_secondary2 text-caption-1">
                {product?.title}
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <div className="container">
          <div className="row">
            {/* LEFT IMAGE */}

            <div className="col-md-6">
              <div className="tf-product-media-wrap sticky-top">
                <div className="d-flex gap-3">
                  {/* THUMBNAILS */}

                  <div
                    style={{
                      width: "90px",
                    }}
                  >
                    {allImages?.map((img: string, index: number) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        style={{
                          border:
                            selectedImage === img
                              ? "2px solid black"
                              : "1px solid #ddd",
                          borderRadius: "10px",
                          overflow: "hidden",
                          marginBottom: "10px",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src={img}
                          alt=""
                          style={{
                            width: "100%",
                            height: "90px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* MAIN IMAGE */}

                  <div style={{ flex: 1 }}>
                    <img
                      src={selectedImage}
                      alt=""
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div className="col-md-6">
              <div className="sticky-top">
                <div className="tf-product-info-wrap position-relative">
                  <div className="tf-product-info-list">
                    {/* TITLE */}

                    <div className="tf-product-info-heading">
                      <div className="tf-product-info-name">
                        <h3 className="name">{product?.title}</h3>
                      </div>

                      {/* PRICE */}

                      <div className="tf-product-info-desc">
                        <div className="tf-product-info-price">
                          <h5 className="price-on-sale">
                            ₹{product?.pricing?.sell_price}
                          </h5>

                          <div className="compare-at-price">
                            ₹{product?.pricing?.regular_price}
                          </div>

                          <div className="badges-on-sale text-btn-uppercase">
                            -{product?.pricing?.discount_percentage}%
                          </div>
                        </div>

                        <p>{product?.description}</p>
                      </div>
                    </div>

                    {/* QUANTITY */}

                    <div className="tf-product-info-quantity mt-4">
                      <div className="title mb_12">Quantity:</div>

                      <div className="wg-quantity">
                        <span
                          className="btn-quantity btn-decrease"
                          onClick={() => {
                            if (quantity > 1) {
                              setQuantity(quantity - 1);
                            }
                          }}
                        >
                          -
                        </span>

                        <input
                          className="quantity-product"
                          type="text"
                          value={quantity}
                          readOnly
                        />

                        <span
                          className="btn-quantity btn-increase"
                          onClick={() => {
                            if (quantity < product?.inventory?.stock_quantity) {
                              setQuantity(quantity + 1);
                            }
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>

                    {/* ACCORDION */}

                    <div className="mt-4">
                      {/* SIZE */}

                      {product?.variants?.sizes?.length > 0 && (
                        <div className="border-top pt-3">
                          <div
                            className="d-flex justify-content-between align-items-center"
                            style={{
                              cursor: "pointer",
                              padding: "10px 0",
                            }}
                            onClick={() =>
                              setOpenAccordion(
                                openAccordion === "size" ? "" : "size"
                              )
                            }
                          >
                            <strong>1. Size</strong>

                            <div className="d-flex align-items-center gap-2">
                              <span>{selectedSize}</span>

                              <span
                                style={{
                                  fontSize: "14px",
                                  transition: "0.3s",
                                }}
                              >
                                {openAccordion === "size" ? "▲" : "▼"}
                              </span>
                            </div>
                          </div>

                          {openAccordion === "size" && (
                            <div className="mt-3">
                              <div className="row g-2">
                                {product?.variants?.sizes?.map(
                                  (size: string, index: number) => (
                                    <div className="col-6" key={index}>
                                      <button
                                        className={`option-btn w-100 ${
                                          selectedSize === size ? "active" : ""
                                        }`}
                                        onClick={() => {
                                          setSelectedSize(size);

                                          // AUTO HIDE
                                          setOpenAccordion("");
                                        }}
                                      >
                                        {size}
                                      </button>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* COLOR */}

                      {product?.variants?.colors?.length > 0 && (
                        <div className="border-top pt-3 mt-3">
                          <div
                            className="d-flex justify-content-between align-items-center"
                            style={{
                              cursor: "pointer",
                              padding: "10px 0",
                            }}
                            onClick={() =>
                              setOpenAccordion(
                                openAccordion === "color" ? "" : "color"
                              )
                            }
                          >
                            <strong>2. Colors</strong>

                            <div className="d-flex align-items-center gap-2">
                              <span>{selectedColor?.bg}</span>

                              <span
                                style={{
                                  fontSize: "14px",
                                  transition: "0.3s",
                                }}
                              >
                                {openAccordion === "color" ? "▲" : "▼"}
                              </span>
                            </div>
                          </div>

                          {openAccordion === "color" && (
                            <div className="mt-3">
                              <div className="d-flex flex-wrap gap-2">
                                {product?.variants?.colors?.map(
                                  (color: any, index: number) => (
                                    <div
                                      key={index}
                                      onClick={() => {
                                        setSelectedColor(color);

                                        // AUTO HIDE
                                        setOpenAccordion("");
                                      }}
                                      style={{
                                        width: "35px",
                                        height: "35px",
                                        background: color?.bg,
                                        borderRadius: "50%",
                                        border:
                                          selectedColor?._id === color?._id
                                            ? "3px solid black"
                                            : "1px solid #ddd",
                                        cursor: "pointer",
                                      }}
                                    />
                                  )
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* SUMMARY */}

                    <div className="bg-light p-3 mt-4 rounded">
                      <h6 className="fw-semibold">Selection Summary</h6>

                      <p className="mb-1 small">Size: {selectedSize}</p>

                      <p className="mb-1 small">Color: {selectedColor?.bg}</p>

                      <p className="mb-1 small">Quantity: {quantity}</p>
                    </div>

                    {/* ADD TO CART */}

                    <div className="mt-4">
                      <AddToCartButton
                        productId={product?._id}
                        quantity={quantity}
                        selectedSize={selectedSize}
                        selectedColor={selectedColor}
                        selectedImage={selectedImage}
                      />
                    </div>

                    {/* DELIVERY */}

                    <div className="tf-product-info-help gap-12 mt-4">
                      <div className="tf-product-info-time">
                        <div className="icon">
                          <i className="icon-time" />
                        </div>

                        <p className="text-caption-1">
                          Estimated Delivery:&nbsp;&nbsp;
                          <span>{product?.delivery?.estimated_delivery}</span>
                        </p>
                      </div>
                    </div>

                    {/* SKU */}

                    <ul className="tf-product-info-sku mt-4">
                      <li>
                        <p className="text-caption-1">SKU:</p>

                        <p className="text-caption-1 text-1">
                          {product?.inventory?.sku}
                        </p>
                      </li>

                      <li>
                        <p className="text-caption-1">Available:</p>

                        <p className="text-caption-1 text-1">
                          {product?.inventory?.availability}
                        </p>
                      </li>

                      <li>
                        <p className="text-caption-1">Categories:</p>

                        <p className="text-caption-1">
                          <a href="#" className="text-1 link">
                            {product?.category?.title}
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION TAB */}

      <section className="mt-5">
        <div className="container">
          <div className="widget-tabs style-1">
            {/* TABS */}

            <ul className="widget-menu-tab">
              <li className="item-title active">
                <span className="inner">Description</span>
              </li>

              {/* DISABLED REVIEW */}

              <li
                className="item-title"
                style={{
                  opacity: 0.5,
                  cursor: "not-allowed",
                  pointerEvents: "none",
                }}
              >
                <span className="inner">Customer Reviews (Disabled)</span>
              </li>
            </ul>

            {/* DESCRIPTION */}

            <div className="widget-content-tab">
              <div className="widget-content-inner active">
                <div className="tab-description">
                  <div className="right">
                    <h6 className="mb_12">Product Features</h6>

                    <p className="mb_8 text_secondary">
                      {product?.description}
                    </p>
                  </div>

                  <div className="left">
                    <h6 className="mb_12">Dimensions and weights</h6>

                    <ul>
                      <li className="text-body-default mb_8">
                        Length: &nbsp;
                        <span className="text_secondary">
                          {product?.dimensions_and_weight?.length}
                        </span>
                      </li>

                      <li className="text-body-default mb_8">
                        Width: &nbsp;
                        <span className="text_secondary">
                          {product?.dimensions_and_weight?.width}
                        </span>
                      </li>

                      <li className="text-body-default mb_8">
                        Height: &nbsp;
                        <span className="text_secondary">
                          {product?.dimensions_and_weight?.height}
                        </span>
                      </li>

                      <li className="text-body-default">
                        Weight: &nbsp;
                        <span className="text_secondary">
                          {product?.dimensions_and_weight?.weight}
                        </span>
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
  );
}