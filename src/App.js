import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters'
import Score from './components/Score'
import Solution from './components/Solution'



class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatus(),
      score: 100
    }
  }

  generateLetterStatus() {
    let i = 65
    let letterStatus = {}
    while (i <=90) {
        letterStatus[String.fromCharCode(i)] = false
        i++
    }
    return letterStatus
  }
  
  selectLetter = (letter) => {
    let letterStatus = this.state.letterStatus
    letterStatus[letter] = true
    this.setState({ letterStatus: letterStatus})
  }

  decreaseScore = () => {
    let newScore = this.state.score
    newScore -= 10
    this.setState ({score: newScore})
  }

  render() {
    return (
      <div>
        <button onClick={this.decreaseScore}>Decrease Score</button>
        <div className="letters">
        <Letters letterStatus = {this.state.letterStatus} selectLetter = {this.selectLetter}/>
        </div>
        <div><Solution letterStatus = {this.state.letterStatus}/></div>
        <div> Your Score is: <Score score={this.state.score}/> </div>
      </div>
    );
  }
}

export default App;
