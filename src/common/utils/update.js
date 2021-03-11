import { get_wgt_package } from '../api/sys'

/**
 * 下载wgt安装包并安装
 * @return {Boolean} true:需要升级 false:不需要升级
 */
export function installWgt(data) {
  return new Promise((resolve, reject) => {
    uni.showModal({
      title: '版本更新',
      content: data.upgradeContext,
      showCancel: false,
      success(res) {
        if (res.confirm) {
          uni.downloadFile({
            url: data.downloadUrl,
            success: downloadResult => {
              if (downloadResult.statusCode === 200) {
                plus.runtime.install(
                  downloadResult.tempFilePath,
                  { force: true },
                  () => {
                    resolve(true)
                    plus.runtime.restart()
                  },
                  e => {
                    reject(e)
                    uni.showModal({
                      title: '安装失败:',
                      content: e.message,
                      showCancel: false,
                    })
                  },
                )
              }
            },
          })
        }
      },
    })
  })
}

/**
 * 热更新检测
 * @return {null}
 */
export function checkUpdate() {
  plus.runtime.getProperty(plus.runtime.appid, widgetInfo => {
    const type = uni.getSystemInfoSync().platform
    get_wgt_package({
      upgradeType: type,
      versionName: widgetInfo.version,
    }).then(data => {
      if (data.isUpdate === 1 && data.downloadUrl) {
        uni.showModal({
          title: '版本更新',
          content: data.upgradeContext,
          showCancel: false,
          success(res) {
            if (res.confirm) {
              if (parseInt(data.event, 10) === 2) {
                // 整包更新
                plus.runtime.openURL(data.downloadUrl)
              } else {
                // wgt热更新
                installWgt(data)
              }
            }
          },
        })
      }
    })
  })
}
