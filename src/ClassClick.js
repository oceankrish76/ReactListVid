import React, { Component } from 'react';

/* In class Components methods will be accessed using this keyword
    there is not much with event handling now, but event handlers tend to change the state of the component using this.setState method
*/
class ClassClick extends Component {
    clickHandler(){
        alert('Clicked from class component')
    }
    render() {
        return (
            <div>
               <p>From class component</p> <button onClick={this.clickHandler}>Click me</button>
               <p>/* In class Components methods will be accessed using this keyword
                    there is not much with event handling now, but event handlers tend to change the state of the component using this.setState method
                */</p>
            </div>
        );
    }
}

export default ClassClick;