import React, { useState } from 'react'
import './HomeContact.css'
import { IoLocation } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const HomeContact = () => {
  const [name,setname] = useState('');
  return (
    <div className="HomeContact-container">
      <h1>Contact me</h1>
      <div className="contactsub-container">
      <div className="contact-left">
      <div className="contact-info">
        <div className='contact-details'>
          <h3 className='contact-head'>
          <IoLocation/>
          Address
          </h3>
          <h4>Bangalore,Karnataka,India</h4>
        </div>
        <div className='contact-details'>
          <h3 className='contact-head'>
          <FaEnvelope/>
          E-mail
          </h3>
          <h4>ak123@gmail.com</h4>
        </div>
        <div className='contact-details'>
          <h3 className='contact-head'>
          <FaPhoneAlt/>
          Phone
          </h3>
          <h4>+91 9526008613</h4>
        </div>
      </div>
      </div>
      <div className="contact-right">
        <input type="text" placeholder='Enter Your Name ' onChange={(e)=>{setname(e.target.value)}} />
        <input type="text" placeholder='Enter Your Number' />
        <input type="emil" placeholder='Enter Your E-mail' />
        <textarea name="" id="" placeholder='Enter Your Message' ></textarea>
        <a href={`https://wa.me/+919526008613?text=${name}`}>
        <button>Sent Message</button>
        </a>
      </div>
      </div>
    </div>
  )
}

export default HomeContact