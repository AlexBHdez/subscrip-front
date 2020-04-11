import { decorate, observable, action } from 'mobx'
import { lightTheme } from '../style'
import userApi from '../api/userApi'
import subscriptionApi from '../api/subscriptionApi'
import { setToken, getToken, removeToken } from '../utils/token'

class GlobalStore {
  constructor() {
    this.theme = lightTheme
    this.loading = true
    this.loggedIn = false
    this.user = null
    this.subscriptions = []
  }

  setLoading(loading) {
    this.loading = loading
  }

  setLoggedIn() {
    this.loggedIn = getToken() ? true : false
  }

  reset() {
    this.loggedIn = this.setLoggedIn()
    this.user = null
  }

  signupUser = async data => {
    const token = await userApi.signup(data)
    const saveToken = await setToken(token)

    if (saveToken) {
      this.setLoggedIn()
      this.setUser()
    }
  }

  loginUser = async data => {
    const token = await userApi.login(data)
    const saveToken = await setToken(token)

    if (saveToken) {
      this.setLoggedIn()
      this.setUser()
    }
  }

  setUser = async () => {
    if (getToken()) {
      const user = await userApi.me()
      if (user) {
        this.user = user
      } else {
        this.reset()
      }
    }
  }

  logout = async () => {
    await removeToken()
    this.reset()
  }

  getSubscriptions = async () => {
    const { subscriptions } = await subscriptionApi.getAll()
    this.subscriptions = subscriptions
  }
}

decorate(GlobalStore, {
  theme: observable,
  loading: observable,
  loggedIn: observable,
  user: observable,
  setLoading: action,
  setLoggedIn: action,
  reset: action,
  signupUser: action,
  loginUser: action,
  setUser: action,
  logout: action,
  subscriptions: observable,
  getSubscriptions: action
})

const globalStore = new GlobalStore()
export default globalStore
