<template>
  <h1>{{ counter }}</h1>
  <h1>{{ doubleCounter }}</h1>
  <button @click="incrementCounter">Increment</button>
  <button @click="decrementCounter">Decrement</button>
</template>

<script lang='ts'>
  import { computed, defineComponent, ref } from "vue";
  import { useStore } from "@/use/store";
  import { StateTypeAlias } from "./store/modules/counter/state";
  import { MutationTypes } from "./store/modules/counter/mutation";
  import { ActionTypes } from "./store/modules/counter/action";

  export default defineComponent({
    setup() {
      const store = useStore();
      const counter = computed(() => ((store.state.counterModule as unknown) as StateTypeAlias).counter);
      const doubleCounter = computed(() => store.getters.doubleCounter);
      const incrementCounter = () => store.commit(MutationTypes.INCREMENT_COUNTER);
      const decrementCounter = () => store.commit(MutationTypes.DECREMENT_COUNTER);
      
      store.dispatch(ActionTypes.SET_COUNTER, 10);
      return {
        counter,
        doubleCounter,
        incrementCounter,
        decrementCounter
      };
    }
  });
</script>

<style lang='scss' scoped>

</style>
