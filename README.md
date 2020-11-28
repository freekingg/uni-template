# uni-web

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 代码质量及配置

为防止将存在潜在问题的代码带到线上环境，最好的办法是在本地提交代码时就能够扫描出潜在的错误，并强制将其修改后才能提交，这样就不会将问题代码携带到线上，就能保证线上代码至少不会存在低级的程序错误。针对这样的诉求，可以采用 husky、lint-staged、eslint、Airbnb 以及 prettier 插件来实现

**eslint**
语法规则和代码风格的检查工具

**husky**
`husky`会在你提交前，调用`pre-commit`钩子，执行`lint-staged`，如果代码不符合`prettier`配置的规则，会进行格式化；然后再用`eslint`的规则进行检查，如果有不符合规则且无法自动修复的，就会停止此次提交。如果都通过了就会讲代码添加到`stage`，然后`commit`

**prettier**
一个流行的代码格式化工具的名称，它能够解析代码，使用你自己设定的规则来重新格式规范的代码。

**Airbnb**
Airbnb 是其中一個最流行的 JavaScript 代碼規範

#### VSCode 配置 ESLint + Prettier 及修复

- 使用 `eslint`+`husky`+`prettier`+`lint-staged`提升前端应用质量

- 书写规范使用`Airbnb`规范进行约束 [链接](https://github.com/airbnb/javascript)

##### 依赖包

项目需要安装以下开发依赖

- `@vue/cli-plugin-babel`
- `@vue/cli-plugin-eslint`
- `@vue/eslint-config-airbnb`
- `prettier`
- `eslint`
- `eslint-plugin-vue`
- `eslint-plugin-prettier`
- `lint-staged`
- `husky`

####　 package.json
git-hook 钩子 提交校验配置

```js
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**": [
      "prettier --config .prettierrc.js --write",
      "eslint --fix",
      "git add"
    ]
  },
  "devDependencies": {
    "eslint": "^5.0.0",
    "eslint-config-ali": "^2.0.1",
    "eslint-plugin-import": "^2.6.0",
    "eslint-plugin-react": "^7.1.0",
    "husky": "^0.14.2",
    "babel-eslint": "^8.1.1",
    "lint-staged": "^4.0.0",
    "prettier":"^1.16.4",
    "eslint-plugin-prettier":"^3.0.1",
    "eslint-config-prettier":"^4.0.0"
  },
}
```

#####　.prettierrc.js

```js
module.exports = {
  singleQuote: true, // 字符串是否使用单引号
  semi: false, // 行位是否使用分号，默认为true
  trailingComma: 'all', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  printWidth: 120, // 每行到多少长度开始折行
  arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid不带）
  tabWidth: 2,
}
```

##### vscode 插件

vscode 需要安装以下插件

- ESLint
- Prettier - Code formatter
- Prettier ESLint

##### settings.json

根目录.vscode 文件夹下面 settings.json 文件，团队统一使用配置

```js
{
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "eslint.run": "onSave",
  "prettier.packageManager": "yarn",
  "eslint.validate": [
    "vue",
    "javascript",
    "javascriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "vetur.validation.template": false,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "files.eol": "\n"
}

```
