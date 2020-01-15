import React from 'react'

export default function Heading(props) {
    return (
        <diV>
            <h3>
                <center>
                    <span style={{ backgroundColor: 'orange', color: 'white' }}> {props.children} </span>
                </center>

            </h3>
        </diV>
    )
}
