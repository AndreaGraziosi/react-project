// src/POPOSList.js 

import React from 'react';
import MoodType from './MoodType'
import "./MoodList.css"
import data from "./mood-data.json"



function MoodList() {

  const Types = data.map(({name, feeling, images}) => {
   
    return (
      <MoodType
        key={name}
        name={name}
        feeling={feeling}
        image={images[0]}
      />
    )
  })

  return (
    <div className="MoodList">
      { Types }
    </div>
  )
}

export default MoodList