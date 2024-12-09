import React from 'react'
import './Footer.css'
import { FaInstagram,FaTwitter,FaFacebook,FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-info">
      <h2>AKHILESH</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, vitae?</p>
      </div>
      
      <div>
        <h4>Get in touch</h4>
        <div className="iconlist">
          <FaInstagram className='footer-icon'/>
          <FaTwitter className='footer-icon'/>
          <FaFacebook className='footer-icon'/>
          <FaYoutube className='footer-icon'/>
        </div>
      </div>
    </div>
  )
}

export default Footer