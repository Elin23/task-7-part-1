import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import './CardComponent.css'

export default function CardComponent({ data }) {
  return (
    <div className="card-container d-flex align-items-center justify-content-center" data-aos="fade-right">
      <div className="card d-flex flex-column">
        <div className="card-img"data-aos="fade-right">
          {data.icon && <img src={data.icon} alt='icon' />}
        </div>
        {data.title && <h3>{data.title}</h3>}
        {data.description && <p>{data.description}</p>}
        <button className='card-btn d-flex align-items-center justify-content-center'>
          <span className='card-btn-text'>Read more</span>
          <MdKeyboardDoubleArrowRight className='card-btn-icon' />
        </button>
      </div>
    </div>
  )
}
