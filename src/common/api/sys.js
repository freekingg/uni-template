import http from '../http'
/**
 * 静态资源更新包地址
 * @param {object} data
 * @return Promise
 */
export const get_wgt_package = data =>
  http({
    url: '/website/appVersion/checkUpdate',
    data,
  })
