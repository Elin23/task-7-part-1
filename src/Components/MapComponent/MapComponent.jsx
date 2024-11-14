import React from 'react'

export default function MapComponent() {
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4797.02813098233!2d36.57321587128908!3d32.68675423112047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151bd5b2a24acc21%3A0x404b7bb318ecfc30!2z2YXZg9in2YbZig!5e0!3m2!1sar!2s!4v1731012329794!5m2!1sar!2s"
                height="400"
                width={'100%'}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-aos="fade-up"
            />
        </>
    )
}
