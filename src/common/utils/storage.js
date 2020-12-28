const LOGIN_KEY = '__login__'

export function setLogined(flag) {
  localStorage.setItem(LOGIN_KEY, flag)
  return flag
}

export function loadLogined() {
  return localStorage.getItem(LOGIN_KEY, '')
}

export function cleanLogined() {
  localStorage.removeItem(LOGIN_KEY)
}
