import React from 'react'
import SecondHero from '../../Components/Hero/SecondHero/SecondHero'
import Slider from '../../Components/Slider/Slider'
import { ServiceData } from '../../Data/SliderData'
import MemberSection from '../../Components/MemberSection/MemberSection'
import BrandSection from '../../Components/BrandSection/BrandSection'
import { Brands } from '../../Data/BrandData'
import FooterComponent from '../../Components/FooterComponent/FooterComponent'
import Widget from '../../Components/WidgetArea/Widget'
 

export default function About() {
  return (
    <div>
      <SecondHero title = 'about us'/>
      <Slider data={ServiceData} container ={false}/>
      <MemberSection/>
      <BrandSection data={Brands} container={true}/>
      <Widget card={true}/>
      <FooterComponent/>
    </div>
  )
}
