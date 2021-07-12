// src/Project.js  

import React from 'react'
import logo from './logo.svg'
import "./MoodType.css"


function   MoodType(props) {
  const { name, image, feeling } = props
  return (
    <div className="MoodType">
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Hello"
      />
      <h1 id="name">{name}</h1>
      <div id="feeling">{feeling}</div>
    </div>
  )
}

export default MoodType
