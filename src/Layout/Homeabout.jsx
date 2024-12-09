import React from 'react'
import './Homeabout.css'
import ak2 from'../Images/Akhilesh 2.jpeg';
import { FaInstagram,FaTwitter,FaFacebook,FaYoutube } from "react-icons/fa";


function Homeabout() {
  return (
    <div className="Homeabout-container">
      <div className="Homeabout-left">
        <img src={ak2} alt="" />
      </div>
      <div className="Homeabout-right">
        <h1>AKHILESH</h1>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro in quod minus eius autem deserunt, quam tenetur sint nam consectetur soluta magnam quae et delectus dolorum eaque impedit sed repudiandae.</p>
          <div className="iconlist">
          <FaInstagram className='footer-icon'/>
          <FaTwitter className='footer-icon'/>
          <FaFacebook className='footer-icon'/>
          <FaYoutube className='footer-icon'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Homeabout