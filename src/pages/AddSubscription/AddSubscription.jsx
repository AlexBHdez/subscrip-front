import React from 'react'
import styled from 'styled-components'
import { Form, FormField, ToggleCheck, Button } from '../../ui'
import useForm from '../../utils/customHooks'
// import * as logos from 'styled-icons/boxicons-logos'

const Introduction = styled.div`
  min-height: 260px;
  background-color: #1ce1ac;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  border-radius: 12px 12px 40px 40px;
  padding: 100px 20px 20px;
  color: ${ ({ theme }) => theme.colors.white };

  > div:first-child {
    font-size: 48px;
    line-height: 1.5;
    font-weight: 500;
  }

  > div:last-child {
    font-size: 28px;
    line-height: 1.3;
    font-weight: 300;
  }
`

const Body = styled.div`
  margin-top: 260px;
`

const AddSubscription = () => {

  const onSubmit = () => console.log(inputs)

  const { inputs, handleInputChange, handleSubmit, handleCheckChange } = useForm(onSubmit)

  return (
    <>
      <Introduction>
        <div>Add a subscrip</div>
        <div>First of all, select an icon for your subscrip.</div>
      </Introduction>
      <Body>
        <Form onSubmit={ handleSubmit }>
          <FormField label='Name' htmlFor='name' type='text' name='name' onChange={ handleInputChange } value={ inputs.name || '' } />
          <FormField label='Description' htmlFor='description' type='text' name='description' onChange={ handleInputChange } value={ inputs.description || '' } />
          <FormField label='Price' htmlFor='price' type='number' name='price' onChange={ handleInputChange } value={ inputs.price || '' } />
          <ToggleCheck onClick={ handleCheckChange } label='Billing Period' htmlFor='billingPeriod' type='checkbox' name='billingPeriod' checked={ inputs.billingPeriod } />
          <Button type='submit'>Create subscrip</Button>
        </Form>
      </Body>
    </>
  )
}

export default AddSubscription
