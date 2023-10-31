import React from 'react'
import './Footer_icons.css'

const Fotter_icons = () => {
  return (
        <footer className="icons-and-copyright">
        <div className="container copyright">
            <div>
                <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            </div>
            <div className="social-media-bottom">
                <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/?lang=sv" target="_blank"><i className="fa-brands fa-x-twitter"></i></a> 
                <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>  
                <a href="https://www.linkedin.com/feed/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>               
            </div>  
        </div>
    </footer>
  )
}

export default Fotter_icons