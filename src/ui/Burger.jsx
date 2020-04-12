import React, { useState } from 'react'
import styled from 'styled-components'

const BurgerWrap = styled.div`
  width: 34px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: ${ ({ open }) => open ? 'rotate(-90deg)' : 'none' };

  &, > * {
    transition: transform .35s ease;
  }

  &:hover {
    cursor: pointer;
  }

  > span {
    width: 100%;
    height: 4px;
    background-color: ${ ({ theme, lightColor }) => theme.colors[ lightColor ? 'white' : 'black' ] };
    border-radius: 2px;

    &:first-child {
      transform: ${ ({ open }) => open ? 'rotate(-45deg) translate(-5.20px, 5.20px)' : 'none' };
    }

    &:nth-child(2) {
      transform: ${ ({ open }) => open ? 'scaleX(0)' : '' };
    }

    &:last-child {
      transform: ${ ({ open }) => open ? 'rotate(45deg) translate(-9.19px, -9.19px)' : 'none' };
    }

    &:not(:nth-child(2)) {
    }
  }
`

const Burger = ({ lightColor }) => {
  const [ open, setOpen ] = useState(false)
  const handleBurgerClick = () => setOpen(!open)

  return (
    <BurgerWrap onClick={ handleBurgerClick } open={ open } lightColor={ lightColor }>
      <span></span>
      <span></span>
      <span></span>
    </BurgerWrap>
  )
}

export default Burger
