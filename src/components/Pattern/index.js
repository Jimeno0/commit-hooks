import styled from 'styled-components'
import pattern from './codemotion_pattern.png'

const Pattern = styled('div')`
  background-image: url(${() => pattern});
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 200px;
  background-size: cover;
`

export { Pattern }
