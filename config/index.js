// 导入unocss
import UnoCSS from 'unocss/webpack';
import ComponentsPlugin from 'unplugin-vue-components/webpack';
const path = require('path');

const NutUIResolver = () => {
  // eslint-disable-next-line consistent-return
  return name => {
    if (name.startsWith('Nut')) {
      const partialName = name.slice(3);
      return {
        name: partialName,
        from: '@nutui/nutui-taro',
        sideEffects: `@nutui/nutui-taro/dist/packages/${partialName.toLowerCase()}/style`
      };
    }
  };
};

const config = {
  projectName: 'Taro3',
  date: '2021-12-18',
  designWidth(input) {
    // 配置 NutUI 375 尺寸
    if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
      return 375;
    }
    // 设计稿尺寸
    return 375;
  },
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
  plugins: ['@tarojs/plugin-html', 'taro-plugin-pinia'],
  sass: {
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
        config: {}
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
      chain.plugin('unplugin-vue-components').use(
        ComponentsPlugin({
          dts: 'src/typings/components.d.ts',
          resolvers: [NutUIResolver()]
        })
      );
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['nutui-taro'],
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
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
      chain.plugin('unplugin-vue-components').use(
        ComponentsPlugin({
          dts: 'src/typings/components.d.ts',
          resolvers: [NutUIResolver()]
        })
      );
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
