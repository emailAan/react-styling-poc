import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const screens = {
    small: "@media (max-width:1024px)",
    large: "@media (min-width:1024px)"
}

const styles = StyleSheet.create(
    {
        button: {
            height: "50px",
            width: "180px",
            ":hover": {
                backgroundColor: "yellow",
                color: "red"
            },
            [screens.small]: {
                fontSize: "small"
            },
            [screens.large]: {
                fontSize: "large"
            }
        }
    }
);

class Button extends Component {
    render() {
        return (<button className={css(styles.button)}>Aphrodite button</button>
        );
    }
}

export default Button;
