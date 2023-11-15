import React from 'react';
import background_wavy_lines from '../../../assets/images/background-wavy-lines.svg'; 
import './Newsletter.css'



const Newsletter = () => {

  const register = (event) => {
    event.preventDefault();

    for (let element of event.target.elements) {
      if (element.required) {
        validateFormField(element);
      }
    }
  }; 

  const validateFormField = (targetElement) => {
    const errorMessages = {
      email_required: 'You must enter a Email adress',
      email_invalid: 'Please enter a valid Email address',
    };

    if (!validateLength(targetElement.value, 1 )) {
      document.getElementById(`${targetElement.id}`).classList.add('error');
      document.getElementById(`${targetElement.id}-error`).innerHTML = errorMessages[targetElement.id + '_required'];
    }
    else {

      var result = false
      switch(targetElement.type) {
          case 'text' :
              result = validateLength(targetElement)
              break;

          case 'email':
              result = validateEmail(targetElement.value)
              break;
         
      }
      if (!result) {
          document.getElementById(`${targetElement.id}`).classList.add('error')
          document.getElementById(`${targetElement.id}-error`).innerHTML = errorMessages[targetElement.id + "_invalid"]
      } else  {
          document.getElementById(`${targetElement.id}`).classList.remove('error')
          document.getElementById(`${targetElement.id}-error`).innerHTML = ""
      }  
    } 
  }; 
  
  function validateLength(value, minLength = 2) {
    if (value.length >= minLength)
        return true 

    return false
}

  const validateEmail = (value) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        return true

    return false
  };

  return (
    <section className="newsletter">
      <img className="background-wavy-lines" src={background_wavy_lines} alt="" />
      <div className="container">
        <h2>Get News Updates By Signup</h2>
        <form id='regForm' className='continer'  onSubmit={register} method="post" noValidate>
          <div>
            <input id="email" required type="email" placeholder="username@domain.com" />
            <span className='container span' id="email-error"></span>
          </div>
          <div>
          <button className="btn-yellow" type="submit"> Subscribe </button>
          </div>
           
        </form>
      </div>
    </section>
  );
};

export default Newsletter;