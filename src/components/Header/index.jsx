/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */

import React, { useState } from 'react'
import { Link } from '@reach/router'
import { MdMenu, MdClose } from 'react-icons/md'

import { Logo, StyledHeader } from './styles'

export const Header = () => {
  const [navActive, setNavActive] = useState(false)

  const activateNav = () => setNavActive(!navActive)

  return (
    <StyledHeader>
      <Logo>EL</Logo>
      <nav>
        {navActive
          ?
          <>
            <ul>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/work'>WORK</Link></li>
              <li><Link to='/about'>ABOUT</Link></li>
              <li><Link to='/contact'>CONTACT</Link></li>
            </ul>
            <MdClose size={35} onClick={activateNav} />
          </>
          : <MdMenu size={35} onClick={activateNav} />}
      </nav>
    </StyledHeader>
  )
}
