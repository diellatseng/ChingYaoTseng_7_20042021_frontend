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

      <div v-if="post._count.comments > 0" class="actions__comment">{{ post._count.comments }}
        <span v-if="post._count.comments == 1">comment</span>
        <span v-else>comments</span>
      </div>

      <div class="container">
        <div :key="comment.id" v-for="comment in post.comments" >
          <div class="container">
              <h2 class="">{{ comment }}</h2>
              <p class="">{{ comment.created_at }}</p>
              <p class="">{{ comment.content }}</p>
          </div>
        </div>
      </div>
   
    </div>
        
  </div>
</template>

<script>

// import Comment from "./Comment.vue";
// import axios from "axios";


export default {
  name: "Post",
  // components: {
  //   Comment
  // },
  props: {
    post: Object,
  },
  
  data(){
    return {
      seen: true,
      // comments: []
    }
  },
  
  // methods: {
  //   created() {
  //     axios
  //       .get('http://localhost:3000/api/post/comment', {headers: {Authorization: 'Bearer ' + localStorage.token}})
  //       .then(response => {
  //         this.comments = response.data
  //         console.log(this.comments)
  //       })
  //       .catch (error => {
  //         alert('You are not logged in!')
  //         console.log(error.response)
  //       })
  //   },
  // }
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
