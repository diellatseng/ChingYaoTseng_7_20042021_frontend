<template>
    <div>
        <form @submit.prevent method="post" class="form flex">

            <label class="form__label" for="comment"></label>
            <textarea
            v-model="dataPost.content"
            name="comment"
            rows="1"
            placeholder="Leave a comment..."
            class="form__input"
            required
            />
            
            <button type="submit" class="button small" @click="createComment(post.id)">
            <font-awesome-icon icon="fa-solid fa-paper-plane" class="icon" />

        </button>
        </form>
    </div>
</template>

<script>

import axios from "axios";

export default {
  name: "CommentInput",
  data() {
      return {
        dataPost: {
            content: '',
            author_id: this.userId,
        },
      }
  },
  props: {
    post: Object,
    userId: Number,
  },
  methods: {
      createComment(postId){
        if(this.dataPost.content) {
          axios
            .post("http://localhost:3000/api/post/" + postId + "/comment", this.dataPost, {
              headers: {
              // "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.token,
              }
            })
            .then((response) => {
              console.log(response.data);
              window.location.reload();
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          alert('No content!');
        }
      },
  }
}
</script>

<style scoped lang="scss">
.form {
  border-top: 1px solid $color-fade-lighten;
  padding-top: 1rem;

  &__input {
    width: 100%;
    margin-right: 10px;
    padding: 3px 10px;
    background-color: lighten($color-fade-lighten, 5%);
    border: none;
    border-radius: 5px;

    &:focus {
      border: 1px solid $color-primary;
      background-color: white;
      color: $color-primary-darken;
    }

    &:focus-visible {
      outline: none;
    }
  }
}
.small {
  padding: 1rem;
}
</style>