import React from 'react'
import useForm from '../../utils/customHooks'
import { inject, observer } from 'mobx-react'
import { Button, Form, FormField } from '../../ui'

const Login = inject('store')(observer(props => {
  const { loginUser } = props.store

  const onSubmit = () => loginUser(inputs)

  const { inputs, handleInputChange, handleSubmit } = useForm(onSubmit)

  return (
    <Form onSubmit={ handleSubmit }>
      <FormField label='Email' htmlFor='email' type='email' name='email' onChange={ handleInputChange } value={ inputs.email || '' } />
      <FormField label='Password' htmlFor='password' type='password' name='password' onChange={ handleInputChange } />
      <Button type='submit'>Log in</Button>
    </Form>
  )
}))

export default Login
