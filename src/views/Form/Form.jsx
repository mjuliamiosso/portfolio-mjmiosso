import React from 'react'
import './index.scss'
import { Fade } from "react-awesome-reveal";

const Form = () => {
  return (
    <div id='form' className='form'>
      <div className='container form-container'>
        <Fade>
        <h2>Entre em contato</h2>
        <span className='center-underline'></span>
          <div className='form-input'>
            <input type="text" placeholder='Nome'/>
            <input type="text" placeholder='E-mail'/>
            <textarea name="" placeholder='Deixe sua mensagem...'></textarea>
            <button>Enviar</button>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Form