// import React from 'react'
import { Link } from "react-router-dom";
import "./../App.css"

function Nav() {
  return (
    <nav>
        <Link to="/">ABOUT</Link>
        <Link to="/edu">EDUCATION</Link>
        <Link to="/int">INTREST</Link>
        <Link to="/pro">PROJECTS</Link>
    </nav>
  )
}

export default Nav