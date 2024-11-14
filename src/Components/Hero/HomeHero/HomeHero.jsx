import React from 'react'
import './HomeHero.css'
import guyImg from '/assets/imgs/heroThumb1_1.webp'
import heroShape from '/assets/imgs/heroShape1_1.webp'
import heroShape2 from '/assets/imgs/heroShape1_2.webp'
import heroShape3 from '/assets/imgs/heroShape3.png'
import heroShape4 from '/assets/imgs/heroShape4.png'
import heartbeat from '/assets/imgs/heartbeat.svg'
import check from '/assets/imgs/checked.svg'
import { FaStar } from 'react-icons/fa6'
import profileShape from '/assets/imgs/profileShape1_1.webp'
import circle from '/assets/imgs/heroShape1_3.webp'
import ButtonComponent from '../../ButtonComponent/ButtonComponent'

export default function HomeHero() {

  const checkedData = ["Deployment and Support", "Flexibility and Adaptability", "Discovery and Analysis", "Competitive Advantage"];

  const boxData = [{
    icon: <FaStar className='trustipilotStar' />,
    title: 'Trustipilot',
    border: true
  },
  {
    icon: null,
    title: 'Google',
    border: false
  }
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-container col-12">
          <div className="left-side col-lg-6 col-md-12">
            <div className='first-title'>
              <img src={heartbeat} alt="heartbeat" />
              <span>Everything You Need to Create a Website</span>
            </div>
            <h2>Business Innovation With IT Services Expertise</h2>
            <ul className='list-unstyled d-flex flex-wrap'>
              {checkedData?.map((item, index) => {
                return (
                  <li className='text-white' key={index}><img src={check} alt="checked" />{item}</li>
                )
              })}
            </ul>
            <ButtonComponent text={'Get Started'} bgColor={'orange'} />
            <div className="glass-box">
              {boxData?.map((box, index) => {
                return (
                  <div className={`box px-3 d-flex flex-column ${box.border ? 'border-right' : ''}`}>
                    <div className="box-title d-flex">
                      {box.icon}
                      <h4 className='ms-1'>{box.title}</h4>
                    </div>
                    <div className="box-content d-flex gap-2">
                      <img src={profileShape} alt="profileShape" />
                      <div className="rate d-flex flex-column gap-2">
                        <div className="stars d-flex">
                          <FaStar className='golden-star' />
                          <FaStar className='golden-star' />
                          <FaStar className='golden-star' />
                        </div>
                        <span>450+ reviews</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <img src={heroShape2} alt="shape" className='hero-img3 position-absolute' />
          </div>
          <div className="right-side col-lg-3 col-md-12">
            <img src={heroShape} alt="shape" className='hero-img2 position-absolute' />
            <img src={guyImg} alt="guy Image" className='hero-img1' />
            <img src={heroShape3} alt="shape" className='hero-img4 position-absolute' />
            <img src={heroShape4} alt="shape" className='hero-img5 position-absolute' />
          </div>
        </div>
        <div className="bottom">
          <img src={circle} alt="circle" />
        </div>
      </div>
    </>
  )
}
