import { get, post } from './request'

// USER REQUESTS
export const getUser = async () => get('user/me', null, true)
export const login = async credentials => post('user/login', credentials, false)
export const signup = async credentials => post('user/register', credentials, false)

// SUBCRIPTIONS REQUESTS
export const getAllSubscriptions = async () => get('subscriptions/all', null, true)
export const newSubscription = async data =>  post('subscriptions/new', data, true)
