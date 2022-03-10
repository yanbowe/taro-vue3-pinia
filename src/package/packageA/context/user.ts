import { ref } from 'vue';
import type { Ref } from 'vue';
import { useContext } from '@/hooks';

interface UserContext {
  name: Ref<string>;
  handleChangeName(): void;
}

const { useProvide, useInject: useUserInject } = useContext<UserContext>();

export default function useUserContext() {
  const name = ref('yan');

  function handleChangeName() {
    name.value = 'bowen';
  }

  const context: UserContext = {
    name,
    handleChangeName
  };

  function useUserProvide() {
    useProvide(context);
  }

  return {
    useUserProvide,
    useUserInject
  };
}
