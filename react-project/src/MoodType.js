// src/Project.js  

import React from 'react'
import logo from './logo.svg'
import "./MoodType.css"
import {Link} from 'react-router-dom'



function   MoodType(props) {
  const { name, image, feeling, id } = props
  return (
    <div className="MoodType">
      <Link to={`/details/${id}`}>
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Hello"
      />
      </Link>
      <h1 id="name">
      <Link to={`/details/${id}`}>
        {name}
        </Link>
        </h1>
      <div id="feeling">{feeling}</div>
    </div>
  )
}

export default MoodType
