<template>
  <div>
    <div :key="post.id" v-for="post in posts" :post="post">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>

import Post from "./Post.vue";

export default {
  name: 'Posts',
  components: {
    Post
  },
  props: {
    posts: Array,
  },
};
</script>
