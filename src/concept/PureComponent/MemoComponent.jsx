import React from 'react';
const MemoComponent = ({ concept }) => {
    console.log('Render Memo Component')
    return (
        <div>
            <h3>Memo Concept : <span style={{ backgroundColor: "yellow", color: 'blue' }}>{concept}</span></h3>
        </div>
    );
}

export default React.memo(MemoComponent);