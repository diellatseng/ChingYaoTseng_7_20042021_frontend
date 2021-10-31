<template>
  <div class="div">
    <TheHeader />
    <PostNew>Write a new post...</PostNew>
    <Posts :posts="posts" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import PostNew from "@/components/PostNew.vue";
import Posts from "@/components/Posts.vue";

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
  components: {
    TheHeader,
    PostNew,
    Posts,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    axios
      .get('http://localhost:3000/api/post', {headers: {Authorization: 'Bearer ' + localStorage.token}})
      .then(response => {
        this.posts = response.data
        console.log(this.posts)
      })
      .catch (error => {
        console.log(error.response)
      })
  },
};
</script>
