import React from 'react'
import { Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${ ({ theme }) => theme.colors.background };
`

const Dashboard = inject('store')(observer(props => {
  const { loggedIn, user } = props.store
  if (!loggedIn) {
    return <Redirect to='/' />
  }
  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <p>{ user && user.name }</p>
    </Wrapper>
  )
}))

export default Dashboard
