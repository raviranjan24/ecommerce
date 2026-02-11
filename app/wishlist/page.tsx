import Breadcrum from "@/components/common/breadcrum";
import { wishlistProducts } from "@/utils/wishlistProducts";
import Link from "next/link";

const Wishlist=()=>{
  return (
    <>
    <Breadcrum title={"Your Wishlist"}/>
      <section className="flat-spacing pb-0">
        <div className="container">
          <div className="tf-grid-layout tf-col-2 lg-col-4">
            {wishlistProducts?.map((product, index) => (
              <div
                key={product.id}
                className="card-product style-1 wow fadeInUp"
                data-wow-delay={`${index * 0.1}s`}
              >
                <div className="card-product-wrapper">
                  <Link href={product.slug} className="image-wrap">
                    <img
                      className="lazyload img-product"
                      src={product.images.main}
                      data-src={product.images.main}
                      alt={product.title}
                    />
                    <img
                      className="lazyload img-hover"
                      src={product.images.hover}
                      data-src={product.images.hover}
                      alt={product.title}
                    />
                  </Link>

                  {product.sale && (
                    <div className="on-sale-wrap">
                      <span className="on-sale-item">{product.sale}</span>
                    </div>
                  )}

                  <div className="list-product-btn">
                    <button className="box-icon wishlist btn-icon-action">
                      <span className="icon icon-heart" />
                      <span className="tooltip">Remove</span>
                    </button>
                    <Link
                      href="#compare"
                      data-bs-toggle="modal"
                      className="box-icon compare"
                    >
                      <span className="icon icon-compare" />
                      <span className="tooltip">Compare</span>
                    </Link>
                    <Link
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </Link>
                  </div>

                  <div className="list-btn-main">
                    <Link
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </Link>
                  </div>
                </div>

                <div className="card-product-info">
                  <Link href={product.slug} className="text-title title link">
                    {product.title}
                  </Link>

                  <div className="price text-body-default">
                    {product.oldPrice && (
                      <span className="text-caption-1 old-price">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                    ${product.price.toFixed(2)}
                  </div>

                  <ul className="list-color-product">
                    {product.colors.map((color, i) => (
                      <li
                        key={i}
                        className={`list-color-item color-swatch ${
                          color.active ? "active" : ""
                        }`}
                      >
                        <span className={`swatch-value ${color.bg}`} />
                        <img
                          className="lazyload"
                          src={color.image}
                          data-src={color.image}
                          alt={product.title}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Wishlist;