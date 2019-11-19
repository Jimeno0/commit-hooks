import styled from 'styled-components'
import logo from './monogramLogo.png'

export const MonogramLogo = styled('img').attrs(({ scroll }) => ({
  src: logo,
  style: {
    // right: `calc(10vw + ${scroll / 1.5}px)`,
    // top: `calc(75vh - ${scroll / 1.5}px)`,
    bottom: '50px',
    right: '50px',

    // transform: 'scale(2)'
    // transform: `scale(${1 + scroll / 200})`,
    height: `${150 + scroll / 1.4}px`,
    opacity: `${1 - scroll / 1100}`
  }
}
))`
  height: 150px;
  z-index: 10;
  position: fixed;
`
