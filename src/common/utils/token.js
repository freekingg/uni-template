/**
 * 存储tokens
 * @param {string} accessToken
 * @param {string} refreshToken
 */
export function saveTokens (accessToken, refreshToken) {
  uni.setStorageSync('access_token', `Bearer ${accessToken}`)
  uni.setStorageSync('refresh_token', `Bearer ${refreshToken}`)
}

/**
 * 存储access_token
 * @param {string} accessToken
 */
export function saveAccessToken (accessToken) {
  uni.setStorageSync('access_token', `Bearer ${accessToken}`)
}

/**
 * 获得某个token
 * @param {string} tokenKey
 */
export function getToken (tokenKey) {
  const value = uni.getStorageSync(tokenKey)
  return value || ''
}

/**
 * 移除token
 */
export function removeToken () {
  uni.removeStorageSync('access_token')
  uni.removeStorageSync('refresh_token')
}
