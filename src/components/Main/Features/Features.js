import React from 'react'
import '../../../index.css'
import handshake from '../../../assets/images/icon-handshake.png'
import startup from '../../../assets/images/startup.png'
import risk_box from '../../../assets/images/risk-box.png'
import financial from '../../../assets/images/risk-box.png'

const Features = () => {
  return (
        <div className="fetures">
            <div className="container features-grid">
                <div className="item1">
                    <img src={handshake} alt=""/>
                    <h2>Business Advice</h2>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                </div>
                <div className="item2">
                    <h4>Featuers</h4>
                    <h2 className="headline-grid">
                        Our Accounting is trusted by thousand of companies 
                    </h2>
                    <a href="learnmore.hmtl"><button className="container btn-yellow">Learn more <i className="fa-regular fa-arrow-up-right"></i></button></a>
                </div>
                <div className="item3">
                    <img src={startup} alt=""/>
                    <h2>Startup Business</h2>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                </div>  
                <div className="item4">
                    <img src={risk_box} alt=""/>
                    <h2>Risk Management</h2>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                </div>
                <div className="item5">
                    <img src={financial} alt=""/>
                    <h2>Financial Advice</h2>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                </div>
            </div>
        </div>
  )
}

export default Features