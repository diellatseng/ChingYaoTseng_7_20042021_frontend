<template>
  <div class="container">
    <form @submit.prevent enctype="multipart/form-data">
      <div class="form-control">
        <label for="post"><slot name="title">Write a new post...</slot></label>
        <textarea v-model="dataPost.content" name="post" rows="4" cols="25" placeholder="Say something..." required/>
      </div>

      <div class="form-control">
        <label for="post__image"><slot name="title__image"></slot>Upload an image...</label>
        <input type="file" accept="image/*" @change="uploadImage($event)" id="post__image">
      </div>
      <button type="submit" class="button small" @click="createPost">
        Publish
        <font-awesome-icon icon="fa-solid fa-paper-plane" class="icon" />
      </button>
    </form>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'postNew',
  data() {
    return {
      dataPost: {
        content: '',
        author_id: '',
        img_url: []
      },
      dataPostString: "",
    }
  },
  
  methods: {
    uploadImage(event) {
      this.dataPost.img_url = event.target.files[0];
      console.log(this.dataPost);
    },

    createPost() {
      // this.dataPostString = JSON.stringify(this.dataPost);
      if (localStorage.userId) {
        this.dataPost.author_id = localStorage.userId;
      }
      const headers = {
      'Content-Type': 'application/json',
}
      axios.post("http://localhost:3000/api/post", this.dataPost, {
        headers: headers
      })
        .then(response => {
          let res = JSON.parse(response.data);
            alert("Your post has been created!");
            this.dataPost.content = "";
          console.log(res)
        })
         .catch(function (error) {
          console.log(error.toJSON());
      })
    },
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  margin: 15px;
  border: 2px solid $color-fade-lighten;
}
.form-control {
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
  }

  textarea {
    margin: 10px 0;
    padding: 3px 10px;
    background-color: lighten($color-fade-lighten, 5%);
    border: none;
    border-radius: 5px;

    &:focus {
      border: 2px solid $color-primary;
      background-color: white;
    }

    &:focus + label {
      color: $color-primary-darken;
    }

    &:focus-visible {
      outline: none;
    }
  }
}
.icon {
  margin-left: 1em;
}

.button {
  width: 100%
}

h1 {
  font-size: 1rem;
}
</style>