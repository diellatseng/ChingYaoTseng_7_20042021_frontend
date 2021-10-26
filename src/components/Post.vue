<template>
  <div class="container">
    <h3 class="post__name">{{ post.name }}</h3>
    <p class="post__date">{{ post.date }}</p>
    <p>{{ post.text }}</p>
    <div class="actions">
      <div class="actions__like">
        <font-awesome-icon icon="fa-solid fa-heart" />
        <font-awesome-icon icon="fa-regular fa-heart" /> 
        {{ post.likes }}
      </div>
      <div v-if="post.comments > 0" class="actions__comment">{{ post.comments }}
        <span v-if="post.comments == 1">comment</span>
        <span v-else>comments</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
  data(){
    return {
      seen: true
    }
  }
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

.actions {
  display: flex;
  justify-content: space-between;

  &__like {
    color: $color-danger-darken;
  }
}

</style>
