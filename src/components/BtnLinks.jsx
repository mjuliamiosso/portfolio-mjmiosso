import React from 'react'
import './BtnLinks.scss'

const BtnLinks = ({link, icon}) => {
  return (
    <div>
        <a href={link}>
            <button className='btn-link'>{icon}</button>
        </a>
        
    </div>
  )
}

export default BtnLinks