import React from 'react'
import './ProjectDescription.scss'
import BtnPurple from '../components/BtnPurple'
import BtnWhite from '../components/BtnWhite'

const ProjectDescription = ({title, text, github, deploy}) => {
  return (
    <div className='project-description'>
        <p className='project-title'>{title}</p>
        <p className='project-text'>{text}</p>
        <div className='project-btn'>
            <a href={github} target="_blank"><BtnPurple text='GitHub'></BtnPurple></a>
            <a href={deploy} target="_blank"><BtnWhite text='Deploy'></BtnWhite></a>
        </div>
    </div>
  )
}

export default ProjectDescription