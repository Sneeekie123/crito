import React from 'react';
import './Lets_Connect.css';
import background_lines from '../../../assets/images/background-lines.svg'
import { NavLink } from 'react-router-dom'

const Lets_Connect = () => {
  return (
    <div className='background'>
      <div className="container intro">
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contact</NavLink>
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