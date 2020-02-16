import React, { Component } from 'react';
const mydivstyle = {
    backgroundColor:'#1b1919',
    color:'#ffffff'
}
class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        // Approach 0 = Main Approach
        // binding in the class constructor better coz binding happens once in the constructor
        this.clickHandlr = this.clickHandlr.bind(this); // RECOMENDED
    }
    clickHandlr(){
        this.setState({
            message: 'Goodbye! For now app1'
        })
    }
    clickHandleer(){
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }
    clickHandleerr(){
        this.setState({
            message: 'Goodbye! See you again'
        })
    }
    newApproachclickHandler = () => { //class property as arrow function also RECOMENDED
        this.setState({
            message: 'Goodie Bye! class property as arrow function'
        })
    }

    //we need bind coz setState isnt't working yet
    render() {
        return (
            <div>
                <p>Use of bind in reactJs is purely because of the way this keyword works in js</p>
                <p>Not because of how react works</p>
                <p> Lets onclick a button change the message, which is a part of the component state. </p>
                <b>There are a number of ways to bind event handlers in react</b>
                <b>
                    <p> // Approach 0 = Main Approach  binding the event handler in the constructor RECOMENDED</p>
                </b>
                <div style={mydivstyle}>{this.state.message}</div>
                <button onClick={this.clickHandlr}>Main Approach</button><br />
                <p>Approach 4 class property as arrow function .. Also RECOMENDED</p>
                <button onClick={this.newApproachclickHandler}> newApproachclickHandler </button>

                <p>approach 1 binding in the render method Not recommended</p>
                <button onClick={this.clickHandleer.bind(this)}>Click Me</button>  
                <p>approach 2 Arrow method in the render method Not recommended</p>
                <button onClick={() => this.clickHandleerr()}>Click Mee</button>
            </div>
        );
    }
}

export default EventBind;