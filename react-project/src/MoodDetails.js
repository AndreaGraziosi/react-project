// src/POPOSDetails.js      

import React from 'react'

import data from './mood-data.json'

function MoodDetails(props) {
  const { id } = props.match.params // Location index
  const { images, name, feeling, message } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>

      <div>
        <h1>{ name}</h1>
        <p>{ feeling }</p>
        <p>{ message}</p>
       
      </div>

    </div>
  )
}

export default MoodDetails