import { defineConfig, presetIcons } from 'unocss';
import presetWeapp from 'unocss-preset-weapp';
import { transformerClass } from 'unocss-preset-weapp/transformer';
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist', '.git', '.husky', '.vscode', 'public', 'build', 'mock', './stats.html']
    }
  },
  presets: [
    presetWeapp({
      // h5兼容
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
      designWidth: 375,
      deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
        375: 2 / 1
      },
      taroWebpack: 'webpack5'
    }) as any,
    presetIcons({
      scale: 1,
      warn: true,
      extraProperties: {
        display: 'inline-block'
      },
      collections: {
        local: FileSystemIconLoader('./src/assets/svg')
      }
    })
  ],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'i-flex-center': 'inline-flex justify-center items-center',
    'i-flex-x-center': 'inline-flex justify-center',
    'i-flex-y-center': 'inline-flex items-center',
    'b-flex-col': 'flex flex-col',
    'flex-col-stretch': 'b-flex-col items-stretch',
    'i-flex-col': 'inline-flex flex-col',
    'i-flex-col-stretch': 'i-flex-col items-stretch',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    'absolute-lt': 'absolute left-0 top-0',
    'absolute-lb': 'absolute left-0 bottom-0',
    'absolute-rt': 'absolute right-0 top-0',
    'absolute-rb': 'absolute right-0 bottom-0',
    'absolute-tl': 'absolute-lt',
    'absolute-tr': 'absolute-rt',
    'absolute-bl': 'absolute-lb',
    'absolute-br': 'absolute-rb',
    'absolute-center': 'absolute-lt flex-center wh-full',
    'fixed-lt': 'fixed left-0 top-0',
    'fixed-lb': 'fixed left-0 bottom-0',
    'fixed-rt': 'fixed right-0 top-0',
    'fixed-rb': 'fixed right-0 bottom-0',
    'fixed-tl': 'fixed-lt',
    'fixed-tr': 'fixed-rt',
    'fixed-bl': 'fixed-lb',
    'fixed-br': 'fixed-rb',
    'fixed-center': 'fixed left-0 top-0 flex-center wh-full',
    'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
    'ellipsis-text': 'nowrap-hidden text-ellipsis',
    'transition-base': 'transition-all duration-300 ease-in-out'
  },
  theme: {
    colors: {
      primary: 'var(--nut-primary-color)'
    }
  },
  transformers: [
    // options https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass() as any
  ]
});
