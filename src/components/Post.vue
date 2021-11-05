<template>
  <div class="container">
    <!-- Post header-->
    <div class="header">
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
            @click="btnEdit(post.id)"
            v-if="post.author_id == this.userId"
            class="btn btn__edit"
          >
            <font-awesome-icon icon="fa-solid fa-pen-to-square" size="lg" />
          </button>
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

    <div class="actions">
      <!-- Like button -->
      <div class="actions__like">
        <button
          @click="btnLike(post.id)"
          v-if="this.liked === true"
          class="btn btn__like"
        >
          <font-awesome-icon icon="fa-solid fa-heart" class="icon"/>Liked
        </button>
        <button @click="btnLike(post.id)" v-else class="btn btn__like">
          <font-awesome-icon icon="fa-regular fa-heart" class="icon"/>Like
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
            <p class="comment__date">
              {{
                comment.created_at
                  | dateParse("YYYY.MM.DD HH:mm:ss")
                  | dateFormat("DD MMM HH:mm")
              }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Comment Input -->
    <CommentInput />

  </div>
</template>

<script>
import axios from "axios";

import Vue from "vue";
import VueFilterDateParse from "@vuejs-community/vue-filter-date-parse";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";

import CommentInput from "@/components/CommentInput.vue";

Vue.use(VueFilterDateParse);
Vue.use(VueFilterDateFormat);

export default {
  name: "Post",
  components: {
    CommentInput
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
    createComment() {
      console.log('create comment')
    }
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

.header {
  display: flex;
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
  display: flex;
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
    margin-bottom: .5rem;
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

  &__date {
    margin: 0;
    color: $color-fade-darken;
    font-size: .9rem;
    text-align: end;
  }
}

.btn {
  padding: 10px;
  background: none;
  border-radius: 5px;

  &__edit {
    border: 0px solid $color-primary;
  }

  &__delete {
    margin-right: 1rem;
    border: 0px solid $color-danger;
    background-color: $color-danger-darken;
    color: white;
  }

  &__like {
    color: $color-danger-darken;
    border: 0;
  }
}

.icon {
  margin-right: 10px;
}
</style>
