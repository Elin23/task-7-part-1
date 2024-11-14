import React, { useState } from 'react'
import './PlaneSection.css'
import { PlaneData } from '../../Data/PlaneData'
import PlaneComponent from '../PlaneComponent/PlaneComponent'
import SectionTitle from '../SectionTitle/SectionTitle'
import pricingImg from '/assets/imgs/pricingShape1_2.webp'
import pricingImg2 from '/assets/imgs/pricingShape1_1.webp'

export default function PlaneSection() {
    const [activeTab, setActiveTab] = useState('monthly');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

  return (
    <>
        <section className="plane-section section-padding">
            <div className="container">
                <div className="row text-center">
                    <SectionTitle sectionTitle={'Our Pricing'} desc={'Our Awesome Pricing Plans'}/>
                    <img src={pricingImg} alt="pricing-img" className='pricing-img-1'/>
                </div>
                <div className="row custom width-fit-content m-auto justify-content-center align-items-center position-relative">
                    <ul className="tabs list-unstyled">
                        <li><button className={`${activeTab === 'monthly' ? 'active' : ''}`} onClick={() => handleTabClick('monthly')}>Monthly</button></li>
                        <li><button className={`${activeTab === 'yearly' ? 'active' : ''}`} onClick={() => handleTabClick('yearly')}>Yearly</button></li>
                    </ul>
                </div>
                <div className="row">
                    {PlaneData.map((plane, index) => (
                        <PlaneComponent key={index} plane={plane} activeTab={activeTab} />
                    ))}
                </div>
            </div>
            <div className="price-img position-relative">
                <img src={pricingImg2} alt="pricing-img" className='pricing-img-2'/>
            </div>
        </section>
    </>
  )
}
