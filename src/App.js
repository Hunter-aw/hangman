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
      word: "HUNTER",
      addedScore: 0
    }
  }

  generateLetterStatus() {
    let i = 65
    let letterStatus = {}
    while (i <=90) {
        letterStatus[String.fromCharCode(i)] = false
        i++
    }
    console.log(letterStatus)
    return letterStatus
  }
  
  selectLetter = (letter) => {
    let letterStatus = {...this.state.letterStatus}
    letterStatus[letter] = true
    this.setState({letterStatus: letterStatus})
  }

  updateScore = (letter) => {
    let newScore = this.state.score
    let newAddedScore = this.state.addedScore
    if (this.state.word.indexOf(letter) >-1){
      newScore += 5
      newAddedScore += 1
    } else {
      newScore -= 20
    }
      this.setState ({score: newScore, addedScore: newAddedScore})
  }

  selectAndUpdateLetter = (letter) => {
    this.selectLetter(letter)
    this.updateScore(letter)
  }

  render() {
    if (this.state.score <= 0) {
      return (
        <div>
          <div className = "gameOver">YOU LOSE GAME OVER</div>
        </div>
      )
    }
    else if (this.state.addedScore === this.state.word.length) {
      return (
        <div>
          <div className = "youWin">YOU WIN HIGH FIVE</div>
        </div>
      )
    } 
    else {  return (
        <div>
          <div className="letters">
            <Letters letterStatus = {this.state.letterStatus} 
              selectLetter = {this.selectAndUpdateLetter}/>
          </div>
          <div><Solution letterStatus = {this.state.letterStatus} selectLetter = {this.selectLetter} word = {this.state.word}/></div>
          <div> Your Score is: <Score score={this.state.score}/> </div>
        </div>
      );
  }}
}

export default App;
