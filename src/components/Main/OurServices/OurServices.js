import React from 'react'
import './OurServices.css'
import ServiceBox from './ServiceBox'
import Button from '../../Generics/Button'
import wavy_lines_middle from '../../../assets/images/wavy-lines-middle.svg'


const OurServices = () => {

    const services = [
        {title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "business.advice.html"},
        {title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "startup.business.html"},
        {title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "financial.advice.html"},
        {title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "risk.managment.html"}

    ]




  return (
        <section className="our-services">
            <div className="container headline">
                <div className="top-headline">
                    <h3>
                        Our Services
                    </h3>
                    
                    <h2>
                        We Provide The Best Service For Consulting
                    </h2>
                </div>
                <div className="service-boxes">

                   
                    { services.map((service, index) =>(
                            <ServiceBox key={index} title={service.title} description={service.description} url={service.url}  />
                        ))}
                   
                </div>
                <div className="container browse"> 
                <Button type="browse" title="Browse Services" url="services.html"/>  
                </div>
                <div className="wavy-lines-middle">
                    <img className='wavy-lines-middle' src={wavy_lines_middle} alt="wavy-lines.middle"/>
                </div>
            </div>
        </section>
    )
}

export default OurServices