import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import {screens, animations, colors} from '../../common/css'

const styles = StyleSheet.create(
  {
    button: {
      height: '50px',
      width: '180px',
      animationName: animations.freaky,
      animationDuration: '4s',
      animationIterationCount: 'infinite',
      ':hover': {color: colors.primary},
      [screens.small]: {fontSize: 'small'},
      [screens.large]: {fontSize: 'large'}
    }
  }
)

class Button extends Component {
  render () {
    return <button className={css(styles.button)}>Aphrodite button</button>
  }
}

export default Button
