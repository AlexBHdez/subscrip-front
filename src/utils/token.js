const { REACT_APP_TOKEN_LOCAL_STORAGE_KEY } = process.env

const getToken = () => {
  return localStorage.getItem(REACT_APP_TOKEN_LOCAL_STORAGE_KEY)
}

const setToken = async token => {
  localStorage.setItem(REACT_APP_TOKEN_LOCAL_STORAGE_KEY, token)
  if (typeof getToken() === 'string') {
    return true
  } else {
    return false
  }
}

const removeToken = async () => {
  return localStorage.clear(REACT_APP_TOKEN_LOCAL_STORAGE_KEY)
}

export {
  getToken,
  setToken,
  removeToken
}
