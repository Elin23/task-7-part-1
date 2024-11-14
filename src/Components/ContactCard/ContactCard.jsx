import React from 'react'
import './ContactCard.css'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdWifiCalling } from "react-icons/md";

export default function ContactCard({className}) {
    return (
        <>
            <div className={`contact-card ${className}`}>
                <div className="contact-card-item d-flex align-items-center gap-4" data-aos="flip-right">
                    <div className="contact-card-item-icon">
                        <IoLocationSharp />
                    </div>
                    <div className="contact-card-item-info">
                        <span>Address</span>
                        <p>4648 Rocky Road Philadelphia PA</p>
                    </div>
                </div>
                <div className="contact-card-item d-flex align-items-center gap-4" data-aos="flip-right">
                    <div className="contact-card-item-icon">
                        <MdOutlineAttachEmail />
                    </div>
                    <div className="contact-card-item-info">
                        <span>Send Email</span>
                        <p>info@exmple.com</p>
                    </div>
                </div>
                <div className="contact-card-item d-flex align-items-center gap-4" data-aos="flip-right">
                    <div className="contact-card-item-icon">
                        <MdWifiCalling />
                    </div>
                    <div className="contact-card-item-info">
                        <span>Call Emergency</span>
                        <p>+88 0123 654 99</p>
                    </div>
                </div>
            </div>
        </>
    )
}
