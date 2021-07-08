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
    name: 'my-modal',
    mixins: [toggleMixin]
  });
</script>

<style lang='scss' scoped>
  .modal {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsla(0, 0%, 0%, .3);
    display: flex;
    &__content {
      margin: auto;
      background-color: hsl(0, 0%, 100%);
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 0 .5rem hsla(0, 0%, 0%, .3);
    }
  }
</style>
