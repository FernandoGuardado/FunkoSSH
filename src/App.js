import React, { Component } from 'react';
import logo from './Pop-logo.png';
import WonderWoman from './WonderWoman.jpg';
import TheFlash from './TheFlash.jpg';
import HarleyQuinn from './HarleyQuinn.jpg';
import TheJoker from './TheJoker.jpg';
import GreenArrow from './GreenArrow.jpg';
import Superman from './Superman.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="SSHTextLogo">
            <p>>_SSH</p>
            <p>SNEAKER SIDE HUSTLE</p>
          </h1>
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
