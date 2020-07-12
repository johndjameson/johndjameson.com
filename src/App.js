import React from 'react'
import { Router } from '@reach/router'
import { Root, Routes } from 'react-static'
import MetaDescription from 'components/MetaDescription'
import Title from 'components/Title'
import GlobalStyle from 'styles/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />

      <Root>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Title />
          <MetaDescription />
          <Router>
            <Routes path='*' />
          </Router>
        </React.Suspense>
      </Root>
    </>
  )
}

export default App
