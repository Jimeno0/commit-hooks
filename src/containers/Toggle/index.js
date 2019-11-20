import React, { Component, useState, useContext } from 'react'
import { ToggleComponent } from '../../components'
// import { ThemeContext } from '../../context'

class Toggle extends Component {
  constructor () {
    super()
    this.state = { checked: false }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (checked) {
    this.setState({ checked })
  }

  render () {
    return (
      <ToggleComponent
        onChange={this.handleChange}
        checked={this.state.checked}
      />
    )
  }
}

// const Toggle = (props) => {
//   const handleCheck = useCheck(false)
//   return (
//     <ToggleComponent
//       {...handleCheck}
//     />
//   )
// }

// const useCheck = (inialValue) => {
//   const [checked, onChange] = useState(inialValue)
//   const { setValue } = useContext(ThemeContext)

//   const handleCheck = (checked) => {
//     if(checked) setValue('light')
//     if(!checked) setValue('dark')
//     onChange(checked)
//   }
//   return { checked, onChange: handleCheck }
// }

export { Toggle }
