import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {
    constructor() {
        super()
        this.state = {
            word: "HUNTER",
            hint: "Not a gatherer, but a..."
        }
    }

    generateWordLetters() {
        return this.state.word.split("").map(w => {
            return <Letter 
            letter ={this.props.letterStatus[w] ? w : "_ "} 
            key ={w}
            status = {"solutionLetter"} 
            />
        })
    }

    render() {
        return (
            <div>
                <div className = "hint">{this.state.hint}</div>
                <span>{this.generateWordLetters(this.state.word)}</span>
            </div>
        )
    }
}

export default Solution