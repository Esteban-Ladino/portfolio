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
      <Link to='/'><Logo>EL</Logo></Link>
      <nav>
        {navActive
          ?
          <>
            <ul>
              <li><Link to='/' onClick={activateNav}>HOME</Link></li>
              <li><Link to='/work' onClick={activateNav}>WORK</Link></li>
              <li><Link to='/about' onClick={activateNav}>ABOUT</Link></li>
              <li><Link to='/contact' onClick={activateNav}>CONTACT</Link></li>
            </ul>
            <MdClose size={35} onClick={activateNav} />
          </>
          : <MdMenu size={35} onClick={activateNav} />}
      </nav>
    </StyledHeader>
  )
}
