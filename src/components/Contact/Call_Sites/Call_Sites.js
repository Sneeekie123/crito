import React from 'react'
import './Call_Sites.css'
import visit_us from '../../../assets/images/visit-us.svg'
import call_us from '../../../assets/images/call-us.svg'
import email_us from '../../../assets/images/email-us.svg'

const Call_Sites = () => {
  return (
    <section className="call-sites">
        <div className="container">
            <div className="container visit-us">
                <img className="icons" src={visit_us} alt=""/>
                <div className="text-information">
                    <h3>Visit us</h3>
                    <p>Sveavägen 31 <br/> 111 34 STOCKHOLM</p>
                </div>
            </div>
            <div className="container call-us">
                <img className="icons" src={call_us} alt=""/>
                <div className="text-information">
                    <h3>Call us</h3>
                    <p>+46 (8) 121 470 50 <br/>+46 (8) 121 470 51</p>
                </div>
            </div>
            <div className="container email-us">
                <img className="icons" src={email_us} alt=""/>
                <div className="text-information">
                    <h3>Email us</h3>
                    <p>info@crito.com <br/>support@crito.com</p>
                </div>   
            </div>
        </div>
    </section>
  )
}

export default Call_Sites