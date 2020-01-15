import React, { PureComponent } from 'react'

class _PureComponent extends PureComponent {
    //Pure component implements should component update method which checks previous props and current as well as previous state and current state
    // if there is no difference it won't render anything. (it is also called shallow comparing)
    render() {
        console.log('Pure Component Render')
        return (
            <div>
                <h3>Concept : <span style={{ backgroundColor: "yellow", color: 'blue' }}>{this.props.concept}</span></h3>
            </div >
        )
    }
}

export default _PureComponent
