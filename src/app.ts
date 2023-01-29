import { createApp } from 'vue';
import { setupStore } from './store';
import { setupAssets } from './plugins';

const App = createApp({
  onShow() {
    //
  }
  /** 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖 */
});

function setupApp() {
  /** 引入静态资源 */
  setupAssets();

  /** 挂载store */
  setupStore(App);
}

setupApp();

export default App;
