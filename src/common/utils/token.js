/**
 * 存储tokens
 * @param {string} token
 */
export function saveTokens(token) {
  uni.setStorageSync('token', `${token}`)
}

/**
 * 获得某个token
 * @param {string} tokenKey
 */
export function getToken(tokenKey) {
  const value = uni.getStorageSync(tokenKey)
  return value || ''
}

/**
 * 移除token
 */
export function removeToken() {
  uni.removeStorageSync('token')
}
