import React from 'react'
import { MembersData } from '../../Data/MembersData'
import MemberCard from '../MemberCard/MemberCard'
import './MemberSection.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

export default function MemberSection() {
    return (
        <>
            <div className="member-section section-padding">
                <div className="container">
                    <SectionTitle sectionTitle={'Team Members'} desc={'Our Dedicated Team Members'} className={'col-lg-12'} />
                    <div className="d-flex justify-content-end align-items-end member-btn">
                    <ButtonComponent text={'All Members'} bgColor={'main'} width={'wide'}/>
                    </div>
                    <div className="row">
                        {MembersData.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
