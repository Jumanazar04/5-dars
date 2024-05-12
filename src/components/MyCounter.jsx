import React, { Component } from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import Count from './Count';

class MyCounter extends Component {
    constructor(){
        super();
        this.state = { count: 0} ;
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.setState({ count: this.state.count + 1})
    }

    decrement(){
        this.setState({ count: this.state.count - 1})
    }

    render() {
        return (
            <>
                <Increment incrementMethod={this.increment} />
                <Count value={this.state.count}/>
                <Decrement decrementMethod={this.decrement} />
            </>                
        );
    }
}

export default MyCounter;
