<template>
  <div class="container-fluid">
    <div class="container">
      <router-link to="/home">
        <img
          class="logo"
          alt="Groupmania logo"
          src="../assets/logo/icon-left-font-monochrome-black.svg"
        />
      </router-link>

      <router-link to="/profile">
        <font-awesome-icon icon="fa-regular fa-user" size="lg" class="icon" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container-fluid {
  box-shadow: 0 5px 5px $color-fade-lighten;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-bottom: 10px;
}

.logo {
  display: block;
  height: 25px;
}

.icon {
  display: block;
}
</style>
