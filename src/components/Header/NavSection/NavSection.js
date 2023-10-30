import './NavSection.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import index_html from '../../../assets/images/Logo.svg'


const NavSection = () => {
  return (
    <section className="nav-section">
        <div className="container">    
            <NavLink to="/"> <img src={index_html} alt="crito logotype"/> </NavLink>
            <div className="dropdown">
                <button className="dropbtn"><a href='#'><i className="menu-bars fa-solid fa-bars-staggered"></i></a></button>
                <div className="dropdown-content">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Service">Service</NavLink>
                    <NavLink to="/News">News</NavLink>
                    <NavLink to="/contacts">Contact</NavLink>
                </div>
            </div>
            
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="content-box">   
                            <i className="fa-regular fa-phone-volume"></i>
                            +46 (8) 121 470 50  
                        </div>
                        <div className="content-box">
                            <i className="fa-light fa-envelope"></i>
                            info@crito.com  
                        </div>
                        <div className="content-box last">
                            <i className="fa-sharp fa-regular fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM  
                        </div>
                    </div>
                    <div className="social-media">
                        <NavLink to="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></NavLink>
                        <NavLink to="https://twitter.com/?lang=sv" target="_blank"><i className="fa-brands fa-x-twitter"></i></NavLink> 
                        <NavLink to="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></NavLink>  
                        <NavLink to="https://www.linkedin.com/feed/" target="_blank"><i className="fa-brands fa-linkedin"></i></NavLink>               
                    </div>  
                </div>  
                <div className="main-menu">
                    <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Service">Service</NavLink>
                    <NavLink to="/News">News</NavLink>
                    <NavLink to="/contacts">Contact</NavLink>
                    </nav>
                    <NavLink to="/logginpage" className="btn-yellow btn-login" href="login.hmtl">Login<i className="fa-regular fa-arrow-up-right"></i></NavLink>
                </div>                     
            </div>    
        </div>    
    </section>
  )
}

export default NavSection