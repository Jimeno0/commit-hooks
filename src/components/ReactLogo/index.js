import styled from 'styled-components'
import logo from './react-logo.png'

export const ReactLogo = styled('img').attrs(({ scroll }) => ({
  src: logo,
  style: {
    transform: `rotate(${scroll / 4}deg)`
  }
}
))`
  left: calc(50vw + 100px);
  top: calc(50vh - 100px);
  height: 200px;
  z-index: 1;
  position: fixed;
`
