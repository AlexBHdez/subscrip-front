import React from 'react'
import useForm from '../../utils/customHooks'
import { inject, observer } from 'mobx-react'

const Login = inject('store')(observer(props => {
  const { loginUser } = props.store

  const onSubmit = () => loginUser(inputs)

  const { inputs, handleInputChange, handleSubmit } = useForm(onSubmit)

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div>
          <label>Email</label>
          <input type='email' name='email' required onChange={ handleInputChange } value={ inputs.email || '' } />
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' required onChange={ handleInputChange } value={ inputs.password || '' } />
        </div>
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}))

export default Login
