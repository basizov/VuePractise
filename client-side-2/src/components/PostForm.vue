<template>
  <form class="post__form">
    <my-input
      v-focus
      v-model="newPost.title"
      placeholder="Title:"
    />
    <my-input
      v-model="newPost.body"
      placeholder="Description:"
    />
    <my-button class="post__btn" @click.prevent="createPost">Add post</my-button>
  </form>
</template>

<script lang='ts'>
  import { IPost } from "@/models/post";
  import { defineComponent } from "vue";

  export default defineComponent({
    data: () => ({
      newPost: {
        id: '',
        title: '',
        body: ''
      } as IPost
    }),
    methods: {
      createPost() {
        this.newPost.id = Date.now().toString();
        this.$emit('createPost', this.newPost);
        this.newPost = {
          id: '',
          title: '',
          body: ''
        };
      }
    }
  });
</script>

<style lang='scss' scoped>
  .post {
    &__form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    &__btn {
      align-self: flex-end;
    }
  }
</style>
