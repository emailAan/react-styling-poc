import React, { Component } from 'react';
import { withPackageName } from 'react-pacomo';
const { decorator } = withPackageName('react-styling-poc')


import './ButtonCompCss.css';

class ButtonCompCss extends Component {

  render() {
    const btnClass = { "myButton": true };

    return (<button className={btnClass}>Separate css file</button>
    );
  }
}

export default decorator(ButtonCompCss);
