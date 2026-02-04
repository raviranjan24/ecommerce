const TopBar = () => {
    return (
        <>
            <div className="tf-topbar">
                <div className="container-full">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="topbar-left d-none d-xl-flex">
                                <div className="tf-languages">
                                    <select className="image-select center style-default color-white type-languages">
                                        <option>English</option>
                                        <option>Vietnam</option>
                                    </select>
                                </div>
                                <div className="tf-currencies">
                                    <select className="image-select center style-default color-white type-currencies">
                                        <option data-thumbnail="images/country/us.svg">
                                            USD
                                        </option>
                                        <option data-thumbnail="images/country/vn.svg">VND</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="wrapper-slider-topbar">
                                <div
                                    className="swiper tf-sw-top_bar"
                                    data-preview={1}
                                    data-space={0}
                                    data-loop="true"
                                    data-speed={2000}
                                    data-auto-play="true"
                                    data-delay={2000}
                                >
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <p className="text-caption-1 text_white">
                                                Free shipping on all orders over{" "}
                                                <span className="text_primary">$20.00</span>
                                            </p>
                                        </div>
                                        <div className="swiper-slide">
                                            <p className="text-caption-1 text_white">
                                                Free shipping on all orders over
                                                <span className="text_primary">$20.00</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="navigation-topbar nav-next-topbar">
                                    <span className="icon icon-left" />
                                </div>
                                <div className="navigation-topbar nav-prev-topbar">
                                    <span className="icon icon-right" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="topbar-right justify-content-end d-none d-xl-flex">
                                <a href="#" className="text_white text-caption-1 link">
                                    About
                                </a>
                                <a href="#" className="text_white text-caption-1 link">
                                    Contact
                                </a>
                                <a
                                    href="#"
                                    className="text_white text-caption-1 link"
                                >
                                    Location
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar