

import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="list">
        <li className="nav"><a className="a" href="">ABOUT US</a></li>
        <li className="nav"><a href="">SERVICES</a></li>
        <li className="nav"><a href="">FOR YOU</a></li>
        <li className="nav"><a href="">BLOG</a></li>
        <li className="nav"><a href="">VLOG</a></li>
        <li className="nav"><a href="">CONTACT</a></li>
      </ul>
    </div>
  )
}

export default Navbar