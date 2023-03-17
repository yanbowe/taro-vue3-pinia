import { defineComponent } from 'vue';
import BasicLayout from '@/components/basic-layout/index.vue';
import CustomNavBar from '@/components/custom-nav-bar/index.vue';

export default defineComponent({
  name: 'PackageC',
  setup() {
    definePageConfig({
      navigationBarTitleText: 'tsx写法'
    });
    return () => (
      <BasicLayout>
        <CustomNavBar title="我是packageB" left-show></CustomNavBar>
        <div class="text-red-400 text-14px">支持tsx写法</div>
      </BasicLayout>
    );
  }
});
