// 检测升级
const checkVersion = () =>
  new Promise((resolve, reject) => {
    plus.runtime.getProperty(plus.runtime.appid, widgetInfo => {
      const { platform } = uni.getSystemInfoSync()
      // 根据当前平台去后台检测版本号
      uni.request({
        url: `https://www.xxx.cn/csj-web/app/check/${platform}`,
        data: {
          version: widgetInfo.version,
          name: widgetInfo.name,
        },
        success: res => {
          console.log(res)
          if (res.data.status === 200 && res.data.data.update) {
            // 我的后台会返回一个安装包地址（pkgUrl），升级包地址（wgtUrl）
            // 判空来判断是非是整包升级还是资源包升级
            // content是版本更新内容 \n换行
            // ios用户pkgUrl是苹果市场App地址，android自定义下载地址
            if (res.data.data.pkgUrl !== '' && res.data.data.wgtUrl === '') {
              resolve({
                upgradeType: 'pkg',
                upgradeContent: res.data.data.content,
                upgradeUrl: res.data.data.pkgUrl,
              })
            } else {
              resolve({
                upgradeType: 'wgt',
                upgradeContent: res.data.data.content,
                upgradeUrl: res.data.data.pkgUrl,
              })
            }
          } else {
            reject()
          }
        },
        fail: error => {
          console.log(error)
          reject()
        },
      })
    })
  })

export default checkVersion
