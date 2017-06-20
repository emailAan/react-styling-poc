import React, { Component } from 'react'
import Radium from 'radium'

import { screens, animations, colors } from '../../common/css'

const styles = {
  button: {
    height: '50px',
    width: '180px',
    animationName: Radium.keyframes(animations.freaky, 'freaky'),
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    ':hover': {color: colors.primary},
    [screens.small]: {fontSize: 'small'},
    [screens.large]: {fontSize: 'large'}
  }
}

class Button extends Component {
  render () {
    return <button style={styles.button} >Radium button</button>
  }
}

export default Radium(Button)
