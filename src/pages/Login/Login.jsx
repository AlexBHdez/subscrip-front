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
      <FormField label='Email' type='email' name='email' required onChange={ handleInputChange } value={ inputs.email || '' } />
      <FormField label='Password' type='password' name='password' required onChange={ handleInputChange } value={ inputs.password || '' } />
      <Button type='submit'>Log in</Button>
    </Form>
  )
}))

export default Login
