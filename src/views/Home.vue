<template>
  <div class="home">
    <img
      class="logo"
      alt="Groupmania logo"
      src="../assets/logo/icon-left-font-monochrome-black.svg"
    />
    <div class="container-home">
      <AppButton :to="{ name: 'LogIn' }" theme="rounded"
        >Log in</AppButton
      >
      <router-link to="/signup" class="link">Sign Up</router-link>
    </div>
    <img class="img-home img-home__p1" src="../assets/images/1.png" alt="" />
    <img class="img-home img-home__p2" src="../assets/images/2.png" alt="" />
    <img class="img-home img-home__p3" src="../assets/images/3.png" alt="" />
    <font-awesome-icon
      icon="fa-solid comment-dots"
      class="img-home img-home__icon1"
    ></font-awesome-icon>
    <font-awesome-icon
      icon="fa-solid comment-dots"
      class="img-home img-home__icon2"
    ></font-awesome-icon>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  name: "Home",
  components: {
    AppButton,
  },
  methods: {
    onClick() {
      this.$router.push("/LogIn");
    },
  },
};
</script>

<style scoped lang="scss">
body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.logo {
  align-self: start;
  width: 200px;
  padding: 20px;
}

.container-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-bottom: 120px;
}

.container-image {
  position: relative;
}

.img-home {
  position: absolute;

  &__p1 {
    top: 100px;
    right: -100px;
    width: 150px;
    transform: rotate(-40deg);
  }

  &__p2 {
    top: 470px;
    left: -50px;
    width: 220px;
  }

  &__p3 {
    top: 470px;
    right: -50px;
    width: 220px;
  }

  &__icon1 {
    top: 380px;
    left: 110px;
    font-size: 6rem;
    color: $color-secondary;
  }

  &__icon2 {
    top: 440px;
    right: 100px;
    font-size: 5rem;
    color: $color-accent;
    transform: rotateY(180deg);
  }
}

.link {
  margin: 1rem;
  font-size: 1.5rem;
}
</style>
