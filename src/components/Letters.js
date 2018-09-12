import React, { Component } from 'react';
import Letter from './Letter'


class Letters extends Component {

    genreateLetterTags(letterStatus) {
        return Object.keys(letterStatus).map(l => {
            return (<Letter letter={l} key={l} />)
        })
    }
    render() {
        let letterStatuses = (this.props.letterStatus)
        return (
            <div>
            <div>Here are yo lettas</div>
            <span className = "letter">{this.genreateLetterTags(letterStatuses)}</span>
            </div>
        )
    }
}

export default Letters