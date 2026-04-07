import Link from "next/link";

const TopSellerProducts = ({ products }: any) => {
    return (
        <section className="pt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="heading-section text-center">
                            <h3>Top Sell Products</h3>
                        </div>

                        <div className="tf-grid-layout tf-col-2 lg-col-4">
                            {products?.slice(0, 4).map((item: any, ind: any) => {
                                const regularPrice = item?.pricing?.regular_price || 0;
                                const discount = Math.abs(item?.pricing?.sell_price || 0);
                                const finalPrice = regularPrice - discount;
                                return (
                                    <div key={ind} className="card-product style-1">

                                        <div className="card-product-wrapper">
                                            <Link href={`/products/${item._id}`} className="image-wrap">
                                                <img
                                                    className="img-product"
                                                    src={item?.images?.main || "/no-image.png"}
                                                    alt={item?.title}
                                                />
                                                <img
                                                    className="img-hover"
                                                    src={item?.images?.hover || item?.images?.main}
                                                    alt={item?.title}
                                                />
                                            </Link>
                                            {item?.pricing?.discount_percentage > 0 && (
                                                <div className="on-sale-wrap">
                                                    <span className="on-sale-item">
                                                        {item?.pricing?.discount_percentage}% OFF
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-product-info">
                                            <Link href={`/products/${item._id}`} className="title">
                                                {item?.title}
                                            </Link>
                                            <div className="price">
                                                ₹ {finalPrice}
                                                <span className="old-price">
                                                    ₹ {regularPrice}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSellerProducts;

// import { topSellers } from "@/utils/topSellers";
// import Link from "next/link";

// const TopSellers = () => {
//     return (
//         <section className="flat-spacing-5">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="heading-section style-2">
//                             <div className="left">
//                                 <h3 className="wow fadeInUp">Shop Top Sellers</h3>
//                                 <p className="text-body-default text_secondary wow fadeInUp">
//                                     Fresh styles just in! Elevate your look.
//                                 </p>
//                             </div>
//                             <div className="right wow fadeInUp">
//                                 <Link href="/shop" className="btn-line">
//                                     <span>View All Products</span>
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="sw-button-over">
//                             <div
//                                 className="swiper tf-sw-collection"
//                                 data-preview={4}
//                                 data-tablet={3}
//                                 data-mobile-sm={2}
//                                 data-mobile={1}
//                                 data-space-lg={30}
//                                 data-space-md={20}
//                                 data-space={15}
//                                 data-loop="false"
//                             >
//                                 <div className="swiper-wrapper">
//                                     {topSellers?.map((product) => (
//                                         <div className="swiper-slide" key={product.id}>
//                                             <div className="card-product style-1 wow fadeInUp">

//                                                 <div className="card-product-wrapper">
//                                                     <Link href={product.slug} className="image-wrap">
//                                                         <img
//                                                             className="lazyload img-product"
//                                                             src={product.images.main}
//                                                             data-src={product.images.main}
//                                                             alt={product.title}
//                                                         />
//                                                         <img
//                                                             className="lazyload img-hover"
//                                                             src={product.images.hover}
//                                                             data-src={product.images.hover}
//                                                             alt={product.title}
//                                                         />
//                                                     </Link>

//                                                     {product.sale && (
//                                                         <div className="on-sale-wrap">
//                                                             <span className="on-sale-item">{product.sale}</span>
//                                                         </div>
//                                                     )}

//                                                     <div className="list-product-btn">
//                                                         <Link href="#" className="box-icon wishlist btn-icon-action">
//                                                             <span className="icon icon-heart" />
//                                                             <span className="tooltip">Wishlist</span>
//                                                         </Link>
//                                                         <Link
//                                                             href="#compare"
//                                                             data-bs-toggle="modal"
//                                                             className="box-icon compare"
//                                                         >
//                                                             <span className="icon icon-compare" />
//                                                             <span className="tooltip">Compare</span>
//                                                         </Link>
//                                                         <Link
//                                                             href="#quickView"
//                                                             data-bs-toggle="modal"
//                                                             className="box-icon quickview"
//                                                         >
//                                                             <span className="icon icon-eye" />
//                                                             <span className="tooltip">Quick View</span>
//                                                         </Link>
//                                                     </div>

//                                                     <div className="list-btn-main">
//                                                         <Link
//                                                             href="#shoppingCart"
//                                                             data-bs-toggle="modal"
//                                                             className="btn-main-product"
//                                                         >
//                                                             Add To cart
//                                                         </Link>
//                                                     </div>
//                                                 </div>
//                                                 <div className="card-product-info">
//                                                     <Link href={product.slug} className="text-title title link">
//                                                         {product.title}
//                                                     </Link>
//                                                     <div className="price text-body-default">
//                                                         {product.oldPrice && (
//                                                             <span className="text-caption-1 old-price">
//                                                                 ${product.oldPrice.toFixed(2)}
//                                                             </span>
//                                                         )}
//                                                         ${product.price.toFixed(2)}
//                                                     </div>
//                                                     <ul className="list-color-product">
//                                                         {product.colors.map((color, i) => (
//                                                             <li
//                                                                 key={i}
//                                                                 className={`list-color-item color-swatch ${color.active ? "active" : ""
//                                                                     }`}
//                                                             >
//                                                                 <span className={`swatch-value ${color.bg}`} />
//                                                                 <img
//                                                                     className="lazyload"
//                                                                     src={color.image}
//                                                                     data-src={color.image}
//                                                                     alt={product.title}
//                                                                 />
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="wrap-pagination d-lg-none d-block">
//                                     <div className="sw-pagination-collection sw-dots type-circle d-flex justify-content-center"></div>
//                                 </div>
//                             </div>
//                             <div className="sw-button swiper-button-next nav-next-collection has-border d_lg_none" />
//                             <div className="sw-button swiper-button-prev nav-prev-collection has-border d_lg_none" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TopSellers;