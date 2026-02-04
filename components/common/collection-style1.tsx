import Link from "next/link"

const CollectionStyle = () => {
    return (
        <>
            <section>
                <div className="flat-img-with-text-6 ">
                    <div className="collection-position hover-img style-6">
                        <div className="img-style ">
                            <img
                                className="lazyload effect-paralax"
                                data-src="images/banner/banner-4.jpg"
                                src="images/banner/banner-4.jpg"
                                alt="banner-cls"
                            />
                        </div>
                        <div className="content cls-content w-full">
                            <div className="cls-heading gap-8 mb_17 gap-8 mb_17">
                                <h3 className="">
                                    {" "}
                                    <Link
                                        href="/products/100"
                                        className="link text_white wow fadeInUp"
                                    >
                                        Ergonomic Chair Sale
                                    </Link>
                                </h3>
                                <p
                                    className="text_white text-body-default  wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    Reserved for long work hours.
                                </p>
                            </div>
                            <Link
                                href="product-detail.html"
                                className="tf-btn btn-white  mx-auto wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                Explore Collection <i className="icon-arrow-up-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="collection-position hover-img style-6">
                        <div className="img-style ">
                            <img
                                className="lazyload effect-paralax"
                                data-src="images/banner/banner-5.jpg"
                                src="images/banner/banner-5.jpg"
                                alt="banner-cls"
                            />
                        </div>
                        <div className="content cls-content w-full">
                            <div className="cls-heading gap-8 mb_17">
                                <h3 className="">
                                    {" "}
                                    <Link
                                        href="/categories/100"
                                        className="link text_white wow fadeInUp"
                                    >
                                        Storage Cabinet Deals
                                    </Link>
                                </h3>
                                <p
                                    className="text_white text-body-default  wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    Reserved for organized workspaces.
                                </p>
                            </div>
                            <Link
                                href="/products/100"
                                className="tf-btn btn-white  mx-auto wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                View All Products
                                <i className="icon-arrow-up-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="collection-position hover-img style-6">
                        <div className="img-style ">
                            <img
                                className="lazyload effect-paralax"
                                data-src="images/banner/banner-1.jpg"
                                src="images/banner/banner-1.jpg"
                                alt="banner-cls"
                            />
                        </div>
                        <div className="content cls-content w-full">
                            <div className="cls-heading gap-8 mb_17">
                                <h3 className="">
                                    {" "}
                                    <Link
                                        href="product-detail.html"
                                        className="link text_white wow fadeInUp"
                                    >
                                        Super Sale Up To 50%
                                    </Link>
                                </h3>
                                <p
                                    className="text_white text-body-default  wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    Reserved for special occasions
                                </p>
                            </div>
                            <Link
                                href="/categories/100"
                                className="tf-btn btn-white  mx-auto wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                Explore Collection <i className="icon-arrow-up-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CollectionStyle