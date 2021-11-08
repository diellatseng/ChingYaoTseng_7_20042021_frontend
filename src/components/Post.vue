<template>
  <div class="container">
    <!-- Post header-->
    <div class="header flex">
      <div>
        <h3 class="header__name">{{ post.full_name }}</h3>
        <p class="header__date">
          {{
            post.created_at
              | dateParse("YYYY.MM.DD HH:mm:ss")
              | dateFormat("DD MMM HH:mm")
          }}
        </p>
      </div>

      <!-- Post options-->
      <div>
        <div>
          <!-- Button Delete -->
          <button
            @click="btnDelete(post.id)"
            v-if="post.author_id == this.userId || this.userRole == 'ADMIN'"
            class="btn btn__delete"
          >
            <font-awesome-icon icon="fa-regular fa-trash-can" size="lg" />
          </button>
          <!-- Button Edit -->
          <button
            @click="dialogModify = !dialogModify"
            v-if="post.author_id == this.userId"
            class="btn btn__edit"
          >
            <font-awesome-icon icon="fa-solid fa-pen-to-square" size="lg" />
          </button>

          <v-easy-dialog v-model="dialogModify">
            <div class="flex flex-col dialog">
              <div>
                <form enctype="multipart/form-data" method="post" name="modifyPost">
                  <div class="flex flex-col">
                    <label class="dialog__title" for="post">
                      Edit your post
                    </label>

                    <div v-if="img_url" class="imageContainer flex">
                      <img :src="img_url" class="imageContainer__img" />
                    </div>

                    <textarea
                      v-model="post.content"
                      name="post"
                      rows="4"
                      cols="25"
                      class="dialog__input"
                      required
                    />

                    <div class="file flex flex-col">
                      <label for="image" class="file__title">
                        Modify image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        @change="uploadImage($event)"
                        name="image"
                        class="file__input"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div class="flex dialog__action">
                <button @click="dialogModify = false" class="dialog__btn">
                  Close
                </button>

                <button
                  @click="
                    modifyPost(post.id),
                      (dialogModify_inner = !dialogModify_inner)
                  "
                  class="dialog__btn dialog__btn__submit"
                >
                  Submit
                </button>
              </div>

              <v-easy-dialog v-model="dialogModify_inner">
                <div class="flex flex-col">
                  <div>Your Post has been updated</div>

                  <div class="flex dialog__btn">
                    <button
                      @click="
                        (dialogModify_inner = false), (dialogModify = false)
                      "
                    >
                      Close
                    </button>
                  </div>
                </div>
              </v-easy-dialog>
            </div>
          </v-easy-dialog>
        </div>
      </div>
    </div>

    <!-- Post content -->
    <div class="content">
      <img v-if="post.img_url !== null" :src="post.img_url" alt="" />
      <p>
        {{ post.content }}
      </p>
    </div>

    <div class="actions flex">
      <!-- Like button -->
      <div class="actions__like">
        <button
          @click="btnLike(post.id)"
          v-if="this.liked === true"
          class="btn btn__like"
        >
          <font-awesome-icon icon="fa-solid fa-heart" class="icon" />Liked
        </button>
        <button @click="btnLike(post.id)" v-else class="btn btn__like">
          <font-awesome-icon icon="fa-regular fa-heart" class="icon" />Like
        </button>
        {{ numLikes }}
      </div>

      <!-- Comment counts -->
      <div v-if="post._count_comments > 0">
        <button
          @click="
            seen = !seen;
            getComments(post.id);
          "
          class="actions__comment"
        >
          {{ post._count_comments }}
          <span v-if="post._count_comments == 1">comment</span>
          <span v-else>comments</span>
        </button>
      </div>
    </div>

    <!-- Comments -->
    <div v-show="seen" class="comments">
      <div :key="comment.id" v-for="comment in this.comments">
        <div class="comment">
          <p class="comment__name">
            <b>{{ comment.full_name }}</b>
          </p>

          <div class="comment__content">
            <p>{{ comment.content }}</p>
            <p class="comment__footer">
              {{
                comment.created_at
                  | dateParse("YYYY.MM.DD HH:mm:ss")
                  | dateFormat("DD MMM HH:mm")
              }}

              <!-- Button Delete -->
              <button
                @click="btnDeleteComment(post.id, comment.id)"
                v-if="comment.author_id == userId || userRole == 'ADMIN'"
                class="btn btn__delete__comment"
              >
                <font-awesome-icon icon="fa-regular fa-trash-can" size="lg" />
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Comment Input -->
    <CommentInput :post="post" :userId="userId" />
  </div>
</template>

<script>
import axios from "axios";

import Vue from "vue";
import VueFilterDateParse from "@vuejs-community/vue-filter-date-parse";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";

import VEasyDialog from "v-easy-dialog";

import CommentInput from "@/components/CommentInput.vue";

Vue.use(VueFilterDateParse);
Vue.use(VueFilterDateFormat);

