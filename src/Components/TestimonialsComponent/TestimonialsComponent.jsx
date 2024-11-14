import React from 'react'
import './TestimonialsComponent.css'
import { BiSolidQuoteAltRight } from "react-icons/bi";

export default function TestimonialsComponent({ data }) {
    return (
        <>
            <div className="testimonials-component" data-aos="zoom-in">
                <div className="testi-card d-flex flex-column gap-3">
                    <div className="testi-rate">
                        <img src={data.rate} alt="rate" className='img-fluid' />
                    </div>
                    <div className="testi-content">
                        <p>"{data.testimonial}"</p>
                    </div>
                    <div className="testi-author d-flex align-items-center justify-content-between">
                        <div className="testi-author-info d-flex align-items-center justify-content-center gap-2">
                            <img src={data.img} alt="author"/>
                            <div className="d-flex flex-column gap-1">
                                <h4>{data.name}</h4>
                                <p>{data.job}</p>
                            </div>
                        </div>
                        <span className='double-quote'><BiSolidQuoteAltRight /></span>
                    </div>
                </div>
            </div>
        </>
    )
}
