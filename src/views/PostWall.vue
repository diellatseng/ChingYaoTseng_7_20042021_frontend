<template>
  <div class="container-fluid">
    <TheHeader />
    <div v-if="isFetching === false" class="post-wall">
      <div class="posts">
        <PostCreate>Write a new post...</PostCreate>
        <Posts :posts="posts" />
        <div v-if="this.seen == true" class="message">
          <h3>Welcome to <em>Groupomania</em> !</h3>
          <p>There's nothing yet.</p>
          <p><strong>Start sharing now!</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import PostCreate from "@/components/PostCreate.vue";
import Posts from "@/components/PostList.vue";

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  components: {
    TheHeader,
    PostCreate,
    Posts,
  },
  data() {
    return {
      isFetching: true,
      posts: [],
      seen: true,
    };
  },
  beforeCreate() {
    axios
      .get("http://localhost:3000/api/post", {
        headers: { Authorization: "Bearer " + localStorage.token },
      })
      .then((response) => {
        this.isFetching = false;
        this.posts = response.data;
        if (this.posts.length > 0) {
          this.seen = false;
        }
        console.log(this.posts);
      })
      .catch((error) => {
        alert("You are not logged in!");
        console.log(error.response);
      });
  },
};
</script>

<style lang="scss" scoped>
.post-wall {
  min-height: 100vh;
  background-color: $color-fade-lighten;
}
.posts {
  padding-top: 65px;
  padding-bottom: 1.5rem;
}
.message {
  background-color: $color-primary-lighten;
  padding: 20px;
  margin: 15px auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 18px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: white;
  text-align: center;
}
</style>