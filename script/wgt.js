const shell = require('shelljs')
const fs = require('fs-extra')
const path = require('path')
const archiver = require('archiver')

let archive = archiver('zip', {
  zlib: { level: 9 }, // 设置压缩级别
})

// 获取当前时间
function getCurrentTime() {
  let date = new Date()
  let time =
    date.getFullYear() +
    '' +
    (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) +
    '' +
    (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
  return time
}

console.log(__dirname)

shell.echo('开始编辑wgt热更新包')

let sourcePath = path.join(__dirname, '../dist/build/app-plus')
let targetPath = path.join(__dirname, '../dist/build/app-plus-wgt')

// 清空目录
let emptydir = fs.emptydirSync(targetPath)

// 压缩
let output = fs.createWriteStream(targetPath + '/dist.zip')
archive.pipe(output)
archive.directory(sourcePath + '/', false)

// 改名
fs.renameSync(targetPath + '/dist.zip', targetPath + '/' + getCurrentTime() + '.wgt')

archive.finalize()
shell.echo('wgt热更新包编译完成')
