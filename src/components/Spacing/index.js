import React from 'react'
import styled, { css } from 'styled-components'

const borderStyles = css`
  border-bottom: 1px solid #EAEAF2;
`

const verticalStyles = css`
  margin-bottom: 0px;
  flex-shrink: 0;
  ${({ size }) => `width:${size}px;`}
`

const StyledSpacing = styled.div`
  width: 100%;
  ${({ size }) => `margin-top:${size};`}
  ${({ vertical }) => vertical && verticalStyles}
  ${({ withLine }) => withLine && borderStyles}
  ${({ styles }) => styles && styles}
`

const Spacing = (props) => <StyledSpacing {...props} />

Spacing.defaultProps = {
  size: '24'
}

export { Spacing }
