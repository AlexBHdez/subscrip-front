import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

const Wrapper = styled.nav`
  background-color: pink;
  display: flex;
  justify-content: space-between;

  > span:nth-child(2) {
    cursor: pointer;
  }
`

const Controls = inject('store')(observer(props => {
  const { logout, loggedIn } = props.store

  if (!loggedIn) return null
  
  return (
    <Wrapper>
      <span>Burger Menu</span>
      <span onClick={ logout }>Logout</span>
      <div>
        <span>Filters</span>
        <span>Orders</span>
      </div>
    </Wrapper>
  )
}))

export default Controls
