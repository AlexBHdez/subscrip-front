import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Welcome } from '../../ui'
import Subscriptions from './components/Subscriptions'

const Dashboard = inject('store')(observer(props => {
  const { loggedIn, user, subscriptions, getSubscriptions } = props.store
  const username = user && user.name

  if (!loggedIn) {
    return <Redirect to='/' />
  }

  useEffect(() => {
    getSubscriptions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Welcome username={ username } />
      <Subscriptions subscriptions={ subscriptions } />
    </div>
  )
}))

export default Dashboard
