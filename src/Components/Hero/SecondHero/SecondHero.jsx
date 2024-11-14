import React from 'react'
import './SecondHero.css';
import shapeImg from '/assets/imgs/line-element.webp'
import shapeImg2 from '/assets/imgs/element.webp'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SecondHero(props) {
    const location = props.title === 'contact us' ? 'contact' : 'about';
  return (
    <div>
      <div className="content position-relative">
        <div className="shape-on-right position-absolute">
            <img src={shapeImg} alt="shape"/>
        </div>
        <div className="shape-on-left">
          <img src={shapeImg2} alt="shape" />
        </div>
        <div className="info position-absolute text-capitalize text-center text-white" >
            <h2>{props.title}</h2>
            <span>
                <Link className='text-decoration-none text-reset' to= '/'>Home </Link>
                <MdKeyboardArrowRight />
                <Link className='text-decoration-none text-reset'  to= {`/${location}`}> {props.title}</Link></span>
        </div>
      </div>
    </div>
  )
}
