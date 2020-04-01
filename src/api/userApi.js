import { login, getUser, signup } from './'

class UserApi {

  async signup(credentials) {
    const response = await signup(credentials)
    return response
  }

  async login(credentials) {
    const response = await login(credentials)
    return response
  }

  async me() {
    const response = await getUser()
    return response.data.user
  }
}

const userApi = new UserApi()
export default userApi
