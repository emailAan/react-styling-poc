import styled, { keyframes } from 'styled-components'

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
  }
`

const Button = styled.button`
  height: 50px;
  width: 180px;
  animation-name: ${buttonAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  :hover {
    color: red;
  }
  @media screen and (max-width: 1024px) {
    font-size: small;
  }
  @media screen and (min-width: 1024px) {
    font-size: large;
  }
`

export default Button
