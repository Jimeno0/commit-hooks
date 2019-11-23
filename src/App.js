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
import { useScroll } from './hooks/useScroll'

const App = (props) => {
  const scroll = useScroll(0)
  const { value } = useContext(ThemeContext)
  return (
    <Layout theme={value}>
      <Sidebar />
      <Toggle />
      <Title />
      <Avatar theme={value} />
      <CommitLogo scroll={scroll} />
      <ReactLogo scroll={scroll} />
      <Spacing id='scroll' size='200vh' />
    </Layout>
  )
}

export default App
