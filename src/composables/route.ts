import { computed, unref } from 'vue';
import { useRouter } from '@tarojs/taro';

/** 获取当前路由 */
export function useRoutePath() {
  const route = useRouter();
  const path = route.path as string;
  return path;
}

/** 获取当前路由参数 */
export function useRouteParams() {
  const route = useRouter();

  const props = computed(() => {
    /** 路由名称 */
    const params = Boolean(route.params);

    return params;
  });

  return unref(props);
}
