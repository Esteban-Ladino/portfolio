import React from 'react'
import { Router } from '@reach/router'

import { Layout } from '../components/Layout'
import { NotFound } from '../pages/NotFound'
import { Home } from '../pages/Home'
import { Work } from '../pages/Work'

function App () {
  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path='/' />
        <Work path='/work' />
      </Router>
    </Layout>
  )
}

export default App
