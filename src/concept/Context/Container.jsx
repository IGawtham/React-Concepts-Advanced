import React, { Component } from 'react'
import A from './C'
import { Provider } from './Context'
class Container extends Component {
    render() {
        return (
            <div>
                <Provider value='From Context'>
                    <A />
                </Provider>
            </div>
        )
    }
}

export default Container
