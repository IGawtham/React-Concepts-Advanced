import React, { Component } from 'react'
import PureComponent from './PureComponent'
import MemoComponent from './MemoComponent';

class ParentComponent extends Component {
    state = {
        concept: 'Pure Component'
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                concept: 'Pure Component'
            })
        }, 2000)
    }

    render() {
        console.log('Parent Render')
        return (
            <div>
                <PureComponent concept={this.state.concept} />
                <MemoComponent concept={this.state.concept} />
            </div>
        )
    }
}

export default ParentComponent
