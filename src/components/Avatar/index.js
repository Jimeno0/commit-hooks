import React from 'react'
import styled from 'styled-components'
import avatar from './avatar-emoji.png'
import { Text } from '../Text'
import { Spacing } from '../Spacing'

const Image = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  background: white;
`

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  jusify-content: center;
  align-items: center;
  left: 500px;
  top: 80vh;
`

const getThemeColor = (theme) => {
  if (theme === 'dark') return '#FFE8D1'
  if (theme === 'light') return '#342E37'
  return 'white'
}

export const Avatar = ({ theme }) => {
  const color = getThemeColor(theme)
  return (
    <Wrapper>
      <Image src={avatar} />
      <Spacing vertical size='24px' />
      <div>
        <Text size='20' color={color}>Carlos P. Jimeno</Text>
        <Text size='16' color={color}>@jimeno0</Text>
      </div>
    </Wrapper>
  )
}
