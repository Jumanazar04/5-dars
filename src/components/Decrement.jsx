import React, { Component } from 'react';

class Decrement extends Component {
    render() {
        return (
            <button onClick={this.props.decrementMethod}>-</button>
        );
    }
}

export default Decrement;
