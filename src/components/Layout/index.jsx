import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { GlobalStyles } from '../../assets/styles/GlobalStyles'

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </>
  )
}
