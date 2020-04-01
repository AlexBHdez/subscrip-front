import axios from 'axios'
import { getToken } from '../utils/token'

const { REACT_APP_API_BASE_URL } = process.env

const baseUrl = REACT_APP_API_BASE_URL
const getHeaders = (token = false) => {
  const HEADERS = {
    'Content-Type' : 'application/json'
  }

  return token ? { ...HEADERS, authorization: token } : HEADERS
}

const request = async (
  path,
  data = null,
  method = 'get',
  auth = true,
  customHeaders = false,
  responseType = true
) => {
  const accessToken = auth && getToken()
  const url = `${ baseUrl }${ path }`

  if (auth && !accessToken) {
    console.error(`Need access token to perform authenticated request at ${ url }. Cancelling`)
    return false
  }

  const headers = customHeaders || getHeaders(accessToken)
  let options = { url, data, method, headers }

  if (responseType) {
    options.responseType = responseType
  }
  if ((method === 'get') && (data !== null)) {
    options = {
      ...options,
      params: data,
      data: null
    }
  }

  const response = await axios.request(options)
  return response ? response.data : null
}

export const get = async (path, params = null, withAuth = true) => {
  const response = await request(path, params, 'get', withAuth)
  return response
}

export const post = async (path, payload = null, withAuth = true) => {
  const response = await request(path, payload, 'post', withAuth)
  return response
}
