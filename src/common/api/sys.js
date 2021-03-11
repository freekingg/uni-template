import http from '@/common/http'

class Sys {
  /**
   * 静态资源更新包地址
   * @param {object} data
   * @return Promise
   */
  async get_wgt_package() {
    return http({
      method: 'get',
      url: '/website/appVersion/checkUpdate',
    })
  }
}

export default new Sys()
