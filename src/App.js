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

export default App
