import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    handleInc = () => {
        this.setState(
            prev => {
                return {
                    count: prev.count + 1
                }
            }
        )
    }
    render() {
        return (
            <div>
                {this.props.renderProp(this.state.count, this.handleInc)}
            </div>
        )
    }
}

export default Counter
