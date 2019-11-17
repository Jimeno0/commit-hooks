import styled from 'styled-components'
import logo from './react-logo.png'

export const ReactLogo = styled('img').attrs(({ scroll }) => ({
  src: logo,
  style: {
    top: `calc(30vh + ${scroll * 1.5}px)`
  }
}
))`
  height: 130px;
  z-index: 1;
  position: absolute;
`
