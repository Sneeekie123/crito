import React from 'react';
import '../Contact/Lets_Connect.css';
import background_lines from '../../assets/images/background-lines.svg'

const Lets_Connect = () => {
  return (
    <div className='background'>
      <div className="container intro">
        <div className="links">
          <a href="home.html">Home</a>
          <a className="active" href="contact.html">Contact</a>
        </div>
      </div>
    
      <div className="container connect">
        <h1>Let’s Connect</h1>
        <img className="background-lines" src={background_lines} alt="" />
      </div>
     
    </div>
      
  );
};

export default Lets_Connect;