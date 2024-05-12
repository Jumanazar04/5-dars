import React, { Component } from 'react';

class Count extends Component {
    render() {
        return (
            <p>
              {this.props.value}  
            </p>
        );
    }
}

export default Count;
