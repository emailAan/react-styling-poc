import React, { Component } from 'react';
import Radium from 'radium';

import { screens, animations, colors } from '../../common/css';

class Button extends Component {

    styles = {
        button: {
            height: "50px",
            width: "180px",
            animationName: Radium.keyframes(animations.freaky, 'freaky'),
            animationDuration: "4s",
            animationIterationCount: "infinite",
            ":hover": {
                color: colors.primary
            },
            [screens.small]: {
                fontSize: "small"
            },
            [screens.large]: {
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
