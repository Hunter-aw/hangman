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
                <span>{this.generateWordLetters(this.state.word)}</span>
                <div>{this.state.hint}</div>
            </div>
        )
    }
}

export default Solution