import React from 'react'
import './AdComponent.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

export default function AdComponent({ img, title, className }) {
    return (
        <>
            <div className="ad-section">
                <div className={`container ad-component d-flex align-items-center justify-content-between gap-lg-5 ${className}`} data-aos="fade-up">
                    <div className="img-wrapper">
                        <img src={img} alt='img' />
                    </div>
                    <div className="ad-title">{title}</div>
                    <ButtonComponent text={'TALK TO A SPECIALIST'} bgColor={'light'} width={"wider"}/>
                </div>
            </div>
        </>
    )
}
