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
  Dashboard,
  Login,
  Signup,
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
          <Layout>
            <Router history={ browserHistory }>
              <Switch>
                <AnonRoute exact path='/' component={ Home } />
                <PrivateRoute exact path='/dashboard' component={ Dashboard } />
                <AnonRoute exact path='/signup' component={ Signup } />
                <AnonRoute exact path='/login' component={ Login } />
                <PrivateRoute exact path='/private' component={ Private } />
              </Switch>
            </Router>
          </Layout>
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default SubscripApp
