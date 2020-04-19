import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const CheckboxWrap = styled.div`
  display: flex;
  > label {
    cursor: pointer;
    margin-right: 20px;
  }

  > input {
    visibility: hidden;
  }
`

const Toggle = styled.div`
  background-color: ${ ({ theme, active }) => active ? 'pink' : 'grey' };
  width: 35px;
  border-radius: 20px;
  display: flex;
  position: relative;
  cursor: pointer;
  height: 18px;

  &::after {
    content: '';
    width: 48%;
    background-color: ${ ({ theme }) => theme.colors.white };
    position: absolute;
    height: 90%;
    border-radius: 20px;
    top: 1px;
    left: 1px;
    transform: ${ ({ active }) => active && 'translateX(90%)' };
    transition: transform .15s ease-out;
  }
`

const ToggleCheck = ({ label, htmlFor, onClick, checked, ...rest }) => {
  const [ active, setActive ] = useState(checked)
  const inputElement = useRef(null)

  const handleClick = () => {
    inputElement.current.checked = !inputElement.current.checked
    onClick(inputElement.current)
    setActive(!active)
  }

  return (
    <CheckboxWrap onClick={ handleClick }>
      { label && <label htmlFor={ htmlFor }>{ label }</label> }
      <Toggle active={ active } />
      <input { ...rest } ref={ inputElement } />
    </CheckboxWrap>
  )
}

export default ToggleCheck
