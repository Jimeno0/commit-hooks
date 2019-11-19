import styled from 'styled-components'

const getThemeColor = (theme) => {
  if (theme === 'dark') return '#342E37'
  if (theme === 'light') return '#FFE8D1'
  return '#7C99B4'
}

const Layout = styled('div')`
  display: flex;
  position: relative;
  background:${({ theme }) => getThemeColor(theme)};
  height: 100vh;
  overflow: auto;
  transition: all 0.2s ease-in-out;
`

export { Layout }
