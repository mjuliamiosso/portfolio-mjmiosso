import React from 'react'
import './index.scss'

const Form = () => {
  return (
    <div className='form'>
        <div className='container form-container'>
            <h2>Entre em contato</h2>
            <div className='form-input'>
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='E-mail'/>
                <textarea name="" placeholder='Deixe sua mensagem...'></textarea>
                <button>Enviar</button>
            </div>
            
        </div>
    </div>
  )
}

export default Form