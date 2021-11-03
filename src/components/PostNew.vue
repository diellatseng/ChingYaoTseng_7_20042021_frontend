<template>
  <div class="container">
    <form @submit.prevent method="post" enctype="multipart/form-data">
      <div class="form-control">
        <label class="form__text" for="post"
          ><slot name="title">Write a new post...</slot></label
        >
        <textarea
          v-model="dataPost.content"
          name="post"
          rows="4"
          cols="25"
          placeholder="Say something..."
          required
        />
      </div>

      <div class="form-control">
        <label class="form__image" for="image"
          ><slot name="title__image"></slot>Upload an image...</label
        >
        <input
          type="file"
          accept="image/*"
          @change="uploadImage($event)"
          id="image"
          name="image"
        />
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
  name: "postNew",
  data() {
    return {
      dataPost: {
        content: "",
        author_id: "",
      },
      img_file: null,
    };
  },

  methods: {
    uploadImage(event) {
      this.img_file = event.target.files[0];
      console.log(this.img_file);
    },

    createPost() {
      if (localStorage.userId) {
        this.dataPost.author_id = localStorage.userId;
      }
      // Send text data to create a new post
      axios
        .post("http://localhost:3000/api/post", this.dataPost, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.token,
          },
        })
        // After creating the new post, return its post ID
        .then((response) => {
          let res = JSON.parse(response.data);
          alert("Your post has been created!");
          this.dataPost.content = "";   // Clear img_file after request is sent
          return res.postId;
        })
        // Check if an image is uploaded, and then modify the post with uploaded image
        .then((postId) => {
          if (!this.img_file == "") {
            let data = new FormData();
            data.append("file", this.img_file);
            data.append("name", this.img_file.name);

            axios
              .put("http://localhost:3000/api/post/" + postId, data, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: "Bearer " + localStorage.token,
                },
              })
              .then((response) => {
                let res = JSON.parse(response.data);
                console.log(res);
                this.img_file = "";   // Clear img_file after request is sent
                window.location.assign("http://localhost:8080/postwall");
              })
              .catch((error) => {
                console.log("Error from modifying post with image: " + error);
              });
          } else {
            window.location.assign("http://localhost:8080/postwall");
          }
        })
        .catch((error) => {
          console.log(error.toJSON());
        });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 18px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.form-control {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

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

.form {
  &__text {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
  }

  &__image {
    display: block;
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
}

.icon {
  margin-left: 1em;
}

.button {
  width: 100%;
}

h1 {
  font-size: 1rem;
}
</style>