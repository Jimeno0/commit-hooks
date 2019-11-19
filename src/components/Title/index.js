import React from 'react'
import styled from 'styled-components'
import { Text } from '../Text'
import { Spacing } from '../Spacing'

const Wrapper = styled.div`
  position: fixed;
  top: 20vh;
  padding: 16px 0 16px 500px;
`

const getThemeColor = (theme) => {
  if (theme === 'dark') return '#FFE8D1'
  if (theme === 'light') return '#342E37'
  return 'white'
}

const Title = ({ theme }) => {
  const color = getThemeColor(theme)
  return (
    <Wrapper>
      <Text shadow bold color={color} size='60'>React hooks</Text>
      <Spacing size='16px' />
      <Text shadow color={color} size='30'>bye bye to classes </Text>
    </Wrapper>
  )
}

export { Title }
