import React from 'react'
import './MemberCard.css'
import { IoShareSocialOutline } from "react-icons/io5";

export default function MemberCard({ member }) {
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="flip-right">
                <div className="contain d-flex justify-content-center">
                    <div className="member-card">
                        <div className="member-img">
                            <img src={member.img} alt="member" />
                        </div>
                        <div className="share-member position-absolute" data-aos="fade-up">
                            <IoShareSocialOutline />
                        </div>
                        <div className="member-content">
                            <h3>{member.name}</h3>
                            <span>{member.job}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
