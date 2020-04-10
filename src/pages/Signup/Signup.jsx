import React from 'react'
import useForm from '../../utils/customHooks'
import { inject, observer } from 'mobx-react'
import { Button, Form, FormField } from '../../ui'

const Signup = inject('store')(observer(props => {
  const { signupUser } = props.store
  
  const onSubmit = () => signupUser(inputs)
  
  const { inputs, handleInputChange, handleSubmit } = useForm(onSubmit)
  
  return (
    <Form onSubmit={ handleSubmit }>
      <FormField label='Username' htmlFor='name' type='text' name='name' required onChange={ handleInputChange } value={ inputs.name || '' } />
      <FormField label='Email' htmlFor='email' type='email' name='email' required onChange={ handleInputChange } value={ inputs.email || '' } />
      <FormField label='Password' htmlFor='password' type='password' name='password' required onChange={ handleInputChange } value={ inputs.password || '' } />
      <Button type='submit'>Sign Up</Button>
    </Form>
  )
}))

export default Signup
