import styled from 'styled-components'
import logo from './monogramLogo.png'

export const MonogramLogo = styled('img').attrs(({ scroll }) => ({
  src: logo,
  style: {
    top: `calc(20vh + ${scroll * 2}px)`
  }
}
))`
  height: 100px;
  z-index: 10;
  position: absolute;
`
