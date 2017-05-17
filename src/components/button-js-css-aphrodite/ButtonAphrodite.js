import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Button extends Component {
    render() {
        return (<button className={css(styles.button)}>Aphrodite button</button>
        );
    }
}

const styles = StyleSheet.create(
    {
        button: {
            height: "50px",
            width: "180px",
            ":hover": {
                backgroundColor: "yellow",
                color: "red"
            }
        }
    }
);

export default Button;
