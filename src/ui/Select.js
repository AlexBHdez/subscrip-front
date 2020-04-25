import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BackIcon } from '../images/svg/back_icon.svg'

const SelectWrap = styled.div`
  height: 50px;
  position: relative;
  margin-bottom: 20px;

  > label {
    position: absolute;
    top: -15px;
    left: 15px;
    font-weight: 500;
    background-color: #f5f5f5;
    color: ${ ({ theme }) => theme.colors.gray };
    padding: 4px 8px;
    transition: color .35s ease;
  }

  > select {
    appearance: none;
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: 1px solid rgb(195, 195, 208);
    border-radius: 4px;
    transition: border-color .50s ease;
    font-size: 14px;
    padding-left: 15px;
  }
`

const StyledBackIcon = styled(BackIcon)`
  transition: transform .15s ease-out;
  transform: rotate(-90deg) translateX(55%);
  position: absolute;
  right: 20px;
  top: 50%;
  pointer-events: none;

  path {
    fill: ${ ({ theme }) => theme.colors.gray };
  }
`

const Select = props => {
  const { label, htmlFor, options, ...rest } = props

  const renderOptions = () => options.map(option => <option value={ option }>{ option.toUpperCase() }</option>)
  
  return (
    <SelectWrap>
      { label && <label htmlFor={ htmlFor } >{ label }</label> }
      <select { ...rest } >
        { renderOptions() }
      </select>
      <StyledBackIcon />
    </SelectWrap>
  )
}

export default Select
