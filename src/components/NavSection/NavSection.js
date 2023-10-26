import './NavSection.css'
import React from 'react'
import index_html from '../../assets/images/Logo.svg'


const NavSection = () => {
  return (
    <section className="nav-section">
        <div className="container">    
            <a href="index.html">
                <img src={index_html} alt="crito logotype"/>
                </a>
            <div className="dropdown">
                <button className="dropbtn"><a href='#'><i className="menu-bars fa-solid fa-bars-staggered"></i></a></button>
                <div className="dropdown-content">
                    <a className="active" href="home.html">Home</a>
                    <a href="Service.html">Service</a>
                    <a href="News.html">News</a>
                    <a href="Contact.html">Contact</a>
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
                        <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/?lang=sv" target="_blank"><i className="fa-brands fa-x-twitter"></i></a> 
                        <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>  
                        <a href="https://www.linkedin.com/feed/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>               
                    </div>  
                </div>  
                <div className="main-menu">
                    <nav>
                        <a className="active" href="home.html">Home</a>
                        <a href="Service.html">Service</a>
                        <a href="News.html">News</a>
                        <a href="Contact.html">Contact</a>
                    </nav>
                    <a className="btn-yellow btn-login" href="login.hmtl">Login<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>                     
            </div>    
        </div>    
    </section>
  )
}

export default NavSection