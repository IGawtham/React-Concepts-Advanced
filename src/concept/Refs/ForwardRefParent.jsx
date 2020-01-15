import React, { Component } from 'react'
import ForwardRefChild from './ForwardRefChild';

class ForwardRefParent extends Component {
    constructor(props) {
        super(props)
        this.parentRef = React.createRef()
    }

    clickHandler = () => {
        alert(this.parentRef.current.value)
    }

    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <ForwardRefChild ref={this.parentRef} />
                    <button className="btn btn-outline-danger" onClick={this.clickHandler}> Click</button>
                </div>
            </div>
        )
    }
}

export default ForwardRefParent

// Forwarding Ref from Parent Component to child

// 4 Steps:

// 1. Create a Ref on constructor using React.createRef()
// 2. Attach the ref into the render element of the method/Component.to attach use reserve keyword ref
// 3. Create a React.forwardRef(component) as child which accepts 2 parameters (props,ref) and assign ref to the DOM node
// 4. use current method inside ref to access the DOM element.