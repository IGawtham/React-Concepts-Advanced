// Ability to render a children into a DOM node that exists the DOM hierarchy of the parent Element
// Ability to break out of root element

//1. create an element with id in index.html eg:"portal-root"
//2. create a component which needs to be in placed in Portals element
//3. use ReactDOM.createPortal() to insert this elemt in different element of DOM Node.

import React from 'react'
import ReactDOM from 'react-dom'

export default function Portals() {
    return ReactDOM.createPortal(

        <div>
            <center><h3><span style={{ color: "blue", backgroundColor: "yellow" }}>Portals</span></h3></center>
        </div>

        , document.getElementById('portal-root'))
}

