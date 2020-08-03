/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */

import React, { useState } from 'react'
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
              <li>HOME</li>
              <li>WORK</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
            <MdClose size={35} onClick={activateNav} />
          </>
          : <MdMenu size={35} onClick={activateNav} />}
      </nav>
    </StyledHeader>
  )
}
