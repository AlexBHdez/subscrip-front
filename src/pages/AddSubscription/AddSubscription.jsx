import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Form, FormField, Button, Select } from '../../ui'
import useForm from '../../utils/customHooks'
import subscriptionApi from '../../api/subscriptionApi'
import { withRouter } from 'react-router-dom'
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

const AddSubscription = props => {
  const [ loadingButton, setLoadingButton ] = useState(false)

  const onSubmit = async () => {
    setLoadingButton(true)
    const created = await subscriptionApi.newSubscription(inputs)
    if (created) {
      setLoadingButton(false)
      props.history.push('/dashboard')
    }
  }

  const { inputs, handleInputChange, handleSubmit } = useForm(onSubmit)

  useEffect(() => {
    const selectInitialEvent = { target: { name: 'billingPeriod', value: 'monthly' } }
    handleInputChange(selectInitialEvent)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <Select label='Billing Period' htmlFor='billingPeriod' value={ inputs.billingPeriod || 'monthly' } name='billingPeriod' onChange={ handleInputChange } options={ ['monthly', 'yearly'] } />
          <Button type='submit'>{ loadingButton ? 'Creating' : 'Create a new Subscrip' }</Button>
        </Form>
      </Body>
    </>
  )
}

export default withRouter(AddSubscription)
