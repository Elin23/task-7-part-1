import React from 'react'
import { Link } from 'react-router-dom'
import './FooterComponent.css'
export default function FooterComponent() {
    return (
        <>
            <footer className='py-4'>
                <div className="container">
                    <div className="footer-content d-flex justify-content-between flex-wrap text-white">
                        <div className="footer-left">
                            &copy; copyright 2024 by Extech
                        </div>
                        <div className="footer-right d-flex align-items-center gap-5">
                            <Link className='text-reset text-decoration-none'>Terms & Condition</Link>
                            <Link className='text-reset text-decoration-none'> Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
