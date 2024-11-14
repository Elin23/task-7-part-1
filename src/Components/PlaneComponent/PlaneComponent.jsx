import React from 'react'
import './PlaneComponent.css'
import { HiMiniXMark } from "react-icons/hi2";
import { CiCircleQuestion } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";

export default function PlaneComponent({ plane, activeTab }) {
    return (
        <>
            <div className="col-xl-4 col-md-6" data-aos="flip-left">
                <div className={`plane-card d-flex flex-column ${plane.active ? 'active' : ''}`}>
                    <div className="plane-card-header d-flex align-items-center justify-content-between w-100">
                        <div className="plane-header-text d-flex flex-column">
                            <h4>{plane.type}</h4>
                            <span>${activeTab === 'monthly' ? plane.priceForMonth : plane.priceForYear}
                                <span className='smaller'>/{activeTab === 'monthly' ? 'Month' : 'Year'}</span>
                            </span>
                        </div>
                        <div className="plane-icon">
                            <img src={plane.icon} alt="plane-icon" />
                        </div>
                    </div>
                    <div className="plane-body d-flex flex-column">
                        {plane.features.map((feature, index) => (
                            <div className="plane-feature d-flex align-items-center justify-content-between">
                                <div className="feature-details">
                                    <span className='feature-icon'>{feature.available ? <GiCheckMark className='check'/> : <HiMiniXMark className='xmark'/>}</span>
                                    <span className='feature-description'>{feature.description}</span>
                                </div>
                                <CiCircleQuestion className='question-mark'/>
                            </div>
                        ))}
                    </div>
                    <div className="plane-btn">
                        <div className="btn-side">
                            <button className='nav-btn rounded-4 py-3'>
                                <span className='text-uppercase'>get started now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
