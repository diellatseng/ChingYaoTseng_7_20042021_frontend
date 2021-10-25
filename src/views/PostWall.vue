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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet ornare neque, nec maximus enim porta ut. ",
        date: "October 24th at 21:14",
        likes: 5,
        comments: 2
      },
      {
        id: 2,
        name: "Mary Lane",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus auctor est, nec malesuada nunc facilisis vel. Morbi pretium odio elit, ut suscipit orci ullamcorper in.",
        date: "October 24th at 23:50",
        likes: 0,
        comments: 1
      },
    ];
  },
};
</script>
