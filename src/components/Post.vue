<template>
  <div class="post">
    <h3>{{ post.name }}</h3>
    <p>{{ post.date }}</p>
    <p>{{ post.text }}</p>
    <p>Likes: {{ post.likes }}</p>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
};
</script>
