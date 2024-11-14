import React from 'react'
import SecondHero from '../../Components/Hero/SecondHero/SecondHero'
import MapComponent from '../../Components/MapComponent/MapComponent'
import FooterComponent from '../../Components/FooterComponent/FooterComponent'
import Widget from '../../Components/WidgetArea/Widget'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'

export default function Contact() {
  return (
    <div>
      <SecondHero title = 'contact us'/>
      <ContactComponent/>
      <MapComponent/>
      <Widget card={true}/>
      <FooterComponent/>
    </div>
  )
}
