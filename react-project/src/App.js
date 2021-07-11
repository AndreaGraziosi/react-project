import React from "react";
import logo from './logo.svg';
import './App.css';
import Title from "./Title";
import MoodList from './MoodList';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Title />
      <MoodList />
      <Footer className="footer"/>
      
    </div>
  );
}


export default App;
