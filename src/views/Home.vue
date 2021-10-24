<template>
  <div class="div">
    <Header />
    <PostNew></PostNew>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PostNew from "../components/PostNew.vue";

export default {
  components: {
    Header,
    PostNew,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.posts = [
      //Should use API to fetch data
      {
        id: 1,
        text: "Hello World. This is a post from the first user.",
        day: "October 24th at 21:14",
        likes: 5,
      },
      {
        id: 2,
        text: "This is another post from another user. Yes!",
        day: "October 24th at 23:50",
        likes: 0,
      },
    ];
  },
};
</script>
