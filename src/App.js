import React, { Component } from 'react'
import { StyleRoot } from 'radium'

import Button from './components/button-unstyled/Button'
import ButtonOneCss from './components/button-one-css/ButtonOneCss'
import ButtonCompCss from './components/button-comp-css/ButtonCompCss'
import ButtonInline from './components/button-js-inline-react/ButtonInlineReact'
import ButtonRadium from './components/button-js-inline-radium/ButtonRadium'
import ButtonAphrodite from './components/button-js-css-aphrodite/ButtonAphrodite'
import ButtonStyledComponents from './components/button-styled-components/ButtonStyledComponents'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <StyleRoot>
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to React</h2>
          </div>
          <p className='App-intro'>
            <Button />
            <ButtonOneCss />
            <ButtonCompCss />
            <ButtonInline />
            <ButtonRadium />
            <ButtonAphrodite />
            <ButtonStyledComponents>Styled Components</ButtonStyledComponents>
          </p>
        </div>
      </StyleRoot>)
  }
}

export default App
