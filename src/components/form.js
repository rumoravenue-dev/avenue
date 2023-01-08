import React from "react";
import { useState } from 'react';
import "./styles/form.css";

import { useForm } from "react-hook-form";

function Form() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);
  console.log(watch("exemplo: "))

    return (
      <div className="form-container" >
          <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-left-side">
              <div>
                <h1>Ready to get started?</h1>
                <h4>Ask us anything or just say hi 🖐 </h4>
              </div>
              <div className="contact-information">
                <img src="/assets/img/form/VectorMail.svg" alt="mail-icon"/>
                <p>hello@only5pm.com</p>
              </div>
            </div>
            <div className="form-right-side">
              <div className="form-inputs">
                <div className="name-role">
                  <div className="nameField">
                    <label htmlFor="name">
                      <h4>Name</h4>
                      <input {...register("name", { required: true })} />
                    </label>
                    {errors.name && <span className="errorMessage">This field is required</span>}
                  </div>
                  <label htmlFor="role">
                    <div className="roleField">
                      <h4>Your role</h4>
                      <input {...register("yourRole", { required: true })} />
                    </div>
                    {errors.yourRole && <span className="errorMessage">This field is required</span>}
                  </label>
                </div>
                <div className="email-message">
                  <label htmlFor="email">
                    <h4>Email</h4>
                    <input {...register("email", { required: true, pattern:/\S+@\S+\.\S+/ })} /> 
                  </label>
                  {errors.email && <span className="errorMessage">This field is required</span>}
                  <label htmlFor="message">
                    <h4>Message</h4>
                    <input {...register("message", { required: true })} />
                  </label>
                  {errors.message && <span className="errorMessage">This field is required</span>}
                </div>
              </div>
              <button className="btnForm" type="submit">Send Message</button>
            </div>
          </form>
      </div>
    );
}

export default Form;

