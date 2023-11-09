import React from 'react'
import Header  from './Header.jsx'
import Footer  from './Footer.jsx'
import { Outlet } from 'react-router-dom'
import { useTheme } from '@abw/react-night-and-day'

const Layout = () => {
  const { theme } = useTheme()
  return (
    <div id="site" data-theme={theme}>
      <Header/>
      <div id="app">
        <main id="content">
          <Outlet/>
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
