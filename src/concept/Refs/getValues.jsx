import React, { Component } from 'react'

class GetValues extends Component {
    constructor(props) {
        super(props)
        this.childRef = React.createRef()
    }

    getValues = () => {
        alert(this.childRef.current.value)
    }

    render() {
        return (

            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Input" ref={this.childRef} />
                </div>

            </div>
        )
    }
}

export default GetValues
