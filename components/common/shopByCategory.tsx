import Link from "next/link"

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
                                <Link href="/categories/100" className="btn-line">
                                    <span>View All Products </span>
                                    <i className="icon-arrow-up-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="wrap-categories overflow-x-auto style-2">
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0s"
                            >
                                <div className="img-style">
                                    <Link href="/categories/100">
                                        <img src="images/section/categories-1.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href="/categories/100" className="link">
                                            Desks Wood
                                        </Link>
                                    </h5>
                                    <p className="text-body-default text_secondary">12 items</p>
                                </div>
                            </div>
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="img-style">
                                    <Link href="/categories/100">
                                        <img src="images/section/categories-2.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href="/categories/100" className="link">
                                            Office Chairs
                                        </Link>
                                    </h5>
                                    <p className="text-body-default text_secondary">35 items</p>
                                </div>
                            </div>
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <div className="img-style">
                                    <Link href="/categories/100">
                                        <img src="images/section/categories-3.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href="/categories/100" className="link">
                                            Storage Office
                                        </Link>
                                    </h5>
                                    <p className="text-body-default text_secondary">28 items</p>
                                </div>
                            </div>
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="img-style">
                                    <Link href="/categories/100">
                                        <img src="images/section/categories-4.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href="/categories/100" className="link">
                                            Decor Office
                                        </Link>
                                    </h5>
                                    <p className="text-body-default text_secondary">34 items</p>
                                </div>
                            </div>
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <div className="img-style">
                                    <Link href="/categories/100">
                                        <img src="images/section/categories-5.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href="/categories/100" className="link">
                                            Lighting
                                        </Link>
                                    </h5>
                                    <p className="text-body-default text_secondary">21 items</p>
                                </div>
                            </div>
                            <div
                                className="categories-item hover-img style-2 wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <div className="img-style">
                                    <Link href="/categories/100">
                                        <img src="images/section/categories-6.jpg" alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h5 className="title">
                                        <Link href="/categories/100" className="link">
                                            Accessories
                                        </Link>
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