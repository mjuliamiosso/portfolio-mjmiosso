import './index.scss'
import { Fade } from "react-awesome-reveal";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rsf4dxi', 'template_1843u9i', e.target, {
        publicKey: 'N7wuIk9RcC6fX5y9d', 
      })
      .then(
        () => {
          console.log('Email sent!');
          alert('Email enviado!')
        },
        (error) => {
          console.log('Failed...', error);
          alert('Falha ao enviar email.')
        },
      );
    };

  return (
    <div id='form' className='form'>
      <div className='container form-container'>
        <Fade>
          <h2>Entre em contato</h2>
          <span className='center-underline'></span>
          <form ref={form} onSubmit={sendEmail} className='form-input'>
            <input name='user_name' type="text" placeholder='Nome'/>
            <input name='user_email' type="email" placeholder='E-mail'/>
            <textarea name="message" placeholder='Deixe sua mensagem...'></textarea>
            <button type="submit">Enviar</button>
          </form>
        </Fade>
      </div>
    </div>
  )
}

export default Form