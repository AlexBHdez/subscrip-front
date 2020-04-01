import React from 'react'
import styled from 'styled-components'

const Wrap = styled.button`
  outline: none;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: peru;
  color: white;
  border: none;
  border-radius: 4px;
  width: auto;
  height: 40px;
  padding: 0 1.4rem;
  transition: background-color .35s ease;
  &:hover {
    cursor: pointer;
    background-color: peachpuff;
  }
`

const Button = props => {
  const { onClick, children } = props

  const buttonProps = {
    onClick: typeof(onClick) !== 'function' ? null : onClick
  }

  return (
    <Wrap { ...buttonProps } >
      <span>{ children }</span>
    </Wrap>
  )
}

export default Button
