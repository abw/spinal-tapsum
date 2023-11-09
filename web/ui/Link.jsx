import React from 'react'
import LinkContent from './LinkContent.jsx'
import { NavLink } from 'react-router-dom'

const Link = ({
  to,
  className='',
  exact,
  onClick,
  label,
  style,
  ...props
}) =>
  <NavLink
    to={to}
    onClick={onClick}
    end={exact && 'end'}
    className={({ isActive }) => `${className} ${isActive ? 'active' : ''}`}
    aria-label={label}
    style={style}
    // ref={ref}
  >
    <LinkContent {...props}/>
  </NavLink>

export default Link
