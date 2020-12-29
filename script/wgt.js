const shell = require('shelljs')
const fs = require('fs-extra')
const path = require('path')
const archiver = require('archiver')

let archive = archiver('zip', {
  zlib: { level: 9 }, // 设置压缩级别
})

shell.echo('开始编辑wgt热更新包')

// 获取包信息
let appInfo = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/manifest.json')).toString())

let sourcePath = path.join(__dirname, '../dist/build/app-plus')
let targetPath = path.join(__dirname, '../dist/build/app-plus-wgt')

// 清空目录
let emptydir = fs.emptydirSync(targetPath)

// 压缩
let output = fs.createWriteStream(targetPath + '/dist.zip')
archive.pipe(output)
archive.directory(sourcePath + '/', false)

// 改名
fs.renameSync(targetPath + '/dist.zip', `${targetPath}/${appInfo.appid}_V${appInfo.versionName}.wgt`)

archive.finalize()
shell.echo('wgt热更新包编译完成', targetPath)
