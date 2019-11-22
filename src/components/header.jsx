import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/cyf_logo.svg'

const Header = () => {
  return (
    <header className="text-center">
      <Link to="/">
        <img src={logo} alt="cyf logo" className="w-2/6 m-auto lg:w-64" />
      </Link>
    </header>
  )
}

export default Header
