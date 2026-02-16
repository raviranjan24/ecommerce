import { sliderData } from "@/utils/sliderData";
import Link from "next/link";
const HomeSlider = () => {
    return (
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
                    {sliderData.map((item) => (
                        <div className="swiper-slide" key={item.id}>
                            <div className={`wrap-slider ${item.slideClass}`}>
                                <div className="img-style">
                                    <img
                                        className="lazyload"
                                        src={item.image}
                                        data-src={item.image}
                                        alt={item.title}
                                    />
                                </div>

                                <div className="box-content">
                                    <div className="box-title">
                                        <h1 className="text-white fade-item fade-item-1">
                                            {item.title}
                                        </h1>
                                        <p className="text-body-1 text-white fade-item fade-item-2">
                                            {item.description}
                                        </p>
                                    </div>

                                    <Link
                                        href={item.link}
                                        className="tf-btn btn-white fade-item fade-item-3"
                                    >
                                        Explore Collection <i className="icon-arrow-up-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
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
    );
};

export default HomeSlider;