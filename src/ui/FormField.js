import React from 'react'
import styled from 'styled-components'

const FormFieldWrap = styled.div`
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

  > input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: 1px solid rgb(195, 195, 208);
    border-radius: 4px;
    transition: border-color .50s ease;
    font-size: 14px;
    padding-left: 15px;  
  }

  &:hover > Label {
    color: initial;
  }

  &:hover > Input, Input:focus {
    border-color: initial;
  }
`

const FormField = props => {
  const { label, htmlFor, ...rest } = props

  return (
    <FormFieldWrap>
      { label && <label htmlFor={ htmlFor }>{ label }</label> }
      <input { ...rest } />
    </FormFieldWrap>
  )
}

export default FormField
