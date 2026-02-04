const HomeSlider = () => {
    return (
        <>
            <div className="tf-slideshow style-default slider-nav-sw slider-effect-fade efect-2">
                <div
                    dir="ltr"
                    className="swiper tf-sw-slideshow"
                    data-preview="1.428"
                    data-tablet="1.2"
                    data-mobile={1}
                    data-centered="true"
                    data-space={20}
                    data-space-mb={0}
                    data-loop="true"
                    data-auto-play="true"
                    data-pagination={1}
                    data-pagination-md={1}
                    data-pagination-lg={1}
                >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="wrap-slider slide-1">
                                <div className="img-style">
                                    <img
                                        className="lazyload"
                                        data-src="images/slider/slider-1.jpg"
                                        src="images/slider/slider-1.jpg"
                                        alt="banner-cls"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="box-title">
                                        <h1 className="text-white fade-item fade-item-1">
                                            Ergonomic Chair Pro
                                        </h1>
                                        <p className="text-body-1 text-white fade-item fade-item-2">
                                            Get superior support and better posture with ergonomic
                                            chairs for long work hours
                                        </p>
                                    </div>
                                    <a
                                        href="shop-default.html"
                                        className="tf-btn btn-white fade-item fade-item-3"
                                    >
                                        Explore Collection <i className="icon-arrow-up-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="wrap-slider slide-2">
                                <div className="img-style">
                                    <img
                                        className="lazyload"
                                        data-src="images/slider/slider-2.jpg"
                                        src="images/slider/slider-2.jpg"
                                        alt="banner-cls"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="box-title">
                                        <h1 className="text-white fade-item fade-item-1">
                                            Wireless Charging Dock
                                        </h1>
                                        <p className="text-body-1 text-white fade-item fade-item-2">
                                            Get superior support and better posture with ergonomic
                                            chairs for long work hours
                                        </p>
                                    </div>
                                    <a
                                        href="shop-default.html"
                                        className="tf-btn btn-white fade-item fade-item-3 "
                                    >
                                        Explore Collection <i className="icon-arrow-up-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="wrap-slider slide-3">
                                <div className="img-style">
                                    <img
                                        className="lazyload"
                                        data-src="images/slider/slider-3.jpg"
                                        src="images/slider/slider-3.jpg"
                                        alt="banner-cls"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="box-title">
                                        <h1 className="text-white fade-item fade-item-1">
                                            Ergonomic Chair Pro
                                        </h1>
                                        <p className="text-body-1 text-white fade-item fade-item-2">
                                            Get superior support and better posture with ergonomic
                                            chairs for long work hours
                                        </p>
                                    </div>
                                    <a
                                        href="shop-default.html"
                                        className="tf-btn btn-white fade-item fade-item-3 "
                                    >
                                        Explore Collection <i className="icon-arrow-up-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="wrap-slider slide-1">
                                <div className="img-style">
                                    <img
                                        className="lazyload"
                                        data-src="images/slider/slider-1.jpg"
                                        src="images/slider/slider-1.jpg"
                                        alt="banner-cls"
                                    />
                                </div>
                                <div className="box-content">
                                    <div className="box-title">
                                        <h1 className="text-white fade-item fade-item-1">
                                            Ergonomic Duo Bundle
                                        </h1>
                                        <p className="text-body-1 text-white fade-item fade-item-2">
                                            Get superior support and better posture with ergonomic
                                            chairs for long <br /> work hours
                                        </p>
                                    </div>
                                    <a
                                        href="shop-default.html"
                                        className="tf-btn btn-white fade-item fade-item-3 "
                                    >
                                        Explore Collection <i className="icon-arrow-up-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-pagination">
                        <div className="container">
                            <div className="sw-dots sw-pagination-slider type-dot-line justify-content-center"></div>
                        </div>
                    </div>
                    <div className="sw-button swiper-button-next navigation-next-slider" />
                    <div className="sw-button swiper-button-prev navigation-prev-slider" />
                </div>
            </div>
        </>
    )
}

export default HomeSlider