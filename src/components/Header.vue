<template>
  <div class="container">
    <img
      class="logo"
      alt="Groupmania logo"
      src="../assets/logo/icon-left-font-monochrome-black.svg"
    />
    <font-awesome-icon icon="fa-regular fa-user" size="lg" class="profile-icon"></font-awesome-icon>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-bottom: 10px;
    box-shadow: 0 5px 5px #ccc;
}

.logo {
  display: block;
  height: 25px;
}

.profile-icon {
    display: block;
}
</style>
