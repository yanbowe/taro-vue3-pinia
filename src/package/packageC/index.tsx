import { defineComponent } from 'vue';
import BasicLayout from '@/components/BasicLayout/index.vue';

export default defineComponent({
  name: 'PackageC',
  setup() {
    definePageConfig({
      navigationBarTitleText: 'tsx写法'
    });
    return () => (
      <BasicLayout>
        <div class="text-red-400 text-14px">支持tsx写法</div>
      </BasicLayout>
    );
  }
});
