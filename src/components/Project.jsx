import React from 'react'
import './Project.scss'

const Project = ({image}) => {
  return (
    <div className='project-image'>
        <img src={image} />
    </div>
  )
}

export default Project