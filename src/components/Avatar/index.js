import React from 'react'
import avatar from './avatar-emoji.png'
import { Text } from '../Text'
import { Spacing } from '../Spacing'

const imageStyles = {
  borderRadius: '50%',
  height: 80,
  width: 80,
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  background: 'white'
}

export const Avatar = ({ scroll }) => {
  const wrapperStyles = {
    position: 'fixed',
    display: 'flex',
    jusifyContent: 'center',
    alignItems: 'center',
    left: '500px',
    // top: `calc(80vh - ${scroll / 2}px)`
    top: '80vh'
  }
  return (
    <div style={wrapperStyles}>
      <img style={imageStyles} src={avatar} />
      <Spacing vertical size='24px' />
      <div>
        <Text size='20' color='white'>Carlos P. Jimeno</Text>
        <Text size='16' color='#f4f4f4'>@jimeno0</Text>
      </div>
    </div>
  )
}
