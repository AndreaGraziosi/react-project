// src/Title.js

import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'


function Title() {
  return (
    <div className="Title">
      <header>
        <h1>Mood Chart</h1>
        <div className="Title-Subtitle">How do you feel today?</div>          
    
    
    <NavLink 
    className="nav-link" 
    activeClassName="nav-link-active"
    exact
    to="/">List</NavLink>
    <NavLink className="nav-link" 
    activeClassName="nav-link-active"
    to="/about">About</NavLink>
    </header>
  </div>
  )
}

export default Title