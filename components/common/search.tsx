import { recommendedProducts } from "@/utils/recommendedProducts";
import Link from "next/link";

const Search = () => {
  return (
    <div className="modal fade modal-search" id="search" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Search Products</h5>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <form className="form-search">
            <fieldset className="text position-relative w-100">
              <input
                type="text"
                placeholder="Search for products, categories..."
                className="search-input"
                autoFocus
              />
              <button className="search-btn" type="submit">
                <span className="icon icon-search"></span>
              </button>
            </fieldset>
          </form>
          <div className="search-recommended">
            <h6 className="mb-3">Recommended Products</h6>

            <div className="row g-3">
              {recommendedProducts?.map((item) => (
                <div className="col-12 col-md-6" key={item.id}>
                  <Link
                    href={item.slug}
                    className="search-product-item"
                    data-bs-dismiss="modal"
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="info">
                      <h6 className="title">{item.title}</h6>
                      <span className="price">{item.price}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Search;