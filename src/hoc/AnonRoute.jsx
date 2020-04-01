import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

const AnonRoute = inject('store')(observer(props => {
  const { store: { loggedIn }, component: Component } = props
  return (
    <Route 
      render={ () => 
        !loggedIn ? <Component /> : <Redirect to='/Dashboard' />
      }
    />
  )
}))

export default AnonRoute
