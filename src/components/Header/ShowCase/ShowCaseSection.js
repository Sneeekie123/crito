import './ShowCaseSection.css'
import React from 'react'
import img_backgroundlines from '../../../assets/images/background-lines.svg'
import images_showcase from '../../../assets/images/Showcase-image.svg'

function Showcase() {
  return (
    <section className="showcase-section">
        <img className="background-lines" src={img_backgroundlines} alt=""/>
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <a className="btn-yellow" href="consulting.html">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></a>
                <a className="btn-transparent" href="services.hmtl">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <img className="images-showcase" src={images_showcase} alt="image of man with a tablet"/>
        </div>
    </section>
  )
}

export default Showcase