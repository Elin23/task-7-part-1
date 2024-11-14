import React from 'react'
import './ServiceComponent.css'
export default function ServiceComponent({id, title, desc}) {
  return (
    <>
      <div className="service-container col-xl-3 d-flex align-items-center justify-content-center" data-aos="fade-right">
      <div className="service d-flex flex-column">
        {id && <span className='service-id'>{id}</span>}
        {title && <h3 className='service-title'>{title}</h3>}
        {desc && <p className='service-desc'>{desc}</p>}
      </div>
    </div>
    </>
  )
}
