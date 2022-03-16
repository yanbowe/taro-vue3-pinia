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
    375: 2 / 1,
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: isOpenDevTools
    ? ['@tarojs/plugin-html', '@tarojs/plugin-vue-devtools', 'taro-plugin-pinia', 'taro-plugin-tailwind']
    : ['@tarojs/plugin-html', 'taro-plugin-pinia', 'taro-plugin-tailwind'],
  sass: {
    resource: [path.resolve(__dirname, '..', 'src/styles/custom.scss')],
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'vue3',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          /** 设定转换尺寸上限 */
          limit: 1024,
        },
      },
      cssModules: {
        /** 默认为 false，如需使用 css modules 功能，则设为 true  */
        enable: false,
        config: {
          /** 转换模式，取值为 global/module */
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        /** 默认为 false，如需使用 css modules 功能，则设为 true */
        enable: false,
        config: {
          /** 转换模式，取值为 global/module */
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    devServer: {
      proxy: {
        '/api': {
          target: process.env.HTTP_URL,
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        },
      },
    },
  },
};

module.exports = (merge) => {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
