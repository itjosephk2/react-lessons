import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            id: 1,
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        if (this.state.id === 1) {
            this.setState({
                id: 0,
                introduction: "Goodbye",
                buttonText: "Enter",
            }, 
            () => {
                console.log('New State', this.state)
            });
        }
        else {
            this.setState({
                id: 1,
                introduction: "Hello",
                buttonText: "Exit",
            }, 
            () => {
                console.log('New State', this.state)
            });
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        },
        () => {
            console.log(this.state.count);
        }
        );
    }
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting},</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment + </button>
            </div>
        )
    }
}

export default StatefulGreeting;