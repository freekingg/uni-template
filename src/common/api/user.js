import http from '@/common/http'
import { saveTokens } from '@/common/utils/token'

class User {
  /**
   * 登陆获取tokens
   * @param {string} username 用户名
   * @param {string} password 密码
   */
  async getToken(username, password) {
    const data = await http({
      method: 'post',
      url: '/member/login',
      data: { username, password },
    })
    saveTokens(data.toke)
    return data
  }

  /**
   * 获取当前用户信息
   */
  async getUserInfo() {
    return http({
      method: 'get',
      url: '/member/info',
    })
  }
}

export default new User()
