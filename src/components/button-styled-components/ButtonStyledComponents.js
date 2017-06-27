import styled, { keyframes } from 'styled-components'

import { screens, animations, colors } from '../../common/css'

const buttonAnimation = keyframes`
  0% {
    background-color: red;
    -ms-transform: rotate(7deg);
    -webkit-transform: rotate(7deg);
    transform: rotate(7deg);
  }
  25% {
    background-color: yellow;
  }
  50% {
    background-color: blue;
    -ms-transform: rotate(-7deg);
    -webkit-transform: rotate(-7deg);
    transform: rotate(-7deg);
  }
  100% {
    background-color: green;
   }`

const justForDemo = true

const ani = keyframes`${animations.freaky || justForDemo}`

const Button = styled.button`
  height: 50px;
  width: 180px;
  animation-name: ${justForDemo ? ani : buttonAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  :hover {
    color: ${colors.primary};
  }
  ${screens.small} {
    font-size: small;
  }
  ${screens.large}  {
    font-size: large;
  }
`

export default Button
