export default defineAppConfig({
  pages: ['pages/index/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro3',
    navigationBarTextStyle: 'black'
  },
  subPackages: [
    {
      root: 'package',
      pages: ['package-a/index', 'package-b/index', 'package-c/index', 'icon/index']
    }
  ]
});
