import React, { useState } from 'react';
import background_wavy_lines from '../../../assets/images/background-wavy-lines.svg';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  const register = (e) => {
    e.preventDefault();
    validateEmail();

    
  };

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('Email valid')
      console.log('Email valid');
    }
  };



  return (
    <section className="newsletter">
      <img className="background-wavy-lines" src={background_wavy_lines} alt="" />
      <div className="container">
        <h2>Get News Updates By Signup</h2>
        <form id="regForm" onSubmit={register} method="post" noValidate>
          <div>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} placeholder="username@domain.com" required/>
            <span className="container span" id="email-error">{emailError}</span>
          </div>
          <div>
            <button className="btn-yellow" type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;