import styled from 'styled-components'

export const Background = styled('div').attrs(({ scroll }) => ({
  style: {
    top: `calc(60vh - ${scroll}px)`
  }
}))`
  background: linear-gradient(90deg, rgba(223,197,65,1) 0%, rgba(255,92,0,1) 61%);
  position: absolute;
  top: 80vh;
  width: 100%;
  height: 80vh;
`
