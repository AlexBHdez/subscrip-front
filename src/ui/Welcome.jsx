import React from 'react'
import styled from 'styled-components'
import { capitalize, getWelcomeMessage } from '../utils/miscellaneous'

const WelcomeWrap = styled.h1`
  font-size: 48px;
  font-weight: 300;
  line-height: 60px;

  > *:last-child {
    font-weight: 500;
  }
`

const Welcome = ({ username }) => {

  return (
    <WelcomeWrap>
      <div>{ getWelcomeMessage() }</div>
      <div>{ capitalize(username) }</div>
    </WelcomeWrap>
  )
}

export default Welcome
