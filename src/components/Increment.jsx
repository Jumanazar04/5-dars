import React, { Component } from 'react';

class Increment extends Component {
    render() {
        return (
            <button onClick={this.props.incrementMethod}>+</button>
        );
    }
}

export default Increment;
