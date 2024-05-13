import React from 'react'
import './ButtonSwitch.scss'

const ButtonSwitch = ({icon}) => {
  return (
    <div>
        <button className='btn-switch'>{icon}</button>
    </div>
  )
}

export default ButtonSwitch