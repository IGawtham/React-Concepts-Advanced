import React, { Component } from 'react'

class Click extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-outline-info" onClick={this.props.handleInc}>
                    Clicked {this.props.count} Times
                </button>
            </div>
        )
    }
}

export default Click
