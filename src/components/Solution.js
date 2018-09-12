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

    generateWordLetters(word) {
        return word.split("").map(w => {
            return <Letter letter ={w} key ={w} />
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