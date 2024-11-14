import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './Slider.css'

export default function Slider({ data, container, className }) {
    const slides = [...data, ...data];
    return (
        <div className={`slider-container ${container ? 'container' : ''}`} data-aos="fade-right">
            <div className="row">
                <Swiper
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loopedSlides={slides.length}
                    modules={[Autoplay]}
                    centeredSlides={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                        1200: { slidesPerView: 5 },
                    }}
                >
                    <div className="slide-content">
                        {slides.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="slide d-flex align-items-center justify-content-center gap-2">
                                    <div className="logo">
                                        <img src={item.img} alt={`Logo-${index}`} className={className} />
                                    </div>
                                    {item.title && <span className="slide-title">{item.title}</span>}
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

