import React from 'react'
import '../../index.css'
import wavy_lines_fotter from '../../assets/images/wavy-lines-footer.svg'
import crito_fotter from '../../assets/images/crito-footer.svg'

const Footer = () => {
  return (
    <footer className="footer">
            <img className="wavy-lines-footer" src={wavy_lines_fotter} alt=""/>
            <div className="container footer-container">
                <div className="crito">
                    <img src={crito_fotter} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="company">
                    <h3>Company</h3>
                    <a href="about.html">About</a>
                    <a href="featuers.html">Features</a>
                    <a href="works.html">Works</a>
                    <a href="career.html">Career</a>

                </div>
                <div className="help">
                    <h3>Help</h3>
                    <a href="support.html">Customer Support</a>
                    <a href="details.html">Delivery Details</a>
                    <a href="tearm-and-conditions.html">Terms & Conditions</a>
                    <a href="privacy.html">Privacy Policy</a>

                </div>
                <div className="resources">
                    <h3>Resources</h3>
                    <a href="free-ebooks.html">Free eBooks</a>
                    <a href="development.html">Development Tutorial</a>
                    <a href="blog.html">How to - Blog</a>
                    <a href="youtube.playlist.html">Youtube Playlist</a>

                </div>
                <div className="link">
                    <h3>Link</h3>
                    <a href="free-ebooks.html">Free eBooks</a>
                    <a href="development.html">Development Tutorial</a>
                    <a href="blog.html">How to - Blog</a>
                    <a href="youtube.playlist.html">Youtube Playlist</a>

                </div>
            </div>
    </footer>
    
  )
}

export default Footer