import { get, post } from './request'

// USER REQUESTS
export const getUser = async () => get('user/me', null, true)
export const login = async credentials => post('user/login', credentials, false)
export const signup = async credentials => post('user/register', credentials, false)
