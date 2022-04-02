module.exports = {
  prefixer: false,
  separator: '_',
  compile: false,
  globalUtility: false,
  darkMode: 'class',
  corePlugins: {
    preflight: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false,
    space: false,
    placeholderColor: false,
    placeholderOpacity: false
  },
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'flex-x-between': 'flex justify-between',
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
    'ellipsis-text': 'nowrap-hidden overflow-ellipsis',
    'transition-base': 'transition-all duration-300 ease-in-out',
    'init-loading-spin': 'w-16px h-16px bg-primary rounded-8px animate-pulse'
  },
  theme: {
    extend: {
      colors: {
        primary: '#1890ff',
        green: 'var(--green-color)',
        orange: 'var(--orange-color)',
        red: 'var(--red-color)',
        light: '#ffffff',
        dark: '#000'
      },
      backgroundColor: {
        dark: '#000',
        'dark-base': '#101014'
      },
      textColor: {
        'black-base': '#333639',
        'white-base': '#fff'
      },
      transitionProperty: [
        'width',
        'height',
        'background',
        'background-color',
        'padding-left',
        'border-color',
        'right',
        'fill'
      ]
    }
  }
};
