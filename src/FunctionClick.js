import React from 'react';

/* Event Handling in functional component */
function FunctionClick(props) {
    function clickHandler(){
        alert('Button Clicked from functional component');
    }
    return (
        <div>
            <p>From functional component</p> <button onClick={clickHandler}>Click</button>
        </div>
    );
}

export default FunctionClick;