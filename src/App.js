import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import styled from "@emotion/styled"
import GlobalStyles from '../src/components/GlobalStyles'
import { Link, Router } from 'components/Router'
import NavBar from '../src/components/NavBar/'
import Dynamic from 'containers/Dynamic'

const Main = styled.main`
  padding: 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 45rem) {
    width: 70vw;
    margin: 0 auto;
  }
`;

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <GlobalStyles />
      <NavBar/>
      <Main className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Main>
    </Root>
  )
}

export default App
