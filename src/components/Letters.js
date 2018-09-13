import React, { Component } from 'react';
import Letter from './Letter'


class Letters extends Component {

    genreateLetterTags() {
        const letterStatus = (this.props.letterStatus)
        return Object.keys(letterStatus).map(l => {
            return (<Letter 
                letter={l} 
                key={l} 
                status={letterStatus[l] ? "selected" : null}
                selectLetter = {this.props.selectLetter} />)
        })
    }
    updateScore() {
        
    }
    render() {
        return (
            <div>
            <div>Here are yo lettas</div>
            <span className = "letter">{this.genreateLetterTags()}</span>
            </div>
        )
    }
}

export default Letters