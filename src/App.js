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
  
  deleteLetter = () => {
    let letterStatus = this.state.letterStatus
    const letters = Object.keys(letterStatus)
    let firstLetter = letters[0]

    delete letterStatus[firstLetter]
    this.setState({ letterStatus: letterStatus})
    console.log("party")
  }
  decreaseScore = () => {
    let newScore = this.state.score
    newScore -= 10
    this.setState ({score: newScore})
    console.log('u workin')
  }

  render() {
    return (
      <div>
        <button onClick={this.decreaseScore}>Decrease Score</button>
        <div className="letters">
        <Letters letterStatus = {this.state.letterStatus}/>
        </div>
        <div><Solution letterStatus = {this.state.letterStatus}/></div>
        <div> Your Score is: <Score score={this.state.score}/> </div>
      </div>
    );
  }
}

export default App;
