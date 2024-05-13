import React from 'react'
import './BtnWhite.scss'

const BtnWhite = ({text}) => {
  return (
    <div>
        <button className='btn-white'>{text}</button>
    </div>
  )
}

export default BtnWhite