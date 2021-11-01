<template>
  <div class="container">
    <h3 class="post__name">{{ post.author.full_name }}</h3>
    <p class="post__date">{{ post.created_at }}</p>
    <p>{{ post.content }}</p>
    <div class="actions">
      <div class="actions__like">
        <font-awesome-icon icon="fa-solid fa-heart" />
        <font-awesome-icon icon="fa-regular fa-heart" /> 
        {{ post._count.likes }}
      </div>

      <a href="#" @click="seen = !seen">
        <div v-if="post._count.comments > 0" class="actions__comment">{{ post._count.comments }}
          <span v-if="post._count.comments == 1">comment</span>
          <span v-else>comments</span>
        </div>
      </a>
    </div>

    <div v-show="seen" class="comments">
      <div :key="comment.id" v-for="comment in post.comments" >
        <div class="comment">
            <p class="comment__content">{{ comment.content }}</p>
            <h4 class="comment__author">By {{ comment.author_id }} (User ID)</h4>
            <!-- <p class="comment_date">Commented at: {{ comment.created_at }}</p> -->
        </div>
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
      seen: true,
    }
  },

};
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  margin: 15px;
  border: 2px solid $color-fade-lighten;
}

.comments {
  margin-top: 5px;
  padding-top: 5px;
}

.comment {
    margin: 10px 0;
  
  &__content {
    padding: 15px;
    border-radius: 10px;
    background-color: lighten($color-secondary-lighten, 10%); 
  }

  &__author {
    margin: 0;
  }
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
