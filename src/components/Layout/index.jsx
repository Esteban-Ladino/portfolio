import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { GlobalStyles } from '../../assets/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { variables } from '../../assets/styles/variables'
import { Container } from './styles'

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={variables}>
      <GlobalStyles />
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
