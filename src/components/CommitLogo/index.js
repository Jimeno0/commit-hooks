import styled from 'styled-components'
import logo from './monogramLogo.png'

export const CommitLogo = styled('img').attrs(({ scroll }) => ({
  src: logo,
  style: {
    height: `${150 + scroll / 1.4}px`,
    opacity: `${1 - scroll / 1100}`
  }
}
))`
  bottom: 50px;
  right: 50px;
  height: 150px;
  z-index: 10;
  position: fixed;
`
