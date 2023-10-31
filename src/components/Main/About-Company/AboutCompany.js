import React from 'react'
import './AboutCompany.css'
import samantha from '../../../assets/images/Samantha-brown.png'

const AboutCompany = () => {
  return (

      <section className="about-company">
        <div className="container ">
            <div className="samantha">
                <img className="image" src={samantha} alt="Samantha-brown"></img>
                <div className="samantha-blue">
                    <h3>Samantha Brown, <nobr className="founder">Founder</nobr></h3>
                    <h4>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</h4>
                </div>
            </div>
            <div className="about">
                <h3>About Company</h3>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                <br/> <br/> <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet
                </h4>
                <a href="learnmore.hmtl"><button className="btn-black">Learn More<i className="fa-regular fa-arrow-up-right"></i></button></a>
                <a href="intro.hmtl"><button className="btn-round" href="services.hmtl"><i className="fa-sharp fa-solid fa-play"></i></button></a>
                <p className="intro">Intro Video</p>
            </div> 
        </div>
    </section>

  )
}

export default AboutCompany