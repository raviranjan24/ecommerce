const ShopByCategory = () => {
    return (
        <>
            <section className="flat-spacing-2">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="heading-section style-2">
                            <div className="left">
                                <h3 className="wow fadeInUp">Shop By Categories</h3>
                                <p
                                    className="text-body-default text_secondary wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    Fresh styles just in! Elevate your look.
                                </p>
                            </div>
                            <div className="right wow fadeInUp">
                                <a href="shop-default.html" className="btn-line">
                                    <span>View All Products </span>
                                    <i className="icon-arrow-up-right" />
                                </a>
                            </div>
                        </div>
                        <div className="wrap-categories overflow-x-auto style-2">
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0s"
                            >
                                <div className="img-style">
                                    <a href="shop-default.html">
                                        <img src="images/section/categories-1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <a href="shop-default.html" className="link">
                                            Desks Wood
                                        </a>
                                    </h5>
                                    <p className="text-body-default text_secondary">12 items</p>
                                </div>
                            </div>
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="img-style">
                                    <a href="shop-default.html">
                                        <img src="images/section/categories-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <a href="shop-default.html" className="link">
                                            Office Chairs
                                        </a>
                                    </h5>
                                    <p className="text-body-default text_secondary">35 items</p>
                                </div>
                            </div>
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <div className="img-style">
                                    <a href="shop-default.html">
                                        <img src="images/section/categories-3.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <a href="shop-default.html" className="link">
                                            Storage Office
                                        </a>
                                    </h5>
                                    <p className="text-body-default text_secondary">28 items</p>
                                </div>
                            </div>
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="img-style">
                                    <a href="shop-default.html">
                                        <img src="images/section/categories-4.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <a href="shop-default.html" className="link">
                                            Decor Office
                                        </a>
                                    </h5>
                                    <p className="text-body-default text_secondary">34 items</p>
                                </div>
                            </div>
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <div className="img-style">
                                    <a href="shop-default.html">
                                        <img src="images/section/categories-5.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <a href="shop-default.html" className="link">
                                            Lighting
                                        </a>
                                    </h5>
                                    <p className="text-body-default text_secondary">21 items</p>
                                </div>
                            </div>
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <div className="img-style">
                                    <a href="shop-default.html">
                                        <img src="images/section/categories-6.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <a href="shop-default.html" className="link">
                                            Accessories
                                        </a>
                                    </h5>
                                    <p className="text-body-default text_secondary">18 items</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopByCategory