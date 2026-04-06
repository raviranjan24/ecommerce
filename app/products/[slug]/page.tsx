// import RelatedProducts from "@/components/product/RelatedProducts";
import { getSIngleProductDetails } from "@/services/public/service";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

export default async function Products({ params }: { params: { slug: any } }) {
  const resolvedParams = await params;
  const id = resolvedParams.slug;
  const productsDetails: any = await getSIngleProductDetails(id);
  // console.log("productsDetails", productsDetails?.data?.product);
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
                {productsDetails?.data?.product?.category?.title}
              </span>
              <i className="icon icon-right" />
              <span className="text_secondary2 text-caption-1">
                {productsDetails?.data?.product?.name}
              </span>
            </div>
            <div className="tf-breadcrumb-prev-next">
              <a
                href="product-thumbnails-bottom.html"
                className="tf-breadcrumb-prev"
              >
                <i className="icon icon-left" />
              </a>
              <a
                href="product-thumbnails-bottom.html"
                className="tf-breadcrumb-back"
              >
                <i className="icon icon-squaresfour" />
              </a>
              <a
                href="product-thumbnails-bottom.html"
                className="tf-breadcrumb-next"
              >
                <i className="icon icon-right" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tf-product-media-wrap sticky-top">
                <div className="thumbs-slider">
                  <div
                    dir="ltr"
                    className="swiper tf-product-media-thumbs other-image-zoom"
                    data-direction="vertical"
                  >
                    <div className="swiper-wrapper stagger-wrap">
                      <div className="swiper-slide stagger-item" data-color="gray">
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src={productsDetails?.data?.product?.image}
                            src={productsDetails?.data?.product?.image}
                            alt=""
                            data-zoom={productsDetails?.data?.product?.image}
                          />
                        </div>
                      </div>
                      <div className="swiper-slide stagger-item" data-color="grey">
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src={productsDetails?.data?.product?.image}
                            src={productsDetails?.data?.product?.image}
                            data-zoom={productsDetails?.data?.product?.image}
                            alt=""
                          />
                        </div>
                      </div>
                      {/* <div className="swiper-slide stagger-item" data-color="beige">
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src="/images/shop/product-1.2.jpg"
                            src="/images/shop/product-1.2.jpg"
                            alt=""
                          />
                        </div>
                      </div> */}
                      {/* <div className="swiper-slide stagger-item" data-color="beige">
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src="/images/shop/product-1.3.jpg"
                            src="/images/shop/product-1.3.jpg"
                            alt=""
                          />
                        </div>
                      </div> */}
                      {/* <div className="swiper-slide stagger-item" data-color="beige">
                        <div className="item">
                          <img
                            className="lazyload"
                            data-src="/images/shop/product-1.4.jpg"
                            src="/images/shop/product-1.4.jpg"
                            alt=""
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div
                    dir="ltr"
                    className="swiper tf-product-media-main"
                    id="gallery-swiper-started"
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide" data-color="gray">
                        <a
                          href={productsDetails?.data?.product?.image}
                          target="_blank"
                          className="item"
                          data-pswp-width="600px"
                          data-pswp-height="600px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom={productsDetails?.data?.product?.image}
                            data-src={productsDetails?.data?.product?.image}
                            src={productsDetails?.data?.product?.image}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="swiper-slide" data-color="grey">
                        <a
                          href={productsDetails?.data?.product?.image}
                          target="_blank"
                          className="item"
                          data-pswp-width="600px"
                          data-pswp-height="600px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-src={productsDetails?.data?.product?.image}
                            data-zoom={productsDetails?.data?.product?.image}
                            src={productsDetails?.data?.product?.image}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="swiper-slide" data-color="beige">
                        <a
                          href="/images/shop/product-1.2.jpg"
                          target="_blank"
                          className="item"
                          data-pswp-width="600px"
                          data-pswp-height="600px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="/images/shop/product-1.2.jpg"
                            data-src="/images/shop/product-1.2.jpg"
                            src="/images/shop/product-1.2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="swiper-slide" data-color="beige">
                        <a
                          href="/images/shop/product-1.3.jpg"
                          target="_blank"
                          className="item"
                          data-pswp-width="600px"
                          data-pswp-height="600px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="/images/shop/product-1.3.jpg"
                            data-src="/images/shop/product-1.3.jpg"
                            src="/images/shop/product-1.3.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="swiper-slide" data-color="beige">
                        <a
                          href="/images/shop/product-1.4.jpg"
                          target="_blank"
                          className="item"
                          data-pswp-width="600px"
                          data-pswp-height="600px"
                        >
                          <img
                            className="tf-image-zoom lazyload"
                            data-zoom="/images/shop/product-1.4.jpg"
                            data-src="/images/shop/product-1.4.jpg"
                            src="/images/shop/product-1.4.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sticky-top">
                <div className="tf-product-info-wrap position-relative">
                  <div className="tf-zoom-main" />
                  <div className="tf-product-info-list other-image-zoom">
                    <div className="tf-product-info-heading">
                      <div className="tf-product-info-name">
                        <h3 className="name">{productsDetails?.data?.product?.name}</h3>
                        <div className="sub">
                          <div className="tf-product-tag text-caption-1">
                            Best Seller
                          </div>
                          <div className="tf-product-info-rate">
                            <div className="list-star-default">
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                            </div>
                            <div className="text text-caption-1">({productsDetails?.data?.product?.reviews_summary?.total_reviews} reviews)</div>
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
                          <h5 className="price-on-sale">
                            ₹{productsDetails?.data?.product?.price}
                          </h5>
                          <div className="compare-at-price">
                            ₹{productsDetails?.data?.product?.price + productsDetails?.data?.product?.discount}
                          </div>
                          <div className="badges-on-sale text-btn-uppercase">
                            -{productsDetails?.data?.product?.discount}%
                          </div>
                        </div>
                        <p>
                          {productsDetails?.data?.product?.description}
                        </p>
                      </div>
                    </div>
                    <div className="tf-product-info-choose-option gap-19 ">
                      <div className="variant-picker-item">
                        <div className="variant-picker-label mb_12">
                          Colors:
                          <span className="text-title variant-picker-label-value value-currentColor">
                            Gray
                          </span>
                        </div>
                        <div className="variant-picker-values">
                          <input id="values-beige" type="radio" name="color1" />
                          <label
                            className="hover-tooltip tooltip-bot radius-60 color-btn"
                            htmlFor="values-beige"
                            data-value="Beige"
                            data-color="beige"
                          >
                            <span className="btn-checkbox bg-color-beige1" />
                            <span className="tooltip">Beige</span>
                          </label>
                          <input
                            id="values-gray"
                            type="radio"
                            name="color1"
                          />
                          <label
                            className="hover-tooltip tooltip-bot radius-60 color-btn"
                            data-price="79.99"
                            htmlFor="values-gray"
                            data-value="Gray"
                            data-color="gray"
                          >
                            <span className="btn-checkbox bg-color-gray" />
                            <span className="tooltip">Gray</span>
                          </label>
                          <input id="values-grey" type="radio" name="color1" />
                          <label
                            className="hover-tooltip tooltip-bot radius-60 color-btn"
                            data-price="89.99"
                            htmlFor="values-grey"
                            data-value="Grey"
                            data-color="grey"
                          >
                            <span className="btn-checkbox bg-color-grey" />
                            <span className="tooltip">Grey</span>
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
                      {/* Accordion */}
                      <div className="accordion" id="productAccordion">

                        {/* 1. Size */}
                        <div className="accordion-item border-0 border-top">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed px-0 shadow-none"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSize"
                            >
                              <div className="w-100 d-flex justify-content-between">
                                <span><strong>1. Size</strong></span>
                                <span className="text-muted">88" 2-Seat Sofa</span>
                              </div>
                            </button>
                          </h2>

                          <div
                            id="collapseSize"
                            className="accordion-collapse collapse"
                            data-bs-parent="#productAccordion"
                          >
                            <div className="accordion-body px-0">
                              <div className="row g-2">
                                <div className="col-6">
                                  <button className="option-btn w-100">
                                    66" 2-Seat Loveseat
                                  </button>
                                </div>
                                <div className="col-6">
                                  <button className="option-btn w-100">
                                    76" 2-Seat Sofa
                                  </button>
                                </div>
                                <div className="col-6">
                                  <button className="option-btn active w-100">
                                    88" 2-Seat Sofa
                                  </button>
                                </div>
                                <div className="col-6">
                                  <button className="option-btn w-100">
                                    88" 3-Seat Sofa
                                  </button>
                                </div>
                                <div className="col-6">
                                  <button className="option-btn w-100">
                                    105" 3-Seat Sofa
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 2. Depth */}
                        <div className="accordion-item border-0 border-top">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed px-0 shadow-none"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseDepth"
                            >
                              <div className="w-100 d-flex justify-content-between">
                                <span><strong>2. Depth</strong></span>
                                <span className="text-muted">Regular: 43"</span>
                              </div>
                            </button>
                          </h2>

                          <div
                            id="collapseDepth"
                            className="accordion-collapse collapse"
                            data-bs-parent="#productAccordion"
                          >
                            <div className="accordion-body px-0">
                              <div className="row g-2">
                                <div className="col-6">
                                  <button className="option-btn w-100 active">
                                    Regular 43"
                                  </button>
                                </div>
                                <div className="col-6">
                                  <button className="option-btn w-100">
                                    Deep 47"
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 3. Cushion */}
                        <div className="accordion-item border-0 border-top">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed px-0 shadow-none"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseCushion"
                            >
                              <div className="w-100 d-flex justify-content-between">
                                <span><strong>3. Cushion Options</strong></span>
                                <span className="text-muted">Multi-Cushion</span>
                              </div>
                            </button>
                          </h2>

                          <div
                            id="collapseCushion"
                            className="accordion-collapse collapse"
                            data-bs-parent="#productAccordion"
                          >
                            <div className="accordion-body px-0">
                              <div className="row g-2">
                                <div className="col-6">
                                  <button className="option-btn w-100 active">
                                    Multi-Cushion
                                  </button>
                                </div>
                                <div className="col-6">
                                  <button className="option-btn w-100">
                                    Bench Cushion
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Selection Summary */}
                      <div className="bg-light p-3 mt-4">
                        <h6 className="fw-semibold">Selection Summary</h6>
                        <p className="mb-1 small">Size: 88" 2-Seat Sofa</p>
                        <p className="mb-1 small">Depth: Regular 43"</p>
                        <p className="mb-1 small">Cushion: Multi-Cushion</p>
                      </div>
                      <div>
                        <div className="tf-product-info-by-btn mb_12">
                          <AddToCartButton
                            productId={productsDetails?.data?.product?._id}
                          />
                          {/* <a className="tf-btn btn-onsurface flex-grow-1   show-shopping-cart">
                            <span>Add to cart -&nbsp;</span>
                            <span className="tf-qty-price total-price">$79.99</span>
                          </a> */}
                        </div>

                      </div>
                      <div className="tf-product-info-help gap-12">
                        <div className="wrap">
                          <div className="dropdown dropdown-store-location">
                            <div
                              className="dropdown-title dropdown-backdrop"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                            >
                              <div className="tf-product-info-view link">
                                <span>View Store Information</span>
                              </div>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end">
                              <div className="dropdown-content">
                                <div className="dropdown-content-heading">
                                  <h5>Store Location</h5>
                                  <i className="icon icon-close" />
                                </div>
                                <div className="line-bt" />
                                <div>
                                  <h6>Fashion GearO</h6>
                                  <p>Pickup available. Usually ready in 24 hours</p>
                                </div>
                                <div>
                                  <p>766 Rosalinda Forges Suite 044,</p>
                                  <p>Gracielahaven, Oregon</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tf-product-info-time">
                          <div className="icon">
                            <i className="icon-time" />
                          </div>
                          <p className="text-caption-1">
                            Estimated Delivery:&nbsp;&nbsp;<span>
                              {productsDetails?.data?.product?.delivery?.estimated_delivery}
                            </span>
                          </p>
                        </div>
                        <div className="tf-product-info-return">
                          <div className="icon">
                            <i className="icon-arrowclockwise" />
                          </div>
                          <p className="text-caption-1">
                            Return within <span>45 days</span> of purchase. Duties
                            &amp; taxes are non-refundable.
                          </p>
                        </div>
                        <div className="tf-product-info-extra-link">
                          <a
                            href="#delivery_return"
                            data-bs-toggle="modal"
                            className="tf-product-extra-icon"
                          >
                            <div className="icon">
                              <i className="icon-shipping" />
                            </div>
                            <p className="text-caption-1">Delivery &amp; Return</p>
                          </a>
                          <a
                            href="#ask_question"
                            data-bs-toggle="modal"
                            className="tf-product-extra-icon"
                          >
                            <div className="icon">
                              <i className="icon-question" />
                            </div>
                            <p className="text-caption-1">Ask A Question</p>
                          </a>
                          <a
                            href="#share_social"
                            data-bs-toggle="modal"
                            className="tf-product-extra-icon"
                          >
                            <div className="icon">
                              <i className="icon-share" />
                            </div>
                            <p className="text-caption-1">Share</p>
                          </a>
                        </div>
                      </div>
                      <ul className="tf-product-info-sku">
                        <li>
                          <p className="text-caption-1">SKU:</p>
                          <p className="text-caption-1 text-1">4321234</p>
                        </li>
                        <li>
                          <p className="text-caption-1">Vendor:</p>
                          <p className="text-caption-1 text-1">GearO</p>
                        </li>
                        <li>
                          <p className="text-caption-1">Available:</p>
                          <p className="text-caption-1 text-1">
                            {productsDetails?.data?.product?.inventory?.availability}
                          </p>
                        </li>
                        <li>
                          <p className="text-caption-1">Categories:</p>
                          <p className="text-caption-1">
                            <a href="#" className="text-1 link">
                              {productsDetails?.data?.product?.category?.title}
                            </a>
                            ,
                            <a href="#" className="text-1 link">
                              {productsDetails?.data?.product?.category?.title}
                            </a>

                          </p>
                        </li>
                      </ul>
                      <div className="tf-product-info-guranteed">
                        <div className="text-title">Guranteed safe checkout:</div>
                        <div className="tf-payment d-flex">
                          <a href="#">
                            <img src="/images/payment/payment-1.png" alt="" />
                          </a>
                          <a href="#">
                            <img src="/images/payment/payment-2.png" alt="" />
                          </a>
                          <a href="#">
                            <img src="/images/payment/payment-3.png" alt="" />
                          </a>
                          <a href="#">
                            <img src="/images/payment/payment-4.png" alt="" />
                          </a>
                          <a href="#">
                            <img src="/images/payment/payment-5.png" alt="" />
                          </a>
                          <a href="#">
                            <img src="/images/payment/payment-6.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-sticky-btn-atc">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <form className="form-sticky-atc">
                  <div className="tf-sticky-atc-product">
                    <div className="image">
                      <img
                        className="lazyload"
                        data-src="/images/shop/product-1.jpg"
                        alt=""
                        src="/images/shop/product-1.jpg"
                      />
                    </div>
                    <div className="content">
                      <div className="text-title">Biker-style leggings</div>
                      <div className="text-caption-1 text-secondary-2">
                        Green, XS, Cotton
                      </div>
                      <div className="text-title">$68.00</div>
                    </div>
                  </div>
                  <div className="tf-sticky-atc-infos">
                    <div className="tf-sticky-atc-size d-flex gap-12 align-items-center">
                      <div className="tf-sticky-atc-infos-title text-title">
                        Size:
                      </div>
                      <div
                        className="tf-dropdown-sort style-2"
                        data-bs-toggle="dropdown"
                      >
                        <div className="btn-select">
                          <span className="text-sort-value font-2">M</span>
                          <span className="icon icon-down" />
                        </div>
                        <div className="dropdown-menu">
                          <div className="select-item">
                            <span className="text-value-item">S</span>
                          </div>
                          <div className="select-item active">
                            <span className="text-value-item">M</span>
                          </div>
                          <div className="select-item">
                            <span className="text-value-item">L</span>
                          </div>
                          <div className="select-item">
                            <span className="text-value-item">XL</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-sticky-atc-quantity d-flex gap-12 align-items-center">
                      <div className="tf-sticky-atc-infos-title text-title">
                        Quantity:
                      </div>
                      <div className="wg-quantity style-1">
                        <span className="btn-quantity minus-btn">-</span>
                        <input type="text" name="number" defaultValue={1} />
                        <span className="btn-quantity plus-btn">+</span>
                      </div>
                    </div>
                    <div className="tf-sticky-atc-btns">
                      <a
                        href="#shoppingCart"
                        data-bs-toggle="modal"
                        className="tf-btn btn-onsurface w-100 radius-4 btn-add-to-cart"
                      >
                        <span className="text text-btn-uppercase">Add To Cart</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Section product */}
      <br />
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-tabs style-1">
                <ul className="widget-menu-tab">
                  <li className="item-title active">
                    <span className="inner">Description</span>
                  </li>
                  <li className="item-title">
                    <span className="inner">Customer Reviews</span>
                  </li>
                  <li className="item-title">
                    <span className="inner">Shipping &amp; Returns</span>
                  </li>
                  <li className="item-title">
                    <span className="inner">Return Policies</span>
                  </li>
                </ul>
                <div className="widget-content-tab">
                  <div className="widget-content-inner active">
                    <div className="tab-description">
                      <div className="right">
                        <h6 className=" mb_12">Product Features</h6>
                        <p className="mb_8 text_secondary">
                          Breathable suspension keeps you cool and comfortable.
                        </p>
                        <p className=" mb_8 text_secondary">
                          Three chair sizes mean the most comfort to the largest
                          range of users.
                        </p>
                        <p className="text_secondary">
                          Adjustable PostureFit SL pads provide lumbar support and
                          stabilize the base of the spine.
                        </p>
                      </div>
                      <div className="left">
                        <h6 className="mb_12">Dimensions and weights</h6>
                        <ul className="">
                          <li className="text-body-default mb_8">
                            OVERALL:{" "}
                            <span className="text_secondary">
                              64.5" w x 38.5"d x 35" h
                            </span>
                          </li>
                          <li className="text-body-default mb_8">
                            INSIDESEATING:{" "}
                            <span className="text_secondary">
                              50.5"wx22" w x 22" d x 19.5" h
                            </span>
                          </li>
                          <li className="text-body-default mb_8">
                            ARM:{" "}
                            <span className="text_secondary">
                              7"wx38.5"dx22.5"h
                            </span>
                          </li>
                          <li className="text-body-default ">
                            LEGS:{" "}
                            <span className="text_secondary">5.5"wx2"dx2"h</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content-inner">
                    <div className="tab-reviews  write-cancel-review-wrap">
                      <div className="tab-reviews-heading">
                        <div className="top">
                          <div className="text-center">
                            <div className="number text-display">4.9</div>
                            <div className="list-star">
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                              <i className="icon icon-star" />
                            </div>
                            <p>(168 Ratings)</p>
                          </div>
                          <div className="rating-score">
                            <div className="item">
                              <div className="number-1 text-caption-1">5</div>
                              <i className="icon icon-star" />
                              <div className="line-bg">
                                <div style={{ width: "94.67%" }} />
                              </div>
                              <div className="number-2 text-caption-1">59</div>
                            </div>
                            <div className="item">
                              <div className="number-1 text-caption-1">4</div>
                              <i className="icon icon-star" />
                              <div className="line-bg">
                                <div style={{ width: "60%" }} />
                              </div>
                              <div className="number-2 text-caption-1">46</div>
                            </div>
                            <div className="item">
                              <div className="number-1 text-caption-1">3</div>
                              <i className="icon icon-star" />
                              <div className="line-bg">
                                <div style={{ width: "0%" }} />
                              </div>
                              <div className="number-2 text-caption-1">0</div>
                            </div>
                            <div className="item">
                              <div className="number-1 text-caption-1">2</div>
                              <i className="icon icon-star" />
                              <div className="line-bg">
                                <div style={{ width: "0%" }} />
                              </div>
                              <div className="number-2 text-caption-1">0</div>
                            </div>
                            <div className="item">
                              <div className="number-1 text-caption-1">1</div>
                              <i className="icon icon-star" />
                              <div className="line-bg">
                                <div style={{ width: "0%" }} />
                              </div>
                              <div className="number-2 text-caption-1">0</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="tf-btn btn-white has-border radius-4 btn-comment-review btn-cancel-review">
                            Cancel Review
                          </div>
                          <div className="tf-btn btn-white has-border radius-4 btn-comment-review btn-write-review">
                            Write a review
                          </div>
                        </div>
                      </div>
                      <div className="reply-comment style-1 cancel-review-wrap">
                        <div className="d-flex mb_24 gap-20 align-items-center justify-content-between flex-wrap">
                          <h4 className="">03 Comments</h4>
                          <div className="d-flex align-items-center gap-12">
                            <div className="text-caption-1">Sort by:</div>
                            <div
                              className="tf-dropdown-sort"
                              data-bs-toggle="dropdown"
                            >
                              <div className="btn-select">
                                <span className="text-sort-value">Most Recent</span>
                                <span className="icon icon-down" />
                              </div>
                              <div className="dropdown-menu">
                                <div className="select-item active">
                                  <span className="text-value-item">
                                    Most Recent
                                  </span>
                                </div>
                                <div className="select-item">
                                  <span className="text-value-item">Oldest</span>
                                </div>
                                <div className="select-item">
                                  <span className="text-value-item">
                                    Most Popular
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="reply-comment-wrap">
                          <div className="reply-comment-item">
                            <div className="user">
                              <div className="image">
                                <img src="/images/avatar/user-default.jpg" alt="" />
                              </div>
                              <div>
                                <h6>
                                  <a href="#" className="link">
                                    Superb quality apparel that exceeds expectations
                                  </a>
                                </h6>
                                <div className="day text-secondary-2 text-caption-1">
                                  1 days ago &nbsp;&nbsp;&nbsp;-
                                </div>
                              </div>
                            </div>
                            <p className="text-secondary">
                              Great theme - we were looking for a theme with lots of
                              built in features and flexibility and this was
                              perfect. We expected to need to employ a developer to
                              add a few finishing touches. But we actually managed
                              to do everything ourselves. We did have one small
                              query and the support given was swift and helpful.
                            </p>
                          </div>
                          <div className="reply-comment-item type-reply">
                            <div className="user">
                              <div className="image">
                                <img src="/images/avatar/admin-default.jpg" alt="" />
                              </div>
                              <div>
                                <h6>
                                  <a href="#" className="link">
                                    Reply from GearO
                                  </a>
                                </h6>
                                <div className="day text-secondary-2 text-caption-1">
                                  1 days ago &nbsp;&nbsp;&nbsp;-
                                </div>
                              </div>
                            </div>
                            <p className="text-secondary">
                              We love to hear it! Part of what we love most about
                              GearO is how much it empowers store owners like
                              yourself to build a beautiful website without having
                              to hire a developer :) Thank you for this fantastic
                              review!
                            </p>
                          </div>
                          <div className="reply-comment-item">
                            <div className="user">
                              <div className="image">
                                <img src="/images/avatar/user-default.jpg" alt="" />
                              </div>
                              <div>
                                <h6>
                                  <a href="#" className="link">
                                    Superb quality apparel that exceeds expectations
                                  </a>
                                </h6>
                                <div className="day text-secondary-2 text-caption-1">
                                  1 days ago &nbsp;&nbsp;&nbsp;-
                                </div>
                              </div>
                            </div>
                            <p className="text-secondary">
                              Great theme - we were looking for a theme with lots of
                              built in features and flexibility and this was
                              perfect. We expected to need to employ a developer to
                              add a few finishing touches. But we actually managed
                              to do everything ourselves. We did have one small
                              query and the support given was swift and helpful.
                            </p>
                          </div>
                        </div>
                      </div>
                      <form className="form-write-review write-review-wrap">
                        <div className="heading">
                          <h4>Write a review:</h4>
                          <div className="list-rating-check">
                            <input
                              type="radio"
                              id="star5"
                              name="rate"
                              defaultValue={5}
                            />
                            <label htmlFor="star5" title="text" />
                            <input
                              type="radio"
                              id="star4"
                              name="rate"
                              defaultValue={4}
                            />
                            <label htmlFor="star4" title="text" />
                            <input
                              type="radio"
                              id="star3"
                              name="rate"
                              defaultValue={3}
                            />
                            <label htmlFor="star3" title="text" />
                            <input
                              type="radio"
                              id="star2"
                              name="rate"
                              defaultValue={2}
                            />
                            <label htmlFor="star2" title="text" />
                            <input
                              type="radio"
                              id="star1"
                              name="rate"
                              defaultValue={1}
                            />
                            <label htmlFor="star1" title="text" />
                          </div>
                        </div>
                        <div className="mb_32">
                          <div className="mb_8">Review Title</div>
                          <fieldset className="mb_20">
                            <input
                              className=""
                              type="text"
                              placeholder="Give your review a title"
                              name="text"
                              tabIndex={2}
                              defaultValue=""
                              aria-required="true"

                            />
                          </fieldset>
                          <div className="mb_8">Review</div>
                          <fieldset className="d-flex mb_20">
                            <textarea
                              className=""
                              rows={4}
                              placeholder="Write your comment here"
                              tabIndex={2}
                              aria-required="true"

                              defaultValue={""}
                            />
                          </fieldset>
                          <div className="cols mb_20">
                            <fieldset className="">
                              <input
                                className=""
                                type="text"
                                placeholder="You Name (Public)"
                                name="text"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"

                              />
                            </fieldset>
                            <fieldset className="">
                              <input
                                className=""
                                type="email"
                                placeholder="Your email (private)"
                                name="email"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"

                              />
                            </fieldset>
                          </div>
                          <div className="d-flex align-items-center check-save gap-12">
                            <input
                              type="checkbox"
                              name="availability"
                              className="tf-check"
                              id="check1"
                            />
                            <label
                              className="text-secondary text-caption-1"
                              htmlFor="check1"
                            >
                              Save my name, email, and website in this browser for
                              the next time I comment.
                            </label>
                          </div>
                        </div>
                        <div className="button-submit">
                          <button
                            className="tf-btn btn-onsurface radius-4"
                            type="submit"
                          >
                            Submit Reviews
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="widget-content-inner">
                    <div className="tab-shipping">
                      <div className="w-100">
                        <h6 className="text-btn-uppercase mb_12">
                          We've got your back
                        </h6>
                        <p className="mb_12">
                          One delivery fee to most locations (check our Orders &amp;
                          Delivery page)
                        </p>
                        <p className="">
                          Free returns within 14 days (excludes final sale and
                          made-to-order items, face masks and certain products
                          containing hazardous or flammable materials, such as
                          fragrances and aerosols)
                        </p>
                      </div>
                      <div className="w-100">
                        <h6 className="text-btn-uppercase mb_12">
                          Import duties information
                        </h6>
                        <p>
                          Let us handle the legwork. Delivery duties are included in
                          the item price when shipping to all EU countries
                          (excluding the Canary Islands), plus The United Kingdom,
                          USA, Canada, China Mainland, Australia, New Zealand,
                          Puerto Rico, Switzerland, Singapore, Republic Of Korea,
                          Kuwait, Mexico, Qatar, India, Norway, Saudi Arabia, Taiwan
                          Region, Thailand, U.A.E., Japan, Brazil, Isle of Man, San
                          Marino, Colombia, Chile, Argentina, Egypt, Lebanon, Hong
                          Kong SAR, Bahrain and Turkey. All import duties are
                          included in your order – the price you see is the price
                          you pay.
                        </p>
                      </div>
                      <div className="w-100">
                        <h6 className="text-btn-uppercase mb_12">
                          Estimated delivery
                        </h6>
                        <p className="mb_6 font-2">Express: May 10 - May 17</p>
                        <p className="font-2">Sending from USA</p>
                      </div>
                      <div className="w-100">
                        <h6 className="text-btn-uppercase mb_12">
                          Need more information?
                        </h6>
                        <div>
                          <a
                            href="#"
                            className="link text-secondary text-decoration-underline mb_6"
                          >
                            Orders &amp; delivery
                          </a>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="link text-secondary text-decoration-underline mb_6"
                          >
                            Returns &amp; refunds
                          </a>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="link text-secondary text-decoration-underline"
                          >
                            Duties &amp; taxes
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content-inner">
                    <div className="tab-policies">
                      <h6 className=" mb_12">Return Policies</h6>
                      <p className="mb_12 text_secondary">
                        At GearO, we stand behind the quality of our products. If
                        you're not completely satisfied with your purchase, we offer
                        hassle-free returns within 30 days of delivery.
                      </p>
                      <h6 className=" mb_12">Easy Exchanges or Refunds</h6>
                      <ul className="list-text type-disc mb_12 gap-6">
                        <li className="text_secondary">
                          Exchange your item for a different size, color, or style,
                          or receive a full refund.
                        </li>
                        <li className="text_secondary">
                          All returned items must be unworn, in their original
                          packaging, and with tags attached.
                        </li>
                      </ul>
                      <h6 className=" mb_12">Simple Process</h6>
                      <ul className="list-text type-number">
                        <li className="text_secondary">
                          Initiate your return online or contact our customer
                          service team for assistance.
                        </li>
                        <li className="text_secondary">
                          Pack your item securely and include the original packing
                          slip.
                        </li>
                        <li className="text_secondary">
                          Ship your return back to us using our prepaid shipping
                          label.
                        </li>
                        <li className="text_secondary">
                          Once received, your refund will be processed promptly.
                        </li>
                      </ul>
                      <p className="text_secondary">
                        For any questions or concerns regarding returns, don't
                        hesitate to reach out to our dedicated customer service
                        team. Your satisfaction is our priority.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Products */}
      {/* <RelatedProducts/> */}
    </>
  )
}