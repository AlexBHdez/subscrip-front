import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.div`
  background-color: #1CE1AC;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);

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
`

const BottomControls = ({ loggedIn }) => {
  const history = useHistory()

  if (!loggedIn) return null

  const handleClick = () => history.push('/add')
  
  return (
    <Wrapper onClick={ handleClick }>
      <div></div>
      <div></div>
    </Wrapper>
  )
}

export default BottomControls
