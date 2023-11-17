import React, { useState } from 'react';
import './Information.css';

const Information = () => {
  const [errors, setErrors] = useState({});
  const [responseData, setResponseData] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const register = (event) => {
    event.preventDefault();
    setErrors({});

    const err = {
      name: '',
      email: '',
      message: '',
    };

    if (name.length < 2) {
      err['name'] = 'You must enter a valid name';
      setResponseData(null);
    }

    if (!emailRegex.test(email)) {
      err['email'] = 'Please enter a valid email address';
      setResponseData(null); 
    }

    if (message.length < 5) {
      err['message'] = 'Your message is too short';
      setResponseData(null);
    }

    setErrors(err);

    if (Object.values(err).every((error) => error === '')) {
      const formData = {name, email, message};
      const json = JSON.stringify(formData);

      fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error('Bad Request');
          }
          return res.text();
        })
        .then((data) => {
          console.log(data);
          setResponseData(data);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
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
            <input type="text" name="name" id="name" title="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name*" required />
            <span className="span" id="name-error">{errors['name']}</span>

            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="username@domain.com"required />
            <span className="span" id="email-error"> {errors['email']} </span>

            <label htmlFor="message"></label>
            <input className="message" name="message" id="message" title="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message*" required />
            <span className="span" id="message-error"> {errors['message']} </span>
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