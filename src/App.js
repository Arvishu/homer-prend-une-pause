
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";
import Quote from "./Quote";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     working: true
    };
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };



  
  render() {

    const homer = this.state.working ? 'on' : 'off';

let change= "App-logo2";
if(this.state.working) {
  change = "App-logo";
}

    return (
                       
      <div className="App">
        <header className="App-header">
          <img src={logo} className={change} alt="logo" />
          <button 
        onClick={this.handleClick}
        className={homer}>{homer.toUpperCase()}</button>

          <h1 className="App-title">Simpsons Quotes</h1>


          
        </header>
        <Lamp on />
         <Lamp />
        <Quotes
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Lamp on />
         <Lamp />
        <Quotes
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;