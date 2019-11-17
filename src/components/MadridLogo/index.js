import styled from 'styled-components'
import logo from './madrid_logo.png'

export const MadridLogo = styled('img').attrs(({ scroll }) => ({
  src: logo,
  style: {
    top: `calc(80vh - ${scroll / 4}px)`
  }
}
))`
  z-index: 1;
  width: 90%;
  position: absolute;
  transform: translateY(-50%);
`
