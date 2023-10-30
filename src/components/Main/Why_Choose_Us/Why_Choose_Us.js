import React from 'react'
import '../../../index.css'
import thumps_up from '../../../assets/images/thumbs-up.svg'
import pentagon from '../../../assets/images/pentagon.svg'
import  experience from '../../../assets/images/experience.svg'
import  cog_head from '../../../assets/images/cog-head.svg'
import  twoladies from '../../../assets/images/2ladies.png'

const Why_Choose_Us = () => {
  return (
            <section className="why-choose-us">
            <div className="gray-box"></div>
            <div className="container">
                <div className="headline">
                    <h3>
                        Why Choose Us
                    </h3>
                    <h2>
                        Why We Are The Best Business Consulting Agency
                    </h2>
                    <div className="container image-text">
                        <img className="icons" src={thumps_up} alt="bard"/>
                            <h4>
                            Process Excellence
                            <p>
                            Lorem, ipsum dolor sit amet consectetur.
                            </p>
                            </h4>
                        
                    </div>
                    <div className="container image-text">
                        <img className="icons" src={pentagon} alt=""/>
                            <h4>
                                Strategic Planning
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur.
                                </p>
                            </h4>
                    </div>
                    <div className="container image-text">
                        <img className="icons" src={experience} alt=""/>
                            <h4>
                                Experience Design
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur.
                                </p>
                            </h4>
                    </div>
                    <div className="container image-text">
                        <img className="icons" src={cog_head} alt=""/>
                            <h4>
                                Artificial Inteligence
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur.
                                </p>
                            </h4>
                    </div>
                </div>
            <div className="parent">
                    <img className="two-ladies" src={twoladies} alt=""/>
                </div>
            </div>
        </section>
  )
}

export default Why_Choose_Us