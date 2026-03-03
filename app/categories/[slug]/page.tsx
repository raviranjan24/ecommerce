"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
// import Breadcrum from "@/components/common/breadcrum";
const productData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title:
    i % 3 === 0
      ? "Cairo NXT Fabric 3-Seater Recliner - Beige"
      : i % 3 === 1
        ? "Cairo NXT Fabric 3-Seater Electric Recliner - Beige"
        : "Lambert Fabric 3-Seater Recliner - Beige",
  price: 44999 + (i % 6) * 5000,
  oldPrice: i % 2 === 0 ? Math.round((44999 + (i % 6) * 5000) * 1.4) : 0,
  image: "/images/shop/product-1.jpg",
  hoverImage: "/images/shop/product-1.1.jpg",
  badge:
    i % 3 === 0
      ? "EXTRA 30% COUPON"
      : i % 3 === 1
        ? "EXTRA 30% COUPON"
        : "EXTRA 10% COUPON",
}));

const PRODUCTS_PER_PAGE = 9;

export default function Categories() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("default");
  const sortedProducts = useMemo(() => {
    let sorted = [...productData];
    if (sortType === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    }
    if (sortType === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [sortType]);

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );
  return (
    <>
      <section className="flat-spacing">
        <div className="container" style={{ padding: "0px 50px", marginTop: "-45px" }}>
          <div className="tf-breadcrumb">
            <div className="container">
              <div className="tf-breadcrumb-wrap">
                <div className="tf-breadcrumb-list">
                  <Link href="/" className="text text-caption-1">
                    Home
                  </Link>
                  <i className="icon icon-right" />
                  <a href="#" className="text text-caption-1">
                    Category
                  </a>
                  <i className="icon icon-right" />
                  <span className="text_secondary2 text-caption-1">
                    Ergonomic Chair
                  </span>
                </div>
                <div className="tf-breadcrumb-prev-next">
                  <a
                    href="#"
                    className="tf-breadcrumb-prev"
                  >
                    <i className="icon icon-left" />
                  </a>
                  <a
                    href="#"
                    className="tf-breadcrumb-back"
                  >
                    <i className="icon icon-squaresfour" />
                  </a>
                  <a
                    href="#"
                    className="tf-breadcrumb-next"
                  >
                    <i className="icon icon-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ===== Top Header + Description (exact match) ===== */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h5 className="mb-0">3 Seater Recliners for Living Room</h5>
                <p className="text-muted mb-0" style={{fontSize:"13px"}}>
                  {sortedProducts.length} products available
                </p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <span className="text-uppercase fw-medium">SORT BY</span>
                <select
                  className="form-select w-auto"
                  onChange={(e) => setSortType(e.target.value)}
                  value={sortType}
                >
                  <option value="default">Relevance</option>
                  <option value="low-high">Price Low to High</option>
                  <option value="high-low">Price High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            {/* ================= Sidebar (exact match to screenshot) ================= */}
            <div className="col-lg-3">
              <div className="p-3 border rounded bg-white sticky-top" style={{ top: "100px" }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">FILTERS</h5>
                  <a href="#" className="text-primary text-decoration-underline small">
                    Clear all
                  </a>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <h6 className="mb-2">Price</h6>
                  <div className="d-flex gap-2">
                    <div className="flex-fill">
                      <small className="text-muted">Minimum</small>
                      <input
                        type="number"
                        className="form-control mt-1"
                        placeholder="₹34999"
                      />
                    </div>
                    <div className="flex-fill">
                      <small className="text-muted">Maximum</small>
                      <input
                        type="number"
                        className="form-control mt-1"
                        placeholder="₹204999"
                      />
                    </div>
                  </div>
                </div>

                {/* Other filters (collapsible style like screenshot) */}
                <div className="filter-group">
                  <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                    <h6 className="mb-0">Promotions</h6>
                    <span className="fs-5">+</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                    <h6 className="mb-0">Color</h6>
                    <span className="fs-5">+</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                    <h6 className="mb-0">Brand</h6>
                    <span className="fs-5">+</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                    <h6 className="mb-0">Browse</h6>
                    <span className="fs-5">+</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                    <h6 className="mb-0">Type</h6>
                    <span className="fs-5">+</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                    <h6 className="mb-0">Discount</h6>
                    <span className="fs-5">+</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                    <h6 className="mb-0">Upholstery Material</h6>
                    <span className="fs-5">+</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-2">
                    <h6 className="mb-0">Seating Capacity</h6>
                    <span className="fs-5">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= Product Grid (exact match) ================= */}
            <div className="col-lg-9">
              <div className="row g-4">
                {currentProducts.map((product) => (
                  <div className="col-md-6 col-lg-4" key={product.id}>
                    <div className="card-product style-1 grid">
                      <div className="card-product-wrapper">
                        <Link
                          href={`/products/${product.id}`}
                          className="image-wrap position-relative"
                        >
                          <img
                            className="img-product w-100"
                            src={product.image}
                            alt={product.title}
                          />
                          <img
                            className="img-hover w-100"
                            src={product.hoverImage}
                            alt={product.title}
                          />

                          {/* Offer badge (exact match to screenshot) */}
                          {product.badge && (
                            <div className="position-absolute top-0 start-0 m-3 bg-white px-3 py-1 rounded shadow-sm text-uppercase fw-medium small">
                              {product.badge}
                            </div>
                          )}
                        </Link>

                        {/* Wishlist */}
                        <div className="list-product-btn">
                          <Link
                            href="#"
                            className="box-icon wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                          </Link>
                        </div>

                        {/* Add to cart (hidden on mobile, shows on hover like most themes) */}
                        <div className="list-btn-main">
                          <Link href="#" className="btn-main-product">
                            Add To Cart
                          </Link>
                        </div>
                      </div>

                      <div className="card-product-info mt-3">
                        <Link
                          href={`/products/${product.id}`}
                          className="title link text-decoration-none"
                        >
                          {product.title}
                        </Link>

                        <div className="price text-body-default mt-1">
                          {product.oldPrice > 0 && (
                            <span className="text-caption-1 old-price text-decoration-line-through me-2">
                              ₹{product.oldPrice.toLocaleString("en-IN")}
                            </span>
                          )}
                          <span className="current-price fw-medium">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ================= Your Pagination (kept as requested) ================= */}
              <ul className="pagination justify-content-center mt-5">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Prev
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${currentPage === i + 1 ? "active" : ""
                      }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${currentPage === totalPages ? "disabled" : ""
                    }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .card-product-wrapper .image-wrap {
          overflow: hidden;
        }
        .product-badge {
          font-size: 12px;
          padding: 6px 12px;
        }
      `}</style>
    </>
  );
}