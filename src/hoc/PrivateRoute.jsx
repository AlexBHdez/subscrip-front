import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import globalStore from '../stores/globalStore'

const PrivateRoute = ({ component: Component }) => {
  return (
    <Route 
      render={ () => 
        globalStore.loggedIn ? <Component /> : <Redirect to='/login' />
      }
    />
  )
}

export default PrivateRoute
