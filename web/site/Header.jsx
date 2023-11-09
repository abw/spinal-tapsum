import React from 'react'
import { Toggle } from '@abw/react-night-and-day'
import Link from '@/ui/Link.jsx'
import Icon from '@/ui/Icon.jsx'

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to="/" className="home mar-l-2" text="Spin̈al Tapsum"/>
        </div>
        <div className="flex middle">
          <a href="https://github.com/abw/spinal-tapsum">
            <Icon name="github" className="mar-r-4"/>
          </a>
          <Toggle/>
        </div>
      </nav>
    </header>
  )
}

export default Header
