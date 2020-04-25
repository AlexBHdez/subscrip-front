import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { TopControls, BottomControls } from './components'

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
  position: relative;
  overflow-y: scroll;
`

const Inner = styled.main`
  flex-grow: 1;
  padding: 0 2rem;
  margin-top: 90px;
`

const Layout = inject('store')(observer(({ children, store }) => (
  <Container>
    <AppContainer>
      <TopControls loggedIn={ store.loggedIn } />
      <Inner>
        { children }
      </Inner>
      <BottomControls loggedIn={ store.loggedIn } />
    </AppContainer>
  </Container>
)))

export default Layout
