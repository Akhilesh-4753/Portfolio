import React from 'react'
import './Homebanner.css' 
import ak from '../Images/Akhilesh.jpeg'
import { FaInstagram,FaTwitter,FaFacebook,FaYoutube } from "react-icons/fa";


const Homebanner = () => {
  return (
    <div className="banner-container">
      <div className="left">
        <h1><span>Hi i'm</span> AKHILESH</h1>
        <div className="iconlist">
        <FaInstagram className='footer-icon'/>
          <FaTwitter className='footer-icon'/>
          <FaFacebook className='footer-icon'/>
          <FaYoutube className='footer-icon'/>
        </div>
        <br />
        <a href={ak} download target='_blank'>
        <button>Cv</button>
        </a>
      </div>
      <div className="right">
        <img src={ak} alt="cv" download target="_blank" />
      </div>
    </div>
  )
}

export default Homebanner