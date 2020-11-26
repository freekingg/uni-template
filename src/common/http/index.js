import _config from './config'; // 私有配置

import { getToken } from '@/common/utils/token'

export default function $http(options) {
    console.log(_config.url, options.url)
    options.url = _config.url + options.url;

    // 有access_token
    const accessToken = getToken('access_token')
    if (accessToken) {
        options.headers.Authorization = accessToken
    }

    return new Promise((resolve, reject) => {
        // 拦截请求
        _config.complete = (response) => {
            //  request請求访问成功
            if (response.statusCode === 200) {
                resolve(response);
            } else {
                // 处理catch 请求，不在本页面之外处理，统一在这里处理
                if (options.handleError) {
                    reject(response)
                } else {
                    try {
                        Promise.reject(response).catch(err => {
                            // console.error(err);  
                            _page_error(response.statusCode || response.errMsg);
                        });
                    } catch (e) {
                        console.log(e)
                    }
                }
            }

        }
        // 开始请求
        uni.request(Object.assign({}, _config, options));
    })
}


// request 錯誤
function _page_error(err) {
    switch (err) {
        case 401:
            // 错误码404的处理方式
            console.error("请求被拒绝")
            break;
        case 404:
            // 错误码404的处理方式
            console.error("没有找到页面")
            break;
        case 405:
            console.error("错误的请求")
            break;
    }
}