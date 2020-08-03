import React from 'react'
import { StyledFooter } from './styles'
import { FaLinkedinIn, FaGithub, FaFacebookF, FaEnvelope } from 'react-icons/fa'

export const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li><a href='https://www.linkedin.com/in/esteban-ladino/' target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a></li>
        <li><a href='https://github.com/Esteban-Ladino' target='_blank' rel='noopener noreferrer'><FaGithub /></a></li>
        <li><a href='https://www.facebook.com/esteban.ladino.92' target='_blank' rel='noopener noreferrer'><FaFacebookF /></a></li>
        <li><a href='mailto:esteban.ladino.927@gmail.com'><FaEnvelope /></a></li>
      </ul>
    </StyledFooter>
  )
}
