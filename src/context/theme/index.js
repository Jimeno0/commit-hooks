import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = createContext({ value: {} })

const ThemeProvider = (props) => {
  const [value, setValue] = useState('dark')
  return (
    <ThemeContext.Provider
      value={{ value, setValue }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  defaultOpen: PropTypes.bool
}

export { ThemeProvider }
