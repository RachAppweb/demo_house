import React, { useRef } from 'react';
import "../navbar/Navbar.css"
import { villa } from '../assets/Pics';
import { Link } from 'react-router-dom';
import { HashLink as Li } from 'react-router-hash-link';

const Navbar = () => {
    const navRef=useRef()
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive")
    }
    return (
        <div className='navbarContainer'>
            <div className="logo">
                <b className='logob'>House</b>
            </div>
            <div className="search">
            <i className="fas fa-magnifying-glass"></i>

                <input className='sear' type="search" name="" id="" placeholder="search for it" />
            </div>
            <div ref={navRef} className="navright">
                <div className="elements">
                  <Link to="/"><span className="Home">Home</span></Link>  
                   <Link to='/Testi'><span className="Place1">Testimonials</span></Link> 
                   <Li to='#icon'> <span className="Place1">About</span></Li>

                </div>
                
                    <img className='pic' src={villa} alt="" />
                
                <button  className='nav-btn close' onClick={showNavbar}>
                <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <button className='nav-btn' onClick={showNavbar}>
            <i class="fa-solid fa-bars"></i>
            </button>
            
        </div>
    );
}

export default Navbar;
