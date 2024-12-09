import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [view, setview] = useState(false);

  return (
    <div className='navbar-container'>
        <h2>AKHILESH</h2>
        <GiHamburgerMenu className='ham-icon'
        onClick={() => {
          setview(!view);
        }} />
        <ul className='list'>
          <Link to={"/"}>
          <li>home</li>
          </Link>
          <Link to={"/about"}>
          <li>about</li>
          </Link>
          <Link to={"/project"}>
          <li>project</li>
          </Link>
          <Link to={"/contact"}>
          <li>contact</li>
          </Link>
        </ul>
        {view?(<div className='list-mob'>
          <h5>home</h5>
          <h5>about</h5>
          <h5>project</h5>
          <h5>contact</h5>
        </div>):null}
    </div>
  )
}

export default Navbar








{/* 
var view = false;
  function change (){
    view = true;
  }

react is a oneway binding so this method didnt work . so we use useState 
*/}