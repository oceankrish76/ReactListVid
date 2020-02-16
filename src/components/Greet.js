import React from 'react';

const spanStyle = {
    backgroundColor:'red',
    color:'#ffffff'
}
/* function Greet (props){ //coming from app.js
    return (
        <div>
            <h1>Destructuring props React</h1>
           <h1>
                Hello {props.name} a.k.a <span style={spanStyle}> {props.heroName}   </span>
            </h1> 
        </div>
    );
} */
//same as 
/* function Greet ({name, heroName}){ // coming from app.js
    return (
        <div>
            <h1>Destructuring props React</h1>
           <h1>
                Hello {name} a.k.a <span style={spanStyle}> {heroName}   </span>
            </h1> 
        </div>
    );
} */
//same as 
function Greet (props){ // coming from app.js
    const {name, heroName} = props
    return (
        <div>
            <h1>Destructuring props React</h1><p>props storing to a variable</p>
           <h1>
                Hello {name} a.k.a The <span style={spanStyle}> {heroName}   </span>
            </h1> 
        </div>
    );
}

export default Greet;