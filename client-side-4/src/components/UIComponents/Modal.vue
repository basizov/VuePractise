<template>
  <section class="modal" v-if="show" @click="hideModal">
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </section>
</template>

<script lang='ts'>
  import { defineComponent } from "vue";
  import toggleMixin from '@/mixins/toggleMixin';

  export default defineComponent({
    name: 'Modal',
    mixins: [toggleMixin]
  });
</script>

<style lang='scss' scoped>
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10000;
    background-color: hsla(0, 0%, 0%, .3);
    display: flex;
    align-items: center;
    justify-content: center;
    &__content {
      position: relative;
      min-width: 21rem;
      min-height: 12rem;
      background-color: hsl(200, 100%, 50%);
      border-radius: .3rem;
      box-shadow: 0 0 1rem hsla(0, 0%, 0%, .7);
      padding: 1rem;
    }
  }
</style>
