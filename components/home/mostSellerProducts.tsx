import { mostSellerProducts } from "@/utils/MostSellerProducts";
import Link from "next/link";

const MostSellerProducts = () => {
  return (
    <section className="flat-spacing-5 pt-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Our Picks For You</h3>
              <p
                className="text-body-default text_secondary wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Fresh styles just in! Elevate your look.
              </p>
            </div>
            <div className="tf-grid-layout tf-col-2 lg-col-4">
              {mostSellerProducts?.map((product) => (
                <div
                  key={product.id}
                  className="card-product style-1 wow fadeInUp"
                  data-wow-delay={product.delay}
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
                      <Link href="#" className="box-icon wishlist btn-icon-action">
                        <span className="icon icon-heart" />
                        <span className="tooltip">Wishlist</span>
                      </Link>
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
                        className="box-icon quickview tf-btn-loading"
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
                      {product.colors.map((color, index) => (
                        <li
                          key={index}
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
        </div>
      </div>
    </section>
  );
};

export default MostSellerProducts;