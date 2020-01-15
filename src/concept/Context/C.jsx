import React, { Component } from 'react'
import { Consumer } from './Context'

class C extends Component {
    render() {
        return (
            <Consumer>
                {
                    (text) => {
                        return <div>Avail {text}</div>
                    }
                }
            </Consumer>
        )
    }
}

export default C
