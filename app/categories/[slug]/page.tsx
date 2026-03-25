"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
// import { getSIngleProductCategory } from "@/services/public/service";

const categories = [
  { name: "Bed Sets", image: "/images/section/categories-1.jpg" },
  { name: "Beds", image: "/images/section/categories-2.jpg" },
  { name: "Nightstands", image: "/images/section/categories-3.jpg" },
  { name: "Dressers", image: "/images/section/categories-4.jpg" },
  { name: "Wardrobes", image: "/images/section/categories-5.jpg" },
  { name: "Chest of Drawers", image: "/images/section/categories-6.jpg" },
  { name: "Benches", image: "/images/section/categories-5.jpg" },
];

const productData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: "Fanous King Bed with Hydraulic Storage",
  price: 1700 + i * 50,
  oldPrice: 2200 + i * 60,
  image: "/images/shop/product-1.jpg",
}));

const PRODUCTS_PER_PAGE = 9;

export default async function CategoriesPage({ params }: { params: { slug: any }}) {
  // const resolvedParams = await params;
  //   const id = resolvedParams.slug;
  //   const productsDetails: any = await getSIngleProductCategory(id);
  //   console.log("getSIngleProductCategory",productsDetails?.data?.product);

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
    <section className="container py-4">

      {/* Breadcrumb */}
      <div className="mb-3 text-sm">
        <Link href="/">Home</Link> / Furniture / Bedroom Furniture
      </div>

      {/* Title */}
      <h3 className="mb-2">Bedroom Furniture</h3>
      <p className="text-muted small mb-4">
        Introducing the epitome of bedroom elegance. Our bedroom furniture
        collection is your ticket to creating a stylish sanctuary.
      </p>

      {/* Category Slider */}
      <div className="category-scroll mb-4">
        {categories.map((cat, i) => (
          <div key={i} className="cat-item">
            <img src={cat.image} />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="filter-bar mb-4">

        <div className="filters">

          <select>
            <option>Brand</option>
          </select>

          <select>
            <option>Type</option>
          </select>

          <select>
            <option>Standard Unit Size</option>
          </select>

          <select>
            <option>Price</option>
          </select>

          <button className="more-filter">
            More Filters +
          </button>

        </div>

        <div className="sort">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="default">Relevance</option>
            <option value="low-high">Price Low → High</option>
            <option value="high-low">Price High → Low</option>
          </select>
        </div>

      </div>

      {/* Product Count */}
      <div className="d-flex justify-between mb-3">
        <span>{sortedProducts.length} Products</span>
        <span>
          Deliver to <b>Select your area</b>
        </span>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {currentProducts?.map((product) => (
          <div key={product.id} className="product-card">
            <Link href={'/products/100'} className="image-wrap position-relative">
              <div className="product-img">

                <img src={product.image} />

                <button className="wishlist">♡</button>

                <div className="discount">
                  25% OFF
                </div>

              </div>

              <div className="product-info">

                <h6>{product.title}</h6>

                <div className="price">

                  <span className="new">
                    ₹ {product.price}
                  </span>

                  <span className="old">
                    ₹ {product.oldPrice}
                  </span>

                </div>

              </div>
            </Link>

          </div>
        ))}

      </div>

      {/* Pagination */}
      <div className="pagination">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>

      </div>

      {/* CSS */}
      <style jsx>{`

        .category-scroll{
          display:flex;
          gap:20px;
          overflow-x:auto;
        }

        .cat-item{
          min-width:120px;
          text-align:center;
        }

        .cat-item img{
          width:120px;
          height:70px;
          object-fit:cover;
          border-radius:6px;
        }

        .cat-item span{
          font-size:13px;
          display:block;
          margin-top:6px;
        }

        .filter-bar{
          display:flex;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:10px;
        }

        .filters{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }

        .filters select{
          padding:6px 10px;
        }

        .more-filter{
          border:1px solid #ccc;
          background:white;
          padding:6px 10px;
        }

        .product-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
        }

        .product-card{
          background:white;
          border-radius:8px;
          overflow:hidden;
          transition:0.3s;
        }

        .product-card:hover{
          transform:translateY(-4px);
          box-shadow:0 10px 20px rgba(0,0,0,0.08);
        }

        .product-img{
          position:relative;
        }

        .product-img img{
          width:100%;
          object-fit:cover;
        }

        .wishlist{
          position:absolute;
          top:10px;
          right:10px;
          background:white;
          border:none;
          width:35px;
          height:35px;
          border-radius:50%;
        }

        .discount{
          position:absolute;
          bottom:10px;
          left:10px;
          background:#ff4d4f;
          color:white;
          font-size:12px;
          padding:4px 8px;
          border-radius:4px;
        }

        .product-info{
          padding:12px;
        }

        .price{
          display:flex;
          gap:10px;
        }

        .old{
          text-decoration:line-through;
          color:#888;
          font-size:13px;
        }

        .pagination{
          margin-top:30px;
          display:flex;
          justify-content:center;
          gap:10px;
        }

        .pagination button{
          padding:6px 12px;
          border:1px solid #ddd;
          background:white;
        }

        .pagination .active{
          background:black;
          color:white;
        }

        @media(max-width:900px){
          .product-grid{
            grid-template-columns:repeat(2,1fr);
          }
        }

        @media(max-width:600px){
          .product-grid{
            grid-template-columns:1fr;
          }
        }

      `}</style>

    </section>
  );
}