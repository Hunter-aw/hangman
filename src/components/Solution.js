import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {
    constructor() {
        super()
        this.state = {
            hint: "Not a gatherer, but a..."
        }
    }

    generateWordLetters() {
        const words = this.props.word
        return words.split("").map(w => {
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
                <span>{this.generateWordLetters(this.props.word)}</span>
            </div>
        )
    }
}

export default Solution