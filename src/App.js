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
      score: 100,
      word: "HUNTER"
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
    let letterStatus = {...this.state.letterStatus}
    letterStatus[letter] = true
    this.setState({letterStatus: letterStatus})
  }

  updateScore = (letter) => {
    let newScore = this.state.score
    if (this.state.word.indexOf(letter) >-1){
      newScore += 5
    } else {
      newScore -= 20
    }
      this.setState ({score: newScore})
  }

  selectAndUpdateLetter = (letter) => {
    this.selectLetter(letter)
    this.updateScore(letter)
  }

  render() {
    return (
      <div>
        <div className="letters">
          <Letters letterStatus = {this.state.letterStatus} 
            selectLetter = {this.selectAndUpdateLetter}/>
        </div>
        <div><Solution letterStatus = {this.state.letterStatus} word = {this.state.word}/></div>
        <div> Your Score is: <Score score={this.state.score}/> </div>
      </div>
    );
  }
}

export default App;
