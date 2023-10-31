import React from 'react'
import './Information.css'

const Information = () => {
  return (
    <section className="information">
        <div className="container background">
            <div className="headline">
                <h2>
                    Leave us a message <br/> for any information.
                </h2>
            </div>
            <div className="message-boxes">
                <form action="" method="post">
                    
                    <label for="firstname"></label>
                    <input type="text" name="name" id="name" title="name" placeholder="Name*"/>

                </form>

                <form action="" method="post">
                    
                    <label for="email"></label>
                    <input type="email" name="email" id="email" title="email" placeholder="Email*"/>

                </form>

                <form action="" method="post">
                    
                    <label id="your-message" for="your-message"></label>
                    <input className="your-message" type="text" name="your-message" id="your-message" title="your-message" placeholder="Your message*"/>

                </form>
            </div>
            <div>
                <a className="btn-yellow btn-login" href="login.hmtl">Send Message<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>  

    </section>
  )
}

export default Information