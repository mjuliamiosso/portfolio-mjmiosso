import React from 'react'
import * as FaIcons from "react-icons/fa";
import './AutoPlayCarousel.scss'
import { IoLogoJavascript } from "react-icons/io";
import * as SiIcons from "react-icons/si";

const AutoPlayCarousel = () => {
  return (
    <div className='logos'>
        <div className="logo-slide">
            <FaIcons.FaHtml5 />
        </div>
        <div className="logo-slide">
            <FaIcons.FaCss3 />
        </div>
        <div className="logo-slide">
            <FaIcons.FaReact />
        </div>
        <div className="logo-slide">
            <IoLogoJavascript />
        </div>
        <div className="logo-slide">
            <FaIcons.FaBootstrap />
        </div>
        <div className="logo-slide">
            <SiIcons.SiTypescript />
        </div>
        <div className="logo-slide">
            <SiIcons.SiMongodb />
        </div>
        <div className="logo-slide">
            <SiIcons.SiMysql />
        </div>
        <div className="logo-slide">
            <FaIcons.FaNode />
        </div>
    </div>
  )
}

export default AutoPlayCarousel