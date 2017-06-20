import React, { Component } from 'react'

const style = {
  'height': '50px',
  'width': '180px'
}

class ButtonInline extends Component {
  render () {
    return <button style={style} >Inline styled button</button>
  }
}

export default ButtonInline
