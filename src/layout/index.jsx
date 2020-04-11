import React from 'react'
import styled from 'styled-components'
import { Header } from './components'

const Container = styled.div`
  height: 100%;
  ${ ({ theme }) => theme.includes.centerFlex };
`

const AppContainer = styled.div`
  height: 90%;
  max-height: 900px;
  max-width: 465px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .08);
  border-radius: 12px;
  background: ${ ({ theme }) => theme.colors.containerBackground };
`

const Inner = styled.main`
  flex-grow: 1;
  padding: 0 2rem;
`

const Layout = ({ children }) => (
  <Container>
    <AppContainer>
      <Header />
        <Inner>
          { children }
        </Inner>
    </AppContainer>
  </Container>
)

export default Layout
