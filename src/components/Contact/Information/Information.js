import React from 'react';
import './Information.css';
import './Validation'




const Information = () => {
  const register = (event) => {
    event.preventDefault();

    for (let element of event.target.elements) {
      if (element.tagName.toLowerCase() === 'input' && element.required) {
        validateFormField(element);
      }
    }
  };

  const validateFormField = (targetElement) => {
    const errorMessages = {
      name_required: 'You must enter a Name',
      name_invalid: 'You must enter a valid name',
      email_required: 'You must enter an Email address',
      email_invalid: 'Please enter a valid Email address',
      your_message_required: 'You must enter a message',
      your_message_invalid: 'You must enter a valid message',
    };

    const elementId = `${targetElement.id}`;
    const elementErrorId = `${targetElement.id}-error`;

    const element = document.getElementById(elementId);
    const elementError = document.getElementById(elementErrorId);

    if (!validateLength(targetElement.value, 1)) {
      if (element) {
        element.classList.add('error');
      }
      if (elementError) {
        elementError.innerHTML = errorMessages[`${targetElement.id}_required`];
      }
    } else {
      let result = false;
      switch (targetElement.type) {
        case 'text':
          result = validateLength(targetElement.value);
          break;

        case 'email':
          result = validateEmail(targetElement.value);
          break;

        case 'textarea':
          result = validateLength(targetElement.value);
          break;

        default:
          result = true; 
          break;
      }

      if (!result) {
        if (element) {
          element.classList.add('error');
        }
        if (elementError) {
          elementError.innerHTML = errorMessages[`${targetElement.id}_invalid`];
        }
      } else {
        if (element) {
          element.classList.remove('error');
        }
        if (elementError) {
          elementError.innerHTML = '';
        }
      }
    }
  };

  function validateLength(value, minLength = 2) {
    return value.length >= minLength;
  }

  const validateEmail = (value) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  };

  return (
    <section className="information">
      <div className="container background">
        <div className="headline">
          <h2>Leave us a message for any information.</h2>
        </div>
        <div className="message-boxes">
          <form   action='testing.php' onSubmit={register} method="post" noValidate>
            <label htmlFor="name"></label>
            <input type="text" name="name" id="name" title="name" placeholder="Name*" required />
            <span className=' span' id="name-error"></span>
            
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="username@domain.com" required />
            <span className=' span' id="email-error"></span>
            
            <label htmlFor="your_message"></label>
            <input className="your_message" name="your_message" id="your_message" title="your_message" placeholder="Your message*" required />
            <span className=' span' id="your_message-error"></span>
            
            <button type="submit" className="btn-yellow btn-login">
              Send Message<i className="fa-regular fa-arrow-up-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Information;