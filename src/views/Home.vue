<template>
  <div class="home">
    <img
      class="logo"
      alt="Groupmania logo"
      src="../assets/logo/icon-above-font.svg"
    />
    <AppButton :to="{ name: 'SignUp' }" theme="rounded">Get Started</AppButton>

    <div class="container-image">
      <img class="img-home img-home__p1" src="../assets/images/1.png" alt="" />
      <img class="img-home img-home__p2" src="../assets/images/2.png" alt="" />
      <img class="img-home img-home__p3" src="../assets/images/3.png" alt="" />
      <font-awesome-icon icon="comment-dots" class="img-home img-home__icon1" />
      <font-awesome-icon icon="comment-dots" class="img-home img-home__icon2" />
    </div>
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
      this.$router.push("/SignUp");
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.logo {
  width: 200px;
  margin-top: 30px;
}

.container-image {
  position: relative;
}

.img-home {
  position: absolute;

  &__p1 {
    top: -260px;
    right: -330px;
    width: 190px;
    transform: rotate(-40deg);
  }

  &__p2 {
    top: 150px;
    left: 20px;
    width: 240px;
  }

  &__p3 {
    top: 150px;
    right: 0px;
    width: 250px;
  }

  &__icon1 {
    top: 60px;
    right: -10px;
    font-size: 6rem;
    color: var(--color-secondary);
  }

  &__icon2 {
    top: 100px;
    right: -100px;
    font-size: 5rem;
    color: var(--color-accent);
    transform: rotateY(180deg);
  }
}
</style>
