import React, { Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {

    render() {
        const { count, handleClick } = this.props
        return (
            <div>
                <button className="btn btn-outline-warning" onClick={handleClick}>
                    Clicked {count} Times
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)
