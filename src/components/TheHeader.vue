<template>
  <header>
    <div class="container flex">
      <div @click="reload" class="flex">
        <img
          class="logo"
          alt="groupomania logo"
          src="../assets/logo/icon-left-font-monochrome-black.svg"
        />
        <p class="admin" v-if="this.userRole === 'ADMIN'"> {{ this.userRole }}</p>
      </div>
      <router-link to="/profile">
        <font-awesome-icon icon="fa-regular fa-user" size="lg" class="icon" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data(){
    return {
      userRole: localStorage.role,
    }
  },
  methods: {
    reload() {
      let path = this.$route.path;
      if (path == "/postwall") {
        this.$forceUpdate();
      } else {
        this.$router.push("/postwall");
      }
    },
  },
};
</script>

<style scoped lang="scss">

header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  padding-top: 15px;
  padding-bottom: 10px;
  background-color: white;
  z-index: 1;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}

.container {
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: block;
  height: 25px;
  cursor: pointer;
}

.icon {
  display: block;
  color: black;

  &:visited {
    color: $color-primary;
  }
}

.admin {
  margin: 0 1rem;
  color: $color-danger;
  font-weight: bold;
}
</style>
