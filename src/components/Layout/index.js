import styled from 'styled-components'

const getThemeColor = (theme) => {
  if (theme === 'dark') return '#282c34'
  if (theme === 'light') return '#BBB8B2'
  // return 'background: linear-gradient(to right, #d3cce3, #e9e4f0);'
  return 'rgb(187, 184, 178)'
}

const Layout = styled('div')`
  display: flex;
  position: relative;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(72,75,82,1) 47%, rgba(40,44,52,1) 63%);
  background:${({ theme }) => getThemeColor(theme)};
  height: 100vh;
  overflow: auto;
  transition: all 0.2s ease-in-out;
`

export { Layout }
