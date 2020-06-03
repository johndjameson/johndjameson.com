import React from 'react'
import { Link, Router } from '@reach/router'
import { Root, Routes } from 'react-static'
import Title from 'components/Title'

import './app.css'

function App() {
  return (
    <Root>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
      </nav>

      <div className='content'>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Title />
          <Router>
            <Routes path='*' />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
