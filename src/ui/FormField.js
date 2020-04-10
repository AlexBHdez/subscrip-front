import React from 'react'
import styled from 'styled-components'

const FormFieldWrap = styled.div`
  height: 50px;
  position: relative;
  margin-bottom: 20px;

  &:hover > Label {
    color: initial;
  }

  &:hover > Input, Input:focus {
    border-color: initial;
  }
`

const Label = styled.label`
  position: absolute;
  top: -15px;
  left: 15px;
  font-weight: 500;
  background-color: ${ ({ theme }) => theme.colors.browserBackground };
  color: ${ ({ theme }) => theme.colors.gray };
  padding: 4px 8px;
  transition: color .35s ease;
`

const Input = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: 1px solid rgb(195, 195, 208);
  border-radius: 4px;
  transition: border-color .50s ease;
  font-size: 14px;
  padding-left: 15px;
`

const FormField = props => {
  const { label } = props

  return (
    <FormFieldWrap>
      { label && <Label>{ label }</Label> }
      <Input { ...props } />
    </FormFieldWrap>
  )
}

export default FormField
