<template>
  <div class="home">
    <img class="logo" alt="Groupmania logo" src="../assets/logo/icon-left-font-monochrome-black.png" />
    <button class="button">
        <span>Get Started</span>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>

.home {
  display: flex;
  flex-direction: column;
}

.logo {
  height: 200px;
}
</style>
