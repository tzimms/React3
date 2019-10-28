import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayQuote from './DisplayQuote';

import Quote from "./Quote";
// import Quotes from "./Quotes";
// import Lamp from "./Lamp";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true,
      APIquote: {},
      isLoading: true,
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working })
  }; 

  getQuote = () => {
    fetch("https://randomuser.me/api?nat=fr")
      .then(response  =>  response.json())
      .then(data  => {
      // console.log(data)
          this.setState( {
              APIquote: data.results[0],
              isLoading: false
            });
        });
    }


  render() {
    let homer = this.state.working? "App-logo": "App-logo-stop"; 
    return (
      <>
      <div className="App">
         <header className="App-header">
          <img src={logo} className={homer} alt="logo" /> 
          <button
          onClick={this.handleClick}
          className={homer}>
            {'Click Me!'}
        </button>
          <h1 className="App-title">Simpsons Quotes</h1>
        </header> 
        <button onClick={this.getQuote} >
          'Change Quote'
        </button>
        { !this.state.isLoading && 
          <DisplayQuote
            APIquote={this.state.APIquote} 
          />
        }
      </div>
       <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
       />
         <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        /> 
      </>
    );
  }
}

export default App;