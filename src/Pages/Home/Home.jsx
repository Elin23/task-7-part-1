import React from 'react'
import HomeHero from '../../Components/Hero/HomeHero/HomeHero'
import CardsSlider from '../../Components/CardsSlider/CardsSlider';
import { cards } from '../../Data/CardData';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import VideoComponent from '../../Components/VideoComponent/VideoComponent';
import PlaneSection from '../../Components/PlaneSection/PlaneSection';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';
import { BlogsData } from '../../Data/BlogsData';
import BlogCard from '../../Components/BlogCard/BlogCard';
import CardComponent from '../../Components/CardComponent/CardComponent';
import ClientsComponent from '../../Components/ClientsComponent/ClientsComponent';
import Widget from '../../Components/WidgetArea/Widget';
import Testimonials from '../../Components/TestimonialsSection/Testimonials';
import AdComponent from '../../Components/AdComponent/AdComponent';
import AdImg1 from '/assets/imgs/ctaThumb1_1.webp'
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import AdImg2 from '/assets/imgs/ctaThumb.webp'
export default function Home() {
  return (
    <div>
      <HomeHero />
      <ClientsComponent />
      <CardsSlider
        cardComponent={CardComponent}
        data={cards}
        slidesPerView={4}
        sectionTitle={"our services"}
        desc={'Elevating Businesses with IT Ingenuity'}
      />
      <VideoComponent />
      <ServiceSection />
      <PlaneSection />
      <AdComponent
        img={AdImg1}
        title={<SectionTitle sectionTitle={'Contact Us'} desc={'24/7 Expert Hosting Support Our Customers Love'} color={'light'} />}
        className={'mainAd'} />
      <Testimonials />
      <CardsSlider
        cardComponent={BlogCard}
        data={BlogsData}
        slidesPerView={3}
        sectionTitle={"Blogs & News"}
        desc={'Featured News and Insights'}
      />
      <AdComponent
        img={AdImg2}
        title={<SectionTitle sectionTitle={''} desc={'Stay Connected With Cutting Edge IT'} color={'light'} />}
        className={'subAd'} />
      <Widget />
      <FooterComponent />
    </div>
  )
}
