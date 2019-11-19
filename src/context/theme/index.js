import React, { useState, createContext } from 'react'

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

export { ThemeProvider }
