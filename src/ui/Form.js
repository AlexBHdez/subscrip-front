import React from 'react'
import styled from 'styled-components'

const FormWrap = styled.form`
  margin-top: 50px;
`

const Form = ({ children, onSubmit }) => {

  return (
    <FormWrap onSubmit={ onSubmit } >
      { children }
    </FormWrap>
  )
}

export default Form
