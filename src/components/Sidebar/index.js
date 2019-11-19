import styled from 'styled-components'
import src from './sidePattern.png'

export const Sidebar = styled('img').attrs(({ scroll }) => ({ src }))`
  z-index: 1;
  height: 100vh;
  position: fixed;
  left: 0;
`
