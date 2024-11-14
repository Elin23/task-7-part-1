import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import './SectionTitle.css';
export default function SectionTitle({sectionTitle, desc, className, color}) {
    return (
        <>
            <div className={`main-title d-flex flex-column ${color}`}>
                {sectionTitle && <div className="section-title" data-aos= 'fade-right'>
                    <IoIosArrowRoundBack />
                    <span className='text-uppercase'>{sectionTitle}</span>
                    <IoIosArrowRoundForward />
                </div>}
                <div className={`section-desc ${className} col-md-12 text-capitalize`} data-aos= 'fade-right'>{desc}</div>
            </div>
        </>
    )
}
