import React from 'react'
import '../../../index.css'
import background_wavy_lines from '../../../assets/images/background-wavy-lines.svg'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <img className="background-wavy-lines" src={background_wavy_lines} alt=""/>
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <form>
                <input type="text" placeholder="username@domain.com"/>
                <button className="btn-yellow">Subscribe</button>
            </form>
        </div>
    </section>

  )
}

export default Newsletter