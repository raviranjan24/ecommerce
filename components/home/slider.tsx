"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

const HomeSlider = ({ sliders }: any) => {
    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                //navigation
                pagination={{ clickable: true }}
                effect="fade"
                className="h-[600px]"
            >
                {sliders?.map((item: any, ind: any) => (
                    <SwiperSlide key={ind}>
                        <div className="relative h-full w-full">
                            <Link
                                href={`/products/${item?._id}`}
                            >
                                <img
                                    src={item?.image}
                                    alt={item?.title}
                                    className="w-full h-full object-cover"
                                />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeSlider;