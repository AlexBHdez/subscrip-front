import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`

const PageTitle = styled.h1`
  font-size: 2rem;
`

const Header = () => (
  <Wrapper>
    <PageTitle>Subscriptions</PageTitle>
  </Wrapper>
)

export default Header
