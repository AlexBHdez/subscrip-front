import React from 'react'
import styled from 'styled-components'
import { Burger } from '../../ui'
import { ReactComponent as BackIcon } from '../../images/svg/back_icon.svg'
import { useLocation, useHistory } from 'react-router-dom'

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9;
`

const StyledBackIcon = styled(BackIcon)`
  cursor: pointer;
  transition: transform .15s ease-out;
  path {
    fill: ${ ({ theme, islight }) => theme.colors[ islight ? 'white' : 'black' ] };
  }
  
  &:hover {
    transform: translateX(-4px)
  }
`

const TopControls = ({ loggedIn }) => {
  const { pathname } = useLocation()
  const { goBack } = useHistory()
  const isDashboard = pathname === '/dashboard'
  const lightColor = pathname === '/add'

  if (!loggedIn) return null
  
  return (
    <HeaderWrap>
      { isDashboard ? <div></div> : <StyledBackIcon onClick={ goBack } islight={ lightColor.toString() } /> }
      <Burger lightColor={ lightColor } />
    </HeaderWrap>
  )
}

export default TopControls
