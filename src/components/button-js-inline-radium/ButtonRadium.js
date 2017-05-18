import React, { Component } from 'react';
import Radium from 'radium';

class Button extends Component {

    pulseKeyframes = Radium.keyframes({
        "0%": {
            backgroundColor: "red",
            transform: "rotate(7deg)"
        },
        "25%": {
            backgroundColor: "yellow"
        },
        "50%": {
            backgroundColor: "blue",
            transform: " rotate(-7deg)"
        },
        "100%": {
            backgroundColor: "green"
        }
    }, 'pulse');


    screens = {
        small: "@media (max-width:1024px)",
        large: "@media (min-width:1024px)"
    }

    styles = {
        button: {
            height: "50px",
            width: "180px",
            animationName: this.pulseKeyframes,
            animationDuration: "4s",
            animationIterationCount: "infinite",
            ":hover": {
                backgroundColor: "yellow",
                color: "red"
            },
            [this.screens.small]: {
                fontSize: "small"
            },
            [this.screens.large]: {
                fontSize: "large"
            }
        }
    }

    render() {
        return (<button style={this.styles.button} >Radium button</button>
        );
    }
}

export default Radium(Button);
