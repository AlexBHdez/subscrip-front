import React, { Component } from 'react'
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { BASE_PATH } from './utils/constants'

import { Provider } from 'mobx-react'
import globalStore from './stores/globalStore'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style'

import { PrivateRoute, AnonRoute, Auth } from './hoc'

import Layout from './layout'
import { Logo } from './ui'
// Pages components
import {
  Home,
  Login,
  Signup,
  Dashboard,
  AddSubscription,
  Private
} from './pages'

const browserHistory = createBrowserHistory({ basename: BASE_PATH })

class SubscripApp extends Component {

  render() {
    return (
      <Provider store={ globalStore }>
        <ThemeProvider theme={ globalStore.theme }>
          <Auth />
          <Logo />
            <Router history={ browserHistory }>
              <Layout>
                <Switch>
                  <AnonRoute exact path='/' component={ Home } />
                  <AnonRoute exact path='/signup' component={ Signup } />
                  <AnonRoute exact path='/login' component={ Login } />
                  <PrivateRoute exact path='/dashboard' component={ Dashboard } />
                  <PrivateRoute exact path='/add' component={ AddSubscription } />
                  <PrivateRoute exact path='/private' component={ Private } />
                </Switch>
              </Layout>
            </Router>
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default SubscripApp
