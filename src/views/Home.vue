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
    this.posts = [
      //Should use API to fetch data
      {
        id: 1,
        name: "John Smith",
        text: "Hello World. This is a post from the first user.",
        date: "October 24th at 21:14",
        likes: 5,
      },
      {
        id: 2,
        name: "Mary Lane",
        text: "This is another post from another user. Yes!",
        date: "October 24th at 23:50",
        likes: 0,
      },
    ];
  },
};
</script>
