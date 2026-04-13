"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllProducts } from "@/services/public/service";


const categories = [
  { name: "Bed Sets", image: "/images/section/categories-1.jpg" },
  { name: "Beds", image: "/images/section/categories-2.jpg" },
  { name: "Nightstands", image: "/images/section/categories-3.jpg" },
  { name: "Dressers", image: "/images/section/categories-4.jpg" },
  { name: "Wardrobes", image: "/images/section/categories-5.jpg" },
  { name: "Chest of Drawers", image: "/images/section/categories-6.jpg" },
  { name: "Benches", image: "/images/section/categories-5.jpg" },
];

export default function CategoriesPage({ params }: { params: { slug: string } }) {
  const [products, setProducts] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState<any>({
    page: 1,
    limit: 9,
    search: "",
    category: params.slug,
    sortBy: "",
    order: "",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await getAllProducts(filters);
        setProducts(res?.data?.products || []);
        setPagination(res?.data?.pagination || {});
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [filters]);

  const normalizeProduct = (product: any) => {
    return {
      id: product._id,
      name: product.title || product.name,
      image:
        product?.images?.main ||
        product?.image?.[0] ||
        "/images/shop/product-1.jpg",
      price:
        product?.pricing?.sell_price ??
        product?.price ??
        0,
      oldPrice:
        product?.pricing?.regular_price ??
        product?.price ??
        0,
      discount:
        product?.pricing?.discount_percentage ??
        product?.discount ??
        0,
    };
  };

  return (
    <section className="container py-4">
      {/* Breadcrumb */}
      <div className="mb-3 text-sm">
        <Link href="/">Home</Link> / Furniture / Bedroom Furniture
      </div>
      <h3 className="mb-2">Bedroom Furniture</h3>
      <div className="category-scroll mb-4">
        {categories.map((cat, i) => (
          <div key={i} className="cat-item">
            <img src={cat.image} />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      <div className="filter-bar mb-4">
        <div className="filters">
          <select
            onChange={(e) => {
              const val = e.target.value;

              if (val === "low") {
                setFilters({ ...filters, minPrice: 0, maxPrice: 1000, page: 1 });
              } else if (val === "mid") {
                setFilters({ ...filters, minPrice: 1000, maxPrice: 5000, page: 1 });
              } else {
                setFilters({ ...filters, minPrice: "", maxPrice: "", page: 1 });
              }
            }}
          >
            <option>Price</option>
            <option value="low">Below 1000</option>
            <option value="mid">1000 - 5000</option>
          </select>
        </div>

        <div className="sort">
          <select
            onChange={(e) => {
              const val = e.target.value;

              if (val === "low-high") {
                setFilters({ ...filters, sortBy: "price", order: "asc" });
              } else if (val === "high-low") {
                setFilters({ ...filters, sortBy: "price", order: "desc" });
              } else {
                setFilters({ ...filters, sortBy: "", order: "" });
              }
            }}
          >
            <option value="">Relevance</option>
            <option value="low-high">Price Low → High</option>
            <option value="high-low">Price High → Low</option>
          </select>
        </div>
      </div>

      <div className="d-flex justify-between mb-3">
        <span>{pagination?.totalProducts || 0} Products</span>
      </div>

      {loading && <center><div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div></center>}

      <div className="product-grid">
        {products?.map((item: any) => {
          const product = normalizeProduct(item);
          return (
            <div key={product.id} className="product-card">
              <Link href={`/products/${product.id}`}>
                <div className="product-img">
                  <img src={product.image} />
                  <div className="discount">
                    {product.discount}% OFF
                  </div>
                </div>
                <div className="product-info">
                  <h6>{product.name}</h6>
                  <div className="price">
                    <span className="new">₹ {product.price}</span>
                    <span className="old">₹ {product.oldPrice}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="pagination">
        <button
          disabled={!pagination?.hasPrev}
          onClick={() =>
            setFilters({ ...filters, page: filters.page - 1 })
          }
        >
          Prev
        </button>

        {Array.from({ length: pagination?.totalPages || 1 }, (_, i) => (
          <button
            key={i}
            className={filters.page === i + 1 ? "active" : ""}
            onClick={() =>
              setFilters({ ...filters, page: i + 1 })
            }
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={!pagination?.hasNext}
          onClick={() =>
            setFilters({ ...filters, page: filters.page + 1 })
          }
        >
          Next
        </button>
      </div>

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
          grid-template-columns:repeat(4,1fr);
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
          width:250px;
          object-fit:contain;
          height:250px;
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