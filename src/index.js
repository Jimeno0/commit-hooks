import React from 'react'
import ReactDOM from 'react-dom'
import View from './App'
import { ThemeProvider } from './context'

const App = (props) => {
  return (
    <ThemeProvider>
      <View />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
