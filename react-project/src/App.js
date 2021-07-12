import React from "react";
import logo from './logo.svg';
import './App.css';
import Title from "./Title";
import MoodList from './MoodList';
import Footer from './Footer';
import { HashRouter as Router, Route } from 'react-router-dom'
import About from "./About"
import MoodDetails from "./MoodDetails"


function App() {
  return (
    <Router>
    <div className="App">
      <Title />
      <Route path="/about" component={About} />
      <Route exact path="/" component={MoodList}/>
      <Route path="/details/:id" component={MoodDetails} />

      <Footer className="footer"/>
      
    </div>
    </Router>
  );
}


export default App;
