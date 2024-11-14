import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CardsSlider.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function CardsSlider({ cardComponent: CardComponent, data, slidesPerView = 3, sectionTitle, desc }) {
    return (
        <div className="container my-5">
            <div className="slide-container">
                <SectionTitle sectionTitle={sectionTitle} desc={desc} className={'col-lg-6'}/>
                <div className="navigation-buttons">
                    <button className="custom-swiper-button custom-swiper-button-prev">
                        <IoIosArrowRoundBack className="nav-icon" />
                    </button>
                    <button className="custom-swiper-button custom-swiper-button-next">
                        <IoIosArrowRoundForward className="nav-icon" />
                    </button>
                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                breakpoints={{
                    1200: {
                        slidesPerView: slidesPerView
                    },
                    992: {
                        slidesPerView: 2 
                    },
                    768: {
                        slidesPerView: 2 
                    },
                    0: {
                        slidesPerView: 1 
                    }
                }}
                className="cards-slider d-flex align-items-center justify-content-center"
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index} >
                        <CardComponent data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
