import React from 'react';

const spanStyle = {
    backgroundColor:'green',
    color:'#ffffff'
}
/* function Greet (props){ //coming from app.js
    return (
        <div>
            <h2>Destructuring props React</h2>
           <h2>
                Hello {props.name} a.k.a <span style={spanStyle}> {props.heroName}   </span>
            </h2> 
        </div>
    );
} */
//same as 
/* function Greet ({name, heroName}){ // coming from app.js
    return (
        <div>
            <h2>Destructuring props React</h2>
           <h2>
                Hello {name} a.k.a <span style={spanStyle}> {heroName}   </span>
            </h2> 
        </div>
    );
} */
//same as 
function Greet (props){ // coming from app.js
    const {name, heroName} = props
    return (
        <div>
            <h2>Destructuring props React</h2><p>props storing to a variable</p>
           <h2>
                Hello {name} a.k.a The <span style={spanStyle}> {heroName}   </span>
            </h2> 
        </div>
    );
}

export default Greet;