import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE_ICON = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={SIZE_ICON} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={SIZE_ICON} /></Link>
      <Link to='/user'><MdPersonOutline size={SIZE_ICON} /></Link>
    </Nav>
  )
}
