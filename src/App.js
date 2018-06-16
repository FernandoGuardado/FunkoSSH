import React, { Component } from 'react';
import logo from './Images/Pop-logo.png';
import WonderWoman from './Images/WonderWoman.jpg';
import TheFlash from './Images/TheFlash.jpg';
import HarleyQuinn from './Images/HarleyQuinn.jpg';
import TheJoker from './Images/TheJoker.jpg';
import GreenArrow from './Images/GreenArrow.jpg';
import Superman from './Images/Superman.jpg';

import './App.css';
//import FunkoPop from './Components/pop_figures.js';
import {HashRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="SSHTextLogo">>_SSH </h1>
          <h2 className="SneaksLogo">SNEAKER SIDE HUSTLE </h2>
          <img src={logo} className="Pop-Logo" alt="logo"/>
        </header>

        <header className="Password">
          <img src={WonderWoman} className="WonderWoman" alt="WonderWoman"/>
          <img src={TheFlash} className="TheFlash" alt="TheFlash"/>
          <img src={HarleyQuinn} className="HarleyQuinn" alt="HarleyQuinn"/>
          <img src={TheJoker} className="TheJoker" alt="TheJoker"/>
          <img src={GreenArrow} className="GreenArrow" alt="GreenArrow"/>
          <img src={Superman} className="Superman" alt="Superman"/>
          <button className="button1" onclick="Password()">Enter Site With Password</button>
        </header>

      </div>
    );
  }
}

export default App;
