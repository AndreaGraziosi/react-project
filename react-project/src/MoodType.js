// src/Project.js  

import React from 'react'
import logo from './logo.svg'

function   MoodType(props) {
  const { Name, image, Feeling } = props
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Hello"
      />
      <h1>{Name}</h1>
      <div>{Feeling}</div>
    </div>
  )
}

export default MoodType
