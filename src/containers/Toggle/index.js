import React, { Component, useState, useContext } from 'react'
import { ToggleComponent } from '../../components'
import { ThemeContext } from '../../context'

const Toggle = (props) => {
  const [checked, setChecked] = useState(false)
  const { setValue } = useContext(ThemeContext)

  const handleChange = (checked) => {
    if (checked) setValue('light')
    if (!checked) setValue('dark')
    setChecked(checked)
  }
  return (
    <ToggleComponent
      checked={checked}
      onChange={handleChange}
    />
  )
}

// class Toggle extends Component {
//   constructor (props) {
//     super(props)
//     this.state = { checked: false }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange (checked) {
//     this.setState({ checked })
//   }

//   render () {
//     return (
//       <ToggleComponent
//         onChange={this.handleChange}
//         checked={this.state.checked}
//       />
//     )
//   }
// }

export { Toggle }
