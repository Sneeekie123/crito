import React from 'react'
import '../../../index.css'
import businessman from '../../../assets/images/img-business.png'
import client from '../../../assets/images/img-client.png'
import educate from '../../../assets/images/img-educate.png'
import insights from '../../../assets/images/img-insights.png'


const Project_and_case = () => {
  return (
        <section className="project-and-case">
            <div className="container">
                <div className="section-title">
                    <p>Project & Case Studies</p>
                    <h2>Let’s Looks Our Global Projects</h2>
                </div>
                <div className="project-and-cases">
                    <a className="project" href="#">
                        <img src={businessman} alt="A man reading a paper"/>
                        <h3>Grow your business</h3>
                        <div className="readmore"> Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="project" href="#">
                        <img src={client} alt="pink apple produkt"/>
                        <h3>Why your client needs a responsive website</h3>
                        <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="project" href="#">
                        <img src={educate} alt="Desk with suplies"/>
                        <h3>Educate your employees to get better results</h3>
                        <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="project" href="#">
                        <img src={insights} alt="Laptop"/>
                        <h3>Business Insights is a important piece of your business</h3>
                        <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                </div>
                <div className="center-content">
                    <a className="btn-black" href="projects.html">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </section>
  )
}

export default Project_and_case