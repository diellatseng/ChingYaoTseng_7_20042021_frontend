<template>
  <div class="div">
    <Header />
    <PostCreate></PostCreate>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PostCreate from "../components/PostCreate.vue";

export default {
  components: {
    Header,
    PostCreate,
  },
};
</script>
