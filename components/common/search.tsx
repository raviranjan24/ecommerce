"use client";
import { useState } from "react";
import Link from "next/link";
import { searchProducts } from "@/services/public/service";

const Search = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (value: string) => {
    setQuery(value);
    if (!value.trim()) {
      setProducts([]);
      return;
    }
    try {
      setLoading(true);
      const res = await searchProducts(value);
      setProducts(res?.data?.products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade modal-search" id="search" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Search Products</h5>
            <span className="icon-close icon-close-popup" data-bs-dismiss="modal" />
          </div>
          <form className="form-search" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="text position-relative w-100">
              <input
                type="text"
                placeholder="Search for products..."
                className="search-input"
                autoFocus
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </fieldset>
          </form>

          <div className="search-recommended">
            <h6 className="mb-3">Search Results</h6>
            {loading && <p>Loading...</p>}
            <div className="row g-3">
              {products.length > 0 ? (
                products.map((item) => (
                  <div className="col-12 col-md-6" key={item._id}>
                    <Link
                      href={`/products/${item._id}`}
                      className="search-product-item"
                      data-bs-dismiss="modal"
                    >
                      <img
                        src={item.image?.[0] || "/placeholder.png"}
                        alt={item.name || item.title}
                      />
                      <div className="info">
                        <h6 className="title">
                          {item.name || item.title}
                        </h6>
                        <span className="price">₹{item.price}</span>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                !loading && <p>No products found</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Search;