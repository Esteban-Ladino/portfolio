import React from 'react'
import { Router } from '@reach/router'

import { Layout } from '../components/Layout'
import { NotFound } from '../pages/NotFound'
import { Home } from '../pages/Home'
import { Work } from '../pages/Work'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'

function App () {
  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path='/' />
        <Work path='/work' />
        <About path='/about' />
        <Contact path='/contact' />
      </Router>
    </Layout>
  )
}

export default App
