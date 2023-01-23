import React from "react";
import { useState } from 'react';
import "./styles/form.css";

import { useForm } from "react-hook-form";

function PaperForm() {
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
              <div data-paperform-id="dfqwlgfp"></div><script dangerouslySetInnerHTML={{ __html: `(function() {var script = document.createElement(‘script’); script.src = "https://paperform.co/__embed.min.js"; document.body.appendChild(script); })()` }} />
            </div>
          </form>
      </div>
    );
}

export default PaperForm;

