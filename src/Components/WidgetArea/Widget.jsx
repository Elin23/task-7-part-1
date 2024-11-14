import React from 'react'
import logo from '/assets/imgs/white-logo.svg'
import './Widget.css'
import { social } from '../../Data/SoicalData'
import { Link } from 'react-router-dom'
import { quickLinks } from '../../Data/QuiqLinksData'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RecentPosts } from '../../Data/RescentPostsData'
import { CiCalendarDate } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import ContactCard from '../ContactCard/ContactCard'

export default function Widget({ card}) {
    return (
        <>
            <div className="widget-area p-100">
                <div className="container">
                    {card && <div className='row'>
                        <ContactCard className='evenly' />
                    </div>}
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget-item" data-aos="fade-right">
                                <img src={logo} alt="logo" />
                                <p>Extexh IT is a Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis</p>
                                <div className="social">
                                    {social.map((item, index) => {
                                        return <a href={item.socialLink} key={index} data-aos='fade-up'>{item.socialIcon}</a>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget-item" data-aos="fade-right">
                                <div className="widget-title">
                                    Quick Links
                                </div>
                                <ul className="quick-links list-unstyled">
                                    {quickLinks.map((item, index) => {
                                        return <li key={index} >
                                            <MdKeyboardDoubleArrowRight />
                                            <Link className='text-reset text-decoration-none ms-1' to={item.link}>{item.linkText}</Link>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget-item" data-aos="fade-right">
                                <div className="widget-title">
                                    Recent Posts
                                </div>
                                <div className="recent-posts mt-4 d-flex flex-column gap-3 text-white">
                                    {RecentPosts.map((post, index) => {
                                        return <div className="recent-post d-flex gap-3" key={index} data-aos='flip-left'>
                                            <img src={post.image} className='recent-post-img' alt="post" />
                                            <div className="recent-post-content d-flex flex-column gap-1">
                                                <span className='post-date d-flex align-items-center gap-1'><CiCalendarDate className='widget-icon' />
                                                    <span>{post.date}</span>
                                                </span>
                                                <h6>{post.title}</h6>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget-item" data-aos="fade-right">
                                <div className="widget-title">
                                    Contact Us
                                </div>
                                <div className="contact-content d-flex flex-column text-white gap-4 mt-4" >
                                    <div className="email">
                                        <MdEmail />
                                        <span> info@example.com</span>
                                    </div>
                                    <div className="phone">
                                        <IoMdCall />
                                        <span> +208-6666-0112</span>
                                    </div>
                                    <div class="email-input-container">
                                        <form action="">
                                            <input required placeholder="Your email address" type="email" />
                                            <button className="contact-btn" type="button">
                                                <FaArrowRightLong />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="check-box d-flex align-items-center gap-2">
                                        <input type="checkbox" className='checkbox-input' />
                                        <span> I agree to the <Link to="/" className='text-reset'>privacy policy</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
