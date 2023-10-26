import React from 'react'
import './OurServices.css'
import ServiceBox from './ServiceBox'

import wavy_lines_middle from '../../../../assets/images/wavy-lines-middle.svg'


const OurServices = () => {
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

                   
                    <ServiceBox />
                    <ServiceBox />
                    <ServiceBox />
                    <ServiceBox />
                   

                   
                </div>
                <div className="wavy-lines-middle">
                    <img className='wavy-lines-middle' src={wavy_lines_middle} alt="wavy-lines.middle"/>
                </div>
            </div>
        </section>
    )
}

export default OurServices