<template>
  <section class="user-details">
    <div class="user-details__info" v-if="user">
      {{ user.id }}
      {{ user.name }}
      {{ user.username }}
      {{ user.phone }}
      {{ user.email }}
    </div>
    <div class="user-details__empty" v-else>
      There isn't selected user :( <router-link class="nav__link" to="/users">Go here to choose the user</router-link>
    </div>
  </section>
</template>

<script lang='ts'>
  import { useStore } from "@/hooks/useStore";
import { StateTypeAlias } from "@/store/modules/userModule/state";
import { computed, defineComponent } from "vue";

  export default defineComponent({
    name: 'UserDetailsPath',
    setup() {
      const store = useStore();
      const user = computed(() => ((store.state.userModule as unknown) as StateTypeAlias).user);

      return {
        user
      }
    }
  });
</script>

<style lang='scss' scoped>

</style>
