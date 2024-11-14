import React from 'react'
import './ServiceSection.css'
import ServiceComponent from '../ServiceComponent/ServiceComponent'
import {services} from '../../Data/ServiceData'
export default function ServiceSection() {
  return (
    <>
      <section className='service-section section-padding bg-blue'>
        <div className="container d-flex justify-content-center flex-wrap">
          {
            services.map((service, index) => {
              return (
                <ServiceComponent
                  id={service.id}
                  title={service.title}
                  desc={service.desc}
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
}
