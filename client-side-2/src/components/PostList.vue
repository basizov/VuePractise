<template>
  <section class="posts">
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @deletePost="$emit('deletePost', post)"
    />
  </section>
</template>

<script lang='ts'>
  import { IPost } from "@/models/post";
  import PostItem from '@/components/PostItem.vue';
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    components: {
      PostItem
    },
    props: {
      posts: {
        type: Array as PropType<IPost[]>,
        required: true 
      }
    }
  });
</script>

<style lang='scss' scoped>

</style>
