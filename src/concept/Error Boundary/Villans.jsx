import React from 'react'

function Villans({ villan }) {
    if (villan === 'batman') {
        throw new Error

    }
    return (
        <div>
            <h3>Villain : {villan}</h3>
        </div>
    )
}

export default Villans
