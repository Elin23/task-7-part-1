import React from 'react'
import './BlogCard.css'
import { FaArrowRight} from "react-icons/fa6";

export default function BlogCard({ data }) {
    return (
        <>
            <div className="blog-card">
                <div className="blog-card-img position-relative" data-aos="zoom-in">
                    <img src={data.image} alt="blog1" />
                </div>
                <div className="blog-card-content"  data-aos="fade-right">
                    <div className="blog-card-main-content">
                        <div className="blog-header mb-3 d-flex gap-3 align-items-center justify-content-between">
                            <span className='blog-category'>{data.category}</span>
                            <span className='blog-date'>{data.date}</span>
                        </div>
                        <h3 className='blog-title'>{data.title}</h3>
                    </div>
                    <div className="blog-author-info mt-3 d-flex justify-content-between align-items-center">
                        <div className="author-info d-flex gap-3 align-items-center">
                            <img src={data.author.img} alt="author" />
                            <div className="basic-info d-flex flex-column">
                                <span className='author-name'>{data.author.name}</span>
                                <span className='author-job'>{data.author.job}</span>
                            </div>
                        </div>
                        <div className="blog-btn">
                            <button><FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
