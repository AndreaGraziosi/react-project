// src/POPOSList.js 

import React from 'react';
import MoodType from './MoodType'
import "./MoodList.css"

function MoodList() {
  return (
    <div>
      <div className="MoodList">
      <MoodType 
        Name = "Happy"
        Feeling = " I feel great today!"
        image = "Happy.jpg"/>
      
      <MoodType 
        Name = "Upset"
        Feeling = "It can't be!!!!"
        image = "upset.jpg"/>
      
      <MoodType
        Name = "Perfect"
        Feeling = "Yesss!!!"
        image = "perfect.jpg"/>
      <MoodType 
         Name = "Sad"
         Feeling = "Noooooooooo!"
         image = "sad.jpg"/>
      
      <MoodType 
         Name = "Tired"
         Feeling = "Zzzzzzzzzzzz"
         image = "tired.jpg"/>
      
      <MoodType
       Name = "Yay"
       Feeling = "I love this!!"
       image = "yahoo.jpg" />
      </div>
    </div>
  )
}

export default MoodList