export default {
  name: "Post",
  components: {
    CommentInput,
    VEasyDialog,
  },
  props: {
    post: Object,
  },
  data() {
    return {
      seen: false,
      userId: Number,
      userRole: String,
      liked: Boolean,
      numLikes: this.post._count_likes,
      comments: Array,
      dialogModify: false,
      dialogModify_inner: false,
      img_url: this.post.img_url,
      dataPost: {
        content: this.post.content,
        author_id: this.userId,
      },
      img_file: null,
    };
  },

  created() {
    this.userId = parseInt(localStorage.userId, 10);
    this.userRole = localStorage.role;
    if (this.post.likes !== null) {
      this.liked = this.post.likes.includes(this.userId);
    } else {
      this.liked = false;
    }
  },
  methods: {
    uploadImage(event) {
      this.img_file = event.target.files[0];
      console.log(this.img_file);
    },
    btnDelete(id) {
      axios
        .delete("http://localhost:3000/api/post/" + id, {
          headers: { Authorization: "Bearer " + localStorage.token },
        })
        .then((response) => {
          console.log(response.data);
          window.location.assign("http://localhost:8080/postwall");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    btnDeleteComment(PostId, CommentId) {
      console.log("PostId: " + PostId);
      console.log("CommentId: " + CommentId);
      axios
        .delete(
          "http://localhost:3000/api/post/" + PostId + "/comment/" + CommentId,
          {
            headers: { Authorization: "Bearer " + localStorage.token },
          }
        )
        .then((response) => {
          console.log(response.data);
          window.location.assign("http://localhost:8080/postwall");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    btnLike(postId) {
      const payload = {
        like: this.liked,
      };
      axios
        .post("http://localhost:3000/api/post/" + postId + "/like", payload, {
          headers: { Authorization: "Bearer " + localStorage.token },
        })
        .then((response) => {
          this.liked = response.data.like;
          if (this.liked === true) {
            this.numLikes += 1;
          } else {
            this.numLikes -= 1;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getComments(postID) {
      axios
        .get("http://localhost:3000/api/post/" + postID + "/comment", {
          headers: { Authorization: "Bearer " + localStorage.token },
        })
        .then((response) => {
          this.comments = response.data;
          console.log(this.comments);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async modifyPost(postId) {
      let data = new FormData();

      // Add content to data
      data.append("content", this.post.content);

      // Add file to data
      if (!this.img_file == "") {
        data.append("file", this.img_file);
        data.append("name", this.img_file.name);
      }

      await axios
        .put("http://localhost:3000/api/post/" + postId, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.token,
          },
        })
        .then((response) => {
          let res = JSON.parse(response.data);
          console.log(res);
          window.location.assign("http://localhost:8080/postwall");
          // this.img_file = ""; // Clear img_file after request is sent
        })
        .catch((error) => {
          console.log("Error from modifying post with image: " + error);
        });


              // await axios
        // .get("http://localhost:3000/api/post/" + postId, {
        //   headers: {
        //     Authorization: "Bearer " + localStorage.token,
        //   },
        // })
        // .then((response) => {
        //   const img_url = response.data[0].img_url;
        //   if (img_url !== null && this.img_file !== null) {
        //     console.log(img_url);
        //     console.log(
        //       "should delete image first, and then modify post by uploading image"
        //     );
        //   } else {
        //     console.log("modify post by uploading image");
        //   }
        // });
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
  background-color: white;
}

.header {
  justify-content: space-between;

  &__name {
    margin-bottom: 5px;
  }

  &__date {
    margin: 0;
  }
}

.content {
  padding: 10px;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: contain;
  }
}

.actions {
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  font-size: 1.2rem;
  border-top: solid 1px $color-fade-lighten;

  &__like {
    color: $color-danger-darken;
  }

  &__comment {
    background-color: white;
    color: $color-primary;
    border: 0;
    text-decoration: underline;
  }
}

.comments {
  margin-top: 5px;
  border-top: 1px solid $color-fade-lighten;
  background-color: white;
}

.comment {
  padding: 10px;

  &__name {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  &__content {
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: $color-secondary-lightenMax;

    & p {
      margin: 0;
    }
  }

  &__footer {
    margin: 0;
    color: $color-fade-darken;
    font-size: 0.9rem;
    text-align: end;
  }
}

.btn {
  padding: 10px;
  background: none;
  border-radius: 5px;

  &__edit {
    border: 0px;
  }

  &__delete {
    margin-right: 1rem;
    border: 0px;
    background-color: $color-danger-darken;
    color: white;

    &__comment {
      border: 0;
      color: $color-danger-darken;
    }
  }

  &__like {
    color: $color-danger-darken;
    border: 0;
  }
}

.icon {
  margin-right: 10px;
}

.dialog {
  background-color: white;
  padding: 1rem;
  border-radius: 10px;

  &__title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  &__input {
    padding: 10px;
    margin-bottom: 1rem;
    border: none;
    border-radius: 10px;
    background-color: lighten($color-fade-lighten, 5%);

    &:focus {
      border: 2px solid $color-primary;
      background-color: white;
      color: $color-primary-darken;
    }

    &:focus-visible {
      outline: none;
    }
  }

  &__action {
    margin-top: 1rem;
    justify-content: flex-end;
  }

  &__btn {
    padding: 10px 15px;
    margin-left: 1rem;
    border: 0;
    border-radius: 5px;
    background-color: white;
    transition-duration: 0.4s;

    &:hover {
      background-color: lighten($color-fade-lighten, 5%);
    }

    &__submit {
      color: white;
      background-color: $color-primary;

      &:hover {
        background-color: $color-primary-darken;
      }
    }
  }
}

.imageContainer {
  width: 100%;
  height: 150px;
  justify-content: center;
  margin-bottom: 1rem;

  &__img {
    max-width: 100%;
    max-height: 100%;
  }
}

.file {
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: lighten($color-secondary-lighten, 20%);
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: lighten($color-secondary-lighten, 10%);
  }

  &__title {
    margin-right: auto;
    margin-left: auto;
    color: $color-fade-darken;
    cursor: pointer;
  }

  &__input {
    width: 100%;
    padding: 0.5rem 0;
    color: $color-fade-darken;
    text-align: center;
    cursor: pointer;
  }
}

input[type="file"]::file-selector-button {
  display: none;
}
</style>
