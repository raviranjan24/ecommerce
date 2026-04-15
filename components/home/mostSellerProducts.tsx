import Link from "next/link";

const MostSellerProducts = ({ products }: any) => {
  return (
    <section className="pt-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h3 className="wow fadeInUp" style={{ fontSize: "20px"}}>Most Selling Products</h3>
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
                          src={item?.images.main || "/no-image.png"}
                          data-src={item?.image}
                          alt={item?.name}
                        />
                        <img
                          className="lazyload img-hover"
                          src={item?.images.main}
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
                        ₹ {item?.pricing?.regular_price}
                        <span className="text-caption-1 old-price">
                          ₹ {item?.pricing?.sell_price}
                        </span>
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