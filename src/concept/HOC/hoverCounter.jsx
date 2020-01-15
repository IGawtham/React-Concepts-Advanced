import React, { Component } from 'react'
import withCounter from './withCounter';

class hoverCounter extends Component {
    render() {
        return (
            <div>
                <center>
                    <h3 onMouseOver={this.props.handleClick}>Hovered {this.props.count} Times</h3>
                </center>
            </div>
        )
    }
}

export default withCounter(hoverCounter, 5)
