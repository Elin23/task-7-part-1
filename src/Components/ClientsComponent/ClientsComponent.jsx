import React from 'react'
import Slider from '../Slider/Slider'
import { ClientsData } from '../../Data/SliderData'
import './ClientsComponent.css'
export default function ClientsComponent() {
    return (
        <>
            <div className="client-section">
                <Slider data={ClientsData} container={true} />
            </div>
        </>
    )
}
