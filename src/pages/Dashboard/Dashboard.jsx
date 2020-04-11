import React from 'react'
import { Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Welcome } from '../../ui'

const Dashboard = inject('store')(observer(props => {
  const { loggedIn, user } = props.store
  const username = user && user.name

  if (!loggedIn) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <Welcome username={ username } />
    </div>
  )
}))

export default Dashboard
