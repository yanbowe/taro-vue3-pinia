
## 简介

taro-vue3-pinia 是一个使用 Taro3 + Vue3 + TypeScript + NutUi + pinia + windi.css + pnpm 跨端模板，它使用了最新的前端技术栈，内置丰富的插件，有着极高的代码规范，开箱即用的跨端前端解决方案，也可用于学习参考。

## 特性

- **最新技术栈**：使用 Taro3 + Vue3 + TypeScript + NutUi + pinia + windi.css + pnpm 等前端前沿技术开发
- **TypeScript**: 应用程序级 JavaScript 的语言
- **代码规范**：丰富的规范插件及极高的代码规范

## 代码仓库
- [github](https://github.com/yanbowe/taro-vue3-pinia)
- [gitee](https://gitee.com/zhongjiancrm/taro-vue3-pinia)
- [参考项目](https://github.com/Yill625/taro3-vue3-template)

## Vscode 插件安装

根据项目.vscode提示安装所需插件

## 当前实现了的功能

- Taro3 Vue3 Ts pinia
- windi.css 集成（当前无法使用，插件不支持v3.5.1版本（https://github.com/pcdotfan/taro-plugin-tailwind/issues/121））
- 组件库 NutUI
- 小程序分包配置
- Taro3 配合 Vue DevTools 调试
- 样式封装 1px 问题 底部安全区域适配
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
      root: 'pages/packageA',
      pages: ['index/index']
    }
  ]
}

```

## 主题定制

- 使用windicss完善主题定制，只在h5有效，小程序无法对page动态设置style，暂无解决方案

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
