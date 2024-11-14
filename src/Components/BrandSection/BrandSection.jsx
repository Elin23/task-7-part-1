import React from 'react'
import './BrandSection.css'
import Slider from '../Slider/Slider'

export default function BrandSection({ data, container }) {
    return (
        <>
            <div className="brand-section section-padding">
                <div className="container">
                    <div className='brand-title d-flex align-items-center justify-content-center'>
                        1k+ Brand Trust Us
                    </div>
                </div>
                <Slider data={data} container={container} className={'filter'}/>
            </div>
        </>
    )
}
// grayscale(100%)