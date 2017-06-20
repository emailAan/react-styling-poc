import React, { Component } from 'react'
import { withPackageName } from 'react-pacomo'

import './ButtonCompCss.css'

const { decorator } = withPackageName('react-styling-poc')

class ButtonCompCss extends Component {
  render () {
    const btnClass = { 'myButton': true }

    return (<button className={btnClass}>Separate css file</button>
    )
  }
}

export default decorator(ButtonCompCss)
