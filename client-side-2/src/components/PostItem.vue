<template>
  <div class="post">
    <div class="post__header">
      <div class="post__title">{{ post.id }}. {{ post.title }}</div>
      <my-button @click="$emit('deletePost', post)" class="post__del">Delete</my-button>
    </div>
    <div class="post__description">{{ post.body }}</div>
  </div>
</template>

<script lang='ts'>
  import { IPost } from "@/models/post";
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    props: {
      post: {
        type: Object as PropType<IPost>,
        required: true
      }
    }
  });
</script>

<style lang='scss' scoped>
  .post {
    position: relative;
    margin-top: 1rem;
    padding: 1rem;
    background-color: hsla(207, 56%, 25%, .3);
    border-radius: .3rem;
    border: .1rem solid hsl(0, 0%, 0%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    &__header {
      padding: 1rem;
      padding-top: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: .1rem solid hsla(0, 0%, 0%, .3);
      width: calc(100% + 2rem);
      margin-left: -1rem;
    }
    &__title {
      font-size: 2rem;
      font-weight: 900;
    }
    &__del {
      border-color: hsla(0, 100%, 50%, .7) !important;
      &:hover {
        background-color: hsla(0, 100%, 50%, .3) !important;
      }
    }
  }
</style>
