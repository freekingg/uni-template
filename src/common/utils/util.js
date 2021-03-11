const Utils = {}

/**
 * 简单数组的交集
 * @param {Array} a
 * @param {Array} b
 */
Utils.getIntersect = (a, b) => {
  if (a.constructor === Array && b.constructor === Array) {
    const set1 = new Set(a)
    const set2 = new Set(b)
    return Array.from(new Set([...set1].filter(x => set2.has(x))))
  }
  return null
}

/**
 * 返回 n 位的随机字符串
 * @param {Number} n
 */
Utils.getRandomStr = (n = 6) => {
  let str = ''
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
  for (let i = 0; i < n; i += 1) {
    str += chars.charAt(Math.floor(Math.random() * 62))
  }
  return str
}

/**
 * 检查网络状态
 */
Utils.checkNetwork = () => {
  // #ifdef APP-PLUS
  uni.onNetworkStatusChange(res => {
    if (!res.isConnected) {
      uni.showModal({
        title: '网络未连接',
        content: '您的网络连接已断开,请检查网络',
        showCancel: false,
      })
    }
  })
  // #endif
}

export default Utils
