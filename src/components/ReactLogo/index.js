import styled from 'styled-components'
import logo from './react-logo.png'

export const ReactLogo = styled('img').attrs(({ scroll }) => ({
  src: logo,
  style: {
    left: 'calc(50vw + 100px)',
    // left: `calc(50vw + ${scroll / 1.5}px)`,
    top: 'calc(50vh - 100px)',
    transform: `rotate(${scroll / 4}deg)`
  }
}
))`
  height: 200px;
  z-index: 1;
  position: fixed;
`
