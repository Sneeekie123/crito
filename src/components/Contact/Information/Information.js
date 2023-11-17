import React, { useState } from 'react';
import './Information.css';

const Information = () => {
  const [errors, setErrors] = useState({});
  const [responseData, setResponseData] = useState(null);

  const register = (event) => {
    event.preventDefault();
    setErrors({});

    for (let element of event.target.elements) {
      if (element.tagName.toLowerCase() === 'input' && element.required) {
        validateFormField(element);
      }
    }

    if (Object.values(errors).every((error) => error === '')) {
      const formData = new FormData(event.target);
      const json = JSON.stringify(Object.fromEntries(formData));

      fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      })
        .then((res) => {
          if (res.status > 201) {
            throw new Error('Bad Request');
          }
          return res.text();
        })
        .then((data) => {
          console.log(data);
          setResponseData(data);
        })
        .catch((error) => {
          setResponseData('');
        });
    }
  };

  const validateFormField = (targetElement) => {
    const value = targetElement.value.trim();
    const type = targetElement.type;
    const id = targetElement.id;

    switch (type) {
      case 'text':
      case 'textarea':
        validateLength(id, value, 2);
        break;

      case 'email':
        validateEmail(id, value);
        break;

      default:
        break;
    }
  };



  const validateLength = (id, value, minLength) => {
    if (value.length < minLength) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: `You must enter a valid ${id}` }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
    }
  };

  const validateEmail = (id, value) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: `Please enter a valid ${id}` }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
    }
  };

  return (
    <section className="information">
      <div className="container background">
        <div className="headline">
          <h2>Leave us a message for any information.</h2>
        </div>
        <div className="message-boxes">
          <form action="testing.php" onSubmit={register} method="post" noValidate>
            <label htmlFor="name"></label>
            <input type="text" name="name" id="name" title="name" placeholder="Name*" required />
            <span className="span" id="name-error">{errors['name']}</span>

            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="username@domain.com" required />
            <span className="span" id="email-error">{errors['email']}</span>

            <label htmlFor="message"></label>
            <input className="message" name="message" id="message" title="message" placeholder="Your message*" required />
            <span className="span" id="message-error">{errors['message']}</span>
            <span className="logdata">{responseData}</span>

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