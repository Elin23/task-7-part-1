import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '/assets/imgs/logo.svg';
import './NavBar.css';
import { NavDropdown, Offcanvas, Button } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { MdKeyboardArrowDown } from "react-icons/md";

export default function NavBar(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const scrollHandler = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    let secondNav = props.id === "second-navbar"; // returns true if the props.id is second-navbar and false if it's not

    const navList = (<ul className='list-unstyled d-flex mb-0'>
        <li>
            <Link to='/' className='text-reset text-decoration-none'>Home <MdKeyboardArrowDown /></Link>
        </li>
        <li>
            <Link to='/about' className='text-reset text-decoration-none'>About</Link>
        </li>
        <li>
            <Link to='/' className='text-reset text-decoration-none'>Services <MdKeyboardArrowDown /></Link>
        </li>
        <li>
            <Link to='/' className='text-reset text-decoration-none'>Pages <MdKeyboardArrowDown /></Link>
        </li>
        <li>
            <Link to='/' className='text-reset text-decoration-none'>Blogs <MdKeyboardArrowDown /></Link>
        </li>
        <li>
            <Link to='./contact' className='text-reset text-decoration-none'>Contact</Link>
        </li>
    </ul>
    );

    const [searchVisible, setSearchVisible] = useState(false);
    const toggleSearch = () => setSearchVisible(!searchVisible);

    return (
        <>
            <header className={`${scrolled ? 'scrolled' : ''}`}>
                <nav className='d-flex align-items-center justify-content-between' id={props.id}>
                    <div className="left d-flex justify-content-between">
                        {secondNav && <img src="/assets/imgs/plane.webp" className='w-25 plane-img' alt="plane" />}
                        <Link to='/'><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="d-flex align-items-center list">
                        {navList}
                    </div>
                    <div className="right d-flex gap-lg-3 align-items-center">
                        <div className="icons me-3 d-flex gap-3 align-items-center ">
                            {searchVisible && (
                                <div className="search-bar">
                                    <input type="text" placeholder="Search..." className="form-control" />
                                </div>
                            )}
                            <IoIosSearch onClick={toggleSearch} style={{ cursor: 'pointer' }} />

                            {!secondNav && <Link to='/'><FaCartShopping /></Link>}
                        </div>
                        <ButtonComponent text={"get a quote"} bgColor={'main'}/>
                        <Button variant="primary" className="toggle-nav-btn bg-transparent border-0" onClick={handleShow}>
                            <RxHamburgerMenu className='HamburgerMenu' />
                        </Button>
                    </div>
                </nav>

                {/* appears only in medium and small screens */}
                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {navList}
                    </Offcanvas.Body>
                </Offcanvas>
            </header>
        </>
    )
}
