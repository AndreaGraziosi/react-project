// src/POPOSList.js 

import React from 'react';
import MoodType from './MoodType'

function MoodList() {
  return (
    <div>
      <MoodType 
        Name = "Happy"
        Feeling = " I feel great today!"
        image = "Happy.jpg"
      
      />
      <MoodType />
      <MoodType />
      <MoodType />
      <MoodType />
      <MoodType />
    </div>
  )
}

export default MoodList