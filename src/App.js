import React, { Component, useState, useContext, useEffect } from 'react'
import { css } from 'styled-components'
import { ThemeContext } from './context'
import {
  Background,
  Sidebar,
  MonogramLogo,
  Spacing,
  MadridLogo,
  Pattern,
  ReactLogo,
  Text,
  Avatar,
  Layout
} from './components'
import { Toggle } from './containers'

const titleStyles = {
  position: 'fixed',
  top: '20vh',
  padding: '16px 0 16px 500px'
}

const App = (props) => {
  const scroll = useScroll(0)
  // const scroll = 0
  const { value } = useContext(ThemeContext)

  return (
    <Layout>
      <Sidebar />
      <Toggle />
      {/* <Background scroll={scroll} /> */}
      {/* <Pattern /> */}
      <div style={titleStyles}>
        <Text shadow bold color='white' size='44'>React hooks</Text>
        <Spacing size='16px' />
        <Text shadow color='white' size='24'>bye bye to classes </Text>
      </div>
      <MonogramLogo scroll={scroll} />
      <Avatar scroll={scroll} />
      <ReactLogo scroll={scroll} />
      {/* <MadridLogo scroll={scroll} /> */}
      <Spacing id='scroll' size='200vh' />
    </Layout>
  )
}

const useScroll = (inialValue) => {
  const [scroll, setScroll] = useState(inialValue)

  const handleScroll = (e) => {
    const height = e.target.scrollTop
    setScroll(height)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, true)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scroll
}

// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       scroll: 0
//     }
//     this.handleScroll = this.handleScroll.bind(this)
//   }

//   componentDidMount () {
//     document.addEventListener('scroll', this.handleScroll, true)
//   }

//   handleScroll (e) {
//     const height = e.target.scrollTop
//     this.setState({ scroll: height })
//   }

//   componentWillUnmount () {
//     document.removeEventListener('scroll', this.handleScroll)
//   }

//   render () {
//     const { scroll } = this.state
//     return (
//       <Layout>
//         <Toggle />
//         <Background scroll={scroll} />
//         <Pattern />
//         <MonogramLogo scroll={scroll} />
//         <ReactLogo scroll={scroll} />
//         <MadridLogo scroll={scroll} />
//         <Spacing id='scroll' size='200vh' />
//       </Layout>
//     )
//   }
// }

export default App
