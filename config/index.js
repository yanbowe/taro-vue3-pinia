// 导入unocss
import UnoCSS from 'unocss/webpack';
const path = require('path');

const args = process.argv;
const isOpenDevTools = args.includes('--devtools');

const config = {
  projectName: 'Taro3',
  date: '2021-12-18',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  compiler: 'webpack5',
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: isOpenDevTools
    ? ['@tarojs/plugin-html', '@tarojs/plugin-vue-devtools', 'taro-plugin-pinia']
    : ['@tarojs/plugin-html', 'taro-plugin-pinia'],
  sass: {
    resource: [path.resolve(__dirname, '..', 'src/styles/custom.scss')],
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          /** 如果设计稿为750时 */
          // designWidth(input) {
          //   const isNutUi = input.file.replace(/\\+/g, '/').indexOf('@nutui/nutui-taro') > -1;
          //   return isNutUi ? 375 : 750;
          // },
        }
      },
      url: {
        enable: true,
        config: {
          /** 设定转换尺寸上限 */
          limit: 1024
        }
      },
      cssModules: {
        /** 默认为 false，如需使用 css modules 功能，则设为 true  */
        enable: false,
        config: {
          /** 转换模式，取值为 global/module */
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 合并webpack配置
    webpackChain(chain) {
      chain.plugin('unocss').use(UnoCSS());
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['nutui-taro'],
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          /** 如果设计稿为750时 */
          // designWidth(input) {
          //   const isNutUi = input.file.replace(/\\+/g, '/').indexOf('@nutui/nutui-taro') > -1;
          //   return isNutUi ? 375 : 750;
          // },
        }
      },
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        /** 默认为 false，如需使用 css modules 功能，则设为 true */
        enable: false,
        config: {
          /** 转换模式，取值为 global/module */
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 合并webpack配置
    webpackChain(chain) {
      chain.plugin('unocss').use(UnoCSS());
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'https://getman.cn/mock',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  },
  rn: {
    appName: 'taro3',
    postcss: {
      cssModules: {
        enable: false // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  }
};

module.exports = merge => {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
