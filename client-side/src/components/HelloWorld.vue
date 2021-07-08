<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    ...mapActions('moviesStore', ['fetchMovies'])
  }
});
</script>

<style scoped lang="scss">
</style>
