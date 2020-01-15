import React, { Component } from 'react'

class Hover extends Component {
    render() {
        return (
            <div>
                <center>
                    <h3 onMouseOver={this.props.handleInc}>Hovered {this.props.count} Times</h3>
                </center>
            </div>
        )
    }
}

export default Hover
