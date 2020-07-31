import css from 'styled-jsx/css'
import {breakpoints, colors, fonts} from '../../styles/theme'
import {addOpacityToColor} from '../../styles/utils'

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${fonts.base};
  }

  body {
    background-image:
      radial-gradient(${backgroundColor} 1px, transparent 1px), radial-gradient(${backgroundColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
  }

  * {
    box-sizing: border-box;
  }
`

export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  main {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 25px 0 rgba(0,0,0,.1);
    height: 100%;
    width: 100%;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      width: ${breakpoints.mobile};
      height: 90vh;
    }
  }
`