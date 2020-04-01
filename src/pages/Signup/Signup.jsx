import React from 'react'
import useForm from '../../utils/customHooks'
import { inject, observer } from 'mobx-react'

const Signup = inject('store')(observer(props => {
  const { signupUser } = props.store
  
  const onSubmit = () => signupUser(inputs)
  
  const { inputs, handleInputChange, handleSubmit } = useForm(onSubmit)
  
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label>Username</label>
        <input type='text' name='name' required onChange={ handleInputChange } value={ inputs.name || '' } />
      </div>
      <div>
        <label>Email</label>
        <input type='email' name='email' required onChange={ handleInputChange } value={ inputs.email || '' } />
      </div>
      <div>
        <label>Password</label>
        <input type='password' name='password' required onChange={ handleInputChange } value={ inputs.password || '' } />
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  )
}))

export default Signup
