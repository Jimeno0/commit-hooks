import React, { Component, useState, useContext, useEffect } from 'react'
import { ThemeContext } from './context'
import {
  Sidebar,
  CommitLogo,
  Spacing,
  ReactLogo,
  Avatar,
  Title,
  Layout
} from './components'
import { Toggle } from './containers'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scroll: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    document.addEventListener('scroll', this.handleScroll, true)
  }

  handleScroll (e) {
    const height = e.target.scrollTop
    this.setState({ scroll: height })
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    const { scroll } = this.state
    return (
      <Layout>
        <Sidebar />
        <Toggle />
        <Title />
        <Avatar />
        <CommitLogo scroll={scroll} />
        <ReactLogo scroll={scroll} />
        <Spacing id='scroll' size='200vh' />
      </Layout>
    )
  }
}

// const App = (props) => {
//   const scroll = useScroll(0)
//   // const scroll = 0
//   const { value } = useContext(ThemeContext)

//   return (
//     <Layout>
//       <Sidebar />
//       <Toggle />
//       <Title theme={value} />
//       <Avatar theme={value} />
//       <CommitLogo scroll={scroll} />
//       <ReactLogo scroll={scroll} />
//       <Spacing id='scroll' size='200vh' />
//     </Layout>
//   )
// }

// const useScroll = (inialValue) => {
//   const [scroll, setScroll] = useState(inialValue)

//   const handleScroll = (e) => {
//     const height = e.target.scrollTop
//     setScroll(height)
//   }

//   useEffect(() => {
//     document.addEventListener('scroll', handleScroll, true)
//     return () => {
//       document.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   return scroll
// }

export default App
