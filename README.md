
## 简介

taro-vue3-pinia 是一个使用 Taro3 + Vue3 + TypeScript + NutUi + pinia + windi.css 跨端模板，它使用了最新的前端技术栈，内置丰富的插件，有着极高的代码规范，开箱即用的跨端前端解决方案，也可用于学习参考。

## 特性

- **最新技术栈**：使用 Taro3 + Vue3 + TypeScript + NutUi + pinia + windi.css 等前端前沿技术开发
- **TypeScript**: 应用程序级 JavaScript 的语言
- **代码规范**：丰富的规范插件及极高的代码规范

## 代码仓库
- [gitee](https://gitee.com/zhongjiancrm/taro-vue3-pinia)
- [github](https://github.com/Yill625/taro3-vue3-template)

## Vscode 插件安装

根据项目.vscode提示安装所需插件

## 当前实现了的功能

- Taro3 Vue3 Ts pinia
- windi.css 集成
- 组件库 NutUI
- 小程序分包配置
- Taro3 配合 Vue DevTools 调试
- 样式封装 1px 问题 底部安全区域适配

# 本项目的搭建过程

## 一、Taro 基本安装

[Taro 文档](https://taro-docs.jd.com/taro/docs/GETTING-STARTED)

```shell
npx @tarojs/cli init Taro3
```

> 使用 npx 可以不用全局先安装 cli 工具，直接下载最新 Taro3 工程

![](https://tva1.sinaimg.cn/large/008i3skNgy1gwcc2zv9q1j313i0tsjxp.jpg)

本地安装 cli 确保项目基本运行

```shell
# 安装cli 用来执行构建等操作
yarn add @tarojs/cli
# 预览
yarn dev:weapp
```

> 打开微信开发工具 工程目录需要指向构建出来的 dist 文件

![](https://tva1.sinaimg.cn/large/008i3skNgy1gwcdty8l85j312f0u075v.jpg)

![](https://tva1.sinaimg.cn/large/008i3skNgy1gwcdvk32z9j31hc0u00vc.jpg)

## 二、设置代码规范的 Eslint Prettier CommitLint

- 代码规范 ESlint
- 代码格式化 Prettier
- 提交规范 CommitLint


## 注意事项

- **提交commit 无法执行husky自动修复代码** 执行yarn prepare命令

### 1.安装依赖

```
yarn install
```

```shell
项目已经内置angular提交规范。
```

```shell
yarn add vue-tsc -D
```

### 2.添加 husky 触发 Git 钩子来保证代码提交时 Ts 检查和 Eslint 检查都符合规范

```shell
# https://github.com/typicode/husky
# https://typicode.github.io/husky/#/?id=articles

```
## 在 Taro3 Vue3 小程序中使用 nutui

> [Nutui](https://nutui.jd.com/#/) 京东风格的轻量级移动端 Vue 组件库

```shell
yarn add @nutui/nutui-taro
```

安装 nutui 会遇到样式的报错 如图
![](https://tva1.sinaimg.cn/large/008i3skNgy1gweug2xibjj32ay0oie81.jpg)

解决办法：引入 @tarojs/plugin-html 插件 https://taro-docs.jd.com/taro/docs/use-h5

全局引入后的依赖大小
![](https://tva1.sinaimg.cn/large/008i3skNgy1gweum0nz0xj30r00ayq3a.jpg)

为了按需引入，先安装插件 babel-plugin-import

```shell
# https://nutui.jd.com/#/starttaro
yarn add babel-plugin-import -D
```

按需引入后的主包大小

```js
import { createApp } from 'vue'
import App from './App.vue'
import { Button, Cell, Icon } from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/style.css'
createApp(App)
  .use(Button)
  .use(Cell)
  .use(Icon)
```

![](https://tva1.sinaimg.cn/large/008i3skNgy1gweuu0eovyj31fu0ic403.jpg)

样式处理 因为 nutui 的设计稿是 375 的 所以将框架的设计尺寸调整为 375
![](https://tva1.sinaimg.cn/large/008i3skNgy1gwevt1ay7kj317s0ksgnv.jpg)

到这里 nutui 组件库已经采坑完毕 能够正常使用 事件调用正常

![](https://github.com/Yill625/taro3-vue3-template/blob/main/docs/2021-11-14%2019.05.09.gif)

> nutui 事件不触发 是因为 @tarojs/plugin-html 版本不对 我当前这个项目固定设置为 3.3.12 如果设置为最新 3.3.13 则不行

## 小程序分包配置

> 随着业务代码和组件的引入越来越多，主包的大小一定会越来越大，超过 2m 的主包以后微信开发工具就无法使用预览的功能，为了提前做好准备在一开始就进行分包处理，主包只包含组件和公共代码，分包里放入业务代码

```js
//app.config.ts
export default {
  pages: ['pages/index/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro3',
    navigationBarTextStyle: 'black'
  },
  subpackages: [
    {
      root: 'pages/featureA',
      pages: ['index/index']
    }
  ]
}
```

## pinia 安装使用

```js
yarn add pinia --save
```

创建 store 目录 添加 index.ts 文件

```ts
import { App } from 'vue'
import { createPinia } from 'pinia'

export const store = createPinia()

export function setupStore(app: App) {
  app.use(store)
}

export * from './modules'

```

## taro3 配合 Vue DevTools 调试

> 开启 Vue DevTools 之后 预览主包体积会大于 2M 导致无法预览 视情况开启调试 正式构建不会开启 Vue DevTools 调试


默认不开启 devtools 调试 新增 script 开启

```bash
"devtools:weapp": "npm run build:weapp -- --watch --devtools"
```

## 样式封装

### 公共样式

```scss
page {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto,
    'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
}

// 解决iPhone x 以后的机型 底部安全区域的问题 https://jelly.jd.com/article/6006b1055b6c6a01506c87fd
.safe-area-bottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
```
### 小程序配置细节

需要注意开发者工具的项目设置：

- 需要设置关闭 ES6 转 ES5 功能，开启可能报错
- 需要设置关闭上传代码时样式自动补全，开启可能报错
- 需要设置关闭代码压缩上传，开启可能报错
### 其他限制

- 小程序中不支持 `<style scoped>`，建议使用 cssModules 代替。
- 不能在页面组件的 DOM 树之外插入元素，因此不支持 `<teleport>`
- Vue 3 内部实现使用了 Proxy ，在 iOS 9 及以下操作系统无法运行。但 Vue 官方团队在正式版发布后会推出兼容版本。
- 在 H5 端使用 ref 获取基础组件的 DOM 节点，现在只能得到适配层的 Vue 组件实例，而不是对应的 webComponent 根节点。在 Vue2 里可以通过修改父元素的 refs 属性实现，但 Vue3 中组件间初始化顺序有变化，因此暂时不能支持。
- 小程序端非类似 HTML 表单标签规范的表单组件，如 Picker，暂不兼容 v-model。Vue3 的 v-model 绑定属性改为了 modelValue，事件绑定改为了 update:modelValue。对于 HTML 表单标签会自动对接表单的值与事件，例如 input 会自动对应 modelValue 与 value、update:modelValue 与 @input。但对于 Picker 这种小程序特有表单则无法对应，建议这种情况不使用 v-model。
- VirtualList 组件需要实现一份 Vue3 版本（待实现）
- 所有组件的 id 必须在整个应用中保持唯一（即使他们在不同的页面），否则可能导致事件不触发的问题
- windi.css 限制 不支持text-[#000]写法(可通过text-hex-808080解决)，详情请看- [github](https://github.com/Yill625/taro3-vue3-template)。
- windi.css shortcuts自定义class无效。
