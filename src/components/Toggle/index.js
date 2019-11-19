import React from 'react'
import styled from 'styled-components'
import Switch from 'react-switch'

const ToggleWrapper = styled('div')`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 10;
`

const ToggleComponent = (props) => {
  const { onChange, checked } = props
  return (
    <ToggleWrapper>
      <Switch
        onChange={onChange}
        checked={checked}
        onColor='#342E37'
        offColor='#FFE8D1'
        offHandleColor='#342E37'
        onHandleColor='#FFE8D1'
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </ToggleWrapper>
  )
}

export { ToggleComponent }
