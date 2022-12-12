import React from "react";
import { useState } from 'react';
import Phone from "./images/VectorPhone.svg";
import Mail from "./images/VectorMail.svg";
import "../styles/form.css";

function Form() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

    return (
      <div className="form-container">
          <form className="form-box">
            <div className="form-left-side">
              <div>
                <h1>Ready to get started?</h1>
                <h4>Ask us anything or just say hi 🖐 </h4>
              </div>
              <div className="contact-information">
                <img src={Phone} alt="phone-icon"/>
                <p>+0123 4567 8910</p>
              </div>
              <div className="contact-information">
                <img src={Mail} alt="mail-icon"/>
                <p>hello@only5pm.com</p>
              </div>
            </div>
            <div className="form-right-side">
              <div className="form-inputs">
                <div className="name-role">
                  <label htmlFor="name">
                    <h4>Nome</h4>
                    <input
                      value={ name }
                      onChange={ (e) => setName(e.target.value) }
                      type="text"
                      placeholder="John Doe"
                      id="name"
                    />
                  </label>
                  <label htmlFor="role">
                    <h4>Your role</h4>
                    <input
                      value={ role }
                      onChange={ (e) => setRole(e.target.value) }
                      type="text"
                      placeholder="Your role here"
                      id="role"
                    />
                  </label>
                </div>
                <div className="email-message">
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input
                      value={ email }
                      onChange={ (e) => setEmail(e.target.value) }
                      type="text"
                      placeholder="example@email.com"
                      id="email"
                    />
                  </label>
                  <label htmlFor="message">
                    <h4>Message</h4>
                    <input
                      value={ message }
                      onChange={ (e) => setMessage(e.target.value) }
                      type="text"
                      placeholder="Hi there.."
                      id="message"
                    />
                  </label>
                </div>
              </div>
              <button>Send Message</button>
            </div>
          </form>
      </div>
    );
}

export default Form;
