import Link from "next/link";
import { MdCurrencyRupee } from "react-icons/md";

const MostSellerProducts = ({ products }: any) => {
  return (
    <section className="pt-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp">Trending Products</h3>
            </div>
            <div className="tf-grid-layout tf-col-2 lg-col-4">
              {products?.map((item: any, ind: any) => {
                return (
                  <div
                    key={ind}
                    className="card-product style-1 wow fadeInUp"
                    data-wow-delay={item?.delay}
                  >
                    <div className="card-product-wrapper">
                      <Link href={`/products/${item._id}`} className="image-wrap">
                        <img
                          className="lazyload img-product"
                          src={item?.image}
                          data-src={item?.image}
                          alt={item?.name}
                        />
                        <img
                          className="lazyload img-hover"
                          src={item?.image}
                          data-src={item?.image}
                          alt={item?.name}
                        />
                      </Link>
                      {item?.sale && (
                        <div className="on-sale-wrap">
                          <span className="on-sale-item">{item?.sale}</span>
                        </div>
                      )}
                      <div className="list-product-btn">
                        <Link href="#" className="box-icon wishlist btn-icon-action">
                          <span className="icon icon-heart" />
                          <span className="tooltip">Wishlist</span>
                        </Link>
                      </div>
                    </div>
                    <div className="card-product-info">
                      <Link href={`/products/${item._id}`} className="text-title title link">
                        {item?.name}
                      </Link>
                      <div className="price text-body-default">
                        {item?.oldPrice && (
                          <span className="text-caption-1 old-price">
                            <MdCurrencyRupee />{item?.oldPrice.toFixed(2)}
                          </span>
                        )}
                        <MdCurrencyRupee />{item?.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostSellerProducts;