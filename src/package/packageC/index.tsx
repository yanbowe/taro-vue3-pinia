import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PackageC',
  setup() {
    definePageConfig({
      navigationBarTitleText: 'tsx写法'
    });
    return () => <div class="text-red-400">支持tsx写法</div>;
  }
});
