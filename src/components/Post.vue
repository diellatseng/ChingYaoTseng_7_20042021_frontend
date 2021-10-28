<template>
  <div class="container">
    <h3 class="post__name">{{ post.author_id }}</h3>
    <p class="post__date">{{ post.created_at }}</p>
    <p>{{ post.content }}</p>
    <div class="actions">
      <div class="actions__like">
        <font-awesome-icon icon="fa-solid fa-heart" />
        <font-awesome-icon icon="fa-regular fa-heart" /> 
        {{ post._count.like }}
      </div>
      <div v-if="post._count.comment > 0" class="actions__comment">{{ post._count.comment }}
        <span v-if="post._count.comment == 1">comment</span>
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
