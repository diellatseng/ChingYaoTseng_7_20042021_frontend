<template>
  <div class="container">
    <h3 class="post__name">{{ post.name }}</h3>
    <p class="post__date">{{ post.date }}</p>
    <p>{{ post.text }}</p>
    <p>Likes: {{ post.likes }}</p>
    <p>Comments: {{ post.comments }}</p>
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

<style scoped lang="scss">

.container {
  padding: 20px;
  margin: 15px;
  border: 2px solid $color-fade-lighten;
}

.post {
  &__name {
    margin-bottom: 5px;
  }

  &__date {
    margin-top: 0;
    color: darken($color-fade-darken, 20%);
  }
}

</style>
