import React from 'react'
import styled from 'styled-components'
import { Text } from '../Text'
import { Spacing } from '../Spacing'

const Wrapper = styled.div`
  position: fixed;
  top: 20vh;
  padding: 16px 0 16px 500px;
`

const Title = (props) => {
  return (
    <Wrapper>
      <Text shadow bold color='white' size='60'>React hooks</Text>
      <Spacing size='16px' />
      <Text shadow color='white' size='30'>bye bye to classes </Text>
    </Wrapper>
  )
}

export { Title }
