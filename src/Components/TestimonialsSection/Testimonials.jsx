import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { TestimonialsData } from '../../Data/TestimonialsData';
import TestimonialsComponent from '../TestimonialsComponent/TestimonialsComponent';
import './Testimonials.css'

export default function Testimonials() {
  return (
    <>
      <div className="testimonials-section p-100">
        <div className="container">
            <div className="row text-center">
            <SectionTitle sectionTitle={"Testimonials"} desc={'Our Latest Client Feedback'}/>
            </div>
            <div className="row">
                <Swiper
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loopedSlides={TestimonialsData.length}
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    centeredSlides={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                >
                    <div className="slide-content pb-5">
                        {TestimonialsData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialsComponent data={item}/>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
      </div>
    </>
  )
}
