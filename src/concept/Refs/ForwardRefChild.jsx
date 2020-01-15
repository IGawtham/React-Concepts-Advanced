import React from 'react';
const ForwardRefChild = React.forwardRef((props, Ref) => {
    return (
        <div className="row">
            <div className="col">
                <input type="text" className="form-control" placeholder="Input" ref={Ref} />
            </div>

        </div>
    );
})

export default ForwardRefChild;