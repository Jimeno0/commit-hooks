import styled from 'styled-components'

const getThemeColor = (theme) => {
  if (theme === 'dark') return '#282c34'
  if (theme === 'light') return '#BBB8B2'
  return 'linear-gradient(90deg, rgba(40,44,52,1) 0%, rgba(0,1,255,1) 100%);'
}

const Layout = styled('div')`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(72,75,82,1) 47%, rgba(40,44,52,1) 63%);
  background:${({ theme }) => getThemeColor(theme)};
  height: 100vh;
  flex-direction: column;
  overflow: auto;
  transition: all 0.2s ease-in-out;
`

export { Layout }
