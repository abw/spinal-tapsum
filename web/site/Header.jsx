import React from 'react'
import { Toggle } from '@abw/react-night-and-day'
import Link from '@/ui/Link.jsx'

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to="/" className="home mar-l-2" text="Spinal Tapsum"/>
        </div>
        <div className="flex middle">
          <Toggle/>
        </div>
      </nav>
    </header>
  )
}

export default Header
