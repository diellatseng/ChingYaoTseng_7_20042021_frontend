<template>
  <div class="container">
    <form @submit.prevent method="post" enctype="multipart/form-data">
      <div class="form-control flex flex-col">
        <label class="form__text" for="post">
          <slot name="title">Write a new post...</slot>
        </label>
        <textarea
          v-model="dataPost.content"
          name="post"
          rows="4"
          cols="25"
          placeholder="Say something..."
          required
        />
      </div>

      <div class="form-control form__image flex flex-col" v-show="seen">
        <label for="image" class="form__image__title">
          <slot name="title__image">Upload an image</slot>
        </label>
        <input
          type="file"
          accept="image/*"
          @change="uploadImage($event)"
          id="image"
          name="image"
        />
      </div>

      <div class="formAction flex">
        <button class="formAction__btn" @click="seen = !seen">
          <font-awesome-icon icon="fa-regular fa-image"/>
        </button>

        <button type="submit" class="button small" :disabled="isDisable" @click.prevent="createPost">
          Publish
          <font-awesome-icon icon="fa-solid fa-paper-plane" class="submit-icon" />
        </button>
      </div>
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
      seen: false  
    };
  },
  computed: {
    isDisable() {
      return this.dataPost.content == "";
    }
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
          this.dataPost.content = "";   // Clear img_file after request is sent
          return res;
        })
        // Check if an image is uploaded, and then modify the post with uploaded image
        .then((res) => {
          console.log('Front, res: ' + res.data)
          console.log('Front, JSON.stringify(res): ' + JSON.stringify(res.data))

          if (!this.img_file == "") {
            let data = new FormData();
            data.append("content", res.data.postContent);
            data.append("file", this.img_file);
            data.append("name", this.img_file.name);

            axios
              .put("http://localhost:3000/api/post/" + res.data.postId, data, {
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
  box-shadow: 
    rgba(0, 0, 0, 0.05) 0px 6px 18px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: white;
}
.form-control {
  position: relative;
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
    align-items: center;
    margin-bottom: 1rem;
    padding: 5px;
    border: 1px solid $color-fade;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  &__image__title {
    width: 100%;
    text-align: center;
    padding: 5px 0;
    margin-bottom: 10px;
    font-size: 1rem;
    border-bottom: 1px solid $color-fade;
      &:hover {
        cursor: pointer;
      }
  }
}

#image {
  width: 100%;

    &:hover {
      cursor: pointer;
    }
}

.submit-icon {
  margin-left: 1em;
}

.button {
  width: 100%;
}

input[type=file]::file-selector-button {
  border: 0;
  padding: .2em .4em;
  border-radius: .2em;
  margin-right: .5rem;
  background-color: $color-fade-lighten;
  transition: 200ms;

    &:hover {
      cursor: pointer;
    }
}

input[type=file]::file-selector-button:hover {
  background-color: $color-accent-lighten;
}

h1 {
  font-size: 1rem;
}

.formAction {

  &__btn{
    margin-right: 1rem;
    padding: 0;
    border: 0;
    font-size: 2.3rem;
    color: $color-accent-darken;
    background-color: white;
    transition: 200ms;

    &:hover {
      cursor: pointer;
      color: darken($color-accent-darken, 10%);
    }
  }
}
</style>