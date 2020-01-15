import React, { Component } from 'react'

export class RefsComponent extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        //this.inputRef.current.focus()
        this.cbRef.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <input type="text" className="form-control" placeholder="Input 1" ref={this.inputRef} />
                </div>
                <div className="col-3">
                    <input type="text" class="form-control" placeholder="Input 2" ref={this.setCbRef} />
                </div>
                <div className="col-3">
                    <button className="btn btn-outline-primary" onClick={this.clickHandler}> Click</button>
                </div>
            </div>
        )
    }
}

export default RefsComponent

// 3 steps: (Normal)

// 1. create a ref in constructor using React.createRef()
// 2. Attach the ref into the render element of the method. to attach use reserve keyword ref
// 3. use current method inside ref to access the DOM element.


// 4 steps: (Callback Ref)

// 1. create a ref in constructor using React.createRef()
// 2. Create a object for callback ref with null value and write a call back function to access the DOM node.eg: this.cbRef=null
// eg: this.setCbRef=(element)=>{this.cbRef=element}
// 3. Attach the ref into the render element of the method. to attach use reserve keyword ref
// 4. check the value of the ref and then access the DOM element using cbRef directly.