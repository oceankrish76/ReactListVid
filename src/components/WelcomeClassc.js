import React, { Component } from 'react';

const spanStyle = {
    backgroundColor:'red',
    color:'#ffffff'
}

class WelcomeClassc extends Component {
    render() {
        const {newname, newheroName} = this.props
        //const {state1, state2} = this.state
        return (
            <div>
                <h1>
                    Welcome {newname} a.k.a <span style={spanStyle}>{newheroName}</span>
                </h1>
                <p>Props or state in class</p>
                <p>we can also have a number of state properties state1, state2 when we have states in this Component</p>
            </div>
        );
    }
}

export default WelcomeClassc;