import styled, { css } from 'styled-components'

const boldStyles = css`
  font-weight: bold;
`
const shadowStyles = css`
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
`

const uppercaseStyles = css`
  text-transform: uppercase;
`

const Text = styled('p')`
    font-family: 'Rubik', sans-serif;
    margin:0;
    transition: all 0.1s ease-in-out;
    ${({ color }) => color && `color: ${color};`};
    ${({ size }) => size ? `font-size: ${size}px;` : 'font-size: 12px;'}
    ${({ bold }) => bold && boldStyles}
    ${({ shadow }) => shadow && shadowStyles}
    ${({ uppercase }) => uppercase && uppercaseStyles}
    ${({ styles }) => styles}
  `

export { Text }
