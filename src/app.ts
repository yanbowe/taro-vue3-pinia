import { createApp } from 'vue';
import { setupStore } from './store';
import { setupAssets, setupNutui } from './plugins';

const App = createApp({
  onShow() {
    //
  },
  /** 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖 */
});

function setupPlugins() {
  /** 引入静态资源 */
  setupAssets();

  /** 注册常用nutui组件 */
  setupNutui(App);
}

function setupApp() {
  // 挂载store
  setupStore(App);
}

setupPlugins();

setupApp();

export default App;
