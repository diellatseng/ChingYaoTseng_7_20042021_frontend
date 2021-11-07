<template>
  <div class="container flex">
    <div @click="reload">
      <img
        class="logo"
        alt="Groupmania logo"
        src="../assets/logo/icon-left-font-monochrome-black.svg"
      />
    </div>

    <router-link to="/profile">
      <font-awesome-icon icon="fa-regular fa-user" size="lg" class="icon" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  methods: {
    reload () {
      let path = this.$route.path;
      if (path == '/postwall') {
        this.$forceUpdate();
      } else {
        this.$router.push("/postwall");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 10px;
  background-color: white;
}

.logo {
  display: block;
  height: 25px;
}

.icon {
  display: block;
  color: black;

  &:visited {
    color: $color-primary;
  }
}
</style>
