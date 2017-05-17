import React, { Component } from 'react';
import Radium from 'radium';

class Button extends Component {

    styles = {
        button: {
            height: "50px",
            width: "180px",
            ":hover": {
                backgroundColor: "yellow",
                color: "red"
            }
        }
    }

    render() {
        return (<button style={this.styles.button} >Radium button</button>
        );
    }
}

export default Radium(Button);
