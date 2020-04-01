import { useEffect } from 'react'
import { inject } from 'mobx-react'

const Auth = inject('store')(props => {
  useEffect(() => {
    props.store.setLoggedIn()
    props.store.setUser()
    props.store.setLoading()
  }, [])

  return null
})

export default Auth
