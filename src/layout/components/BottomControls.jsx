import React from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'

const Wrapper = styled.div`
  transition: all .35s ease;
  background-color: #1CE1AC;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  color: ${ ({ theme }) => theme.colors.white };

  > div {
    width: 60%;
    height: 4px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;

    &:first-child {
      height: 60%;
      width: 4px;
    }
  }

  ${ ({ isAddSubscription }) => !isAddSubscription ? '' : `
    bottom: 0;
    right: 0;
    left: unset;
    transform: translateX(0);
    border-radius: 38px 0;
    min-width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.5px;

    > div {
      display: none;
    }
  `}
`

const BottomControls = ({ loggedIn }) => {
  const history = useHistory()
  const { pathname } = useLocation()
  const isAddSubscription = pathname === '/add'

  if (!loggedIn) return null

  const handleClick = () => history.push('/add')
  
  return (
    <Wrapper onClick={ handleClick } isAddSubscription={ isAddSubscription }>
      { isAddSubscription && 'Continuar' }
      <div></div>
      <div></div>
    </Wrapper>
  )
}

export default BottomControls
