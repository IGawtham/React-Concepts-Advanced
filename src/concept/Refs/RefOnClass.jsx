import React, { Component } from 'react';
import GetValues from './getValues';

class RefOnClass extends Component {
    constructor(props) {
        super(props)
        this.parentRef = React.createRef()
    }

    clickHandler = () => {
        this.parentRef.current.getValues()
    }

    render() {
        return (

            <div className="row">
                <div className="col-3">
                    <GetValues ref={this.parentRef} />
                    <button className="btn btn-outline-success" onClick={this.clickHandler}> Click</button>
                </div>
            </div>
        );
    }
}

export default RefOnClass;

// Access Child method from Parent / Component Ref

// 3 Steps:

// 1. Create a Ref on constructor using React.createRef()
// 2. Attach the ref into the render element of the method/Component.to attach use reserve keyword ref
// 3. use current method inside ref to access the DOM element/child node.