import React from 'react'
import './ContactComponent.css'
import ContactCard from '../ContactCard/ContactCard'
import videoContact from '/assets/imgs/video.webp'
import FormComponent from '../FormComponent/FormComponent'


export default function ContactComponent() {
    return (
        <>
            <div className="contact-component section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-left">
                                <ContactCard className='start'/>
                                <div className="video-contact" data-aos="fade-right">
                                    <img src={videoContact} alt="video-contact" className='w-100' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start contact-right">
                            <span>Ready to Get Started?</span>
                            <p>Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut blandit felis odio in turpis. Quisque rhoncus, eros in auctor ultrices</p>
                            <FormComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
